package com.example.implementation;

import com.example.interfaces.TyresSystem;
import org.springframework.stereotype.Component;

@Component
public class MichelinTyres implements TyresSystem {

  public String rotate(){
    return "Michelin tyres have been moved";
  }

}
