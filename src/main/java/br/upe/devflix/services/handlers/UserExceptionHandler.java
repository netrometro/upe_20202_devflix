package br.upe.devflix.services.handlers;

import java.time.LocalDateTime;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import br.upe.devflix.models.serializables.ExceptionResponse;
import br.upe.devflix.base.exceptions.UserNotFoundException;

@Slf4j
@RestControllerAdvice
public class UserExceptionHandler {
  
  @ExceptionHandler(UserNotFoundException.class)
  @ResponseStatus(value = HttpStatus.NOT_FOUND)
  protected ExceptionResponse userNotFound(
    Exception exception,
    WebRequest request) 
  {
    log.warn("Error, user not found.", exception);
    
    ExceptionResponse response = new ExceptionResponse()
      .setTitle(exception.getMessage())
      .setStatus(HttpStatus.NOT_FOUND.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return response;
  }

}
