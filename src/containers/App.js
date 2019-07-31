import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setRescueAnimalData } from '../actions';
import { fetchRescueAnimals } from '../apiCalls';

class App extends Component {


  componentDidMount() {
    fetchRescueAnimals()
  }

  render() {
    return (
      <div className="App">
  
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>

export default connect(null, null)(App);
