package br.upe.devflix.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.devflix.models.entities.Category;
import br.upe.devflix.models.entities.Video;
import br.upe.devflix.services.CategoryCRUDService;
import br.upe.devflix.services.VideoCRUDService;
import br.upe.devflix.services.serializers.ResponseService;

@RequestMapping("/api/v1/video")
@RestController
public class VideoController {

  @Autowired private ResponseService responseService;
  @Autowired private VideoCRUDService videoService;
  @Autowired private CategoryCRUDService categoryService;

  @GetMapping
  public ResponseEntity<?> fetchAll() {
    return responseService.create(
      categoryService.fetchAll(), HttpStatus.OK);
  }

  public ResponseEntity<?> fetch(
    @PathVariable Long videoId)
  {
    return responseService.create(
      videoService.fetch(videoId), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<?> create(
    @RequestBody @Valid Video video,
    @PathVariable Long categoryId)
  {
    Category category = categoryService.fetch(categoryId);
    if (category == null){
      return responseService.create(null, HttpStatus.NOT_FOUND);
    }
    return responseService.create(categoryService.fetchAll(), HttpStatus.OK);
  }

  public ResponseEntity<?> update(
    @PathVariable Long videoId,
    @RequestBody @Valid Video video)
  {
    return null;
  }

  @DeleteMapping("/{videoId}")
  public ResponseEntity<?> delete(
    @PathVariable Long videoId)
  {
    return null;
  }

}