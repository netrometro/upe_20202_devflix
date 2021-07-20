package com.example.models.repository;

import com.example.models.UserModel;
import com.example.models.interfaces.IRepository;

public class UserRepository implements IRepository<UserModel>{

  @Override
  public UserModel insert(UserModel data) throws Exception {
    return null;
  }

  @Override
  public UserModel fetch() throws Exception {
    return null;
  }

  @Override
  public void update(UserModel data) throws Exception {
    
  }

  @Override
  public void delete(int id) throws Exception {
    
  }
  
}
