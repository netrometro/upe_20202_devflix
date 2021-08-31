package br.upe.devflix.controllers;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
import br.upe.devflix.services.CommentaryCRUDService;
import br.upe.devflix.services.serializers.ResponseService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/commentary")
@RestController
public class CommentaryController {

  @Autowired private CommentaryCRUDService commentaryService;
  @Autowired private ResponseService responseService;

  @GetMapping("/video/{videoId}")
  public ResponseEntity<?> fetchByVideoId(
    @PathVariable Long videoId) 
  {
    return responseService.create(
      commentaryService.fetchByVideoId(videoId), HttpStatus.OK);
  }

  @GetMapping("/category/{categoryId}")
  public ResponseEntity<?> fetchByCategoryId(
    @PathVariable Long categoryId) 
  {
    return responseService.create(
      commentaryService.fetchByCategoryId(categoryId), HttpStatus.OK);
  }
  
  @PostMapping("/video/{videoId}")
  public ResponseEntity<?> createInVideo(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long videoId,
    @RequestBody @Valid Commentary commentary) 
  {
    return responseService.create(
      commentaryService.createInVideo(authorization, videoId, commentary), HttpStatus.OK);
  }

  @PostMapping("/category/{categoryId}")
  public ResponseEntity<?> createInCategory(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long categoryId,
    @RequestBody @Valid Commentary commentary) 
  {
    return responseService.create(
      commentaryService.createInCategory(authorization, categoryId, commentary), HttpStatus.OK);
  }

  @PutMapping("/{commentaryId}")
  public ResponseEntity<?> update(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long commentaryId, 
    @RequestBody @Valid Commentary commentary) 
  {
    return responseService.create(
      commentaryService.protectedUpdate(authorization, commentaryId, commentary), HttpStatus.OK);
  }

  @DeleteMapping("/{commentaryId}")
  public ResponseEntity<?> delete(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long commentaryId) 
  {
    return responseService.create(
      commentaryService.protectedDelete(authorization, commentaryId), HttpStatus.OK);
  }

}
