package br.upe.devflix.models.entities;

import java.util.UUID;
import java.time.LocalDateTime;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

import br.upe.devflix.base.GenericEntity;

@Data
@Accessors(chain = true)
@Entity
@Table(name = "devflix_recovery")
@EqualsAndHashCode(callSuper = false)
public class RecoveryAccount extends GenericEntity {
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "recovery_id")
  private long id;

  @JsonIgnore
  @Column(name = "recovery_token")
  private String token = UUID.randomUUID().toString();

  @JsonProperty(access = Access.READ_ONLY)
  @Column(name = "recovery_expired")
  private Boolean expired = false;
  
  @Column(name = "recovery_creation", columnDefinition = "TIMESTAMP")
  private LocalDateTime creation = LocalDateTime.now();
  
  @JsonIgnore
  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "user_id")
  private User user;
  
}
