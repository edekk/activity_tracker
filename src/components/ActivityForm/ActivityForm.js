import React, { Component } from 'react';

import { 
    Button,
    Row,
    Col
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


class ActivityForm extends Component {
    render() {
        return (
            <>
                <Form>
                    <Form.Group controlId="formActivityDescription">
                        <Form.Label>Activity description</Form.Label>
                        <Form.Control type="description" placeholder="Enter activity description" />
                        <Form.Text className="text-muted">
                        e.g., Meeting, Project handover
                        </Form.Text>
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group controlId="formActivityStartTime">
                                <Form.Label>Start time</Form.Label>
                                <Form.Control type="start_time" placeholder="08:00" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formActivityEndTime">
                                <Form.Label>End time</Form.Label>
                                <Form.Control type="end_time" placeholder="10:30" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}

export default ActivityForm;