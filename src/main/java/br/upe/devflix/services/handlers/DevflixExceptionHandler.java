package br.upe.devflix.services.handlers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.springframework.validation.FieldError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import br.upe.devflix.models.dto.ExceptionResponseDTO;
import br.upe.devflix.models.dto.ExceptionResponseDTO.FieldException;

import org.springframework.web.context.request.WebRequest;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class DevflixExceptionHandler extends ResponseEntityExceptionHandler {
  
  @Autowired private MessageSource messageSource;

  @Override
  protected ResponseEntity<Object> handleMethodArgumentNotValid(
    MethodArgumentNotValidException ex, 
    HttpHeaders headers, 
    HttpStatus status, 
    WebRequest request) 
  {
    log.warn("An unhandled exception was caught by ExceptionHandler. Bad request detected with invalid fields.");

    List<ExceptionResponseDTO.FieldException> fieldErrors = new ArrayList<>();
    
    for (ObjectError error : ex.getBindingResult().getAllErrors())
    {
      if (error instanceof FieldError){
        String fieldName = ((FieldError)error).getField();
        String fieldErrorMessage = messageSource.getMessage(
          (MessageSourceResolvable) error, 
          new Locale("pt", "BR"));

        fieldErrors.add(new FieldException()
          .setFieldName(fieldName)
          .setFieldErrorMessage(fieldErrorMessage));
      }
    }

    ExceptionResponseDTO response = new ExceptionResponseDTO()
      .setTitle("Um erro ocorreu ao tentar processar a sua solicitação.")
      .setStatus(status.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now())
      .setFieldErrors(fieldErrors);

    return super.handleExceptionInternal(ex, response, headers, status, request);
  }

  @Override
  protected ResponseEntity<Object> handleExceptionInternal(
    Exception ex, 
    Object body, 
    HttpHeaders headers,
    HttpStatus status, 
    WebRequest request) 
  {
    log.warn("An unhandled exception was caught by ExceptionHandler. Status: %d", status.value());

    ExceptionResponseDTO response = new ExceptionResponseDTO()
      .setTitle("Um erro ocorreu ao tentar processar a sua solicitação.")
      .setStatus(status.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return super.handleExceptionInternal(ex, response, headers, status, request);
  }

  @ExceptionHandler(Throwable.class)
  @ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
  protected ExceptionResponseDTO globalExceptionHandler(
    Exception exception,
    WebRequest request) 
  {
    log.warn("An unhandled exception was caught by ExceptionHandler.", exception);
    exception.printStackTrace();
    ExceptionResponseDTO response = new ExceptionResponseDTO()
      .setTitle("Um erro ocorreu ao tentar processar a sua solicitação.")
      .setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return response;
  }

}
