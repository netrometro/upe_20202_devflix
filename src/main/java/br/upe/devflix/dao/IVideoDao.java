package br.upe.devflix.dao;

import br.upe.devflix.models.entities.Video;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface IVideoDao extends JpaRepository<Video, Long>{

  //SELECT videos.* AS v FROM videos INNER JOIN metadata ON metadata.videoId = video.id 
  //WHERE metadata.title LIKE '%'?'%' OR metadata.description LIKE '%'?'%'
  List<Video> findVideoByMetadata_TitleContainingOrMetadata_DescriptionContaining(String title, String description);

}