package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.devflix.dao.ICategoryDao;
import br.upe.devflix.models.entities.Category;
import br.upe.devflix.services.interfaces.ICategoryCRUDService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CategoryCRUDService implements ICategoryCRUDService{
  
  @Autowired private ICategoryDao Categories;

  public List<Category> fetchAll() {
    log.info("Returning all categories from database.");
    return Categories.findAll();
  }

  public Category fetch(Long categoryId) {
    log.info("Returning a specific category from database.");
    Optional<Category> foundCategories = Categories.findById(categoryId);
    if (!foundCategories.isPresent()){
      log.info("Category not found in database.");
      return null;
    }
    return foundCategories.get();
  }

  public Category create(Category category)
  {
    log.info("Creating a new category in database.");
    return Categories.save(category);
  }

  public Category update(
    Long categoryId, Category category)
  {
    log.info("Updating a specific user from database.");
    Optional<Category> foundCategory = Categories.findById(categoryId);
    if (!foundCategory.isPresent()){
      log.warn("User not found in database.");
      return null;
    }
    return Categories.save(foundCategory.get().setId(categoryId));
  }

  public Category delete(Long categoryId)
  {
    log.info("Deleting a specific category from database.");
    Optional<Category> foundCategory = Categories.findById(categoryId);
    if (!foundCategory.isPresent()){
      log.warn("Category not found in database.");
      return null;
    }
    Categories.delete(foundCategory.get());
    return foundCategory.get();
  }

  @SuppressWarnings("unchecked")
  @Override
  public ICategoryDao getDao() {
    return Categories;
  }

}