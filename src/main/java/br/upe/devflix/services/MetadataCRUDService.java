package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.dao.IMetadataDao;
import br.upe.devflix.models.entities.Metadata;
import br.upe.devflix.services.interfaces.IMetadataCRUDService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MetadataCRUDService implements IMetadataCRUDService {
  
  @Autowired private IMetadataDao Metadata;

  public List<Metadata> fetchAll()
  {
    log.info("Returning all Metadata from videos in database.");
    return Metadata.findAll();
  }

  public Metadata fetch(Long metadataId)
  {
    log.info("Returning a specific Metadata from video in database.");
    Optional<Metadata> metadata = Metadata.findById(metadataId);
    if (!metadata.isPresent()){
      log.warn("Returning all Metadata from videos.");
      return null;
    }
    return metadata.get();
  }

  public Metadata create(Metadata metadata) 
  {
    log.info("Creating a metadata of a video in database.");
    return Metadata.save(metadata);
  }

  public Metadata update(
    Long metadataId, Metadata metadata)
  {
    log.info("Updating metadata of video in database.");
    Optional<Metadata> metadataData = Metadata.findById(metadataId);
    if (!metadataData.isPresent()){
      log.warn("Metadata not found in database.");
      return null;
    }
    metadata.setId(metadataId);
    Metadata.save(metadata);
    return Metadata.save(metadataData.get().setId(metadataId));
  }

  public Metadata delete(Long metadataId)
  {
    log.info("Deleting metadata from database.");
    Optional<Metadata> metadata = Metadata.findById(metadataId);
    if (!metadata.isPresent()){
      log.warn("Metadata not found in database.");
      return null;
    }
    Metadata.delete(metadata.get());
    return metadata.get();
  }

  @SuppressWarnings("unchecked")
  @Override
  public IMetadataDao getDao() {
    return Metadata;
  }

}
