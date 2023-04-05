import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react"
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup,Input } from "reactstrap"
import base_url from "../api/bootapi";

const AddCars =() => {
    useEffect(()=>{
        document.title = "Add Cars";
    },[])
    const [cars, setCars]= useState([]);
    const handleForm=(e)=>{
        console.log(cars);
        postDataToServer(cars);
        e.preventDefault();
    };
    //function to call server;
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/addServer`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Cars added successfully");
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }
    return(
        <Fragment>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="UserId">Car Id</label>
                    <Input 
                        type="text" 
                        placeholder="Enter car id" 
                        name = "userId" 
                        id="userId" 
                        onChange={(e)=>{
                            setCars({...cars,id: e.target.value});
                        }}
                        />
                </FormGroup>

                <FormGroup>
                    <label for="name">Model Name</label>
                    <Input 
                        type="text" 
                        placeholder="Enter model name" 
                        id="name"
                        onChange={(e)=>{
                            setCars({...cars,name: e.target.value});
                        }}
                        />
                </FormGroup>

                <FormGroup>
                    <label for="engine">Engine</label>
                    <Input 
                        type="text" 
                        placeholder="Enter engine details" 
                        id="engine" 
                        onChange={(e)=>{
                            setCars({...cars,engine: e.target.value});
                        }}
                        />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color = "success">Add Car</Button>
                    <Button color = "warning ml-2">Clear</Button>
                </Container>

            </Form>
        </Fragment>
        
    );
};
export default AddCars;
