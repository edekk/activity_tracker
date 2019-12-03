import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';
import Activities from './components/Activities/Activities';
import ActivityForm from './components/ActivityForm/ActivityForm';

const AppRoutes = (props) => {
    return (
        <Router>

            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/activities">Activities list</Link>
                        </li>
                        <li>
                            <Link to="/add-activity">Add activity</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/activities">
                <Activities 
                    activities={props.state.activities}
                    removeActivityHandler={props.removeActivityHandler}/>
            </Route>

            <Route path="/add-activity">
                <ActivityForm addActivityHandler={props.addActivityHandler}/>
            </Route>

        </Router>
    );
}

export default AppRoutes;