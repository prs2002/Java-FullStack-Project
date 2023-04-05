import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home=() =>{
    useEffect(()=>{
        document.title = "Home";
    },[])
    return(
        <div>
            
                <h1 className="display-5">Welcome to the Cars Application.</h1>
                <p class="lead">his is a basic WEB UI frontend for the application that was created for Task 1. 
                This WEB UI uses React for frontend and springboot for backend. This web application is able
                to create, show and delete records from the UI and update them simultaneously in the database. </p>
                <hr class="my-4"></hr>
                <Container>
                    <Button color="primary" >
                        Start Using
                    </Button>
                </Container>
            
        </div>
    )
}

export default Home;