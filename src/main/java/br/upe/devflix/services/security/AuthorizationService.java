package br.upe.devflix.services.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    String decrypted = JwtProvider.decrypt(bearerToken);
    System.out.println(decrypted);
    /**Implementar lógica de verificar se usuário é Admin */
    return false;
  }

}
