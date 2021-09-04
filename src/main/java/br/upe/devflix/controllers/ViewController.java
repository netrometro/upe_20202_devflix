package br.upe.devflix.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import br.upe.devflix.services.filesystem.ResourceService;

@CrossOrigin(origins = "*")
@RequestMapping("/")
@Controller
public class ViewController {
  
  @Autowired private ResourceService resourceService;
  
  @GetMapping
  @ResponseBody
  public String index()
  {
    return resourceService.getFileAllText("/www/index.html");
  }

}
