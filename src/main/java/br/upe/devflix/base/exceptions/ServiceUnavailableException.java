package br.upe.devflix.base.exceptions;

public class ServiceUnavailableException extends RuntimeException {

  ServiceUnavailableException() {
    super();
  }
  
  public ServiceUnavailableException(String msg) {
    super(msg);
  }
  
  public ServiceUnavailableException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public ServiceUnavailableException(Throwable ex) {
    super(ex);
  }
  
}
