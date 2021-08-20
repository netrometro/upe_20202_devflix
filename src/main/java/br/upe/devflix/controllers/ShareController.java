package br.upe.devflix.controllers;

import javax.validation.Valid;

import br.upe.devflix.services.security.AuthorizationService;
import br.upe.devflix.services.serializers.ResponseService;
import br.upe.devflix.services.subsystems.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.devflix.models.dto.ShareContentDTO;

@RequestMapping("/api/v1/share")
@RestController
public class ShareController {
  
  @Autowired private ResponseService responseService;
  @Autowired private AuthorizationService authorizationService;
  @Autowired private MailService mailService;

  @PostMapping
  public ResponseEntity<?> shareLink(
    @RequestHeader("authorization") String authorization,
    @RequestBody @Valid ShareContentDTO content) 
  {
    if (!authorizationService.isAuthenticated(authorization)){
      return responseService.create(null, HttpStatus.FORBIDDEN);
    }
    return null;
  }
}
