package com.example.database;

import com.example.models.Alteration;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAlterationDao extends JpaRepository<Alteration, Long>{
  
}
