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
    const parkCodes =  ["acad", "arch", "badl", "bibe", "bisc", "blca", "brca", "cany", "care", "cave", "chis", "cuva", "drto", "ever", "glac", "grba", "grca", "grsm", "grte", "gumo", "havo", "hosp", "isro", "jotr", "kefj", "kova", "lavo", "maca", "meve", "mora", "noca", "olym", "pefo", "romo", "sagu", "shen", "thro", "viis", "voya", "wica", "yell", "yose", "zion"];
    this.parkCode = parkCodes[Math.floor(Math.random() * parkCodes.length)];
    this.setState({redirect: true})
  }

  render() {
    if (this.state.redirect === true) {
      return (
        <Redirect to={`/${this.parkCode}`} />
      )
    } else return (
      <div>
      <nav>
        <p>Escape from 2020</p>
        <img id="teddy" src="https://lh3.googleusercontent.com/proxy/A4YjDHRavkpke3RZGkNWjkIKkZOrMHrU2mMTsqajXbUYKqjiv9d6rkE-U1akGjx73oLtWZYLep40ryWG4MoyY-UvdmIMF2fKDURwgdY_2ZQZ5tbzcBqPCotrrCUM2WwncJMKgFN02QWD_CKEvFErgVXxZhFdkqKjx2Men2sE9Eh0pJ1JvnLCAWxKcuQwrXaw8uxE3bd1ig5v" />
        <button onClick={this.pickCode.bind(this)}>Generate Your Escape</button>
      </nav>
        <h2>2020 having you down? Let us plan your escape. Click the button to start.</h2>
        <button id="index-button" onClick={this.pickCode.bind(this)}>Generate Your Escape</button>
      </div>
    )
  }
}

export default LandingPage
