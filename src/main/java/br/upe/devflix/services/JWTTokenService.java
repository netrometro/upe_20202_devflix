package br.upe.devflix.services;

import java.util.*;

import com.auth0.jwt.*;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.*;
import br.upe.devflix.utils.Formatter;
import io.github.cdimascio.dotenv.Dotenv;

public class JWTTokenService {
  static Dotenv dotenv = Dotenv.load();
  static String SECRET = dotenv.get("JWT-SECRET");
  static String ISSUER = dotenv.get("JWT-ISSUER");

  public static String getToken(String bearerToken) throws RuntimeException {
    String[] splicedToken = bearerToken.split(" ");

    if (!splicedToken[0].equals("Bearer")) {
      throw new RuntimeException("The JWT token must begin with 'Bearer'.");
    }
    return splicedToken[1];
  } 
  
  public static String buildJWTToken(Map<String, String> payload) throws JWTCreationException {
    try {
      Algorithm algorithm = Algorithm.HMAC256(SECRET);
      Long now = new Date().getTime();
      Long expiresAtTime = now + 1800000; // 1800000 = 30 min
      String token = JWT.create().withPayload(payload).withIssuer(ISSUER).withExpiresAt(new Date(expiresAtTime)).sign(algorithm);

      return token;
    } catch (JWTCreationException exception){
      throw new JWTCreationException("Can't generate a JWT token with success.", exception);
    }
  }

  public static String decryptJWTToken (String bearerToken) throws JWTDecodeException {
    String token = getToken(bearerToken);
    
    try {
      String jwt = JWT.decode(token).getPayload();
      String payload =  Formatter.convertFromBase64ToString(jwt);

      return payload;
    } catch (JWTDecodeException exception){
      throw new JWTDecodeException("Can't decrypt this JWT token.", exception);
    }
  }

  public static void verifyJWTToken(String bearerToken) throws JWTVerificationException {
    String token = getToken(bearerToken);

    try {
      Algorithm algorithm = Algorithm.HMAC256(SECRET);
      JWTVerifier verifier = JWT.require(algorithm).withIssuer(ISSUER).build();
      
      verifier.verify(token);
    } catch (JWTVerificationException exception){
      throw new JWTDecodeException("Invalid token");
    }
  }

}