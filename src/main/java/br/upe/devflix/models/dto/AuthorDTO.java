package br.upe.devflix.models.dto;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class AuthorDTO {

  private Long id;
  private String name;
  private String email;

}