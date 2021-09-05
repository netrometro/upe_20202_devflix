package br.upe.devflix.models.dto;

import br.upe.devflix.models.entities.Category;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class CategoryDTO {
  
  private AuthorDTO author;
  private Category category;

}
