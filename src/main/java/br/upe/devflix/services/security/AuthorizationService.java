package br.upe.devflix.services.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.devflix.services.security.payload.JwtPayload;

@Service
public class AuthorizationService {
  
  @Autowired private JwtAPIService JwtProvider;

  private String parseBearer(String authorization){
    String bearer = "";
    if (authorization != null){
      bearer = authorization.replace("Bearer ", "");
    }
    return bearer; 
  }

  public boolean isAdmin(String authorization){
    String bearerToken = parseBearer(authorization);
    JwtPayload payload = JwtProvider.decrypt(bearerToken);
    if (payload == null){
      return false;
    }
    //Verifica se a propriedade "Roles" é igual a 2.
    return (payload.getRoles() == 2);
  }

}
