package com.example.config;

import com.example.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProjectConfig {

    @Bean
    Vehicle vehicle(){
        var veh = new Vehicle();
        veh.setName("Proton Saga");
        return veh;
    }

    @Bean
    String hello(){
        return "hello";
    }

    @Bean
    Integer number(){
        return 16;
    }
}
