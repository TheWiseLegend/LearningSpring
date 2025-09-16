package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Example4 {

    public static void main(String[] args) {

        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle veh1 = context.getBean("protonSaga",Vehicle.class);
        System.out.println("Vehicle name from Spring Context: " + veh1.getName());

        Vehicle veh2 = context.getBean("audi", Vehicle.class);
        System.out.println("Vehicle name from Spring context: " + veh2.getName());

        Vehicle veh3 = context.getBean("honda", Vehicle.class);
        System.out.println("Vehicle name from Spring context: " + veh3.getName());

        Vehicle primaryVehicle = context.getBean(Vehicle.class);
        System.out.println("Primary Vehicle name from Spring context: " + primaryVehicle.getName());

    }
}
