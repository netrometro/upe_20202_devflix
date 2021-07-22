package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;

@ServletComponentScan
@SpringBootApplication
public class DevflixApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(DevflixApplication.class, args);
	}

}
