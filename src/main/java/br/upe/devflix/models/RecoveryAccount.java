package br.upe.devflix.models;

import java.time.LocalDateTime;
import java.util.UUID;

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
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@Entity
@Table(name = "devflix_recovery")
public class RecoveryAccount {
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "recovery_id")
  private long id;

  @JsonProperty(access = Access.READ_ONLY)
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
