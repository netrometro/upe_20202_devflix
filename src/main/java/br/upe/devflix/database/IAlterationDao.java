package br.upe.devflix.database;

import br.upe.devflix.models.Alteration;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface IAlterationDao extends JpaRepository<Alteration, Long>{
  
}
