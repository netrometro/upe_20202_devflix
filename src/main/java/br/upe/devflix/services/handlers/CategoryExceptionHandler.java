package br.upe.devflix.services.handlers;

import java.time.LocalDateTime;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.upe.devflix.base.exceptions.CategoryNotFoundException;
import br.upe.devflix.models.dto.ExceptionResponseDTO;

@Slf4j
@RestControllerAdvice
public class CategoryExceptionHandler {
  
  @ExceptionHandler(CategoryNotFoundException.class)
  @ResponseStatus(value = HttpStatus.NOT_FOUND)
  protected ExceptionResponseDTO categoryNotFound(
    Exception exception,
    WebRequest request) 
  {
    log.warn("Error, category not found.", exception);
    
    ExceptionResponseDTO response = new ExceptionResponseDTO()
      .setTitle(exception.getMessage())
      .setStatus(HttpStatus.NOT_FOUND.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return response;
  }

}
