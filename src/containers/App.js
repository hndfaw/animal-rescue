import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setRescueAnimalData } from '../actions';
import { fetchRescueAnimals } from '../apiCalls';

class App extends Component {


  componentDidMount() {
    fetchRescueAnimals().then(data =>
      this.props.handleSetRescueAnimalData(data)
      )
  }

  render() {
    return (
      <div className="App">
  
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSetRescueAnimalData: data => dispatch(setRescueAnimalData(data))
})

export default connect(null, mapDispatchToProps)(App);
