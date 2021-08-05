package br.upe.devflix.models.serializables;

import java.util.Map;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class SessionResponse {
  
  private String token;
  private Map<String, String> claims;

}
