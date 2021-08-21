package br.upe.devflix.base.exceptions;

public class CommentaryNotFoundException extends RuntimeException {

  CommentaryNotFoundException() {
    super();
  }
  
  public CommentaryNotFoundException(String msg) {
    super(msg);
  }
  
  public CommentaryNotFoundException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public CommentaryNotFoundException(Throwable ex) {
    super(ex);
  }

}
