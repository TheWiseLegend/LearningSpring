package com.example.main;

import com.example.Services.VehicleServices;
import com.example.beans.Person;
import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Assignmnet1 {

  public static void main(String[] args) {

    var context = new AnnotationConfigApplicationContext(ProjectConfig.class);
    Person person = context.getBean(Person.class);
    Vehicle vehicle = context.getBean(Vehicle.class);

    String[] persons = context.getBeanNamesForType(Person.class);
    String[] vehicles = context.getBeanNamesForType(Vehicle.class);

    System.out.println("Person name from Spring Context is: " + person.getName());
    System.out.println("Vehicle name from Spring Context is: " + vehicle.getName());

    vehicle.getVehicleServices().playMusic();
    vehicle.getVehicleServices().moveVehicle();

    System.out.println(persons + "" + vehicles);
  }
}
