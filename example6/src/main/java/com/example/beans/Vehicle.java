package com.example.beans;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
public class Vehicle {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @PostConstruct
    public void intialize(){
        this.name="Proton";
    }

    public void printHello(){
        System.out.println("Hello World im coming from a bean");
    }

    @PreDestroy
    public void destroy(){
        System.out.println("Destroying bean");
    }
}
