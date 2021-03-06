package br.upe.devflix.controllers;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import br.upe.devflix.models.entities.Video;
import br.upe.devflix.services.VideoCRUDService;
import br.upe.devflix.services.CategoryCRUDService;
import br.upe.devflix.services.subsystems.YouTubeService;
import br.upe.devflix.services.serializers.ResponseService;

@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/video")
@RestController
public class VideoController {

  @Autowired private ResponseService responseService;
  @Autowired private VideoCRUDService videoService;
  @Autowired private CategoryCRUDService categoryService;
  @Autowired private YouTubeService youtubeService;

  @GetMapping("/search")
  public ResponseEntity<?> searchDevflixVideosByKeyword(
    @RequestParam("keyword") String keyword)
  {
    return responseService.create(
      videoService.search(keyword), HttpStatus.OK);
  }

  @GetMapping("/youtube/search")
  public ResponseEntity<?> searchYoutubeVideosByKeyword(
    @RequestParam("keyword") String keyword)
  {
    return responseService.create(
      youtubeService.getVideoSearch(keyword), HttpStatus.OK);
  }

  @GetMapping
  public ResponseEntity<?> fetchAll() {
    return responseService.create(
      categoryService.fetchAll(), HttpStatus.OK);
  }

  @GetMapping("/{videoId}")
  public ResponseEntity<?> fetch(
    @PathVariable Long videoId)
  {
    return responseService.create(
      videoService.fetch(videoId), HttpStatus.OK);
  }

  @PostMapping("/{categoryId}")
  public ResponseEntity<?> create(
    @RequestHeader("authorization") String authorization,
    @RequestBody @Valid Video video,
    @PathVariable Long categoryId)
  {
    return responseService.create(
      videoService.protectedCreate(authorization, video, categoryId), HttpStatus.OK);
  }

  @PutMapping("/{videoId}")
  public ResponseEntity<?> update(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long videoId,
    @RequestBody @Valid Video video)
  {
    return responseService.create(
      videoService.protectedUpdate(authorization, videoId, video), HttpStatus.OK);
  }

  @PostMapping("/{videoId}/delete")
  public ResponseEntity<?> delete(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long videoId)
  {
    return responseService.create(
      videoService.protectedDelete(authorization, videoId), HttpStatus.OK);
  }

  @GetMapping("/my")
  public ResponseEntity<?> fetchMyVideos(
    @RequestHeader("authorization") String authorization){
    return responseService.create(videoService.fetchMyVideos(authorization), HttpStatus.OK);
  }

}