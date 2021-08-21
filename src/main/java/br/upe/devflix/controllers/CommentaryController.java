package br.upe.devflix.controllers;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
import br.upe.devflix.services.CommentaryCRUDService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RequestMapping("/api/v1/commentary")
@RestController
public class CommentaryController {

  @Autowired private CommentaryCRUDService commentaryService;

  @GetMapping("/video/{videoId}")
  public ResponseEntity<?> fetchByVideoId(
    @PathVariable Long videoId) 
  {
    return null;
    //return commentaryService.fetch(commentaryId);
  }

  @GetMapping("/category/{categoryId}")
  public ResponseEntity<?> fetchByCategoryId(
    @PathVariable Long categoryId) 
  {
    return null;
    //return commentaryService.fetch(commentaryId);
  }
  
  @PostMapping("/video/{videoId}")
  public ResponseEntity<?> createInVideo(
    @RequestHeader("authorization") String authorization,
    @RequestBody @Valid Commentary commentary) 
  {
    return null;
    //return commentaryService.create(userId, commentary);
  }

  @PostMapping("/category/{categoryId}")
  public ResponseEntity<?> createInCategory(
    @RequestHeader("authorization") String authorization,
    @RequestBody @Valid Commentary commentary) 
  {
    return null;
    //return commentaryService.create(userId, commentary);
  }

  @PutMapping("/{commentaryId}")
  public ResponseEntity<?> update(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long commentaryId, 
    @RequestBody @Valid Commentary commentary) 
  {
    return null;
    //return commentaryService.update(commentaryId, commentary);
  }

  @DeleteMapping("/{commentaryId}")
  public ResponseEntity<?> delete(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long commentaryId) 
  {
    return null;
    //return commentaryService.delete(commentaryId);
  }

}
