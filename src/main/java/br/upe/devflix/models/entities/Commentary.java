package br.upe.devflix.models.entities;

import javax.persistence.*;
import javax.validation.constraints.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import org.hibernate.validator.constraints.Length;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@Entity
@Table(name = "devflix_commentaries")
public class Commentary {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "commentary_id")
  private long id;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "user_id")
  private User author;

  @Length(max = 256)
  @Size(max = 256)
  @NotBlank
  @NotNull
  @Column(name = "commentary_text")
  private String commentaryText; 

}
