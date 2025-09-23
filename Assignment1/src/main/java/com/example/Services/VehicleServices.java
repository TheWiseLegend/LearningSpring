package com.example.Services;

import com.example.interfaces.SpeakerSystem;
import com.example.interfaces.TyresSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class VehicleServices {

  @Autowired
  private SpeakerSystem speakers;
  private TyresSystem tyres;

  public void playMusic(){
    String music = speakers.makeSound();
    System.out.println(music);;
  }

  public void moveVehicle(){
    String status = tyres.rotate();
    System.out.println(status);
  }

  public TyresSystem getTyres(){
    return tyres;
  }

  @Autowired
  public void setTyres(TyresSystem tyres){
    this.tyres = tyres;
  }

  public SpeakerSystem getSpeakers(){
    return speakers;
  }

  public void setSpeakers(SpeakerSystem speakers){
    this.speakers = speakers;
  }



}
