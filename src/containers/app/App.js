import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { setRescueAnimalData, setDonationData } from '../../actions';
import { fetchRescueAnimals, fetchDonations } from '../../apiCalls';
import  AnimalsContainer  from '../animalContainer/AnimalsContainer';
import DonationContainer from '../donationContainer/DonationContainer';
import AddDonation from '../addDonation/AddDonation';

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

      fetchDonations().then(data =>{
        if (data === 'Error fethcing donation') {
          this.setState({hasErrored: 'Error fethcing donation'})
        } else {
          this.setState({isLoading: true})
          return this.props.handleSetDonationData(data)
        }
      })


  }

  render() {
    return (
      <section className="App">
        <header>
          <h1>Animal Rescue</h1>
          <AddDonation />
        </header>
        <main className="app-main">
          <AnimalsContainer />
          <DonationContainer />
        </main>
          
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSetRescueAnimalData: data => dispatch(setRescueAnimalData(data)),
  handleSetDonationData: data => dispatch(setDonationData(data))
})

export default connect(null, mapDispatchToProps)(App);
