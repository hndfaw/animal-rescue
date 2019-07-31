import React, { Component } from 'react';
import { connect } from 'react-redux';


class AnimalsContainer extends Component {
  render() {
    console.log(this.props.animalRescue)
    return (
      <div>
        animals...
      </div>
    )
  }
}

const mapStateToProps = state => ({
  animalRescue: state.animalRescue
})

export default connect(mapStateToProps, null)(AnimalsContainer);
