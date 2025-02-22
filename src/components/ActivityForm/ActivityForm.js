import React from 'react';
import { useStore } from '../../context';

import { 
    Button,
    Row,
    Col,
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

// TimePicker imports
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
//

import { TimeToMs } from '../../utilities/TimeConverter';



const parseActivity = (event, dispatch) => {
    let errors = '';
    event.preventDefault();
    
    let newActivity = {};
    for (let input of event.target) {
        if (input.name !== "submit") {
            let property = input.name;
            let value = input.value;
            newActivity[`${property}`] = value;
        }
    }

    if (TimeToMs(newActivity.start) >= TimeToMs(newActivity.end)) {
        errors += "Activity start time must be before end time\n";
    }
    if (newActivity.description.length < 1) {
        errors += "Activity description must not be empty\n";
    }
    
    if (errors !== '') {
        alert(errors);
    } else {
        dispatch({ type: 'ADD_ACTIVITY', newActivity: newActivity})
        event.target.reset();
        alert("Activity has been added!");
    }
}


const ActivityForm = () => {
    const { dispatch } = useStore();
    return (
        <Form onSubmit={ (e) => { parseActivity(e, dispatch) } }>
            <Form.Group controlId="formActivityDescription">
                <Form.Label className="font-weight-bold">Activity description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter activity description" />
                <Form.Text className="text-muted">
                    e.g., Meeting, Project handover
                </Form.Text>
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group controlId="formActivityStartTime">
                        <Form.Label className="font-weight-bold mr-2">Start time</Form.Label>
                        <TimePicker 
                            defaultValue={moment()} 
                            showSecond={false}
                            name="start"
                            id="start_id"
                            autocomplete="off" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formActivityEndTime">
                        <Form.Label className="font-weight-bold mr-2">End time</Form.Label>
                        <TimePicker 
                        defaultValue={moment()} 
                        showSecond={false}
                        name="end"
                        id="end_id"
                        autocomplete="off" />
                    </Form.Group>
                </Col>
            </Row>

            <Button className="float-right" name="submit" type="submit" variant="primary">
                Submit
            </Button>
        </Form>
    );
}

export default ActivityForm;