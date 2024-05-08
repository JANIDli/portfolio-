import React, { Component } from 'react'

export class Hero extends Component {
  render() {
    return (
      <div className='hero-container'>
        <div className="text">
            <h2><span>WEB</span> DEVELOPER</h2>
            <h1><span>Janitha</span> Dilshan</h1>
            <h3>Hello i;m proffessional freelanace web developer if you want monay come back</h3>
            <br />
            <input type="submit" value={"VIWE PORTFOLIO"}/>
        </div>
        <div className="hero-img">
            <img src="home2.png" alt="" />
        </div>
      </div>
    )
  }
}

export default Hero