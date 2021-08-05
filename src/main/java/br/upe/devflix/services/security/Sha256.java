package br.upe.devflix.services.security;

import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

import com.google.common.hash.HashFunction;
import com.google.common.hash.Hashing;

import org.springframework.stereotype.Service;

@Service
public class Sha256 {

  /**
   * Gera um hash SHA256 da senha do usuário.
   * 
   * @param password A senha do usuário.
   * @return O hash em formato SHA256.
   */
  public String hash(String password) {
    HashFunction hashFunction = Hashing.sha256();
    Charset defaultCharset = StandardCharsets.UTF_8;
    return hashFunction
      .hashString(password, defaultCharset)
      .toString()
      .toUpperCase();
  }

  /**
   * Compara uma senha recebida do usuário com um hash SHA256.
   * 
   * @param password A senha do usuário.
   * @param hashedPassword A senha em formato de hash SHA256.
   * @return Valor booleano indicando se as senhas são equivalentes.
   */
  public boolean compare(String password, String hashedPassword) {
    return hash(password).equalsIgnoreCase(hashedPassword);
  }

}
