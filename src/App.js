import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import AppRoutes from './router';

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
        <AppRoutes state={this.state}/>
    );
  }
}

export default App;
