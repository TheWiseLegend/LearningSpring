package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Example1 {

    public static void main(String[] args) {
        Vehicle vehicle = new Vehicle();
        vehicle.setName("BMW");
        System.out.println("Vehicle name from non-spring context: " + vehicle.getName());

        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle veh = context.getBean(Vehicle.class);
        System.out.println("Vehicle name from Spring context: " + veh.getName());

        String hello = context.getBean(String.class);
        System.out.println("Hello from Spring context: " + hello);

        Integer number = context.getBean(Integer.class);
        System.out.println("Number from Spring context: " + number);
    }
}
