package com.example.implementation;

import com.example.interfaces.SpeakerSystem;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class SonySpeakers implements SpeakerSystem {

  public String makeSound(){
    return "Sony Speakers are now playing";
  }

}
