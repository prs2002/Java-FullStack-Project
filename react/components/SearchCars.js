import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react"
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup,Input } from "reactstrap"
import base_url from "../api/bootapi";
import Cars from "./Cars";

const SearchCars =() => {
    useEffect(()=>{
        document.title = "Search Cars";
    },[])
    const [cars, setCars]= useState([]);
    const handleForm=(e)=>{
        console.log(cars);
        getCarFromServer(cars);
        e.preventDefault();
    };
    //function to call server;
    const getCarFromServer=(id)=>{
        axios.get(`${base_url}/getServers/${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Car Found");
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Something went wrong ");
            }
        )
        return(
            <div>
            <h1>All Cars</h1>
            <p>List of cars are as follows</p>
            <div class="container fluid-py-5">
                {cars.length > 0
                    ?cars.map((item)=> <Cars key={item.id} car={item}  /> )
                    : "No cars with given id found"
                }
            </div>
        </div>
        );
    };
    return(
        <Fragment>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="UserId">Car Id</label>
                    <Input 
                        type="text" 
                        placeholder="Enter car Id" 
                        name = "userId" 
                        id="userId" 
                        onChange={(e)=>{
                            setCars({...cars,id: e.target.value});
                        }}
                        />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color = "success">Search Car</Button>
                </Container>

            </Form>
        </Fragment>
        
    );
};
export default SearchCars;
