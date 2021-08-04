package br.upe.devflix.database;

import br.upe.devflix.models.entities.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface IUserDao extends JpaRepository<User, Long> {

  List<User> findByEmailAndConfirmedTrue(String email);
  List<User> findByEmail(String email);
  long countByEmail(String email);

}
