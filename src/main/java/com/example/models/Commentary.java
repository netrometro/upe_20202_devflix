package com.example.models;

import javax.persistence.*;
import javax.validation.constraints.*;

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

  @ManyToOne()
  @JoinColumn(name = "user_id")
  private User author;

  @ManyToOne()
  @JoinColumn(name = "video_id")
  private User video;

  @Length(max = 256)
  @Size(max = 126)
  @NotBlank
  @NotNull
  @Column(name = "commentary_text")
  private String commentaryText; 

}
