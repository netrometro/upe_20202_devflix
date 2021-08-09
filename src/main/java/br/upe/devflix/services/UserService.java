package br.upe.devflix.services;

import java.util.List;
import java.util.Optional;

import br.upe.devflix.dao.IUserDao;
import br.upe.devflix.models.entities.User;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserService {
  
  @Autowired
  private IUserDao Users;

  public ResponseEntity<List<User>> fetchAll()
  {
    log.debug("Returning all users from database.");
    return ResponseEntity.ok(Users.findAll());
  }

  public ResponseEntity<User> fetch(Long userId)
  {
    log.debug("Returning a specific user from database.");
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(user.get());
  }
  
  public ResponseEntity<User> create(User user)
  {
    log.debug("Creating a new user in database.");
    return ResponseEntity.ok(Users.save(user));
  }

  public ResponseEntity<User> update(
    Long userId, User user)
  {
    log.debug("Updating a specific user from database.");
    Optional<User> userData = Users.findById(userId);
    if (!userData.isPresent()){
      log.warn("User not found in database.");
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(
      Users.save(userData.get().setId(userId)));
  }

  public ResponseEntity<User> delete(Long userId)
  {
    log.debug("Deleting a specific user from database.");
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      log.warn("User not found in database.");
      return ResponseEntity.notFound().build();
    }
    Users.delete(user.get());
    return ResponseEntity.ok(user.get());
  }

}
