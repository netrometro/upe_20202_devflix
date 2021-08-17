package br.upe.devflix.controllers;

import java.util.List;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
//import br.upe.devflix.services.UserCRUDService;

import org.springframework.http.ResponseEntity;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/user")
@RestController
public class UserController {
  
  //@Autowired private UserCRUDService userService;

  @GetMapping
  public ResponseEntity<List<User>> fetchAll()
  {
    return null;
    //return userService.fetchAll();
  }

  @GetMapping("/{userId}")
  public ResponseEntity<User> fetch(
    @PathVariable Long userId)
  {
    return null;
    //return userService.fetch(userId);
  }

  @PostMapping
  public ResponseEntity<User> create(
    @RequestBody @Valid User user)
  {
    return null;
    //return userService.create(user);
  }
 
  @PutMapping("/{userId}")
  public ResponseEntity<User> update(
    @PathVariable Long userId,
    @RequestBody @Valid User user)
  {
    return null;
    //return userService.update(userId, user);
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<User> delete(
    @PathVariable Long userId)
  {
    return null;
    //return userService.delete(userId);
  }

}
