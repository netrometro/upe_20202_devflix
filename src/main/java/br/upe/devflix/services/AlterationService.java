package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.database.IAlterationDao;
import br.upe.devflix.models.Alteration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AlterationService {
  
  @Autowired
  private IAlterationDao Alterations;

  public ResponseEntity<List<Alteration>> fetchAll()
  {
    return ResponseEntity.ok(Alterations.findAll());
  }

  public ResponseEntity<Alteration> fetch(Long alterationId)
  {
    Optional<Alteration> alteration = Alterations.findById(alterationId);
    if (!alteration.isPresent()){
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(alteration.get());
  }

  public ResponseEntity<Alteration> create(Alteration alteration) {
    return ResponseEntity.ok(Alterations.save(alteration));
  }

  public ResponseEntity<Alteration> update(Long alterationId, Alteration alteration) {
    Optional<Alteration> alterationData = Alterations.findById(alterationId);
    if (!alterationData.isPresent()){
      return ResponseEntity.notFound().build();
    }
    alteration.setId(alterationId);
    Alterations.save(alteration);
    return ResponseEntity.ok(Alterations.save(alterationData.get().setId(alterationId)));
  }

  public ResponseEntity<Alteration> delete(Long alterationId) {
    Optional<Alteration> alteration = Alterations.findById(alterationId);
    if (!alteration.isPresent()){
      return ResponseEntity.notFound().build();
    }
    Alterations.delete(alteration.get());
    return ResponseEntity.ok(alteration.get());
  }
}
