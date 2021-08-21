package br.upe.devflix.models.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class RecoveryDTO {
  
  @NotBlank
  @NotNull
  private String token;

  @NotBlank
  @NotNull
  @Length(min = 4, max = 256)
  private String password;

}
