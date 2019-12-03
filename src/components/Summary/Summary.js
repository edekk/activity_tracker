import React from 'react';
import { 
    Col,
    Alert
} from 'react-bootstrap';
import { TimeToMs, MsToTime } from '../../utilities/TimeConverter'; 

const summary = (props) => {
    const createStartEndArrays = (start, end) => {
        return [start, end];
    }

    let finalArray = [];

    const timesArray = [];
    props.activities.map( (element) => timesArray.push(createStartEndArrays(TimeToMs(element.start), TimeToMs(element.end))));

    const calculateIntervals = (a) => {
        if (finalArray.length > 0) {
            let toCompareWith = finalArray[finalArray.length - 1];
            if (toCompareWith[1] > a[0]) {
                if (toCompareWith[1] < a[1]) {
                    finalArray[finalArray.length-1][1] = a[1];
                } else {
                    return;
                }
            } else {
                finalArray.push(a);
            }
        } else {
            finalArray.push(a);
        }
    };

    timesArray.map( element => calculateIntervals(element))

    let activityTime = 0;

    for (let element of finalArray) {
        activityTime += element[1] - element[0];
    }

    activityTime = MsToTime(activityTime);
    activityTime = (activityTime.split(':'));
    
    return(
        <Col>
            <Alert variant="success"><h5 className="text-center">Your overall activity time today is {activityTime[0]} hours {activityTime[1]} minutes</h5></Alert>
        </Col>
    );
}

export default summary;