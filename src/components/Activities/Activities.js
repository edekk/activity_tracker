import React from 'react';
import AppContext from '../../context';
import {
    Table,
    Button,
    Alert
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import Summary from '../Summary/Summary';
import './Activities.css';


const sortActivities = (activities) => {
    const compare = (a, b) => {
        const startA = a.start;
        const startB = b.start;

        let comparasion = 0;
        if (startA > startB) {
            comparasion = 1;
        } else if (startA < startB) {
            comparasion = -1;
        }
        return comparasion;
    }
    activities.sort(compare);
    return activities;
}

const Activities = () => {
    return (
        <AppContext.Consumer>
            { ctx => {
                if (ctx.state.activities.length === 0) {
                    return (
                        <Alert variant="primary">
                            <p>Your activites list is empty.</p>
                            <p>Feel free to add some activities to your list.</p>
                            <Link to="/add-activity"><Button variant="primary">Add activity</Button></Link>
                        </Alert>
                    );
                } else {
                    sortActivities(ctx.state.activities);
                    return (
                        <>
                            <Table 
                                className="ActivitiesTable"
                                size="sm"
                                hover={true}
                                striped={true}
                                bordered={true}
                                responsive={true}>
                                <thead>
                                    <tr>
                                        <th>Start time</th>
                                        <th>End time</th>
                                        <th>Description</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ctx.state.activities.map( (activity, index) => 
                                            <tr key={activity.id}>
                                                <td>{activity.start}</td>
                                                <td>{activity.end}</td>
                                                <td>{activity.description}</td>
                                                <td className="align-right"><Button onClick={() => ctx.state.removeActivity(index)} variant="danger">x</Button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                                
                            </Table>
                            <Summary activities={ctx.state.activities} />
                        </>
                    );
                }
            }}
        </AppContext.Consumer>
    );
}

export default Activities;