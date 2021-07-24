package com.example.controllers;

import java.util.List;

import javax.validation.Valid;

import com.example.database.*;
import com.example.models.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RequestMapping("/v1/commentaries")
@RestController
public class CommentaryController {

  @Autowired
  private ICommentaryDao commentaryDao;

  @Autowired
  private IUserDao userDao;

  @GetMapping
  public ResponseEntity<List<Commentary>> fetchAll() {
    return ResponseEntity.ok(commentaryDao.findAll());
  }

  @GetMapping("/{commentaryId}")
  public ResponseEntity<Commentary> fetch(@PathVariable Long commentaryId) {
    if (!commentaryDao.existsById(commentaryId)){
      return ResponseEntity.notFound().build();
    }
    Commentary commentary = commentaryDao.findById(commentaryId).orElse(null);
    
    return ResponseEntity.ok(commentary);
  }
  
  @PostMapping("/{userId}")
  public ResponseEntity<Commentary> create(@PathVariable Long userId, @RequestBody @Valid Commentary commentary) {
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

  @PutMapping("/{commentaryId}")
  public ResponseEntity<Commentary> update(@PathVariable Long commentaryId, @RequestBody @Valid Commentary commentary) {
    if (!commentaryDao.existsById(commentaryId)){
      return ResponseEntity.notFound().build();
    }
    Commentary newCommentary = commentaryDao.findById(commentaryId).orElse(null);
    newCommentary.setCommentaryText(commentary.getCommentaryText());

    return ResponseEntity
      .ok(commentaryDao
      .save(newCommentary));
  }

  @DeleteMapping("/{commentaryId}")
  public ResponseEntity<Commentary> delete(@PathVariable Long commentaryId) {
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
