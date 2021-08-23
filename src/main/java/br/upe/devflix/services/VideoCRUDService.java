package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import br.upe.devflix.dao.IVideoDao;
import br.upe.devflix.models.entities.*;
import br.upe.devflix.base.exceptions.*;
import br.upe.devflix.services.interfaces.IVideoCRUDService;
import br.upe.devflix.services.security.AuthorizationService;
import br.upe.devflix.services.security.payload.JwtPayload;


import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class VideoCRUDService implements IVideoCRUDService {

  @Autowired private IVideoDao Videos;
  @Autowired private MetadataCRUDService metadataService;
  @Autowired private UserCRUDService userService;
  @Autowired private VideoCRUDService videoService;
  @Autowired private CategoryCRUDService categoryService;
  @Autowired private AuthorizationService authorizationService;

  public List<Video> search(String keyword){
    log.info("Returning all videos by searching for keywords.");
    return this.Videos.findVideoByMetadata_TitleContainingOrMetadata_DescriptionContaining(keyword, keyword);
  }

  public List<Video> fetchAll() {
    log.info("Returning all videos from database.");
    return Videos.findAll();
  }

  public Video fetch(Long videoId) {
    log.info("Returning a specific video from database.");
    Optional<Video> existingVideo = Videos.findById(videoId);
    if (!existingVideo.isPresent()){
      log.info("Video not found in database.");
      return null;
    }
    return existingVideo.get();
  }

  public Video create(Video video)
  {
    log.info("Creating a new video in database.");
    return Videos.save(video);
  }

  public Video update(
    Long videoId, Video video)
  {
    log.info("Updating a specific video from database.");
    Optional<Video> videoData = Videos.findById(videoId);
    if (!videoData.isPresent()){
      log.warn("Video not found in database.");
      return null;
    }
    return Videos.save(video.setId(videoId));
  }

  public Video delete(Long videoId)
  {
    log.info("Deleting a specific video from database.");
    Optional<Video> video = Videos.findById(videoId);
    if (!video.isPresent()){
      log.warn("Video not found in database.");
      return null;
    }
    Videos.delete(video.get());
    return video.get();
  }

  public Video protectedCreate(
    String authHeader, 
    Video video,
    Long categoryId)
  {
    log.info("Adding new video to category.");
    Category category = categoryService.fetch(categoryId);
    if (category == null){
      //Categoria não encontrada...
      throw new CategoryNotFoundException("Playlist de vídeos não encontrada.");
    }
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar esse recurso.");
    }

    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User owner = userService.fetch(session.getId());
    if (owner.getId() != category.getOwner().getId()){
      //Usuário não é o proprietário da categoria...
      throw new AccessDeniedException("Você não é proprietário desta Playlist para adicionar vídeos.");
    }

    List<Video> categoryVideos = category.getVideos();
    Metadata metadata = metadataService.create(video.getMetadata());
    Video addedVideo = videoService.insert(
      video.setCategory(category).setOwner(owner).setMetadata(metadata));
    categoryVideos.add(addedVideo);
    categoryService.update(category.setVideos(categoryVideos));

    return addedVideo;
  }

  public Video protectedUpdate(
    String authHeader, 
    Long videoId,
    Video video)
  {
    log.info("Updating video.");
    Video foundVideo = videoService.fetch(videoId);
    if (foundVideo == null){
      //Vídeo não encontrado...
      throw new VideoNotFoundException("Vídeo não encontrado.");
    }
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar esse recurso.");
    }

    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User owner = userService.fetch(session.getId());
    
    if (owner.getId() != foundVideo.getOwner().getId()){
      //Usuário não é o proprietário do vídeo...
      throw new AccessDeniedException("Você não é proprietário deste vídeo para alterá-lo.");
    }

    Metadata metadata = metadataService.update(foundVideo.getMetadata().getId(),video.getMetadata());
    Video addedVideo = videoService.update(foundVideo.getId(),
      video.setCategory(foundVideo.getCategory()).setOwner(foundVideo.getOwner()).setMetadata(metadata));

    return addedVideo;
  }

  public Video protectedDelete(
    String authHeader, 
    Long videoId)
  {
    log.info("Deleting video.");
    Video foundVideo = videoService.fetch(videoId);
    if (foundVideo == null){
      throw new VideoNotFoundException("Vídeo não encontrado.");
    }
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar esse recurso.");
    }

    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User owner = userService.fetch(session.getId());
    /*
    -----------------------------------
    Não está funcionando
    -----------------------------------
    */
    if (owner.getId() != foundVideo.getOwner().getId()){
      //Usuário não é o proprietário do vídeo...
      throw new AccessDeniedException("Você não é proprietário deste vídeo para excluí-lo.");
    }
    return videoService.delete(videoId);
  }

  @SuppressWarnings("unchecked")
  @Override
  public IVideoDao getDao() {
    return Videos;
  }

}