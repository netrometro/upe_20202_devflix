package br.upe.devflix.models.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import br.upe.devflix.base.GenericEntity;

@Data
@Entity
@Accessors(chain = true)
@Table(name = "devflix_metadata")
@EqualsAndHashCode(callSuper = false)
public class Metadata extends GenericEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "metadata_id")
    private long id;

    @NotNull
    @NotBlank
    @Column(name = "metadata_video_link")
    private String videoLink;

    @NotNull
    @NotBlank
    @Column(name = "metadata_title")
    private String title;

    @NotNull
    @NotBlank
    @Column(name = "metadata_description")
    private String description;

    @NotNull
    @NotBlank
    @Column(name = "metadata_video_youtube_channel")
    private String videoYoutubeChannel;

    @NotNull
    @NotBlank
    @Column(name = "metadata_tags")
    private String tags;

}
