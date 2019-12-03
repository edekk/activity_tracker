import React from 'react';
import {
    Table,
    Button
} from 'react-bootstrap';
import Summary from '../Summary/Summary';
import './Activities.css';

const removeActivity = (index, remove) => {
    if (window.confirm("Do you really want to remove this activity?")) {
        remove(index)
    }
}

const activities = (props) => {
    return (
        <>
            <Table className="ActivitiesTable">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Start time</th>
                        <th>End time</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.activities.map( (el, i) => 
                        <tr key={i}>
                            <td>{el.description}</td>
                            <td>{el.start}</td>
                            <td>{el.end}</td>
                            <td><Button onClick={() => removeActivity(i, props.removeActivityHandler)} variant="danger">Remove</Button></td>
                        </tr>
                        )
                    }
                </tbody>
                
            </Table>
            <Summary activities={props.activities} />
        </>
    );

}

export default activities;