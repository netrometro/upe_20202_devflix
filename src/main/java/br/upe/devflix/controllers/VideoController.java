package br.upe.devflix.controllers;

import java.util.List;

import javax.validation.Valid;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.devflix.models.entities.Video;
//import br.upe.devflix.services.VideoCRUDService;

@RequestMapping("/api/v1/video")
@RestController
public class VideoController {

  //@Autowired private VideoCRUDService videoService;

  @GetMapping
  public ResponseEntity<List<Video>> fetchAll() {
    return null;
  }

  public ResponseEntity<Video> fetch(
    @PathVariable Long videoId)
  {
    return null;
  }

  @PostMapping
  public ResponseEntity<Video> create(
    @RequestBody @Valid Video video)
  {
    return null;
  }

  public ResponseEntity<Video> update(
    @PathVariable Long videoId,
    @RequestBody @Valid Video video)
  {
    return null;
  }

  @DeleteMapping("/{videoId}")
  public ResponseEntity<Video> delete(
    @PathVariable Long videoId)
  {
    return null;
  }

}