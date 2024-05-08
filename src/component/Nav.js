import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (
      <div className='nav-container'>
        <div className="nav-band">
          <a href="http://">J<span>S</span>Ex</a>
        </div>
        <div className="link-list">
            <a href="/">HOME</a>
            <a href="/">SKILLS</a>
            <a href="/">PORTFOLIO</a>
            <a href="/">CONTACT-US</a>
        </div>
        <div className="lgin-btn">
            <input type="submit" />
        </div>
      </div>
    );
  }
}

export default Nav;
