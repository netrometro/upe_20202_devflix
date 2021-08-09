package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.dao.IMetadataDao;
import br.upe.devflix.models.entities.Metadata;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MetadataService {
  
  @Autowired private IMetadataDao Metadata;

  public ResponseEntity<List<Metadata>> fetchAll()
  {
    log.info("Returning all Metadata from videos in database.");
    return ResponseEntity.ok(Metadata.findAll());
  }

  public ResponseEntity<Metadata> fetch(Long metadataId)
  {
    log.info("Returning a specific Metadata from video in database.");
    Optional<Metadata> metadata = Metadata.findById(metadataId);
    if (!metadata.isPresent()){
      log.warn("Returning all Metadata from videos.");
      return ResponseEntity.ok(metadata.get());
    }
    return ResponseEntity.notFound().build();
  }

  public ResponseEntity<Metadata> create(Metadata metadata) 
  {
    log.info("Creating a metadata of a video in database.");
    return ResponseEntity.ok(Metadata.save(metadata));
  }

  public ResponseEntity<Metadata> update(
    Long metadataId, Metadata metadata)
  {
    log.info("Updating metadata of video in database.");
    Optional<Metadata> metadataData = Metadata.findById(metadataId);
    if (!metadataData.isPresent()){
      log.warn("Metadata not found in database.");
      return ResponseEntity.notFound().build();
    }
    metadata.setId(metadataId);
    Metadata.save(metadata);
    return ResponseEntity.ok(
      Metadata.save(metadataData.get().setId(metadataId)));
  }

  public ResponseEntity<Metadata> delete(Long metadataId)
  {
    log.info("Deleting metadata from database.");
    Optional<Metadata> metadata = Metadata.findById(metadataId);
    if (!metadata.isPresent()){
      log.warn("Metadata not found in database.");
      return ResponseEntity.notFound().build();
    }
    Metadata.delete(metadata.get());
    return ResponseEntity.ok(metadata.get());
  }
}
