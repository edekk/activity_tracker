import React from 'react';

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

import { StringToMs as Miliseconds } from '../../utilities/TimeConverter';


const ActivityForm = (props) => {

    const addActivity = (event) => {
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

        if (Miliseconds(newActivity.start) >= Miliseconds(newActivity.end)) {
            errors += "Activity start time must be before end time\n";
        }
        if (newActivity.description.length < 1) {
            errors += "Activity description must not be empty\n";
        }
        
        if (errors !== '') {
            alert(errors);
        } else {
            props.addActivityHandler(newActivity);
            event.target.reset();
            alert("Activity has been added!");
        }
    }

    return (
        <Form onSubmit={addActivity}>
            <Form.Group controlId="formActivityDescription">
                <Form.Label>Activity description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter activity description" />
                <Form.Text className="text-muted">
                    e.g., Meeting, Project handover
                </Form.Text>
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group controlId="formActivityStartTime">
                        <Form.Label>Start time</Form.Label>
                        <TimePicker 
                            defaultValue={moment()} 
                            showSecond={false}
                            name="start" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formActivityEndTime">
                        <Form.Label>End time</Form.Label>
                        <TimePicker 
                        defaultValue={moment()} 
                        showSecond={false}
                        name="end" />
                    </Form.Group>
                </Col>
            </Row>

            <Button type="submit" name="submit" variant="primary">
                Submit
            </Button>
        </Form>
    );
}

export default ActivityForm;