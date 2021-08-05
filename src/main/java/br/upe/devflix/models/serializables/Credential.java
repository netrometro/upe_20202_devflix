package br.upe.devflix.models.serializables;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class Credential {
  
  @NotBlank
  @NotNull
  @Email
  private String email;

  @NotBlank
  @NotNull
  @Length(min = 4, max = 256)
  private String password;

}
