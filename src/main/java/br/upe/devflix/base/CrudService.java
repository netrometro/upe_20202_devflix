package br.upe.devflix.base;

import java.util.Optional;
import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CrudService<T extends GenericEntity, ID> {

  <Dao extends JpaRepository<T, ID>> Dao getDao();

  default T insert(T entity) {
    entity.setCreationDate(LocalDateTime.now());
    final T saved = getDao().save(entity);
    return saved;
  }

  default T update(T entity) {
    entity.setLastChangedDate(LocalDateTime.now());
    final T saved = getDao().save(entity);
    return saved;
  }

  default T delete(ID id) {
    final Optional<T> found = getDao().findById(id);
    if (found.isPresent()){
      getDao().delete(found.get());
      return found.get();
    }
    return null;
  }

  default Iterable<T> fetchAll() {
    return getDao().findAll();
  }

  default T fetch(ID id) {
    return getDao().findById(id).get();
  }
}