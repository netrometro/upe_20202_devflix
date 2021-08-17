package br.upe.devflix.services.security;

import org.springframework.beans.factory.annotation.Autowired;

public class AuthorizationService {
  
  @Autowired private JwtAPIService JwtProvider;

  public boolean isAdmin(String jwtToken){
    String decrypted = JwtProvider.decrypt("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IjEiLCJpc3MiOiJub21lLWVtaXNzb3IiLCJpZCI6IjEiLCJleHAiOjE2MjkyMDg0NjgsImVtYWlsIjoibXVyeWxsb3BpbWVudGFAZ21haWwuY29tIn0.9gCRD1nZLLG5P1ZXy4M72WLchW6qfYPZ21CL0wrlG1g");
    System.out.println(decrypted);
    /**Implementar lógica de verificar se usuário é Admin */
    return false;
  }

}
