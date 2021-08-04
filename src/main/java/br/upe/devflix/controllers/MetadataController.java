package br.upe.devflix.controllers;

import java.util.List;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
import br.upe.devflix.services.MetadataService;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/metadata")
public class MetadataController {

  @Autowired
  private MetadataService metadataService;

  @GetMapping
  public ResponseEntity<List<Metadata>> fetchAll()
  {
    return metadataService.fetchAll();
  }

  @GetMapping("/{metadaId}")
  public ResponseEntity<Metadata> fetch(
    @PathVariable Long metadaId)
  {
    return metadataService.fetch(metadaId);
  }

  @PostMapping
  public ResponseEntity<Metadata> create(
    @RequestBody @Valid Metadata metadata)
  {
    return metadataService.create(metadata);
  }

  @PutMapping("/{metadataId}")
  public ResponseEntity<Metadata> update(
    @PathVariable Long metadataId,
    @RequestBody @Valid Metadata metadata)
  {
    return metadataService.update(metadataId, metadata);
  }

  @DeleteMapping("/{metadataId}")
  public ResponseEntity<Metadata> delete(
    @PathVariable Long metadataId)
  {
    return metadataService.delete(metadataId);
  }
}
