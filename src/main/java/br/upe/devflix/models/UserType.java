package br.upe.devflix.models;

public enum UserType {
  NormalUser(1),
  AdminUser(2);

  public final int m_Value;

  UserType(int value){
    m_Value = value;
  }

  public int getValue(){
    return m_Value;
  }

  @Override
  public String toString() {
    return String.valueOf(m_Value);
  }

}
