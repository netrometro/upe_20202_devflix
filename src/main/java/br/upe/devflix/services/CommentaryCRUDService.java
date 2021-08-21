package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.dao.*;
import br.upe.devflix.models.entities.*;
import br.upe.devflix.base.exceptions.*;
import br.upe.devflix.services.security.AuthorizationService;
import br.upe.devflix.services.interfaces.ICommentaryCRUDService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
@Service
public class CommentaryCRUDService implements ICommentaryCRUDService {
  
  @Autowired private ICommentaryDao Commentaries;
  @Autowired private IUserDao Users;
  @Autowired private VideoCRUDService videoService;
  @Autowired private CategoryCRUDService categoryService;
  @Autowired private AuthorizationService authorizationService;

  public List<Commentary> fetchAll() {
    log.info("Returning all commentaries from database.");
    return Commentaries.findAll();
  }

  public Commentary fetch(Long commentaryId) {
    log.info("Returning a specific commentary from database.");
    Optional<Commentary> existingComment = Commentaries.findById(commentaryId);
    if (!existingComment.isPresent()){
      log.info("Commentary not found in database.");
      return null;
    }
    return existingComment.get();
  }
  
  public Commentary create(Long userId,  Commentary commentary) {
    log.info("Creating new commentary in database.");
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      log.info("Commentary not found in database.");
      return null;
    }
    commentary.setAuthor(user.get());
    return Commentaries.save(commentary);
  }

  public Commentary update(
    Long commentaryId, 
    Commentary commentary) 
  {
    log.info("Updating commentary in database.");
    Optional<Commentary> existingComment = Commentaries.findById(commentaryId);
    if (!existingComment.isPresent()){
      log.info("Commentary not found in database.");
      return null;
    }
    Commentary newCommentary = existingComment.get()
      .setText(commentary.getText());
    return Commentaries.save(newCommentary);
  }

  public Commentary delete(Long commentaryId) {
    log.info("Deleting commentary in database.");
    Optional<Commentary> commentary = Commentaries.findById(commentaryId);
    if (!commentary.isPresent()){
      log.info("Commentary not found in database.");
      return null;
    }
    Commentaries.delete(commentary.get());
    return commentary.get();
  }

  public List<Commentary> fetchByVideoId(
    Long videoId) 
  {
    Video video = videoService.fetch(videoId);
    if (video == null){
      throw new VideoNotFoundException("Vídeo não encontrado.");
    }
    return video.getCommentaries();
  }

  public List<Commentary> fetchByCategoryId(
    Long categoryId) 
  {
    Category category = categoryService.fetch(categoryId);
    if (category == null) {
      throw new CategoryNotFoundException("Categoria não encontrada.");
    }
    return category.getCommentaries();
  }
  
  public List<Commentary> createInVideo(
    String authHeader,
    Commentary commentary) 
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      throw new AccessDeniedException("Você precisa estar logado para comentar no vídeo.");
    }
    return null;
  }

  public List<Commentary> createInCategory(
    String authHeader,
    Commentary commentary) 
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      throw new AccessDeniedException("Você precisa estar logado para comentar no vídeo.");
    }
    return null;
  }

  public Commentary update(
    String authHeader,
    Long commentaryId, 
    Commentary commentary) 
  {
    return null;
  }

  public Commentary delete(
    String authHeader,
    Long commentaryId) 
  {
    return null;
  }

  @Override
  @SuppressWarnings("unchecked")
  public ICommentaryDao getDao() {
    return Commentaries;
  }

}
