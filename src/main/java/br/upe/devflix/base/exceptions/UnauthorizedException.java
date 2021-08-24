package br.upe.devflix.base.exceptions;

public class UnauthorizedException extends RuntimeException {
  
  UnauthorizedException() {
    super();
  }
  
  public UnauthorizedException(String msg) {
    super(msg);
  }
  
  public UnauthorizedException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public UnauthorizedException(Throwable ex) {
    super(ex);
  }

}
