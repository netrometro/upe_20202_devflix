package br.upe.devflix.services.filesystem;

import java.io.InputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

@Service
public class ResourceService {
  
  @Autowired private ResourceLoader Resources;
  
  public InputStream getInputStream(String filePath){
    Resource resource = Resources.getResource("classpath:" + filePath);
    try {
      return resource.getInputStream();
    } catch (Exception exception) {
      return null;
    }
  }

  public BufferedReader getFileBufferedReader(String filePath){
    try {
      InputStream stream = getInputStream(filePath);
      return new BufferedReader(new InputStreamReader(stream, "UTF-8"));
    } catch (Exception exception) {
      return null;
    }
  }

  public String getFileAllText(String filePath){
    try{
      BufferedReader reader = getFileBufferedReader(filePath);
      String data = reader.lines().collect(Collectors.joining(System.lineSeparator()));
      reader.close();
      return data;
    } catch (Exception exception){
      return null;
    }
  }

}
