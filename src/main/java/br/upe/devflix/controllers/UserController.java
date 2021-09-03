package br.upe.devflix.controllers;

import javax.validation.Valid;

import br.upe.devflix.models.entities.*;
import br.upe.devflix.services.UserCRUDService;
import br.upe.devflix.services.serializers.ResponseService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
@RestController
public class UserController {
  
  @Autowired private ResponseService responseService;
  @Autowired private UserCRUDService userService;

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
 
  @PutMapping("/{userId}")
  public ResponseEntity<?> update(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long userId,
    @RequestBody @Valid User user)
  {
    return responseService.create(
      userService.adminUpdateUser(authorization, userId, user), HttpStatus.OK);
  }

  @PostMapping("/{userId}/delete")
  public ResponseEntity<?> delete(
    @RequestHeader("authorization") String authorization,
    @PathVariable Long userId)
  {
    return responseService.create(
      userService.adminDeleteUser(authorization, userId), HttpStatus.OK);
  }

}
