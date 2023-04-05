package com.kaiburr1.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kaiburr1.models.Cars;
import com.kaiburr1.service.CarService;

import io.swagger.annotations.ApiOperation;
@RestController
public class MyController {
	
	@Autowired
	public CarService carService;
	@ApiOperation("Returns Cars")
	@GetMapping("/getServers")
	public ResponseEntity<List<Cars>> getAllServers() {
		return carService.getAllServers();
	}
	
	@GetMapping("/getServers/{id}")
	public ResponseEntity<Optional<Cars>> getServerById(@PathVariable("id") int id) {
		
		return carService.getServerById(id);	
	}
	@CrossOrigin
	@PostMapping("/addServer")
	public String addServer(@RequestBody Cars server) {
		
		return carService.addServer(server);
	}
	@CrossOrigin
	@DeleteMapping("/deleteServer/{id}")
	public String deleteServer(@PathVariable("id") int id) {
		
		return carService.deleteServer(id);
	}
	
	@GetMapping("/getServer/{name}")
	public ResponseEntity<List<Cars>> getServer(@PathVariable("name") String name) {
		return carService.getServerByName(name);
	}
}
