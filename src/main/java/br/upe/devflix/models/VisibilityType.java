package br.upe.devflix.models;

public enum VisibilityType {
  Public(1),
  Private(2);

  public final int m_Value;

  VisibilityType(int value){
    m_Value = value;
  }

  public int getValue(){
    return m_Value;
  }

}
