package br.upe.devflix.services.handlers;

import java.time.LocalDateTime;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import br.upe.devflix.models.serializables.ExceptionResponse;
import br.upe.devflix.base.exceptions.AccessDeniedException;

@Slf4j
@RestControllerAdvice
public class AuthorizationExceptionHandler {
  
  @ExceptionHandler(AccessDeniedException.class)
  @ResponseStatus(value = HttpStatus.FORBIDDEN)
  protected ExceptionResponse userNotFound(
    Exception exception,
    WebRequest request) 
  {
    log.warn("Error, access denied to specific resource.", exception);
    
    ExceptionResponse response = new ExceptionResponse()
      .setTitle(exception.getMessage())
      .setStatus(HttpStatus.FORBIDDEN.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return response;
  }

}
