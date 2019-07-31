import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setRescueAnimalData, setDonationData } from '../actions';
import { fetchRescueAnimals } from '../apiCalls';
import  AnimalsContainer  from './animalContainer/AnimalsContainer';

class App extends Component {
  state = {
    isLoading: false,
    hasErrored: '',
  }

  componentDidMount() {
    fetchRescueAnimals().then(data =>{
        if (data === 'Error fethcing rescue animals') {
          this.setState({hasErrored: 'Error fethcing rescue animals'})
        } else {
          this.setState({isLoading: true})
          return this.props.handleSetRescueAnimalData(data)
        }
      })



      // handleSetDonationData
  }

  render() {
    return (
      <section className="App">
          <AnimalsContainer />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSetRescueAnimalData: data => dispatch(setRescueAnimalData(data)),
  handleSetDonationData: data => dispatch(setDonationData(data))
})

export default connect(null, mapDispatchToProps)(App);
