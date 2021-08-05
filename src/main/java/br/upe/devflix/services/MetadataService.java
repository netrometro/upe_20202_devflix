package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.database.IMetadataDao;
import br.upe.devflix.models.entities.Metadata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MetadataService {
  
  @Autowired
  private IMetadataDao Metadata;

  public ResponseEntity<List<Metadata>> fetchAll()
  {
    return ResponseEntity.ok(Metadata.findAll());
  }

  public ResponseEntity<Metadata> fetch(Long metadataId)
  {
    Optional<Metadata> metadata = Metadata.findById(metadataId);
    if (!metadata.isPresent()){
      return ResponseEntity.ok(metadata.get());
    }
    return ResponseEntity.notFound().build();
  }

  public ResponseEntity<Metadata> create(Metadata metadata) 
  {
    return ResponseEntity.ok(Metadata.save(metadata));
  }

  public ResponseEntity<Metadata> update(
    Long metadataId, Metadata metadata)
  {
    Optional<Metadata> metadataData = Metadata.findById(metadataId);
    if (!metadataData.isPresent()){
      return ResponseEntity.notFound().build();
    }
    metadata.setId(metadataId);
    Metadata.save(metadata);
    return ResponseEntity.ok(
      Metadata.save(metadataData.get().setId(metadataId)));
  }

  public ResponseEntity<Metadata> delete(Long metadataId)
  {
    Optional<Metadata> metadata = Metadata.findById(metadataId);
    Metadata.delete(metadata.get());
    return ResponseEntity.ok(metadata.get());
  }
}
