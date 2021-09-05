package br.upe.devflix.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import br.upe.devflix.dao.IUserDao;
import br.upe.devflix.models.dto.UserEditDTO;
import br.upe.devflix.models.entities.User;
import br.upe.devflix.base.exceptions.*;
import br.upe.devflix.services.security.*;
import br.upe.devflix.services.security.payload.*;
import br.upe.devflix.services.interfaces.IUserCRUDService;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class UserCRUDService implements IUserCRUDService {
  
  @Autowired private IUserDao Users;
  @Autowired private AuthorizationService authorizationService;

  public List<User> fetchAll()
  {
    log.info("Returning all users from database.");
    return Users.findAll();
  }

  public User fetch(Long userId)
  {
    log.info("Returning a specific user from database.");
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      throw new UserNotFoundException("Usuário não encontrado no DevFlix.");
    }
    return user.get();
  }
  
  public User create(User user)
  {
    log.info("Creating a new user in database.");
    return Users.save(user);
  }

  public User update(
    Long userId, User user)
  {
    log.info("Updating a specific user from database.");
    Optional<User> userData = Users.findById(userId);
    if (!userData.isPresent()){
      log.warn("User not found in database.");
      throw new UserNotFoundException("Usuário não encontrado no DevFlix.");
    }
    user.setLastChangedDate(LocalDateTime.now());
    return Users.save(user.setId(userId));
  }

  public User delete(Long userId)
  {
    log.info("Deleting a specific user from database.");
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      log.warn("User not found in database.");
      throw new UserNotFoundException("Usuário não encontrado no DevFlix.");
    }
    Users.delete(user.get());
    return user.get();
  }

  public User protectedUpdateUser(
    String authHeader, 
    Long userId, 
    UserEditDTO user)
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar esse recurso.");
    }
    JwtPayload session = authorizationService.parseJwtPayload(authHeader);
    User owner = fetch(session.getId());

    owner.setEmail(user.getEmail());
    owner.setName(user.getName());

    if (!authorizationService.isAdmin(authHeader) && (owner.getId() != userId)){
      throw new AccessDeniedException("Você não pode realizar esta ação!");
    }
    return update(userId, owner);
  }

  public User adminDeleteUser(
    String authHeader, 
    Long userId)
  {
    if (!authorizationService.isAdmin(authHeader)){
      throw new AccessDeniedException("Você não pode realizar esta ação pois não é um administrador!");
    }
    return delete(userId);
  }

  @SuppressWarnings("unchecked")
  @Override
  public IUserDao getDao() {
    return Users;
  }

}
