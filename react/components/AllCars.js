import React, { useState,useEffect } from "react";
import Cars from "./Cars";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCars = () => {

    useEffect(()=>{
        document.title = "Manage Cars";
    },[])

    //function to call server;
    const getAllCarsFromServer=()=>{
        axios.get(`${base_url}/getServers`).then(
            (response)=>{
                console.log(response.data);
                toast.success("Cars have been loaded");
                setCars(response.data)
            },
            (error)=>{
                //for error
                console.log(error);
                toast.error("Something went wrong");
            }
        )
    }

    useEffect(()=> {
        getAllCarsFromServer();
    }, []);

    const [cars, setCars]= useState([
    ]);
    const updateCarsfromServer=(id)=>{
        setCars(cars.filter((c)=>c.id !==id));
    };
    return (
        <div>
            <h2>All Cars</h2>
            <p class="lead">List of cars are as follows</p>
            <div>
                {cars.length > 0
                    ?cars.map((item)=> <Cars key={item.id} car={item} update={updateCarsfromServer} /> )
                    : "No cars available"
                }
            </div>
        </div>
    );
};

export default AllCars;
