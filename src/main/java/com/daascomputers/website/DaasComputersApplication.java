package com.daascomputers.website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


//@EnableJpaRepositories(basePackages = "repository")
//@EntityScan(basePackages = "entities")
@SpringBootApplication
public class DaasComputersApplication {

    public static void main(String[] args) {
        SpringApplication.run(DaasComputersApplication.class, args);
    }

}