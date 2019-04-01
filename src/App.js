import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from './containers/LandingPage';
import MainPage from './containers/MainPage';
import ClothingSection from './containers/ClothingSection';
import ClothingTile from './components/ClothingTile';


class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/categories')
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
  }


  render() {
    return (
      <div className="App">
        <Router>
          <>
          <nav className='navbar-home'>
            <div>Outfit Designr</div>
            <div>
              <Link to='/'>Home</Link>
              <Link to='main'>Main</Link>
            </div>

          </nav>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/main' component={MainPage}/>
          </>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    hats: state.hats,
    tops: state.tops,
    jackets: state.jackets,
    bottoms: state.bottoms,
    shoes: state.shoes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadHats: (data) => dispatch({type: 'LOAD_HATS', payload: data}),
    loadTops: (data) => dispatch({type: 'LOAD_TOPS', payload: data}),
    loadJackets: (data) => dispatch({type: 'LOAD_JACKETS', payload: data}),
    loadBottoms: (data) => dispatch({type: 'LOAD_BOTTOMS', payload: data}),
    loadShoes: (data) => dispatch({type: 'LOAD_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
