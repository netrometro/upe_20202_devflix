package br.upe.devflix.controllers;

import java.util.List;

import javax.validation.Valid;

import br.upe.devflix.models.User;
import br.upe.devflix.services.UserService;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/v1/users")
@RestController
public class UserController {
  
  @Autowired
  private UserService userService;

  @GetMapping
  public ResponseEntity<List<User>> fetchAll()
  {
    return userService.fetchAll();
  }

  @GetMapping("/{userId}")
  public ResponseEntity<User> fetch(
    @PathVariable Long userId)
  {
    return userService.fetch(userId);
  }

  @PostMapping
  public ResponseEntity<User> create(
    @RequestBody @Valid User user)
  {
    return userService.create(user);
  }
 
  @PutMapping("/{userId}")
  public ResponseEntity<User> update(
    @PathVariable Long userId,
    @RequestBody @Valid User user)
  {
    return userService.update(userId, user);
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<User> delete(
    @PathVariable Long userId)
  {
    return userService.delete(userId);
  }

}
