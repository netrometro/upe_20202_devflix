package br.upe.devflix.controllers;

import java.util.List;

import javax.validation.Valid;

import br.upe.devflix.services.AlterationService;
import br.upe.devflix.models.Alteration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequestMapping("/v1/alteration")
@RestController
public class AlterationController {
  @Autowired
  private AlterationService alterationService;

  @GetMapping
  public ResponseEntity<List<Alteration>> fetchAll()
  {
    return alterationService.fetchAll();
  }

  @GetMapping("/{alterationId}")
  public ResponseEntity<Alteration> fetch(
    @PathVariable Long alterationId)
  {
    return alterationService.fetch(alterationId);
  }

  @PostMapping
  public ResponseEntity<Alteration> create(
    @RequestBody @Valid Alteration alteration)
  {
    return alterationService.create(alteration);
  }

  @PutMapping("/{alterationId}")
  public ResponseEntity<Alteration> update(
    @PathVariable Long alterationId,
    @RequestBody @Valid Alteration alteration)
  {
    return alterationService.update(alterationId, alteration);
  }

  @DeleteMapping("/{alterationId}")
  public ResponseEntity<Alteration> delete(
    @PathVariable Long alterationId)
  {
    return alterationService.delete(alterationId);
  }
  
}
