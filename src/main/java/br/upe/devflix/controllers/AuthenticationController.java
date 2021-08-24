package br.upe.devflix.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.devflix.models.dto.CredentialDTO;
import br.upe.devflix.models.dto.ForgotDTO;
import br.upe.devflix.models.dto.RecoveryDTO;
import br.upe.devflix.models.entities.User;
import br.upe.devflix.services.security.AuthenticationService;
import br.upe.devflix.services.serializers.ResponseService;

@RequestMapping("/api/v1/authentication")
@RestController
public class AuthenticationController {

  @Autowired private AuthenticationService Authentication;
  @Autowired private ResponseService responseService;

  @PostMapping("/signup")
  public ResponseEntity<?> createAccount(
    @RequestBody @Valid User userForm)
  {
    return responseService.create(
      Authentication.createAccount(userForm), HttpStatus.OK) ;
  }

  @PostMapping("/login")
  public ResponseEntity<?> createSession(
    @RequestBody @Valid CredentialDTO credentialForm)
  {
    return responseService.create(
      Authentication.createSession(credentialForm), HttpStatus.OK);
  }

  @GetMapping("/confirm/{confirmToken}")
  public ResponseEntity<?> confirmAccount(
    @PathVariable String confirmToken)
  {
    return responseService.create(
      Authentication.confirmAccount(confirmToken), HttpStatus.OK);
  }

  @PostMapping("/forgot")
  public ResponseEntity<?> forgotPassword(
    @RequestBody @Valid ForgotDTO forgotForm)
  {
    return responseService.create(
      Authentication.forgotPassword(forgotForm), HttpStatus.OK);
  }

  @PutMapping("/recovery")
  public ResponseEntity<?> changePassword(
    @RequestBody @Valid RecoveryDTO recoveryForm)
  {
    return responseService.create(
      Authentication.changePassword(recoveryForm), HttpStatus.OK);
  }



}
