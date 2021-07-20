package com.example.models;

public class CommentaryModel extends GenericEntity {
  private int commentaryId; 
  private String authorName; 
  private String commentaryText;
  
  
  public int getCommentaryId() {
    return this.commentaryId;
  }

  public void setCommentaryId(int commentaryId ) {
    this.commentaryId = commentaryId;
  }

  public String getAuthorName() {
    return this.authorName;
  }

  public void setAuthorName(String authorName) {
    this.authorName = authorName;
  }
  
  public String getCommentaryText() {
    return this.commentaryText;
  }
  
  public void setCommentaryText(String commentaryText) {
    this.commentaryText = commentaryText;
  }
}
