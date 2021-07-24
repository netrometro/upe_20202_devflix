package com.example.controllers;

import java.util.List;

import javax.validation.Valid;

import com.example.database.IAlteration;
import com.example.models.Alteration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@RequestMapping("/alteration")
public class AlterationController {
  @Autowired
  private IAlteration alterationDao;

  @GetMapping
  public ResponseEntity<List<Alteration>> fetchAll()
  {
    return ResponseEntity.ok(alterationDao.findAll());
  }

  @GetMapping("/{alterationId}")
  public ResponseEntity<Alteration> fetch(
    @PathVariable Long alterationId)
  {
    if (!alterationDao.existsById(alterationId)){
      return ResponseEntity.notFound().build();
    }
    Alteration alteration = alterationDao.findById(alterationId).orElse(null);
    return ResponseEntity.ok(alteration);
  }

  @PostMapping("{/alterationId}")
  public ResponseEntity<Alteration> create(
    @RequestBody @Valid Alteration alteration)
  {
    return ResponseEntity.ok(alterationDao.save(alteration));
  }

  @PutMapping("/{alterationId}")
  public ResponseEntity<Alteration> update(
    @PathVariable Long alterationId,
    @RequestBody @Valid Alteration alteration)
  {
    if (!alterationDao.existsById(alterationId)){
      return ResponseEntity.notFound().build();
    }
    alteration.setId(alterationId);
    return ResponseEntity.ok(alterationDao.save(alteration));
  }

  @DeleteMapping("/{alterationId}")
  public ResponseEntity<Alteration> delete(
    @PathVariable Long alterationId)
  {
    if (!alterationDao.existsById(alterationId)){
      return ResponseEntity.notFound().build();
    }
    Alteration alteration = alterationDao.findById(alterationId).orElse(null);
    alterationDao.delete(alteration);
    return ResponseEntity.ok(alteration);
  }
  
}
