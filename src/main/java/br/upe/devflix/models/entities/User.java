package br.upe.devflix.models.entities;

import java.util.List;
import java.util.UUID;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import org.hibernate.validator.constraints.Length;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@Entity
@Table(name = "devflix_users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "user_id")
  private long id;
  
  @Email
  @NotNull
  @NotBlank
  @Column(name = "user_email")
  private String email;

  @Length(min = 4, max = 32)
  @NotNull
  @NotBlank
  @Column(name = "user_name")
  private String name;

  @Length(min = 4, max = 256)
  @NotNull
  @NotBlank
  @Column(name = "user_password")
  @JsonProperty(access = Access.WRITE_ONLY)
  private String password;

  @Min(1)
  @Max(2)
  @NotNull
  @Column(name = "user_type")
  private int type = 1;

  @Min(1)
  @Max(2)
  @NotNull
  @Column(name = "user_visibility")
  private int visibility = 1;

  @JsonProperty(access = Access.READ_ONLY)
  @Column(name = "user_confirmed")
  private Boolean confirmed = false;

  @JsonIgnore
  @Column(name = "user_confirmation_token")
  private String confirmationToken = UUID.randomUUID().toString();

  @OneToMany(mappedBy = "author")
  private List<Commentary> commentaries;

  @OneToMany(mappedBy = "user")
  private List<RecoveryAccount> recoveries;

  @Column(name = "user_creation", columnDefinition = "TIMESTAMP")
  private LocalDateTime creation = LocalDateTime.now();

}
