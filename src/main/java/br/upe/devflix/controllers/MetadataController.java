package br.upe.devflix.controllers;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
import br.upe.devflix.services.MetadataCRUDService;
import br.upe.devflix.services.serializers.ResponseService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/metadata")
public class MetadataController {

  @Autowired private MetadataCRUDService metadataService;
  @Autowired private ResponseService responseService;

  @GetMapping("/{metadataId}")
  public ResponseEntity<?> fetch(
    @PathVariable Long metadataId)
  {
    Metadata foundMetadata = metadataService.fetch(metadataId);
    if (foundMetadata == null){
      return responseService.create(null, HttpStatus.NOT_FOUND);
    }
    return responseService.create(foundMetadata, HttpStatus.OK);
  }

  @PutMapping("/{metadataId}")
  public ResponseEntity<?> update(
    @PathVariable Long metadataId,
    @RequestBody @Valid Metadata metadata)
  {
    Metadata foundMetadata = metadataService.fetch(metadataId);
    if (foundMetadata == null){
      return responseService.create(null, HttpStatus.NOT_FOUND);
    }
    return responseService.create(
      metadataService.update(metadataId, metadata), HttpStatus.OK);
  }

}
