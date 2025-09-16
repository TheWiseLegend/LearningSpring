package com.example.main;

import com.example.beans.Vehicle;
import com.example.config.ProjectConfig;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Random;
import java.util.function.Supplier;

public class Example7 {

    public static void main(String[] args) {

        var context = new AnnotationConfigApplicationContext(ProjectConfig.class);

        Vehicle proton = new Vehicle();
        proton.setName("Proton");
        Supplier<Vehicle> protonSupplier = () -> proton;

        Supplier<Vehicle> bmwSupplier = () -> {
                Vehicle bmw = new Vehicle();
                bmw.setName("BMW");
                return bmw;
        };

        Random random = new Random();
        int randomNumber = random.nextInt(10);
        System.out.println("Random number: " + randomNumber);

        if (randomNumber % 2 == 0) {
            context.registerBean("proton", Vehicle.class, protonSupplier);
        } else {
            context.registerBean("bmw", Vehicle.class, bmwSupplier);
        }

        Vehicle protonVehicle = null;
        Vehicle bmwVehicle = null;

        try {
            protonVehicle = context.getBean("proton", Vehicle.class);
        } catch (NoSuchBeanDefinitionException e) {
            System.out.println("No proton bean found");
        }

        try {
            bmwVehicle = context.getBean("bmw", Vehicle.class);
        } catch (NoSuchBeanDefinitionException e) {
            System.out.println("No bmw bean found");
        }

        if (protonVehicle != null ) {
            System.out.println("proton bean found with context: " + protonVehicle.getName());
        } else {
            System.out.println("Bmw vehicle bean found with context: " + bmwVehicle.getName());
        }


    }
}
