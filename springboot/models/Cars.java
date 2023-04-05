package com.kaiburr1.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Cars")
public class Cars {
	
	@Id
	private int id;
	private String name;
	private String engine;
	public Cars(int id, String name, String engine) {
		super();
		this.id = id;
		this.name = name;
		this.engine = engine;
	}
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEngine() {
		return engine;
	}
	public void setEngine(String engine) {
		this.engine = engine;
	}
	@Override
	public String toString() {
		return "Cars [id=" + id + ", name=" + name + ", engine=" + engine + ", getId()=" + getId() + ", getName()="
				+ getName() + ", getEngine()=" + getEngine() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
