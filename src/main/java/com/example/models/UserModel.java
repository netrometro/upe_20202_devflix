package com.example.models;

public class UserModel extends GenericEntity{
  
  private String id;
  private String userName;
  private String userEmail;
  private int userType;
  private int userVisibilityType;
  
  public String getId() {
    return id;
  }
  public void setId(String id) {
    this.id = id;
  }
  public String getUserName() {
    return userName;
  }
  public void setUserName(String userName) {
    this.userName = userName;
  }
  public String getUserEmail() {
    return userEmail;
  }
  public void setUserEmail(String userEmail) {
    this.userEmail = userEmail;
  }
  public int getUserType() {
    return userType;
  }
  public void setUserType(int userType) {
    this.userType = userType;
  }
  public int getUserVisibilityType() {
    return userVisibilityType;
  }
  public void setUserVisibilityType(int userVisibilityType) {
    this.userVisibilityType = userVisibilityType;
  }

}
