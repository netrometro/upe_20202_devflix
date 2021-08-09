package br.upe.devflix.services.serializers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.upe.devflix.models.serializables.GenericResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ResponseService {
  
  /**
   * Constrói a resposta HTTP com o corpo especificado.
   * 
   * @param body Corpo da resposta.
   * @param status Status HTTP;
   * @return Resposta HTTP.
   */
  public <Any> ResponseEntity<GenericResponse<Any>> create(Any body, HttpStatus status){
    log.info("Returning generic response to client.");
    GenericResponse<Any> response = new GenericResponse<Any>()
      .setError(status.isError())
      .setStatus(status.value())
      .setStatusText(status.getReasonPhrase())
      .setResponse(body);
    return new ResponseEntity<GenericResponse<Any>>(response, status);
  }

}
