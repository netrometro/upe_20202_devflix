package br.upe.devflix.services.subsystems;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.muryllo.jmailer.Mailer;
import br.com.muryllo.jmailer.MailerResponse;
import br.upe.devflix.services.filesystem.ResourceService;

@Service
public class MailService {

  @Autowired private ResourceService ResourceProvider;

  private Mailer createMailer(){
    return new Mailer()
      .key("api-D87E11D6F0D311EBA990F23C91C88F4E")
      .from("Devflix UPE", "noreply@upedevflix.herokuapp.com");
  }

  public boolean sendMailConfirmation(String userName, String userEmail, String link){
    String content = ResourceProvider.getFileAllText("mails/welcome.html");
    Mailer mail = createMailer()
      .subject("[DevFlix] Confirmação de Cadastro")
      .to(userName, userEmail)
      .htmlBody(content
        .replace("{{DEVFLIX_USERNAME}}", userName)
        .replace("{{DEVFLIX_USEREMAIL}}", userEmail)
        .replace("{{DEVFLIX_CONFIRMATIONURL}}", link));
    
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
    
    MailerResponse result = mail.send();
    return result.success();
  }

}
