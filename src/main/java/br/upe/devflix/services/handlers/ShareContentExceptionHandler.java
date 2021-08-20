package br.upe.devflix.services.handlers;

import java.time.LocalDateTime;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import br.upe.devflix.models.serializables.ExceptionResponse;
import br.upe.devflix.base.exceptions.ShareContentException;

@Slf4j
@RestControllerAdvice
public class ShareContentExceptionHandler {
  
  @ExceptionHandler(ShareContentException.class)
  @ResponseStatus(value = HttpStatus.SERVICE_UNAVAILABLE)
  protected ExceptionResponse videoNotFound(
    Exception exception,
    WebRequest request) 
  {
    log.warn("Error, cannot send e-mail to share a DevFlix link.", exception);

    ExceptionResponse response = new ExceptionResponse()
      .setTitle(exception.getMessage())
      .setStatus(HttpStatus.SERVICE_UNAVAILABLE.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return response;
  }

}
