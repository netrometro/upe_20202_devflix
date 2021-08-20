package br.upe.devflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.devflix.services.subsystems.MailService;
import br.upe.devflix.base.exceptions.AccessDeniedException;
import br.upe.devflix.services.security.AuthorizationService;

@Service
public class ShareContentService {
  
  @Autowired private AuthorizationService authorizationService;
  @Autowired private MailService mailService;

  public void shareLinkByEmail(
    String authHeader, 
    String userName, 
    String userEmail, 
    String link)
  {
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar este recurso.");
    }
    Boolean status = mailService.sendMailShareLink(userName, userEmail, link);
    if (!status){
      throw new RuntimeException("Falha ao compartilhar link pelo e-mail.");
    }
  }

}
