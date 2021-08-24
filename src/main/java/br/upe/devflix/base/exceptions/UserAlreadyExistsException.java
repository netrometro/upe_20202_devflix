package br.upe.devflix.base.exceptions;

public class UserAlreadyExistsException extends RuntimeException {

  UserAlreadyExistsException() {
    super();
  }
  
  public UserAlreadyExistsException(String msg) {
    super(msg);
  }
  
  public UserAlreadyExistsException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public UserAlreadyExistsException(Throwable ex) {
    super(ex);
  }

}
