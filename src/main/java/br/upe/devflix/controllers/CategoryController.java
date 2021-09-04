package br.upe.devflix.controllers;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import br.upe.devflix.models.entities.Category;
import br.upe.devflix.services.CategoryCRUDService;
import br.upe.devflix.services.serializers.ResponseService;

@CrossOrigin(origins = "*")
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
  
  @PostMapping("/{categoryId}/delete")
  public ResponseEntity<?> delete(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long categoryId)
  {
    return responseService.create(categoryService.protectedDelete(authorization, categoryId), HttpStatus.OK);
  }

  @GetMapping("/my")
  public ResponseEntity<?> fetchMyCategories(
    @RequestHeader("authorization") String authorization){
    return responseService.create(categoryService.fetchMyCategories(authorization), HttpStatus.OK);
  }

}
