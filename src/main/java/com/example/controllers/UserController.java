package com.example.controllers;

import java.util.List;

import javax.validation.Valid;

import com.example.database.IUserDao;
import com.example.models.User;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RequestMapping("/users")
@RestController
public class UserController {
  
  @Autowired
  private IUserDao userDao;

  @GetMapping
  public ResponseEntity<List<User>> fetchAll()
  {
    return ResponseEntity.ok(userDao.findAll());
  }

  @GetMapping("/{userId}")
  public ResponseEntity<User> fetch(
    @PathVariable Long userId)
  {
    if (!userDao.existsById(userId)){
      return ResponseEntity.notFound().build();
    }
    User user = userDao.findById(userId).orElse(null);
    return ResponseEntity.ok(user);
  }

  @PostMapping
  public ResponseEntity<User> create(
    @RequestBody @Validated User user)
  {
    return ResponseEntity.ok(userDao.save(user));
  }
 
  @PutMapping("/{userId}")
  public ResponseEntity<User> update(
    @PathVariable Long userId,
    @Valid @RequestBody User user)
  {
    if (!userDao.existsById(userId)){
      return ResponseEntity.notFound().build();
    }
    user.setId(userId);
    return ResponseEntity.ok(userDao.save(user));
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<User> delete(
    @PathVariable Long userId)
  {
    if (!userDao.existsById(userId)){
      return ResponseEntity.notFound().build();
    }
    User user = userDao.findById(userId).orElse(null);
    userDao.delete(user);
    return ResponseEntity.ok(user);
  }

}
