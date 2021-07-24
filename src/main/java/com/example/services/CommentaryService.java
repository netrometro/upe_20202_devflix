package com.example.services;

import java.util.List;

import com.example.database.*;
import com.example.models.*;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class CommentaryService {
  @Autowired
  private ICommentaryDao commentaryDao;

  @Autowired
  private IUserDao userDao;

  
  public ResponseEntity<List<Commentary>> fetchAll() {
    return ResponseEntity.ok(commentaryDao.findAll());
  }

  public ResponseEntity<Commentary> fetch(Long commentaryId) {
    if (!commentaryDao.existsById(commentaryId)){
      return ResponseEntity.notFound().build();
    }
    Commentary commentary = commentaryDao.findById(commentaryId).orElse(null);
    
    return ResponseEntity.ok(commentary);
  }
  
  public ResponseEntity<Commentary> create(Long userId,  Commentary commentary) {
    /**
    * FIX: Need add a verification if the video exists using `videoDao`
    */
    if (!userDao.existsById(userId)){
      return ResponseEntity.notFound().build();
    }
    commentary.setAuthor(userDao.findById(userId).orElse(null));
    
    return ResponseEntity
      .ok(commentaryDao
      .save(commentary));
  }

  public ResponseEntity<Commentary> update(Long commentaryId, Commentary commentary) {
    if (!commentaryDao.existsById(commentaryId)){
      return ResponseEntity.notFound().build();
    }
    Commentary newCommentary = commentaryDao.findById(commentaryId).orElse(null);
    newCommentary.setCommentaryText(commentary.getCommentaryText());

    return ResponseEntity
      .ok(commentaryDao
      .save(newCommentary));
  }

  public ResponseEntity<Commentary> delete(Long commentaryId) {
    if (!commentaryDao.existsById(commentaryId)){
      
      return ResponseEntity
        .notFound()
        .build();
    }
    Commentary commentary = commentaryDao.findById(commentaryId).orElse(null);
    commentaryDao.delete(commentary);
    
    return ResponseEntity.ok(commentary);
  }

}
