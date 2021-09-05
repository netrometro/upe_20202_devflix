package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;
import java.util.ArrayList;
import java.time.LocalDateTime;
import java.util.stream.Collectors;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.devflix.base.exceptions.*;
import br.upe.devflix.models.dto.*;
import br.upe.devflix.models.entities.*;
import br.upe.devflix.models.dto.CategoryDTO;
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

  public List<CategoryDTO> fetchAllWithAuthor(){
    log.info("Returning all categories from database.");
    List<Category> allCategories = fetchAll();
    ArrayList<CategoryDTO> response = new ArrayList<>();
    for (Category category : allCategories){
      User author = userService.fetchCategoryAuthor(category);
      CategoryDTO categoryDetail = new CategoryDTO();
      AuthorDTO authorDetail = new AuthorDTO();
      authorDetail = authorDetail.setName(author.getName())
        .setEmail(author.getEmail())
        .setId(author.getId());
      response.add(categoryDetail.setAuthor(authorDetail).setCategory(category));
    }
    return response;
  }

  public List<CategoryDTO> fetchMyCategories(String authHeader)
  {
    log.info("Returning all my categories.");
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar esse recurso.");
    }
    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User owner = userService.fetch(session.getId());

    Predicate<CategoryDTO> myCategories = myCategory -> myCategory.getAuthor().getId() == owner.getId();
    return fetchAllWithAuthor().stream().filter(myCategories).collect(Collectors.toList());
  }

  public Category fetch(Long categoryId) {
    log.info("Returning a specific category from database.");
    Optional<Category> foundCategories = Categories.findById(categoryId);
    if (!foundCategories.isPresent()){
      throw new CategoryNotFoundException("Categoria não encontrada.");
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
      log.warn("Category not found in database.");
      throw new CategoryNotFoundException("Categoria não encontrada.");
    }
    category.setLastChangedDate(LocalDateTime.now());
    return Categories.save(category.setId(categoryId));
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

    return create(category.setOwner(owner));
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

    return update(categoryId, category.setOwner(owner));
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