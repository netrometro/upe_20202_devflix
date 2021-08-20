package br.upe.devflix.controllers;

import javax.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;

import br.upe.devflix.models.entities.Category;
import br.upe.devflix.models.entities.User;
import br.upe.devflix.models.entities.Video;
import br.upe.devflix.services.CategoryCRUDService;
import br.upe.devflix.services.UserCRUDService;
import br.upe.devflix.services.VideoCRUDService;
import br.upe.devflix.services.security.AuthorizationService;
import br.upe.devflix.services.security.payload.JwtPayload;
import br.upe.devflix.services.serializers.ResponseService;
import br.upe.devflix.services.subsystems.YouTubeService;

@RequestMapping("/api/v1/video")
@RestController
public class VideoController {

  @Autowired private ResponseService responseService;
  @Autowired private VideoCRUDService videoService;
  @Autowired private CategoryCRUDService categoryService;
  @Autowired private YouTubeService youtubeService;
  @Autowired private AuthorizationService authorizationService;
  @Autowired private UserCRUDService userService;

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

  @GetMapping("/{}")
  public ResponseEntity<?> fetch(
    @PathVariable Long videoId)
  {
    return responseService.create(
      videoService.fetch(videoId), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<?> create(
    @RequestHeader("authorization") String authorization,
    @RequestBody @Valid Video video,
    @PathVariable Long categoryId)
  {
    Category category = categoryService.fetch(categoryId);
    if (category == null){
      //Categoria não encontrada...
      return responseService.create(null, HttpStatus.NOT_FOUND);
    }
    if (!authorizationService.isAuthenticated(authorization)){
      //Usuário não está autenticado...
      return responseService.create(null, HttpStatus.FORBIDDEN);
    }

    JwtPayload session = authorizationService.parseJwtPayload(authorization);
    User owner = userService.fetch(session.getId());
    if (owner.getId() != category.getOwner().getId()){
      //Usuário não é o proprietário da categoria...
      return responseService.create(null, HttpStatus.FORBIDDEN);
    }

    List<Video> categoryVideos = category.getVideos();
    Video addedVideo = videoService.insert(
      video.setCategory(category).setOwner(owner));
    categoryVideos.add(addedVideo);
    categoryService.update(category.setVideos(categoryVideos));
    return responseService.create(video, HttpStatus.OK);
  }

  @PutMapping
  public ResponseEntity<?> update(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long videoId,
    @RequestBody @Valid Video video)
  {
    Video foundVideo = videoService.fetch(videoId);
    if (foundVideo == null){
      return responseService.create(null, HttpStatus.NOT_FOUND);
    }
    if (!authorizationService.isAuthenticated(authorization)){
      //Usuário não está autenticado...
      return responseService.create(null, HttpStatus.FORBIDDEN);
    }

    JwtPayload session = authorizationService.parseJwtPayload(authorization);
    User owner = userService.fetch(session.getId());
    if (owner.getId() != video.getOwner().getId()){
      //Usuário não é o proprietário do vídeo...
      return responseService.create(null, HttpStatus.FORBIDDEN);
    }
    return responseService.create(
      videoService.update(videoId, video), HttpStatus.OK);
  }

  @DeleteMapping("/{videoId}")
  public ResponseEntity<?> delete(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long videoId)
  {
    Video foundVideo = videoService.fetch(videoId);
    if (foundVideo == null){
      return responseService.create(null, HttpStatus.NOT_FOUND);
    }
    if (!authorizationService.isAuthenticated(authorization)){
      //Usuário não está autenticado...
      return responseService.create(null, HttpStatus.FORBIDDEN);
    }

    JwtPayload session = authorizationService.parseJwtPayload(authorization);
    User owner = userService.fetch(session.getId());
    if (owner.getId() != foundVideo.getOwner().getId()){
      //Usuário não é o proprietário do vídeo...
      return responseService.create(null, HttpStatus.FORBIDDEN);
    }
    return responseService.create(
      videoService.delete(videoId), HttpStatus.OK);
  }

}