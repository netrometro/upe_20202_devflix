package br.upe.devflix.services.filesystem;

import java.io.InputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ResourceService {
  
  @Autowired private ResourceLoader Resources;
  
  public InputStream getInputStream(String filePath){
    log.info("Getting file stream from classpath in src/main/resources folder.");
    Resource resource = Resources.getResource("classpath:" + filePath);
    try {
      return resource.getInputStream();
    } catch (Exception exception) {
      log.error("Failed to get file stream from classpath.");
      return null;
    }
  }

  public BufferedReader getFileBufferedReader(String filePath){
    try {
      log.info("Getting file buffered reader from classpath.");
      InputStream stream = getInputStream(filePath);
      return new BufferedReader(new InputStreamReader(stream, "UTF-8"));
    } catch (Exception exception) {
      log.error("Failed to get file buffered reader from classpath.");
      return null;
    }
  }

  public String getFileAllText(String filePath){
    try{
      log.info("Reading all text data from file path in classpath.");
      BufferedReader reader = getFileBufferedReader(filePath);
      String data = reader.lines().collect(Collectors.joining(System.lineSeparator()));
      reader.close();
      return data;
    } catch (Exception exception){
      log.error("Failed to read all text data from file path in classpath.");
      return null;
    }
  }

}
