package com.example.controllers;

import java.util.List;

import javax.validation.Valid;

import com.example.database.*;
import com.example.models.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RequestMapping("/v1/commentaries")
@RestController
public class CommentaryController {
  @Autowired
  private ICommentaryDao commentaryDao;

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
  
  @PostMapping
  public ResponseEntity<Commentary> create(@RequestBody @Valid Commentary commentary) {
    /**
    * FIX: Need add a verification if the user and video exists using `userDao` and `videoDao`
    */
    return ResponseEntity.ok(commentaryDao.save(commentary));
  }

  @PutMapping("/{commentaryId}")
  public ResponseEntity<Commentary> update(@PathVariable Long commentaryId, @RequestBody @Valid Commentary commentary) {
    if (!commentaryDao.existsById(commentaryId)){
      return ResponseEntity.notFound().build();
    }
    commentary.setId(commentaryId);
    return ResponseEntity.ok(commentaryDao.save(commentary));
  }

  @DeleteMapping("/{commentaryId}")
  public ResponseEntity<Commentary> delete(@PathVariable Long commentaryId) {
    if (!commentaryDao.existsById(commentaryId)){
      return ResponseEntity.notFound().build();
    }
    Commentary commentary = commentaryDao.findById(commentaryId).orElse(null);
    commentaryDao.delete(commentary);
    return ResponseEntity.ok(commentary);
  }

}
