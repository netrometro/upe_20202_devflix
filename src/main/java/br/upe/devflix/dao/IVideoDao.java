package br.upe.devflix.dao;

import br.upe.devflix.models.entities.Video;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface IVideoDao extends JpaRepository<Video, Long>{
  
}