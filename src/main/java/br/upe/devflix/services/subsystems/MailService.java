package br.upe.devflix.services.subsystems;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import br.com.muryllo.jmailer.Mailer;
import br.com.muryllo.jmailer.MailerResponse;

import br.upe.devflix.services.filesystem.ResourceService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MailService {

  @Autowired private ResourceService ResourceProvider;

  @Value("${devflix.jmailer.apikey}")
  private String JMailerApiKey;

  private Mailer createMailer(){
    return new Mailer()
      .key(this.JMailerApiKey)
      .from("Devflix UPE", "noreply@upedevflix.herokuapp.com");
  }

  public boolean sendMailConfirmation(String userName, String userEmail, String confirmationToken){
    String content = ResourceProvider.getFileAllText("mails/welcome.html");
    Mailer mail = createMailer()
      .subject("[DevFlix] Confirmação de Cadastro")
      .to(userName, userEmail)
      .htmlBody(content
        .replace("{{DEVFLIX_USERNAME}}", userName)
        .replace("{{DEVFLIX_USEREMAIL}}", userEmail)
        .replace("{{DEVFLIX_CONFIRMATIONTOKEN}}", confirmationToken));
    
    log.debug(String.format("Sending Mail Confirmation to user <%s>", userEmail)); 
    MailerResponse result = mail.send();
    return result.success();
  }

  public boolean sendMailPasswordRecovery(String userName, String userEmail, String recoveryToken){
    String content = ResourceProvider.getFileAllText("mails/recovery.html");
    Mailer mail = createMailer()
      .subject("[DevFlix] Recuperação de Conta")
      .to(userName, userEmail)
      .htmlBody(content
        .replace("{{DEVFLIX_USERNAME}}", userName)
        .replace("{{DEVFLIX_USEREMAIL}}", userEmail)
        .replace("{{DEVFLIX_RECOVERYTOKEN}}", recoveryToken));
    
    log.debug("Sending Mail Recovery to user <%s>", userEmail);
    MailerResponse result = mail.send();
    return result.success();
  }

  public boolean sendMailShareLink(String userName, String userEmail, String link){
    String content = ResourceProvider.getFileAllText("mails/notification.html");
    Mailer mail = createMailer()
      .subject("[DevFlix] Você possui uma nova notificação.")
      .to(userName, userEmail)
      .htmlBody(content
        .replace("{{DEVFLIX_USERNAME}}", userName)
        .replace("{{DEVFLIX_SHARELINK}}", link));
    
    log.debug("Sending Devflix Mail Share to user <%s>", userEmail);
    MailerResponse result = mail.send();
    return result.success();
  }

}
