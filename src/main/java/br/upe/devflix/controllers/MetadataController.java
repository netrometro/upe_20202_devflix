package br.upe.devflix.controllers;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
//import br.upe.devflix.services.MetadataCRUDService;

import org.springframework.http.ResponseEntity;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/metadata")
public class MetadataController {

  //@Autowired private MetadataCRUDService metadataService;

  @GetMapping("/{metadaId}")
  public ResponseEntity<Metadata> fetch(
    @PathVariable Long metadaId)
  {
    return null;
    //return metadataService.fetch(metadaId);
  }

  @PutMapping("/{metadataId}")
  public ResponseEntity<Metadata> update(
    @PathVariable Long metadataId,
    @RequestBody @Valid Metadata metadata)
  {
    return null;
    //return metadataService.update(metadataId, metadata);
  }

}
