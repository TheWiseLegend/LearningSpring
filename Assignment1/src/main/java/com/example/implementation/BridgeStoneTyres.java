package com.example.implementation;

import com.example.interfaces.TyresSystem;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class BridgeStoneTyres implements TyresSystem {

  public String rotate() {
   return "Bridegstone tyres have been rotated";
  }

}
