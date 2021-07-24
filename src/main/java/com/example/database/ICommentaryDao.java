package com.example.database;

import com.example.models.Commentary;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICommentaryDao extends JpaRepository<Commentary, Long> {
  
}
