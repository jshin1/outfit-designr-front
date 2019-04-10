import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './containers/LandingPage';
import Profile from './containers/Profile';
import MainPage from './containers/MainPage';
import DesignPortal from './containers/DesignPortal';
import ClothingSection from './containers/ClothingSection';
import ClothingTile from './components/ClothingTile';


class App extends Component {

  componentDidMount() {

    fetch(`${process.env.REACT_APP_APIURL}/categories`)
    .then(res => res.json())
    .then(data => {
      console.log(data)

      data.map(d => {
        console.log(d.clothes)
        switch(d.name) {
          case 'hat':
            return this.props.loadHats(d.clothes)
          case 'top':
            return this.props.loadTops(d.clothes)
          case 'jacket':
            return this.props.loadJackets(d.clothes)
          case 'bottom':
            return this.props.loadBottoms(d.clothes)
          case 'shoes':
            return this.props.loadShoes(d.clothes)
        }
      })
    })

    fetch(`${process.env.REACT_APP_APIURL}/colors`)
    .then(res => res.json())
    .then(colors => {
      let toBeFiltered = ['white', 'grey', 'black']
      let filteredColors = colors.filter(c => !toBeFiltered.includes(c.name))
      filteredColors.map(c => {
        this.props.setColors(c)
      })
    })
  }


  render() {
    // this.props.loggedIn === true ? this.props.logOut : null
    return (

      <div className="App">
        <Router>
          <>
          <nav className='navbar'>
            <Link to='/'><h1>Outfit Designr</h1></Link>
            <div>
              <Link to='/profile'>Profile</Link>
              <Link to='/portal'>Design Portal</Link>
              <Link to='main'>Catalog</Link>
            </div>

          </nav>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/profile' exact component={Profile}/>
            <Route path='/portal' component={DesignPortal}/>
            <Route path='/main' component={MainPage}/>
          </>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    loggedIn: state.loggedIn,
    hats: state.hats,
    tops: state.tops,
    jackets: state.jackets,
    bottoms: state.bottoms,
    shoes: state.shoes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // logOut: dispatch({type: 'LOG_IN', payload: false}),
    setColors: (data) => dispatch({type: 'SET_COLORS', payload: data}),
    loadHats: (data) => dispatch({type: 'LOAD_HATS', payload: data}),
    loadTops: (data) => dispatch({type: 'LOAD_TOPS', payload: data}),
    loadJackets: (data) => dispatch({type: 'LOAD_JACKETS', payload: data}),
    loadBottoms: (data) => dispatch({type: 'LOAD_BOTTOMS', payload: data}),
    loadShoes: (data) => dispatch({type: 'LOAD_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
