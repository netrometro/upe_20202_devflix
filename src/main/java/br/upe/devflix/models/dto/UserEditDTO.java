package br.upe.devflix.models.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class UserEditDTO {
  
  @Length(min = 4, max = 32)
  @NotNull
  @NotBlank
  private String name;

  @Email
  @NotNull
  @NotBlank
  private String email;

}
