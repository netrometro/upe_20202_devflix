package br.upe.devflix.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
  public ResponseEntity<?> createAccount(
    @RequestBody @Valid User userForm)
  {
    return Authentication.createAccount(userForm);
  }

  @PostMapping("/login")
  public ResponseEntity<?> createSession(
    @RequestBody @Valid Credential credentialForm)
  {
    return Authentication.createSession(credentialForm);
  }

  @GetMapping("/confirm/{confirmToken}")
  public ResponseEntity<?> confirmAccount(
    @PathVariable String confirmToken)
  {
    return Authentication.confirmAccount(confirmToken);
  }

  @PostMapping("/forgot")
  public ResponseEntity<?> forgotPassword(
    @RequestBody @Valid Forgot forgotForm)
  {
    return Authentication.forgotPassword(forgotForm);
  }

  @PostMapping("/recovery")
  public ResponseEntity<?> changePassword(
    @RequestBody @Valid Recovery recoveryForm)
  {
    return Authentication.changePassword(recoveryForm);
  }



}
