import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, CardText, Container } from "reactstrap";
import base_url from "../api/bootapi";

const Cars=({car,update}) =>{

    const deleteCars=(id)=>{
        axios.delete(`${base_url}/deleteServer/${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Cars Removed");
                update(id);
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }
    return(
        <div className='mb-2'>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', width:"80%", height:"10%"}} >
            <CardHeader>ID : {car.id}</CardHeader>
            <CardBody>
                <CardText>Car Model :{car.name}</CardText>
                <CardText>Engine :{car.engine}</CardText>
                <Container >
                    <Button 
                        color="danger"
                        onClick={()=>{
                            deleteCars(car.id);
                        }}
                    >
                        Delete</Button>
                </Container>
            </CardBody>
        </Card>
        </div>
    )
}

export default Cars;