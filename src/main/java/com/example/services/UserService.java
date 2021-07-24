package com.example.services;

import java.util.List;
import java.util.Optional;

import com.example.database.IUserDao;
import com.example.models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  
  @Autowired
  private IUserDao Users;

  public ResponseEntity<List<User>> fetchAll()
  {
    return ResponseEntity.ok(Users.findAll());
  }

  public ResponseEntity<User> fetch(Long userId)
  {
    Optional<User> user = Users.findById(userId);
    if (!user.isPresent()){
      return ResponseEntity.ok(user.get());
    }
    return ResponseEntity.notFound().build();
  }
  
  public ResponseEntity<User> create(User user)
  {
    return ResponseEntity.ok(Users.save(user));
  }

  public ResponseEntity<User> update(
    Long userId, User user)
  {
    Optional<User> userData = Users.findById(userId);
    if (!userData.isPresent()){
      return ResponseEntity.notFound().build();
    }
    return ResponseEntity.ok(
      Users.save(userData.get().setId(userId)));
  }

  public ResponseEntity<User> delete(Long userId)
  {
    Optional<User> user = Users.findById(userId);
    Users.delete(user.get());
    return ResponseEntity.ok(user.get());
  }

}
