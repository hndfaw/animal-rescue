import React, { Component } from 'react';
import { fetchAddDonation, fetchDonations } from '../../apiCalls';
import { setDonationData } from '../../actions';
import { connect } from 'react-redux';

class AddDonation extends Component {
  state = {
    name: '',
    donation: ''
  }

  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitDonation = e => {
    e.preventDefault()
    const { name, donation } = this.state;
    const id = new Date().getTime();
    const newDonation = {
      id,
      name,
      donation
    }
    fetchAddDonation(newDonation).then(() =>
      fetchDonations().then(data => 
        this.props.handleSetDonationData(data)
        )
    )
    this.clearInput()
  }

  clearInput = () => {
    this.setState({name: '', donation: ''})
  }


  render() {
    return (
      <form>
        <input placeholder="Name" type="text" value={this.state.name} name="name" onChange={this.handleOnChange} />
        <input placeholder="Donation" type="text" value={this.state.donation} name="donation" onChange={this.handleOnChange} />
        <button onClick={this.submitDonation}>Donate!</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleSetDonationData: data => dispatch(setDonationData(data))
})

export default  connect(null, mapDispatchToProps)(AddDonation)
