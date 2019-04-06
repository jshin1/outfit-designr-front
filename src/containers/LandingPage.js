import React, { Component } from 'react';

import { connect } from 'react-redux';
import Profile from './Profile';

class LandingPage extends Component {

  state = {
    username: null,
    password: null
  }

  // signIn = () => {
  //   fetch('http://localhost:3000/api/v1/users')
  //   .then(res => res.json())
  //   .then(users => {
  //     let foundUser = users.find(user => user.username === this.state.username)
  //
  //     if (foundUser) {
  //       console.log(foundUser)
  //       this.props.logInUser(foundUser)
  //       // return <Redirect to='/profile'/>
  //     } else {
  //       console.log("???")
  //     }
  //   })
  // }

  handleSubmit = e => {
    // this.setState({
    //   loading: true
    // })

    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username.trim(),
        password: this.state.password
      })
    })
    .then(res => res.json())
    .then(data => {

      if (Object.keys(data).includes("error")) {
        // this.props.handleLoginError(data)
      } else {
        console.log("logged in")
        this.props.loginUser(data)
        this.props.login()

      }

    })
  }

  render() {
    return (
      <div>
        {
          this.props.loggedIn ?
          <Profile />
          :
          <div className='landing-page'>

            <div className='landing-page-bar'>
              <h1>Outfit Designr</h1>

              <div className='login'>
                <input onChange={(event) => this.setState({username: event.target.value})} placeholder='Username'></input>
                <input onChange={(event) => this.setState({password: event.target.value})} type='password' name='password' placeholder='Password'></input>
                <button onClick={this.handleSubmit}>Sign In</button>
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
              <input type='password' name='password'></input><br/>

              <div className='agreement'>
                {"By clicking 'Join Now', you agree to be awesome."}
              </div><br/>

              <button>Join Now</button>
            </div>

            <div className='sitemap'>
            Sitemap
            </div>
          </div>
        }
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // logOut: dispatch({type: 'LOG_IN', payload: false}),
    login: () => dispatch({type: 'LOG_IN', payload: true}),
    loginUser: (data) => dispatch({type: 'SET_USER', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
