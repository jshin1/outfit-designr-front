import React, { Component } from 'react';

import { connect } from 'react-redux';
import ClothingSection from './ClothingSection';


class MainPage extends Component {

  render() {
    return (
      <div className='main-page'>
        <ClothingSection hats={this.props.hats}/>
        <ClothingSection tops={this.props.tops}/>
        <ClothingSection jackets={this.props.jackets}/>
        <ClothingSection bottoms={this.props.bottoms}/>
        <ClothingSection shoes={this.props.shoes}/>
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

export default connect(mapStateToProps, null)(MainPage);
