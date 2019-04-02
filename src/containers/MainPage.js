import React, { Component } from 'react';

import { connect } from 'react-redux';
import ClothingSection from './ClothingSection';


class MainPage extends Component {

  componentDidMount() {
    if (this.props.loggedIn === false) {
      this.props.logIn()
    }
  }

  render() {
    return (
      <div className='main-page'>
        <ClothingSection hats={this.props.hats}
                         category='Hats'
        />
        <ClothingSection tops={this.props.tops}
                         category='Tops'
        />
        <ClothingSection jackets={this.props.jackets}
                         category='Jackets'
        />
        <ClothingSection bottoms={this.props.bottoms}
                         category='Bottoms'

        />
        <ClothingSection shoes={this.props.shoes}
                         category='Shoes'

        />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
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
    logIn: () => dispatch({type: 'LOG_IN', payload: true})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
