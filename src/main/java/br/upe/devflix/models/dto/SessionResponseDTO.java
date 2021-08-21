package br.upe.devflix.models.dto;

import java.util.Map;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class SessionResponseDTO {
  
  private String token;
  private Map<String, String> claims;

}
