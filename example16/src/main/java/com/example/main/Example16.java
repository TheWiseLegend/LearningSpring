package com.example.main;

import com.example.Services.VehicleServices;
import com.example.beans.Person;
import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import jakarta.annotation.PostConstruct;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Example16 {

  public static void main(String[] args) {
    var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

    VehicleServices vehicleServices1 = context.getBean(VehicleServices.class);
    VehicleServices vehicleServices2 = context.getBean(VehicleServices.class);

    VehicleServices vehicleServices3 = context.getBean("vehicleServices", VehicleServices.class);

    System.out.println("Vehicle service 1 hash code: " + vehicleServices1.hashCode());
    System.out.println("Vehicle service 2 hash code: " + vehicleServices2.hashCode());
    System.out.println("Vehicle service 3 hash code: " + vehicleServices3.hashCode());

    if (vehicleServices1 == vehicleServices2 && vehicleServices1 == vehicleServices3) {
      System.out.println("All vehicleServices instances are the same.");
    } else {
      System.out.println("All vehicleServices instances are not the same.");
    }

  }
}
