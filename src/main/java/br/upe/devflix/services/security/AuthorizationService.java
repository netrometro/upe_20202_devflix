package br.upe.devflix.services.security;

import org.springframework.beans.factory.annotation.Autowired;

public class AuthorizationService {
  
  @Autowired private JwtAPIService JwtProvider;

  public boolean isAdmin(String jwtToken){
    String decrypted = JwtProvider.decrypt(jwtToken);
    System.out.println(decrypted);
    /**Implementar lógica de verificar se usuário é Admin */
    return false;
  }

}
