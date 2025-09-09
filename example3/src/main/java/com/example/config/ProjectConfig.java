package com.example.config;

import com.example.beans.Vehicle;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class  ProjectConfig {

    @Bean(name="protonSaga")
    Vehicle vehicle1(){
        var veh = new Vehicle();
        veh.setName("Proton Saga");
        return veh;
    }

    @Bean(value = "audi")
    Vehicle vehicle2(){
        var veh = new Vehicle();
        veh.setName("Audi");
        return veh;
    }

    @Bean("honda")
    Vehicle vehicle3(){
        var veh = new Vehicle();
            veh.setName("Honda");
        return veh;
    }




}
