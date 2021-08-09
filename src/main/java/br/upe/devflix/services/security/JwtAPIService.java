package br.upe.devflix.services.security;

import java.util.*;

import com.auth0.jwt.*;
import com.auth0.jwt.exceptions.*;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

import com.auth0.jwt.algorithms.Algorithm;

@Slf4j
@Service
public class JwtAPIService {
  
  private String JwtSecret = "chave-secreta";
  private String JwtIssuer = "nome-emissor";

  /**
   * Gera um JWT.
   * 
   * @param claims As claims utilizadas no JWT.
   * @return Retorna um JWT em formato string.
   */
  public String build(Map<String, ?> claims) {
    try {
      log.info("Building claims for user session.");

      Algorithm algorithm = Algorithm.HMAC256(JwtSecret);
      Long now = (new Date()).getTime();
      Long expiresAtTime = now + 1800000;

      return JWT.create().withPayload(claims)
        .withIssuer(JwtIssuer)
        .withExpiresAt(new Date(expiresAtTime))
        .sign(algorithm);
    } catch (JWTCreationException exception) {
      log.error("Failed to build claims for user session. Returning null.");
      return null;
    }
  }

  /**
   * Descriptografa um JWT.
   * 
   * @param jwtToken O token JWT.
   * @return Retorna o conteúdo das claims do JWT.
   */
  public String decrypt(String jwtToken) {
    try {
      log.info("Decrypting Json Web Token.");
      String jwt = JWT.decode(jwtToken).getPayload();
      return new String(Base64.getDecoder().decode(jwt));
    } catch (Exception exception) {
      log.error("Failed to decrypt Json Web Token. Returning null.");
      return null;
    }
  }

  /**
   * Verifica se o token é válido.
   * 
   * @param jwtToken Token JWT em formato de string.
   * @return Um valor booleano.
   */
  public boolean verify(String jwtToken) {
    try {
      log.info("Verifying JWT validity.");
      Algorithm algorithm = Algorithm.HMAC256(JwtSecret);
      JWT.require(algorithm)
        .withIssuer(JwtIssuer)
        .build()
        .verify(jwtToken);
      return true;
    } catch (Exception exception) {
      log.error("Failed to verify Json Web Token. The JWT provided is invalid.");
      return false;
    }
  }

}
