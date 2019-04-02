import React, { Component } from 'react';

import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    return (
      <div></div>
    );
  }

}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    myhats: state.myhats,
    mytops: state.mytops,
    myjackets: state.myjackets,
    mybottoms: state.mybottoms,
    myshoes: state.myshoes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: dispatch({type: 'LOG_IN', payload: false}),
    loadHats: (data) => dispatch({type: 'LOAD_HATS', payload: data}),
    loadTops: (data) => dispatch({type: 'LOAD_TOPS', payload: data}),
    loadJackets: (data) => dispatch({type: 'LOAD_JACKETS', payload: data}),
    loadBottoms: (data) => dispatch({type: 'LOAD_BOTTOMS', payload: data}),
    loadShoes: (data) => dispatch({type: 'LOAD_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);