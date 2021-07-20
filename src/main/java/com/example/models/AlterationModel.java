package com.example.models;
import java.util.Date;

public class AlterationModel extends GenericEntity{
  public int m_AlterationId;
  public String m_AlteratorName;
  public String m_Alteration;
  public Date m_AlterationDate;

  public int getM_AlterationId() {
    return m_AlterationId;
  }
  public void setM_AlterationId(int m_AlterationId) {
    this.m_AlterationId = m_AlterationId;
  }

  public String getM_AlteratorName() {
    return m_AlteratorName;
  }
  public void setM_AlteratorName(String m_AlteratorName) {
    this.m_AlteratorName = m_AlteratorName;
  }

  public String getM_Alteration() {
    return m_Alteration;
  }
  public void setM_Alteration(String m_Alteration) {
    this.m_Alteration = m_Alteration;
  }

  public Date getM_AlterationDate() {
    return m_AlterationDate;
  }
  public void setM_AlterationDate(Date m_AlterationDate) {
    this.m_AlterationDate = m_AlterationDate;
  }
}
