package br.upe.devflix.controllers;

import java.util.List;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
//import br.upe.devflix.services.CommentaryCRUDService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//import org.springframework.beans.factory.annotation.Autowired;

@RequestMapping("/api/v1/commentary")
@RestController
public class CommentaryController {

  //@Autowired private CommentaryCRUDService commentaryService;

  @GetMapping
  public ResponseEntity<List<Commentary>> fetchAll() 
  {
    return null;
    //return commentaryService.fetchAll();
  }

  @GetMapping("/{commentaryId}")
  public ResponseEntity<Commentary> fetch(@PathVariable Long commentaryId) 
  {
    return null;
    //return commentaryService.fetch(commentaryId);
  }
  
  @PostMapping("/{userId}")
  public ResponseEntity<Commentary> create(
    @PathVariable Long userId, 
    @RequestBody @Valid Commentary commentary) 
  {
    return null;
    //return commentaryService.create(userId, commentary);
  }

  @PutMapping("/{commentaryId}")
  public ResponseEntity<Commentary> update(
    @PathVariable Long commentaryId, 
    @RequestBody @Valid Commentary commentary) 
  {
    return null;
    //return commentaryService.update(commentaryId, commentary);
  }

  @DeleteMapping("/{commentaryId}")
  public ResponseEntity<Commentary> delete(
    @PathVariable Long commentaryId) 
  {
    return null;
    //return commentaryService.delete(commentaryId);
  }

}
