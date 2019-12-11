import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import AppRoutes from './router';

class App extends Component {
  render() {
    return (
      <Container>
        <AppRoutes />
      </Container>
    );
  }
}

export default App;
