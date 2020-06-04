import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

class LandingPage extends Component {
  constructor() {
    super()

    this.state = {
      redirect: false
    }
  }

  pickCode() {
    const parkCodes = ['shen', 'acad'];
    this.parkCode = parkCodes[Math.floor(Math.random() * parkCodes.length)];
    this.setState({redirect: true}, () => console.log(this.state.redirect))

  }

  render() {
    if (this.state.redirect === true) {
      return (
        <Redirect to={`/${this.parkCode}`} />
      )
    } else return (
      <div>
        <nav>
          <p>Nat'l Parks Trip Planner</p>
          <button>Generate Next Trip</button>
        </nav>
        <h2>Plan your next getaway by clicking the "generate trip" button</h2>
        <button id="index-button" onClick={this.pickCode.bind(this)}>Generate Trip</button>
      </div>
    )
  }
}

export default LandingPage
