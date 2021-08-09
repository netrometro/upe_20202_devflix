package br.upe.devflix.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import br.upe.devflix.models.entities.Metadata;

@Component
@Repository
public interface IMetadataDao extends JpaRepository<Metadata, Long>{
  
}
