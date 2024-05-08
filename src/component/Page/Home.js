import React, { Component } from 'react'
import Nav from '../Nav'
import Hero from '../Hero'

export class Home extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Hero/>
      </div>
    )
  }
}

export default Home