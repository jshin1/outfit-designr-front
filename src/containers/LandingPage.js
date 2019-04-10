import React, { Component } from 'react';

import { connect } from 'react-redux';
import Profile from './Profile';

class LandingPage extends Component {

  state = {
    firstName: null,
    lastName: null,
    username: null,
    password: null,
    bio: null
  }

  // signIn = () => {
  //   fetch('process.env.REACT_APP_APIURL/users')
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



  handleSignUp = (e) => {
    fetch(`${process.env.REACT_APP_APIURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        username: this.state.username.trim(),
        password: this.state.password,
        bio: this.state.bio,
        avatar: 'https://group55.co.uk/wp-content/uploads/2017/09/ICACHEF1.jpg'
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(`${process.env.REACT_APP_APIURL}/users`)
      return this.handleLogin()
    })
  }

  handleLogin = e => {
    fetch(`${process.env.REACT_APP_APIURL}/login`, {
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
                <button onClick={this.handleLogin}>Sign In</button>
              </div>
            </div>

            <div className='signup'>
              <div className='tagline'>{"Creating a timeless outfit is easy. We'll show you how."}</div><br/>
              First name
              <input onChange={(event) => this.setState({firstName: event.target.value})}></input><br/>
              Last name
              <input onChange={(event) => this.setState({lastName: event.target.value})}></input><br/>
              Username
              <input onChange={(event) => this.setState({username: event.target.value})}></input><br/>
              Password
              <input type='password' name='password' onChange={(event) => this.setState({password: event.target.value})}></input><br/>
              {'Bio (tell us something about yourself!)'}
              <input onChange={(event) => this.setState({bio: event.target.value})}></input><br/>

              <div className='agreement'>
                {"By clicking 'Join Now', you agree to be awesome."}
              </div><br/>

            <button onClick={this.handleSignUp}>Join Now</button>
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
