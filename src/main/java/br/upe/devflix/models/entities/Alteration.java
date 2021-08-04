package br.upe.devflix.models.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@Entity
@Table(name = "devflix_alterations")
public class Alteration {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "alteration_id")
  private long id;

  @NotNull
  @NotBlank
  @Column(name = "alteration_name")
  private String name;

  @NotNull
  @NotBlank
  @Column(name = "alteration")
  private String alteration;

  @Column(name = "alteration_date", columnDefinition = "TIMESTAMP")
  private LocalDateTime date = LocalDateTime.now();

}
