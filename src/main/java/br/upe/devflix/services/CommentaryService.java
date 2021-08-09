package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.dao.*;
import br.upe.devflix.models.entities.*;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
@Slf4j
public class CommentaryService {
  
  @Autowired private ICommentaryDao Commentaries;
  @Autowired private IUserDao Users;

  public ResponseEntity<List<Commentary>> fetchAll() {
    log.info("Returning all commentaries from database.");
    return ResponseEntity.ok(Commentaries.findAll());
  }

  public ResponseEntity<Commentary> fetch(Long commentaryId) {
    log.info("Returning a specific commentary from database.");
    Optional<Commentary> existingComment = Commentaries.findById(commentaryId);
    if (!existingComment.isPresent()){
      log.info("Commentary not found in database.");
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(existingComment.get());
  }
  
  public ResponseEntity<Commentary> create(Long userId,  Commentary commentary) {
    /**
    * FIX: Need add a verification if the video exists using `videoDao`
    */
    log.info("Creating new commentary in database.");
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      log.info("Commentary not found in database.");
      return ResponseEntity.notFound().build();
    }
    commentary.setAuthor(user.get());
    return ResponseEntity.ok(Commentaries.save(commentary));
  }

  public ResponseEntity<Commentary> update(
    Long commentaryId, 
    Commentary commentary) 
  {
    log.info("Updating commentary in database.");
    Optional<Commentary> existingComment = Commentaries.findById(commentaryId);
    if (!existingComment.isPresent()){
      log.info("Commentary not found in database.");
      return ResponseEntity.notFound().build();
    }
    Commentary newCommentary = existingComment.get()
      .setCommentaryText(commentary.getCommentaryText());
    return ResponseEntity.ok(Commentaries.save(newCommentary));
  }

  public ResponseEntity<Commentary> delete(Long commentaryId) {
    log.info("Deleting commentary in database.");
    Optional<Commentary> commentary = Commentaries.findById(commentaryId);
    if (!commentary.isPresent()){
      log.info("Commentary not found in database.");
      return ResponseEntity.notFound().build();
    }
    Commentaries.delete(commentary.get());
    return ResponseEntity.ok(commentary.get());
  }

}
