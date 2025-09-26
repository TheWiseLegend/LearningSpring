package com.example.implementation;

import com.example.interfaces.SpeakerSystem;
import org.springframework.stereotype.Component;

@Component
public class BoseSpeakers implements SpeakerSystem {

  public String makeSound() {
   return "Bose Speakers are now playing";
  }

}
