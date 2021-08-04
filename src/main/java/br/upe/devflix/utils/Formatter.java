package br.upe.devflix.utils;

import java.util.*;

public class Formatter {
  public static String convertFromBase64ToString(String base64String) {
    byte[] decodedBytes = Base64.getDecoder().decode(base64String);
    String decodedString = new String(decodedBytes);

    return decodedString;
  }

  public static Map<String, String> convertFromStringToMap(String stringValue) {
    Map<String, String> map = new HashMap<String, String>();
    
    String[] pairs = stringValue.split(",");
    for (int i=0;i<pairs.length;i++) {
      String pair = pairs[i];
      
      String[] keyValue = pair.split(":");
      map.put(keyValue[0], keyValue[1]);
    }

    return map;
  }
}
