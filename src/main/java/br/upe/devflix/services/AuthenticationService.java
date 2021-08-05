package br.upe.devflix.services;

import java.util.Hashtable;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.upe.devflix.database.IUserDao;
import br.upe.devflix.database.IRecoveryDao;
import br.upe.devflix.models.entities.User;
import br.upe.devflix.models.serializables.Forgot;
import br.upe.devflix.models.serializables.Recovery;
import br.upe.devflix.models.serializables.SessionResponse;
import br.upe.devflix.services.security.JwtAPI;
import br.upe.devflix.services.security.Sha256;
import br.upe.devflix.models.serializables.Credential;

@Service
public class AuthenticationService {
  
  @Autowired
  private IUserDao Users;

  @Autowired
  private IRecoveryDao Recoveries;

  @Autowired
  private ResponseService Response;

  @Autowired
  private MailService Mailer;

  @Autowired
  private Sha256 HashSha256;

  @Autowired
  private JwtAPI JwtProvider;

  @Autowired
  private JsonService Json;

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

  public ResponseEntity<?> createSession(Credential credentialForm){
    List<User> existingUsers = Users.findByEmailAndConfirmedTrue(
      credentialForm.getEmail());
    if (existingUsers.isEmpty()){
      return Response.create(null, HttpStatus.UNAUTHORIZED);
    }
    User fetchedUser = existingUsers.get(0);
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
    SessionResponse session = new SessionResponse()
      .setToken(jwtToken)
      .setClaims(claims);

    return Response.create(session, HttpStatus.OK);
  }

  public ResponseEntity<?> forgotPassword(Forgot forgotForm){
    return Response.create(null, HttpStatus.OK);
  }

  public ResponseEntity<?> changePassword(Recovery recoveryForm){
    return Response.create(null, HttpStatus.OK);
  }

}
