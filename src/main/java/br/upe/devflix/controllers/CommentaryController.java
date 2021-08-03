package br.upe.devflix.controllers;

import java.util.List;

import javax.validation.Valid;

import br.upe.devflix.models.*;
import br.upe.devflix.services.CommentaryService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RequestMapping("/v1/commentaries")
@RestController
public class CommentaryController {

  @Autowired
  private CommentaryService commentaryService;

  @GetMapping
  public ResponseEntity<List<Commentary>> fetchAll() {

    return commentaryService.fetchAll();
  }

  @GetMapping("/{commentaryId}")
  public ResponseEntity<Commentary> fetch(@PathVariable Long commentaryId) {

    return commentaryService.fetch(commentaryId);
  }
  
  @PostMapping("/{userId}")
  public ResponseEntity<Commentary> create(@PathVariable Long userId, @RequestBody @Valid Commentary commentary) {
    
    return commentaryService.create(userId, commentary);
  }

  @PutMapping("/{commentaryId}")
  public ResponseEntity<Commentary> update(@PathVariable Long commentaryId, @RequestBody @Valid Commentary commentary) {
    
    return commentaryService.update(commentaryId, commentary);
  }

  @DeleteMapping("/{commentaryId}")
  public ResponseEntity<Commentary> delete(@PathVariable Long commentaryId) {
    
    return commentaryService.delete(commentaryId);
  }

}
