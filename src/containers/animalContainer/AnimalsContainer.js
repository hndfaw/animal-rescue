import React, { Component } from 'react';
import { connect } from 'react-redux';
import './animalContainer.css';


class AnimalsContainer extends Component {
  render() {
    const { animalRescue } = this.props
    const animalCard = animalRescue.map(animal => {

      return (
        <div key={animal.id} className="animal-card-container">
            <img className="animal-card-img" src={animal.img} alt="animal" />
            <h4 className="animal-card-name">{animal.name}</h4>
            <p><span>Species: </span>{animal.species}</p>
            <p className="animal-card-description">{animal.description}</p>
        </div>
      )
    })
    return (
      <section className="main-animal-container">
        {animalCard}
      </section>
    )
  }
}

const mapStateToProps = state => ({
  animalRescue: state.animalRescue
})

export default connect(mapStateToProps, null)(AnimalsContainer);
