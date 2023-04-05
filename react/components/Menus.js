import React from "react";
import { Link } from "react-router-dom"
import { ListGroup } from "reactstrap"

const Menu = () => {
    return(
        <ListGroup>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/"
                action
            >
                Home
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/add-cars"
                action
            >
                Add Cars
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/search-cars"
                action
            >
                Search Car
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                tag="a"
                to="/all-cars"
                action
            >
                Manage Cars
            </Link>
            
        </ListGroup>
    );
};

export default Menu;