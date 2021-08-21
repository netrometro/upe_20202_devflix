package br.upe.devflix.models.entities;

import javax.persistence.*;
import javax.validation.constraints.*;

import br.upe.devflix.base.GenericEntity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import org.hibernate.validator.constraints.Length;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "devflix_commentaries")
@EqualsAndHashCode(callSuper = false)
public class Commentary extends GenericEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "commentary_id")
  private long id;

  @Length(max = 256)
  @Size(max = 256)
  @NotBlank
  @NotNull
  @Column(name = "commentary_text")
  private String text;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
  @JoinColumn(name = "user_id")
  private User author;
  
  @JsonProperty(access = Access.READ_ONLY)
  @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
  @JoinColumn(name = "video_id")
  private Video video;

  @JsonProperty(access = Access.READ_ONLY)
  @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
  @JoinColumn(name = "category_id")
  private Category category;
}