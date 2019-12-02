import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  Container,
} from 'react-bootstrap';

import Activities from './components/Activities/Activities';
import ActivityForm from './components/ActivityForm/ActivityForm';
import Summary from './components/Summary/Summary';

class App extends Component {
  state = {
    activities: [
      {
        start_time: '08:00',
        end_time: '17:00',
        description: 'scope'
      },
      {
        start_time: '14:00',
        end_time: '16:00',
        description: 'first todo'
      }
    ]
  }
  render() {
    return (
      <Container>
        <ActivityForm />
        <Activities activities={this.state.activities}/>
        <Summary />
      </Container>
    );
  }
}

export default App;
