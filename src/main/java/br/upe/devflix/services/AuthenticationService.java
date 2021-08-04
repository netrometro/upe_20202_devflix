package br.upe.devflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.upe.devflix.database.IRecoveryDao;
import br.upe.devflix.database.IUserDao;
import br.upe.devflix.models.entities.User;
import br.upe.devflix.models.serializables.Credential;
import br.upe.devflix.models.serializables.Forgot;
import br.upe.devflix.models.serializables.Recovery;

@Service
public class AuthenticationService {
  
  @Autowired
  private IUserDao Users;

  @Autowired
  private IRecoveryDao Recoveries;

  public ResponseEntity<?> createAccount(User userForm){
    return null;
  }

  public ResponseEntity<?> createSession(Credential credentialForm){
    return null;
  }

  public ResponseEntity<?> forgotPassword(Forgot forgotForm){
    return null;
  }

  public ResponseEntity<?> changePassword(Recovery recoveryForm){
    return null;
  }

}
