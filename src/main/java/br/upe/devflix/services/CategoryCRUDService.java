package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.devflix.models.entities.*;
import br.upe.devflix.base.exceptions.*;
import br.upe.devflix.services.security.payload.JwtPayload;
import br.upe.devflix.services.security.AuthorizationService;

import br.upe.devflix.dao.ICategoryDao;
import br.upe.devflix.models.entities.Category;
import br.upe.devflix.services.interfaces.ICategoryCRUDService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CategoryCRUDService implements ICategoryCRUDService{

  @Autowired private ICategoryDao Categories;
  @Autowired private UserCRUDService userService;
  @Autowired private CategoryCRUDService categoryService;
  @Autowired private AuthorizationService authorizationService;

  public List<Category> fetchAll() {
    log.info("Returning all categories from database.");
    return Categories.findAll();
  }

  public Category fetch(Long categoryId) {
    log.info("Returning a specific category from database.");
    Optional<Category> foundCategories = Categories.findById(categoryId);
    if (!foundCategories.isPresent()){
      throw new CategoryNotFoundException("Categoria não encontrada.");
    }
    return foundCategories.get();
  }

  public Category create(Long userId, Category category)
  {
    log.info("Creating a new category in database.");
    Optional<User> user = userService.getDao().findById(userId);
    if (!user.isPresent()) {
      log.info("User not found in database.");
      throw new UserNotFoundException("Usuário não encontrado.");
    }
    category.setOwner(user.get());
    return Categories.save(category);
  }

  public Category update(
    Long categoryId, Category category)
  {
    log.info("Updating a specific user from database.");
    Optional<Category> foundCategory = Categories.findById(categoryId);
    if (!foundCategory.isPresent()){
      log.warn("Category not found in database.");
      throw new CategoryNotFoundException("Categoria não encontrada.");
    }

    foundCategory.get().setColor(category.getColor());
    foundCategory.get().setTitle(category.getTitle());

    return Categories.save(foundCategory.get().setId(categoryId));
  }

  public Category delete(Long categoryId)
  {
    log.info("Deleting a specific category from database.");
    Optional<Category> foundCategory = Categories.findById(categoryId);
    if (!foundCategory.isPresent()){
      log.warn("Category not found in database.");
      throw new CategoryNotFoundException("Categoria não encontrada.");
    }
    Categories.delete(foundCategory.get());
    return foundCategory.get();
  }

  public Category protectedCreate(
    String authHeader, 
    Category category)
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar esse recurso.");
    }

    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User owner = userService.fetch(session.getId());

    return Categories.save(category.setOwner(owner));
  }

  public Category protectedUpdate(
    String authHeader, 
    Long categoryId,
    Category category)
  {
    log.info("Updating category.");
    Category foundCategory = categoryService.fetch(categoryId);
    
    if (foundCategory == null){
      //Vídeo não encontrado...
      throw new CategoryNotFoundException("Categoria não encontrada.");
    }
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar esse recurso.");
    }
    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User owner = userService.fetch(session.getId());
    
    
    if (owner.getId() != foundCategory.getOwner().getId()){
      //Usuário não é o proprietário do vídeo...
      throw new AccessDeniedException("Você não é proprietário desta categoria para alterá-la.");
    }


    return update(categoryId, category);
  }

  public Category protectedDelete(
    String authHeader, 
    Long categoryId)
  {
    log.info("Deleting category.");
    Category foundCategory = categoryService.fetch(categoryId);
    if (foundCategory == null){
      throw new CategoryNotFoundException("Categoria não encontrada.");
    }
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar esse recurso.");
    }
    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User owner = userService.fetch(session.getId());
    if (owner.getId() != foundCategory.getOwner().getId()){
      //Usuário não é o proprietário do vídeo...
      throw new AccessDeniedException("Você não é proprietário desta categoria para excluí-la.");
    }
    return delete(categoryId);
  }

  @Override
  @SuppressWarnings("unchecked")
  public ICategoryDao getDao() {
    return Categories;
  }

}