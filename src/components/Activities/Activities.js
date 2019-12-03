import React from 'react';
import {
    Table,
    Button,
    Alert
} from 'react-bootstrap';
import Summary from '../Summary/Summary';
import './Activities.css';

const removeActivity = (index, remove) => {
    if (window.confirm("Do you really want to remove this activity?")) {
        remove(index)
    }
}

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
}

const activities = (props) => {
    console.log(props.activities.length)
    if (props.activities.length === 0) {
        return(
            <Alert variant="primary">
                Feel free to add some activities to your list
            </Alert>
        );
    } else {
        sortActivities(props.activities);
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
                            props.activities.map( (el, i) => 
                            <tr key={i}>
                                <td>{el.start}</td>
                                <td>{el.end}</td>
                                <td>{el.description}</td>
                                <td className="align-right"><Button onClick={() => removeActivity(i, props.removeActivityHandler)} variant="danger">x</Button></td>
                            </tr>
                            )
                        }
                    </tbody>
                    
                </Table>
                <Summary activities={props.activities} />
            </>
        );
    }
}

export default activities;