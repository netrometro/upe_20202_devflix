package br.upe.devflix.services.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.devflix.models.entities.User;
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

  public JwtPayload parseJwtPayload(String authorization){
    return JwtProvider.decrypt(parseBearer(authorization));
  }

  public boolean isAdmin(String authorization){
    JwtPayload payload = parseJwtPayload(authorization);
    if (payload == null){
      return false;
    }
    //Verifica se a propriedade "Roles" é igual a 2.
    return (payload.getRoles() == 2);
  }

  public boolean isOwner(String authorization, Long userId){
    JwtPayload payload = parseJwtPayload(authorization);
    if (payload == null){
      return false;
    }
    //Verifica se o usuário logado é igual ao usuário especificado.
    return (payload.getId() == userId);
  }

  public boolean isOwner(String authorization, User user){
    JwtPayload payload = parseJwtPayload(authorization);
    if (payload == null){
      return false;
    }
    //Verifica se o usuário logado é igual ao usuário especificado.
    return (payload.getId() == user.getId());
  }

  public boolean isAuthenticated(String authorization){
    return (parseJwtPayload(authorization) != null);
  }



}
