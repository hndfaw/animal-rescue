import React, { Component } from 'react';
import { connect } from 'react-redux';
import './donationContainer.css';


class DonationContainer extends Component {
  render() {
    const { donations } = this.props
    const donationCard = donations.map(donation => {

      return (
        <div key={donation.id} className="donation-card-container">
            <p className="donation-detail"><span>{donation.name}</span>recently donated <span>${donation.donation}</span></p>
        </div>
      )
    })
    return (
      <div>
        {donationCard}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  donations: state.donations
})

export default  connect(mapStateToProps, null)(DonationContainer)