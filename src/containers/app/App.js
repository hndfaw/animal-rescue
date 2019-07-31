import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { setRescueAnimalData, setDonationData } from '../../actions';
import { fetchRescueAnimals, fetchDonations } from '../../apiCalls';
import  AnimalsContainer  from '../animalContainer/AnimalsContainer';
import DonationContainer from '../donationContainer/DonationContainer'

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



      // handleSetDonationData
  }

  render() {
    return (
      <section className="App">
        <main className="app-main">
          <DonationContainer />
          <AnimalsContainer />
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
