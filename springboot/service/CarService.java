package com.kaiburr1.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.kaiburr1.models.Cars;
import com.kaiburr1.repository.CarsRepo;

@Service
public class CarService{
	
	@Autowired
	public CarsRepo carsRepo;
	public ResponseEntity<List<Cars>> getAllServers(){
		
		List<Cars> list= carsRepo.findAll();
		if(list.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(list));
	}
	public ResponseEntity<Optional<Cars>> getServerById(int id) {
		Optional<Cars> list= carsRepo.findById(id);
		if(list.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();		
		}
		return ResponseEntity.of(Optional.of(list));
	}
	public String addServer(Cars car) {
		carsRepo.insert(car);
		return "Server added :" + car;
	}
	
	public String deleteServer(int id) {
		Optional<Cars> car=carsRepo.findById(id);
		carsRepo.deleteById(id);
		return "Server deleted : "+ car;
	}
	
	public ResponseEntity<List<Cars>> getServerByName(String name) {
		List<Cars> car= carsRepo.findByName(name);
		if(car.isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		return ResponseEntity.of(Optional.of(car));
	}
	
}