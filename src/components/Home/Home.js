import React from 'react';
import { 
    Jumbotron,
    Button
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

const Home = () => {
    return (
        <Jumbotron>
            <h1>Welcome</h1>
            <p>
                This is a simple activity tracker, which might help you organize your time during the day
                and keep track of important events.
            </p>
            <p>
                <Link to="/add-activity"><Button variant="primary">Add activity</Button></Link>
            </p>
        </Jumbotron>
    );
}

export default Home;