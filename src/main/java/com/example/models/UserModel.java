package com.example.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserModel {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long Id;
  
}
