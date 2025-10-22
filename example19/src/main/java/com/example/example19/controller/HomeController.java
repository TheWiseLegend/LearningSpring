package com.example.example19.controller;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

  @RequestMapping(value = {"","/","/home"})
  public String displayHomePage(){
    return "home.html";
  }
}
