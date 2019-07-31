import React, { Component } from 'react';
import { fetchAddDonation } from '../../apiCalls';

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
    fetchAddDonation(newDonation)
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

export default  AddDonation
