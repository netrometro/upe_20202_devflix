package br.upe.devflix.models.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ExceptionResponseDTO {
  
  private Integer status;
  private String title;
  private Boolean error;
  private LocalDateTime timestamp;
  private List<FieldException> fieldErrors;
  
  @Data
  @Accessors(chain = true)
  public static class FieldException {
    private String fieldName;
    private String fieldErrorMessage;
  }

}
