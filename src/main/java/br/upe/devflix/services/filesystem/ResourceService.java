package br.upe.devflix.services.filesystem;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

@Service
public class ResourceService {
  
  @Autowired private ResourceLoader Resources;
  
  public File getFile(String filePath){
    Resource resource = Resources.getResource("classpath:" + filePath);
    try {
      return resource.getFile();
    } catch (IOException exception) {
      return null;
    }
  }

  public BufferedReader getFileBufferedReader(String filePath){
    File file = getFile(filePath);
    try {
      return new BufferedReader(new FileReader(file));
    } catch (FileNotFoundException exception) {
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
