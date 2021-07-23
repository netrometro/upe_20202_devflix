package com.example.database;

import com.example.models.Metadata;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMetadataDao extends JpaRepository<Metadata, Long>{
  
}
