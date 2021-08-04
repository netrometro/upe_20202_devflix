package br.upe.devflix.database;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import br.upe.devflix.models.RecoveryAccount;

@Component
@Repository
public interface IRecoveryDao extends JpaRepository<RecoveryAccount, Long> {
  
}
