package br.upe.devflix.services.security;

import java.util.Hashtable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.upe.devflix.dao.IRecoveryDao;
import br.upe.devflix.dao.IUserDao;
import br.upe.devflix.models.dto.CredentialDTO;
import br.upe.devflix.models.dto.ForgotDTO;
import br.upe.devflix.models.dto.RecoveryDTO;
import br.upe.devflix.models.dto.SessionResponseDTO;
import br.upe.devflix.models.entities.RecoveryAccount;
import br.upe.devflix.models.entities.User;
import br.upe.devflix.services.serializers.ResponseService;
import br.upe.devflix.services.subsystems.MailService;

@Service
public class AuthenticationService {
  
  @Autowired private IUserDao Users;
  @Autowired private IRecoveryDao Recoveries;
  @Autowired private ResponseService Response;
  @Autowired private MailService Mailer;
  @Autowired private Sha256Service HashSha256;
  @Autowired private JwtAPIService JwtProvider;

  public ResponseEntity<?> createAccount(User userForm){
    if (Users.countByEmail(userForm.getEmail()) > 0){
      return Response.create(null, HttpStatus.BAD_REQUEST);
    }
    userForm.setPassword(HashSha256.hash(userForm.getPassword()));
    User newUser = Users.save(userForm);
    boolean result = Mailer.sendMailConfirmation(
      newUser.getName().toUpperCase(), 
      newUser.getEmail(), 
      "https://upedevflix.herokuapp.com/#/confirmation/" + newUser.getConfirmationToken());
    if (!result){
      return Response.create(null, HttpStatus.BAD_REQUEST);
    }
    return Response.create(newUser, HttpStatus.OK);
  }

  public ResponseEntity<?> createSession(CredentialDTO credentialForm){
    List<User> foundUsers = Users.findByEmailAndConfirmedTrue(
      credentialForm.getEmail());
    if (foundUsers.isEmpty()){
      return Response.create(null, HttpStatus.UNAUTHORIZED);
    }
    User fetchedUser = foundUsers.get(0);
    if (!HashSha256.compare(
      credentialForm.getPassword(), 
      fetchedUser.getPassword()))
    {
      return Response.create(null, HttpStatus.UNAUTHORIZED);
    }

    Hashtable<String, String> claims = new Hashtable<String, String>();
    claims.put("id", String.valueOf(fetchedUser.getId()));
    claims.put("roles", String.valueOf(fetchedUser.getType()));
    claims.put("email", fetchedUser.getEmail());

    String jwtToken = JwtProvider.build(claims);
    SessionResponseDTO session = new SessionResponseDTO()
      .setToken(jwtToken)
      .setClaims(claims);

    return Response.create(session, HttpStatus.OK);
  }

  public ResponseEntity<?> confirmAccount(String confirmToken){
    List<User> foundUsers = Users.findByConfirmationTokenAndConfirmedFalse(confirmToken);
    if (foundUsers.isEmpty()){
      return Response.create(null, HttpStatus.NOT_FOUND);
    }
    User user = Users.save(foundUsers.get(0).setConfirmed(true));
    return Response.create(user, HttpStatus.OK);
  }

  public ResponseEntity<?> forgotPassword(ForgotDTO forgotForm){
    List<User> foundUsers = Users.findByEmailAndConfirmedTrue(forgotForm.getEmail());
    if (foundUsers.isEmpty()){
      return Response.create(null, HttpStatus.NOT_FOUND);
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
      return Response.create(null, HttpStatus.BAD_REQUEST);
    }
    return Response.create(newRecovery, HttpStatus.OK);
  }

  public ResponseEntity<?> changePassword(RecoveryDTO recoveryForm){
    List<RecoveryAccount> foundRecoveries = Recoveries.findByTokenAndExpiredFalse(recoveryForm.getToken());
    if (foundRecoveries.isEmpty()){
      return Response.create(null, HttpStatus.NOT_FOUND);
    }
    RecoveryAccount recoveryRequest = foundRecoveries.get(0);
    User targetUser = recoveryRequest.getUser();
    String newPassword = HashSha256.hash(recoveryForm.getPassword());
    targetUser = Users.save(targetUser.setPassword(newPassword));
    recoveryRequest = Recoveries.save(recoveryRequest.setExpired(true));
    return Response.create(recoveryRequest, HttpStatus.OK);
  }

}
