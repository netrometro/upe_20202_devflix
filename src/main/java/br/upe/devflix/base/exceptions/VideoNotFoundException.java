package br.upe.devflix.base.exceptions;

public class VideoNotFoundException extends RuntimeException {

  VideoNotFoundException() {
    super();
  }
  
  public VideoNotFoundException(String msg) {
    super(msg);
  }
  
  public VideoNotFoundException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public VideoNotFoundException(Throwable ex) {
    super(ex);
  }

}
