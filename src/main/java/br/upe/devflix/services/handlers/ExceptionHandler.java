package br.upe.devflix.services.handlers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import br.upe.devflix.models.ExceptionResponse;
import br.upe.devflix.models.ExceptionResponse.FieldException;

import org.springframework.validation.FieldError;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceResolvable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class ExceptionHandler extends ResponseEntityExceptionHandler {
  
  @Autowired
  private MessageSource messageSource;

  @Override
  protected ResponseEntity<Object> handleMethodArgumentNotValid(
    MethodArgumentNotValidException ex, 
    HttpHeaders headers,
    HttpStatus status, 
    WebRequest request) 
  {
    List<ExceptionResponse.FieldException> fieldErrors = new ArrayList<>();
    
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

    ExceptionResponse response = new ExceptionResponse()
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
    ExceptionResponse response = new ExceptionResponse()
      .setTitle("Um erro ocorreu ao tentar processar a sua solicitação.")
      .setStatus(status.value())
      .setError(true)
      .setTimestamp(LocalDateTime.now());

    return super.handleExceptionInternal(ex, response, headers, status, request);
  }

}
