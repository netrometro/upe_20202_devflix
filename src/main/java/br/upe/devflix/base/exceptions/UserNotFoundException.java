package br.upe.devflix.base.exceptions;

public class UserNotFoundException extends RuntimeException {

  UserNotFoundException() {
    super();
  }
  
  public UserNotFoundException(String msg) {
    super(msg);
  }
  
  public UserNotFoundException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public UserNotFoundException(Throwable ex) {
    super(ex);
  }

}
