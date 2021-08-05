package br.upe.devflix.database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import br.upe.devflix.models.entities.RecoveryAccount;

@Component
@Repository
public interface IRecoveryDao extends JpaRepository<RecoveryAccount, Long> {

  List<RecoveryAccount> findByTokenAndExpiredFalse(String token);

}
