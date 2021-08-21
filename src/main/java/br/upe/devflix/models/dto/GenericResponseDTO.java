package br.upe.devflix.models.dto;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class GenericResponseDTO<Any> {
  
  private LocalDateTime timestamp = LocalDateTime.now();
  private int status;
  private String statusText;
  private boolean error;
  private Any response;

}
