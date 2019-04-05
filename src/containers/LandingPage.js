import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    return (
      <div className='landing-page'>
        <div className='image-one'></div>
        <div className='tagline'>{"Creating a timeless outfit is easy. We'll show you how."}</div>
        <div className='landing-page-bar'>
          <h1>Outfit Designr</h1>

          <div className='login'>
            <input placeholder='Username'></input>
            <input placeholder='Password'></input>
            <button>Sign In</button>
          </div>


        </div>
      </div>
    );
  }

}

export default LandingPage;
