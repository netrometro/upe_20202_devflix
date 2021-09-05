package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import java.time.LocalDateTime;

import br.upe.devflix.dao.*;
import br.upe.devflix.models.dto.AuthorDTO;
import br.upe.devflix.models.dto.CommentaryDTO;
import br.upe.devflix.models.entities.*;
import br.upe.devflix.base.exceptions.*;
import br.upe.devflix.services.security.payload.JwtPayload;
import br.upe.devflix.services.security.AuthorizationService;
import br.upe.devflix.services.interfaces.ICommentaryCRUDService;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CommentaryCRUDService implements ICommentaryCRUDService {
  
  @Autowired private UserCRUDService userService;
  @Autowired private ICommentaryDao Commentaries;
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
    Optional<User> user = userService.getDao().findById(userId);
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
    newCommentary.setLastChangedDate(LocalDateTime.now());
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

  public List<CommentaryDTO> fetchByVideoId(
    Long videoId) 
  {
    Video video = videoService.fetch(videoId);
    if (video == null){
      throw new VideoNotFoundException("Vídeo não encontrado.");
    }
    List<Commentary> commentaries = video.getCommentaries();
    ArrayList<CommentaryDTO> response = new ArrayList<>();
    for (Commentary comment : commentaries){
      User author = userService.fetchCommentaryAuthor(comment);
      CommentaryDTO commentDetail = new CommentaryDTO();
      AuthorDTO authorDetail = new AuthorDTO();
      authorDetail = authorDetail.setName(author.getName())
        .setEmail(author.getEmail())
        .setId(author.getId());
      commentDetail = commentDetail.setAuthor(authorDetail).setCommentary(comment);
      response.add(commentDetail);
    }
    return response;
  }

  public List<CommentaryDTO> fetchByCategoryId(
    Long categoryId) 
  {
    Category category = categoryService.fetch(categoryId);
    if (category == null) {
      throw new CategoryNotFoundException("Categoria não encontrada.");
    }
    List<Commentary> commentaries = category.getCommentaries();
    ArrayList<CommentaryDTO> response = new ArrayList<>();
    for (Commentary comment : commentaries){
      User author = userService.fetchCommentaryAuthor(comment);
      CommentaryDTO commentDetail = new CommentaryDTO();      
      AuthorDTO authorDetail = new AuthorDTO();
      authorDetail = authorDetail.setName(author.getName())
        .setEmail(author.getEmail())
        .setId(author.getId());
      response.add(commentDetail.setAuthor(authorDetail).setCommentary(comment));
    }
    return response;
  }
  
  public Commentary createInVideo(
    String authHeader,
    Long videoId,
    Commentary commentary) 
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      throw new AccessDeniedException("Você precisa estar logado para comentar no vídeo.");
    }
    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User author = userService.fetch(session.getId());
    Video video = videoService.fetch(videoId);
    if (video == null){
      throw new VideoNotFoundException("Vídeo não encontrado.");
    }
    return Commentaries.save(commentary.setVideo(video).setAuthor(author));
  }

  public Commentary createInCategory(
    String authHeader,
    Long categoryId,
    Commentary commentary) 
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      throw new AccessDeniedException("Você precisa estar logado para comentar no vídeo.");
    }
    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User author = userService.fetch(session.getId());
    Category category = categoryService.fetch(categoryId);
    return Commentaries.save(commentary.setCategory(category).setAuthor(author));
  }

  public Commentary protectedUpdate(
    String authHeader,
    Long commentaryId, 
    Commentary commentary) 
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      throw new AccessDeniedException("Você precisa estar logado para comentar no vídeo.");
    }
    Commentary foundCommentary = fetch(commentaryId);
    if (foundCommentary == null){
      throw new CommentaryNotFoundException("Comentário não encontrado.");
    }
    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User author = userService.fetch(session.getId());
    if ((foundCommentary.getAuthor().getId() != author.getId()) && !authorizationService.isAdmin(authHeader)){
      throw new AccessDeniedException("Você não tem permissão para editar este comentário.");
    }
    return update(commentaryId, commentary);
  }

  public Commentary protectedDelete(
    String authHeader,
    Long commentaryId) 
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      throw new AccessDeniedException("Você precisa estar logado para comentar no vídeo.");
    }
    Commentary foundCommentary = fetch(commentaryId);
    if (foundCommentary == null){
      throw new CommentaryNotFoundException("Comentário não encontrado.");
    }
    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User author = userService.fetch(session.getId());
    if ((foundCommentary.getAuthor().getId() != author.getId()) && !authorizationService.isAdmin(authHeader)){
      throw new AccessDeniedException("Você não tem permissão para editar este comentário.");
    }
    return delete(commentaryId);
  }

  @Override
  @SuppressWarnings("unchecked")
  public ICommentaryDao getDao() {
    return Commentaries;
  }

}
