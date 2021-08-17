package br.upe.devflix.controllers;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
import br.upe.devflix.services.UserCRUDService;
import br.upe.devflix.services.security.AuthorizationService;
import br.upe.devflix.services.serializers.ResponseService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/user")
@RestController
public class UserController {
  
  @Autowired private ResponseService responseService;
  @Autowired private UserCRUDService userService;
  @Autowired private AuthorizationService authorizationService;

  @GetMapping
  public ResponseEntity<?> fetchAll()
  {
    return responseService.create(
      userService.fetchAll(), HttpStatus.OK);
  }

  @GetMapping("/{userId}")
  public ResponseEntity<?> fetch(
    @PathVariable Long userId)
  {
    return responseService.create(
      userService.fetch(userId), HttpStatus.OK);
  }
 
  @GetMapping("/{userId}")
  public ResponseEntity<?> update(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long userId,
    @RequestBody @Valid User user)
  {
    if (authorizationService.isAdmin(authorization)){
      return responseService.create(userService.update(userId, user), HttpStatus.OK);
    } else {
      return responseService.create(null, HttpStatus.UNAUTHORIZED);
    }
  }

  @DeleteMapping("/{userId}")
  public ResponseEntity<?> delete(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long userId)
  {
    return null;
    //return userService.delete(userId);
  }

}
