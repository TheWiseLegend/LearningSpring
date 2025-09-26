package com.example.main;

import com.example.Services.VehicleServices;
import com.example.beans.Person;
import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Example15 {

  public static void main(String[] args) {
    var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

    System.out.println("Before the person bean gets instantiated");
    Person person = context.getBean(Person.class);
    System.out.println("After the person bean gets instantiated");
  }
}
