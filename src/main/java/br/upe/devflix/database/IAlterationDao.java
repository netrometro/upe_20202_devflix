package br.upe.devflix.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import br.upe.devflix.models.entities.Alteration;

@Component
@Repository
public interface IAlterationDao extends JpaRepository<Alteration, Long>{
  
}
