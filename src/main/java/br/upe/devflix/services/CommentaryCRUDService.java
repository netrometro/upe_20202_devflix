package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.dao.*;
import br.upe.devflix.models.entities.*;
import br.upe.devflix.services.interfaces.ICommentaryCRUDService;

import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Slf4j
@Service
public class CommentaryCRUDService implements ICommentaryCRUDService {
  
  @Autowired private ICommentaryDao Commentaries;
  @Autowired private IUserDao Users;

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
    /**
    * FIX: Need add a verification if the video exists using `videoDao`
    */
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

  @Override
  @SuppressWarnings("unchecked")
  public ICommentaryDao getDao() {
    return Commentaries;
  }

}
