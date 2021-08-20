package br.upe.devflix.base.exceptions;

public class CategoryNotFoundException extends RuntimeException {

  CategoryNotFoundException() {
    super();
  }
  
  public CategoryNotFoundException(String msg) {
    super(msg);
  }
  
  public CategoryNotFoundException(String msg, Throwable ex) {
    super(msg, ex);
  }
  
  public CategoryNotFoundException(Throwable ex) {
    super(ex);
  }

}
