package br.upe.devflix.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.devflix.models.entities.User;
import br.upe.devflix.models.serializables.Credential;
import br.upe.devflix.models.serializables.Forgot;
import br.upe.devflix.models.serializables.Recovery;
import br.upe.devflix.services.AuthenticationService;

@RequestMapping("/api/v1/authentication")
@RestController
public class AuthenticationController {

  @Autowired
  private AuthenticationService Authentication;

  @PostMapping("/signup")
  public ResponseEntity<User> createAccount(
    @RequestBody @Valid User userForm)
  {
    return Authentication.createAccount(userForm);
  }

  @PostMapping("/login")
  public ResponseEntity<Object> createSession(
    @RequestBody @Valid Credential credentialForm)
  {
    return Authentication.createSession(credentialForm);
  }

  @PostMapping("/forgot")
  public ResponseEntity<Object> forgotPassword(
    @RequestBody @Valid Forgot forgotForm)
  {
    return Authentication.forgotPassword(forgotForm);
  }

  @PostMapping("/recovery")
  public ResponseEntity<Object> changePassword(
    @RequestBody @Valid Recovery recoveryForm)
  {
    return Authentication.changePassword(recoveryForm);
  }

}
