package com.example.models;
import java.util.Date;

public class AlterationModel extends GenericEntity{
  private int alterationId;
  private String alteratorName;
  private String alteration;
  private Date alterationDate;

  public int getAlterationId() {
    return alterationId;
  }
  public void setAlterationId(int alterationId) {
    this.alterationId = alterationId;
  }

  public String getAlteratorName() {
    return alteratorName;
  }
  public void setAlteratorName(String alteratorName) {
    this.alteratorName = alteratorName;
  }

  public String getAlteration() {
    return alteration;
  }
  public void setAlteration(String alteration) {
    this.alteration = alteration;
  }

  public Date getAlterationDate() {
    return alterationDate;
  }
  public void setAlterationDate(Date alterationDate) {
    this.alterationDate = alterationDate;
  }

}
