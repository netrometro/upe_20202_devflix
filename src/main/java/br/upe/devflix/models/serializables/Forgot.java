package br.upe.devflix.models.serializables;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Forgot {
  
  @NotBlank
  @NotNull
  @Email
  private String email;

}
