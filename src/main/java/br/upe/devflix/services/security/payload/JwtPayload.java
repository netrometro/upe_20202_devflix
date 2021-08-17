package br.upe.devflix.services.security.payload;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class JwtPayload {
  
  private String roles;
  private String iss;
  private String id;
  private Long exp;
  private String email;

  public Long getId(){
    return Long.parseLong(this.id);
  }

  public Long getRoles(){
    return Long.parseLong(this.roles);
  }

}
