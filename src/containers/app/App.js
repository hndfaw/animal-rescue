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
    isLoading: true,
    hasErrored: '',
  }

  componentDidMount() {
    fetchRescueAnimals().then(data =>{
        if (data === 'Error') {
          this.setState({hasErrored: 'Error Fethcing Animals Data'})
          this.setState({isLoading: false})
        } else {
          
          return this.props.handleSetRescueAnimalData(data)
        }
      })

      fetchDonations().then(data =>{
        if (data === 'Error') {
          this.setState({hasErrored: 'Error Fetching Donation Data!'})
          this.setState({isLoading: false})
        } else {
          
          return this.props.handleSetDonationData(data)
        }
      })


  }

  render() {
    const { isLoading, hasErrored } = this.state;
    console.log(isLoading)
    return (
      <section className="App">
        <header>
          <h1>Animal Rescue</h1>
          <AddDonation />
        </header>
       
        <main className="app-main">
          { !isLoading ? <h3 className="error-msg">{hasErrored}</h3> :
            <>
              <AnimalsContainer />
              <DonationContainer />
            </>
          }
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
