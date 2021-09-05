package br.upe.devflix.services.security;

import java.util.Hashtable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.devflix.dao.IUserDao;
import br.upe.devflix.dao.IRecoveryDao;
import br.upe.devflix.base.exceptions.ServiceUnavailableException;
import br.upe.devflix.base.exceptions.UnauthorizedException;
import br.upe.devflix.base.exceptions.UserAlreadyExistsException;
import br.upe.devflix.base.exceptions.UserNotFoundException;
import br.upe.devflix.models.dto.CredentialDTO;
import br.upe.devflix.models.dto.ForgotDTO;
import br.upe.devflix.models.dto.RecoveryDTO;
import br.upe.devflix.models.dto.SessionResponseDTO;
import br.upe.devflix.models.entities.RecoveryAccount;
import br.upe.devflix.models.entities.User;
import br.upe.devflix.services.subsystems.MailService;

@Service
public class AuthenticationService {
  
  @Autowired private IUserDao Users;
  @Autowired private IRecoveryDao Recoveries;
  @Autowired private MailService Mailer;
  @Autowired private Sha256Service HashSha256;
  @Autowired private JwtAPIService JwtProvider;

  public User createAccount(User userForm){
    if (Users.countByEmail(userForm.getEmail()) > 0){
      throw new UserAlreadyExistsException("O usuário especificado já está cadastrado no sistema. Tente usar um email diferente.");
    }
    userForm.setPassword(HashSha256.hash(userForm.getPassword()));
    User newUser = Users.save(userForm);
    boolean result = Mailer.sendMailConfirmation(
      newUser.getName().toUpperCase(), 
      newUser.getEmail(), 
      newUser.getConfirmationToken());
    if (!result){
      throw new ServiceUnavailableException("Estamos enfrentando problemas ao enviar o email. Tente novamente mais tarde.");
    }
    return newUser;
  }

  public SessionResponseDTO createSession(CredentialDTO credentialForm){
    List<User> foundUsers = Users.findByEmailAndConfirmedTrue(
      credentialForm.getEmail());
    if (foundUsers.isEmpty()){
      throw new UnauthorizedException("Credenciais inválidas, por favor verifique e tente novamente.");
    }
    User fetchedUser = foundUsers.get(0);
    if (!HashSha256.compare(
      credentialForm.getPassword(), 
      fetchedUser.getPassword()))
    {
      throw new UnauthorizedException("Credenciais inválidas, por favor verifique e tente novamente.");
    }

    Hashtable<String, String> claims = new Hashtable<String, String>();
    claims.put("id", String.valueOf(fetchedUser.getId()));
    claims.put("roles", String.valueOf(fetchedUser.getType()));
    claims.put("email", fetchedUser.getEmail());
    claims.put("name", fetchedUser.getName());

    String jwtToken = JwtProvider.build(claims);
    SessionResponseDTO session = new SessionResponseDTO()
      .setToken(jwtToken)
      .setClaims(claims);

    return session;
  }

  public User confirmAccount(String confirmToken){
    List<User> foundUsers = Users.findByConfirmationTokenAndConfirmedFalse(confirmToken);
    if (foundUsers.isEmpty()){
      throw new UserNotFoundException("Usuário não encontrado no DevFlix.");
    }
    User user = Users.save(foundUsers.get(0).setConfirmed(true));
    return user;
  }

  public RecoveryAccount forgotPassword(ForgotDTO forgotForm){
    List<User> foundUsers = Users.findByEmailAndConfirmedTrue(forgotForm.getEmail());
    if (foundUsers.isEmpty()){
      throw new UserNotFoundException("Usuário não encontrado no DevFlix.");
    }
    User currentUser = foundUsers.get(0);
    for (RecoveryAccount recovery : currentUser.getRecoveries()){
      Recoveries.save(recovery.setExpired(true));
    }
    RecoveryAccount newRecovery = new RecoveryAccount()
      .setUser(currentUser);
    newRecovery = Recoveries.save(newRecovery);
    boolean result = Mailer.sendMailPasswordRecovery(
      currentUser.getName().toUpperCase(), 
      currentUser.getEmail(), 
      newRecovery.getToken());
    if (!result){
      throw new ServiceUnavailableException("Estamos enfrentando problemas ao enviar o email. Tente novamente mais tarde.");
    }
    return newRecovery;
  }

  public RecoveryAccount changePassword(RecoveryDTO recoveryForm){
    List<RecoveryAccount> foundRecoveries = Recoveries.findByTokenAndExpiredFalse(recoveryForm.getToken());
    if (foundRecoveries.isEmpty()){
      throw new UserNotFoundException("Usuário não encontrado no DevFlix.");
    }
    RecoveryAccount recoveryRequest = foundRecoveries.get(0);
    User targetUser = recoveryRequest.getUser();
    String newPassword = HashSha256.hash(recoveryForm.getPassword());
    targetUser = Users.save(targetUser.setPassword(newPassword));
    recoveryRequest = Recoveries.save(recoveryRequest.setExpired(true));
    return recoveryRequest;
  }

}
