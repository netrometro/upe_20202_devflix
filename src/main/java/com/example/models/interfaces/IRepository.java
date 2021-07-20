package com.example.models.interfaces;

import com.example.models.GenericEntity;

public interface IRepository<T extends GenericEntity> {
 
  T insert(T data) throws Exception;
  T fetch() throws Exception;
  void update(T data) throws Exception;
  void delete(int id) throws Exception;
}
