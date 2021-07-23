package com.example.controllers;

import java.util.List;

import javax.validation.Valid;

import com.example.database.IMetadataDao;
import com.example.models.Metadata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/metadata")
public class MetadataController {

  @Autowired
  private IMetadataDao metadataDao;

  @GetMapping
  public ResponseEntity<List<Metadata>> fetchAll()
  {
    return ResponseEntity.ok(metadataDao.findAll());
  }

  @GetMapping("/{metadaId}")
  public ResponseEntity<Metadata> fetch(
    @PathVariable Long metadataId)
  {
    if (!metadataDao.existsById(metadataId)){
      return ResponseEntity.notFound().build();
    }
    Metadata metadata = metadataDao.findById(metadataId).orElse(null);
    return ResponseEntity.ok(metadata);
  }

  @PostMapping
  public ResponseEntity<Metadata> create( 
    @RequestBody @Valid Metadata metadata) 
  {
    return ResponseEntity.ok(metadataDao.save(metadata));
  }

  @PutMapping("/{metadataId}")
  public ResponseEntity<Metadata> update(
    @PathVariable Long metadataId,
    @RequestBody @Valid Metadata metadata) 
  {
    if (!metadataDao.existsById(metadataId)) {
      return ResponseEntity.notFound().build();
    }
    metadata.setId(metadataId);
    return ResponseEntity.ok(metadataDao.save(metadata));
  }

  @DeleteMapping("/{metadataId}")
  public ResponseEntity<Metadata> delete(
    @PathVariable Long metadataId)
  {
    if (!metadataDao.existsById(metadataId)){
      return ResponseEntity.notFound().build();
    }
    Metadata metadata = metadataDao.findById(metadataId).orElse(null);
    metadataDao.delete(metadata);
    return ResponseEntity.ok(metadata);
  }
}
