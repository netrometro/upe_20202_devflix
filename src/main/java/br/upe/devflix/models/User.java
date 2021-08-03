package br.upe.devflix.models;

import java.util.List;

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
  private String password;

  @NotNull
  @Column(name = "user_type")
  private UserType type;

  @NotNull
  @Column(name = "user_profile_visibility")
  private VisibilityType profileVisibility;

  @OneToMany(mappedBy = "author")
  private List<Commentary> commentaries;

}
