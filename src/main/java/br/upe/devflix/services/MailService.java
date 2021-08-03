package br.upe.devflix.services;

import br.com.muryllo.jmailer.Mailer;
import br.com.muryllo.jmailer.MailerResponse;

public class MailService {

  private static Mailer createMailer(){
    return new Mailer()
      .key("api-C982E608F0D711EB8499F23C91C88F4E")
      .from("Devflix UPE", "noreply@upedevflix.herokuapp.com");
  }

  public static boolean sendMailConfirmation(String userName, String userEmail, String link){
    Mailer mail = createMailer()
      .subject("[DevFlix] Confirmação de Cadastro")
      .to(userName, userEmail)
      .htmlBody(String.format(
        "Seja bem vindo ao DevFlix, %s! Para concluir seu " + 
        "cadastro, clique <a href=\"%s\">neste link</a>.", userName, link));
    
    MailerResponse result = mail.send();
    return result.success();
  }

  public static boolean sendMailPasswordRecovery(String userName, String userEmail, String link){
    Mailer mail = createMailer()
      .subject("[DevFlix] Recuperação de Conta")
      .to(userName, userEmail)
      .htmlBody(String.format(
        "Olá %s, recebemos a triste notícia de que você esqueceu sua senha. " +
        "Mas não se preocupe, você poderá alterá-la clicando <a href=\"%s\">neste link</a>.<br>" +
        "Caso este email não tenha sido solicitado por você, basta ignorá-lo.", userName, link));
    
    MailerResponse result = mail.send();
    return result.success();
  }

  public static boolean sendMailNotification(String userName, String userEmail, String htmlText){
    Mailer mail = createMailer()
      .subject("[DevFlix] Você possui uma nova notificação.")
      .to(userName, userEmail)
      .htmlBody(htmlText);
    
    MailerResponse result = mail.send();
    return result.success();
  }

}
