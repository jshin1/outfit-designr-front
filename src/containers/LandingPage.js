import React, { Component } from 'react';

class LandingPage extends Component {

  render() {
    return (
      <div className='landing-page'>

        <div className='landing-page-bar'>
          <h1>Outfit Designr</h1>

          <div className='login'>
            <input placeholder='Username'></input>
            <input placeholder='Password'></input>
            <button>Sign In</button>
          </div>
        </div>

        <div className='signup'>
          <div className='tagline'>{"Creating a timeless outfit is easy. We'll show you how."}</div><br/>
          First name
          <input></input><br/>
          Last name
          <input></input><br/>
          Username
          <input></input><br/>
          Password
          <input></input><br/>

          <div className='agreement'>
            {"By clicking 'Join Now', you agree to be awesome."}
          </div><br/>

          <button>Join Now</button>
        </div>

        <div className='sitemap'>
        Sitemap
        </div>
      </div>
    );
  }

}

export default LandingPage;
