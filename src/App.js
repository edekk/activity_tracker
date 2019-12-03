import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import AppRoutes from './router';
import RandomId from './utilities/IdGenerator';

class App extends Component {
  state = {
    activities: []
  }

  addActivityHandler = (newActivity) => {
    this.setState( previousState => ({
      activities: [...previousState.activities,
        {
          start: newActivity.start,
          end: newActivity.end,
          description: newActivity.description,
          id: RandomId()
        }
      ]
    }) )
  }

  removeActivityHandler = (activityIndex) => {
    const activities = [...this.state.activities];
    activities.splice(activityIndex, 1);
    this.setState( { activities: activities} );
  }



  render() {
    return (
      <Container>
        <AppRoutes 
          state={this.state}
          addActivityHandler={this.addActivityHandler}
          removeActivityHandler={this.removeActivityHandler}/>
      </Container>
    );
  }
}

export default App;
