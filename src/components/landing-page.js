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
    const parkCodes =  ["acad", "arch", "badl", "bibe", "bisc", "blca", "brca", "cany", "care", "cave", "chis", "cuva", "drto", "ever", "glac", "grba", "grca", "grsm", "grte", "gumo", "havo", "hosp", "isro", "jotr", "kefj", "kica", "kova", "lavo", "maca", "meve", "mora", "noca", "olym", "pefo", "romo", "sagu", "sequ", "shen", "thro", "viis", "voya", "wica", "yell", "yose", "zion"];
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
