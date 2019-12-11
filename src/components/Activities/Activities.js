import React from 'react';
import { useStore } from '../../context';

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
    const { state, dispatch } = useStore();

    if (state.activities.length === 0) {
        return (
            <Alert variant="primary">
                <p>Your activites list is empty.</p>
                <p>Feel free to add some activities to your list.</p>
                <Link to="/add-activity"><Button variant="primary">Add activity</Button></Link>
            </Alert>
        );
    } else {
        sortActivities(state.activities);
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
                            state.activities.map( (activity, index) => 
                                <tr key={activity.id}>
                                    <td>{activity.start}</td>
                                    <td>{activity.end}</td>
                                    <td>{activity.description}</td>
                                    <td className="align-right">
                                        <Button 
                                            onClick={() => {
                                                if (window.confirm("Do you really want to remove this activity?")) { 
                                                    dispatch({ type: 'REMOVE_ACTIVITY', activityIndex: index})
                                                }
                                            } }
                                            variant="danger">
                                                x
                                        </Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <Summary activities={state.activities} />
            </>
        );
    }
}

export default Activities;