package br.upe.devflix.dao;

import br.upe.devflix.models.entities.Commentary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface ICommentaryDao extends JpaRepository<Commentary, Long> {
  
}
