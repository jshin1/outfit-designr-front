import React, { Component } from 'react';

import { connect } from 'react-redux';
import ClothingSection from './ClothingSection';


class MainPage extends Component {

  render() {
    return (
      <div className='main-page'>
        <ClothingSection/>
        <ClothingSection/>
        <ClothingSection/>
        <ClothingSection/>
        <ClothingSection/>
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
    loadHats: (data) => dispatch({type: 'LOAD_HATS', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
