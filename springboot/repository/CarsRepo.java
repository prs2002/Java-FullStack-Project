package com.kaiburr1.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.kaiburr1.models.Cars;

@Repository
public interface CarsRepo extends MongoRepository<Cars,Integer> {
	
	public List<Cars> findByName(String name);
	
}
