package br.upe.devflix.models.entities;

import java.util.List;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.upe.devflix.base.GenericEntity;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "devflix_users")
@EqualsAndHashCode(callSuper = false)
public class Video extends GenericEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "video_id")
  private long id;

  @OneToOne(mappedBy = "metadata_id")
  private Metadata videoMetadata;

  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  private Category videoCategory;

  @OneToMany(mappedBy = "video_id")
  private List<Commentary> videoComments;

  @Min(1)
  @Max(2)
  @NotNull
  @Column(name = "video_visibility")
  private int videoVisibility = 1;
}