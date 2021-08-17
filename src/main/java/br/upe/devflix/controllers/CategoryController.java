package br.upe.devflix.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.devflix.models.entities.Category;

@RequestMapping("/api/v1/category")
@RestController
public class CategoryController {
  
  @GetMapping
  public ResponseEntity<List<Category>> fetchAll() {
    return null;
  }

  public ResponseEntity<Category> fetch(
    @PathVariable Long categoryId)
  {
    return null;
  }

  @PostMapping
  public ResponseEntity<Category> create(
    @RequestBody @Valid Category category)
  {
    return null;
  }

  public ResponseEntity<Category> update(
    @PathVariable Long CategoryId,
    @RequestBody @Valid Category Category)
  {
    return null;
  }

  @DeleteMapping("/{categoryId}")
  public ResponseEntity<Category> delete(
    @PathVariable Long categoryId)
  {
    return null;
  }

}
