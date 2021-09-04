package br.upe.devflix.models.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.URL;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ShareContentDTO {

  @Email
  @NotNull
  @NotBlank
  private String userEmail;
  
  @URL(regexp = "^(http|https).*")
  @NotNull
  @NotBlank
  private String link;

}
