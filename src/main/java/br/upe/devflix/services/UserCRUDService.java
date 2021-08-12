package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.dao.IUserDao;
import br.upe.devflix.models.entities.User;
import br.upe.devflix.services.interfaces.IUserCRUDService;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserCRUDService implements IUserCRUDService {
  
  @Autowired private IUserDao Users;

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
      return null;
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
      return null;
    }
    return Users.save(userData.get().setId(userId));
  }

  public User delete(Long userId)
  {
    log.info("Deleting a specific user from database.");
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      log.warn("User not found in database.");
      return null;
    }
    Users.delete(user.get());
    return user.get();
  }

  @SuppressWarnings("unchecked")
  @Override
  public IUserDao getDao() {
    return Users;
  }

}
