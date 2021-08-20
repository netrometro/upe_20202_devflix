package br.upe.devflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.upe.devflix.services.subsystems.MailService;
import lombok.extern.slf4j.Slf4j;
import br.upe.devflix.base.exceptions.AccessDeniedException;
import br.upe.devflix.base.exceptions.ShareContentException;
import br.upe.devflix.services.security.AuthorizationService;

@Slf4j
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
    log.info(String.format("Sharing a resource with email <%s>", userEmail));
    if (!authorizationService.isAuthenticated(authHeader)){
      //Usuário não está autenticado...
      throw new AccessDeniedException("Você precisa estar logado para acessar este recurso.");
    }
    Boolean status = mailService.sendMailShareLink(userName, userEmail, link);
    if (!status){
      throw new ShareContentException("Falha ao compartilhar página DevFlix pelo e-mail.");
    }
  }

}
