import React from 'react';
import {
    Table,
    Button
} from 'react-bootstrap';

import './Activities.css';

const activities = (props) => {
    return (
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
                        <td>{el.start_time}</td>
                        <td>{el.end_time}</td>
                        <td><Button variant="danger">Remove</Button></td>
                    </tr>
                    )
                }
            </tbody>
            
        </Table>
    );

}

export default activities;