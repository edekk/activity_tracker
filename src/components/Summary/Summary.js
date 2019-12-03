import React from 'react';// eslint-disable-next-line
import { StringToMs, MsToHours } from '../../utilities/TimeConverter'; 

// const isOverlaping = (end, start) => {

// }


const summary = (props) => {
    const createStartEndArrays = (start, end) => {
        return [start, end];
    }

    let finalArray = [];

    const timesArray = [];
    props.activities.map( (element) => timesArray.push(createStartEndArrays(StringToMs(element.start), StringToMs(element.end))));

    const compareIntervals = (a) => {
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

    timesArray.map( element => compareIntervals(element))

    console.log(finalArray);
    
    return(
        <>
        </>
    );
}

export default summary;