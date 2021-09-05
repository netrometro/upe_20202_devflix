package br.upe.devflix.models.dto;

import br.upe.devflix.models.entities.*;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CommentaryDTO {
  
  private AuthorDTO author;
  private Commentary commentary;

}
