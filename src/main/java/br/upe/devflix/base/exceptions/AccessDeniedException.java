package br.upe.devflix.base.exceptions;

public class AccessDeniedException extends RuntimeException {
  
  AccessDeniedException() {
    super();
  }
  
  public AccessDeniedException(String msg) {
    super(msg);
  }
  
  public AccessDeniedException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public AccessDeniedException(Throwable ex) {
    super(ex);
  }

}
