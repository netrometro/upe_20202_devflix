package br.upe.devflix.controllers;

import java.util.List;

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
    List<Video> categoryVideos = category.getVideos();
    Video addedVideo = videoService.insert(video.setCategory(category));
    categoryVideos.add(addedVideo);
    categoryService.update(category.setVideos(categoryVideos));
    return responseService.create(video, HttpStatus.OK);
  }

  public ResponseEntity<?> update(
    @PathVariable Long videoId,
    @RequestBody @Valid Video video)
  {
    Video foundVideo = videoService.fetch(videoId);
    if (foundVideo == null){
      return responseService.create(null, HttpStatus.NOT_FOUND);
    }
    return responseService.create(
      videoService.update(videoId, video), HttpStatus.OK);
  }

  @DeleteMapping("/{videoId}")
  public ResponseEntity<?> delete(
    @PathVariable Long videoId)
  {
    Video foundVideo = videoService.fetch(videoId);
    if (foundVideo == null){
      return responseService.create(null, HttpStatus.NOT_FOUND);
    }
    return responseService.create(
      videoService.delete(videoId), HttpStatus.OK);
  }

}