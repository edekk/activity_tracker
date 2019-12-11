import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import { 
    Navbar,
    Nav,
} from 'react-bootstrap';

import AppProvider from './provider';

import Home from './components/Home/Home';
import Activities from './components/Activities/Activities';
import ActivityForm from './components/ActivityForm/ActivityForm';
import './App.css';


const AppRoutes = () => {
    return (
        <AppProvider>
            <Router>
                <Navbar expand="md" bg="dark" variant="dark">
                    <Link to="/" className="NavbarBrandLink">Activities tracker</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="">
                            <Link className="NavbarLink" to="/activities">Activities list</Link>
                            <Link className="NavbarLink" to="/add-activity">Add activity</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                <Route exact path="/" component={Home} />

                <Route path="/activities" component={Activities} />

                <Route path="/add-activity" component={ActivityForm} />

            </Router>
        </AppProvider>
    );
}

export default AppRoutes;