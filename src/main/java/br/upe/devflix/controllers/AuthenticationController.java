package br.upe.devflix.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/v1/authentication")
@RestController
public class AuthenticationController {

  @PostMapping("/signup")
  public ResponseEntity<Object> createAccount(){
    return ResponseEntity.notFound().build();
  }

  @PostMapping("/login")
  public ResponseEntity<Object> createSession(){
    return ResponseEntity.notFound().build();
  }

  @PostMapping("/forgot")
  public ResponseEntity<Object> forgotPassword(){
    return ResponseEntity.notFound().build();
  }

  @PostMapping("/recovery")
  public ResponseEntity<Object> changePassword(){
    return ResponseEntity.notFound().build();
  }

}
