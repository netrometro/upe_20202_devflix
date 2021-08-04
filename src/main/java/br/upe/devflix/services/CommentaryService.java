package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.database.*;
import br.upe.devflix.models.entities.*;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class CommentaryService {
  
  @Autowired
  private ICommentaryDao Commentaries;

  @Autowired
  private IUserDao Users;

  
  public ResponseEntity<List<Commentary>> fetchAll() {
    return ResponseEntity.ok(Commentaries.findAll());
  }

  public ResponseEntity<Commentary> fetch(Long commentaryId) {
    Optional<Commentary> existingComment = Commentaries.findById(commentaryId);
    if (!existingComment.isPresent()){
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(existingComment.get());
  }
  
  public ResponseEntity<Commentary> create(Long userId,  Commentary commentary) {
    /**
    * FIX: Need add a verification if the video exists using `videoDao`
    */
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      return ResponseEntity.notFound().build();
    }
    commentary.setAuthor(user.get());
    return ResponseEntity.ok(Commentaries.save(commentary));
  }

  public ResponseEntity<Commentary> update(
    Long commentaryId, 
    Commentary commentary) 
  {
    Optional<Commentary> existingComment = Commentaries.findById(commentaryId);
    if (!existingComment.isPresent()){
      return ResponseEntity.notFound().build();
    }

    Commentary newCommentary = existingComment.get()
      .setCommentaryText(commentary.getCommentaryText());

    return ResponseEntity.ok(Commentaries.save(newCommentary));
  }

  public ResponseEntity<Commentary> delete(Long commentaryId) {
    Optional<Commentary> commentary = Commentaries.findById(commentaryId);
    if (!commentary.isPresent()){
      return ResponseEntity.notFound().build();
    }
    Commentaries.delete(commentary.get());
    return ResponseEntity.ok(commentary.get());
  }

}
