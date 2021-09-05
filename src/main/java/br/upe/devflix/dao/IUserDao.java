package br.upe.devflix.dao;

import br.upe.devflix.models.entities.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface IUserDao extends JpaRepository<User, Long> {

  List<User> findByConfirmationTokenAndConfirmedFalse(String confirmationToken);
  List<User> findByEmailAndConfirmedTrue(String email);
  List<User> findByEmail(String email);
  List<User> findByCommentaries_Id(Long id);
  List<User> findByCategories_Id(Long id);
  long countByEmail(String email);
  
}
