package br.upe.devflix.models.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ForgotDTO {
  
  @NotBlank
  @NotNull
  @Email
  private String email;

}
