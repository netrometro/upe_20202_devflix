package br.upe.devflix.services.security;

import java.util.*;

import com.auth0.jwt.*;
import com.auth0.jwt.exceptions.*;
import com.auth0.jwt.algorithms.Algorithm;

public class JwtAPI {
  
  private static String JwtSecret = "chave-secreta";
  private static String JwtIssuer = "nome-emissor";

  /**
   * Gera um JWT.
   * 
   * @param claims As claims utilizadas no JWT.
   * @return Retorna um JWT em formato string.
   */
  public static String build(Map<String, ?> claims) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(JwtSecret);
      Long now = (new Date()).getTime();
      Long expiresAtTime = now + 1800000;

      return JWT.create().withPayload(claims)
        .withIssuer(JwtIssuer)
        .withExpiresAt(new Date(expiresAtTime))
        .sign(algorithm);
    } catch (JWTCreationException exception) {
      return null;
    }
  }

  /**
   * Descriptografa um JWT.
   * 
   * @param jwtToken O token JWT.
   * @return Retorna o conteúdo das claims do JWT.
   */
  public static String decrypt(String jwtToken) {
    try {
      String jwt = JWT.decode(jwtToken).getPayload();
      return new String(Base64.getDecoder().decode(jwt));
    } catch (Exception exception) {
      return null;
    }
  }

  /**
   * Verifica se o token é válido.
   * 
   * @param jwtToken Token JWT em formato de string.
   * @return Um valor booleano.
   */
  public static boolean verify(String jwtToken) {
    try {
      Algorithm algorithm = Algorithm.HMAC256(JwtSecret);
      JWT.require(algorithm)
        .withIssuer(JwtIssuer)
        .build()
        .verify(jwtToken);
      return true;
    } catch (Exception exception) {
      return false;
    }
  }

}
