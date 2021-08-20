package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import br.upe.devflix.dao.IVideoDao;
import br.upe.devflix.models.entities.Video;
import br.upe.devflix.services.interfaces.IVideoCRUDService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class VideoCRUDService implements IVideoCRUDService {

  @Autowired 
  private IVideoDao Videos;

  public List<Video> search(String keyword){
    log.info("Returning all videos by searching for keywords.");
    return this.Videos.findVideoByMetadata_TitleContainingOrMetadata_DescriptionContaining(keyword, keyword);
  }

  public List<Video> fetchAll() {
    log.info("Returning all videos from database.");
    return Videos.findAll();
  }

  public Video fetch(Long videoId) {
    log.info("Returning a specific video from database.");
    Optional<Video> existingVideo = Videos.findById(videoId);
    if (!existingVideo.isPresent()){
      log.info("Video not found in database.");
      return null;
    }
    return existingVideo.get();
  }

  public Video create(Video video)
  {
    log.info("Creating a new video in database.");
    return Videos.save(video);
  }

  public Video update(
    Long videoId, Video video)
  {
    log.info("Updating a specific video from database.");
    Optional<Video> videoData = Videos.findById(videoId);
    if (!videoData.isPresent()){
      log.warn("Video not found in database.");
      return null;
    }
    return Videos.save(videoData.get().setId(videoId));
  }

  public Video delete(Long videoId)
  {
    log.info("Deleting a specific video from database.");
    Optional<Video> video = Videos.findById(videoId);
    if (!video.isPresent()){
      log.warn("Video not found in database.");
      return null;
    }
    Videos.delete(video.get());
    return video.get();
  }

  @SuppressWarnings("unchecked")
  @Override
  public IVideoDao getDao() {
    return Videos;
  }

}