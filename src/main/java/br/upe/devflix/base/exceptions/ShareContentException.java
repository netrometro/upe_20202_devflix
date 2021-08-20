package br.upe.devflix.base.exceptions;

public class ShareContentException extends RuntimeException {
  
  ShareContentException() {
    super();
  }
  
  public ShareContentException(String msg) {
    super(msg);
  }
  
  public ShareContentException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public ShareContentException(Throwable ex) {
    super(ex);
  }

}
