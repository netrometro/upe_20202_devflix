package br.upe.devflix.controllers;

import javax.validation.Valid;
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
  
  @PostMapping
  public ResponseEntity<?> shareLink(
    @RequestHeader("authorization") String authorization,
    @RequestBody @Valid ShareContentDTO content) 
  {
    return null;
  }
}
