package br.upe.devflix.controllers;

import javax.validation.Valid;

import br.upe.devflix.models.dto.ShareContentDTO;
import br.upe.devflix.services.ShareContentService;
import br.upe.devflix.services.serializers.ResponseService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/share")
@RestController
public class ShareController {
  
  @Autowired private ResponseService responseService;
  @Autowired private ShareContentService shareContentService;

  @PostMapping
  public ResponseEntity<?> shareLink(
    @RequestHeader("authorization") String authorization,
    @RequestBody @Valid ShareContentDTO content) 
  { 
    shareContentService.shareLinkByEmail(authorization, 
      content.getUserEmail(), 
      content.getLink());
    return responseService.create(null, HttpStatus.OK);
  }
}
