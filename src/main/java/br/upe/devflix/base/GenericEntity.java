package br.upe.devflix.base;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.MappedSuperclass;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@MappedSuperclass
@EqualsAndHashCode(callSuper = false)
public abstract class GenericEntity implements Serializable {

	private LocalDateTime creationDate = LocalDateTime.now();
	private LocalDateTime lastChangedDate;

}