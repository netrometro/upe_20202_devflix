package br.upe.devflix.database;

import br.upe.devflix.models.Alteration;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAlterationDao extends JpaRepository<Alteration, Long>{
  
}
