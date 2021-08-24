package br.upe.devflix.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.upe.devflix.models.entities.Category;
import br.upe.devflix.services.CategoryCRUDService;
import br.upe.devflix.services.serializers.ResponseService;

@RequestMapping("/api/v1/category")
@RestController
public class CategoryController {
  
  @Autowired private ResponseService responseService;
  @Autowired private CategoryCRUDService categoryService;
  
  @GetMapping
  public ResponseEntity<?> fetchAll() {
    return responseService.create(categoryService.fetchAll(), HttpStatus.OK);
  }

  @GetMapping("/{categoryId}")
  public ResponseEntity<?> fetch(
    @PathVariable Long categoryId)
  {
    return responseService.create(categoryService.fetch(categoryId), HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<?> create(
    @RequestHeader("authorization") String authorization,
    @RequestBody @Valid Category category)
  {
    return responseService.create(categoryService.protectedCreate(authorization, category), HttpStatus.OK);
  }

  @PutMapping("/{categoryId}")
  public ResponseEntity<?> update(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long categoryId,
    @RequestBody @Valid Category category)
  {
    return responseService.create(categoryService.protectedUpdate(authorization, categoryId, category), HttpStatus.OK);
  }
  
  @DeleteMapping("/{categoryId}")
  public ResponseEntity<?> delete(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long categoryId)
  {
    return responseService.create(categoryService.protectedDelete(authorization, categoryId), HttpStatus.OK);
  }

}
