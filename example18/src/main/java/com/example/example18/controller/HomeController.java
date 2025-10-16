package com.example.example18.controller;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;

@Component
public class HomeController {

  @RequestMapping("/home")
  public String displayHomePage(){
    return "home.html";
  }
}
