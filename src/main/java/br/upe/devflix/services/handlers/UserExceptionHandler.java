package br.upe.devflix.services.handlers;

import java.time.LocalDateTime;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import br.upe.devflix.base.exceptions.UserAlreadyExistsException;
import br.upe.devflix.base.exceptions.UserNotFoundException;
import br.upe.devflix.models.dto.ExceptionResponseDTO;

@Slf4j
@RestControllerAdvice
public class UserExceptionHandler {
  
  @ExceptionHandler(UserNotFoundException.class)
  @ResponseStatus(value = HttpStatus.NOT_FOUND)
  protected ExceptionResponseDTO userNotFound(
    Exception exception,
    WebRequest request) 
  {
    log.warn("Error, user not found.", exception);
    
    ExceptionResponseDTO response = new ExceptionResponseDTO()
      .setTitle(exception.getMessage())
      .setStatus(HttpStatus.NOT_FOUND.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return response;
  }

  @ExceptionHandler(UserAlreadyExistsException.class)
  @ResponseStatus(value = HttpStatus.BAD_REQUEST)
  protected ExceptionResponseDTO userAlreadyExists(
    Exception exception,
    WebRequest request) 
  {
    log.warn("Error, user not found.", exception);
    
    ExceptionResponseDTO response = new ExceptionResponseDTO()
      .setTitle(exception.getMessage())
      .setStatus(HttpStatus.BAD_REQUEST.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return response;
  }

}
