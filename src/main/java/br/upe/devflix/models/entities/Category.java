package br.upe.devflix.models.entities;

import java.util.List;

import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.upe.devflix.base.GenericEntity;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "devflix_categories")
@EqualsAndHashCode(callSuper = false)
public class Category extends GenericEntity {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "category_id")
  private long id;

  @Length(min = 20, max = 25)
  @NotNull
  @NotBlank
  @Column(name = "category_title")
  private String title;

  @Length(min = 6, max = 6)
  @NotNull
  @NotBlank
  @Column(name = "category_color")
  private String color;

  @Min(1)
  @Max(2)
  @NotNull
  @Column(name = "category_visibility")
  private int visibility = 1;

  @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
  private List<Commentary> commentaries;

  @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
  private List<Video> videos;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  private User owner;

}