import React, { Component } from 'react';

import { connect } from 'react-redux';
import ClothingSection from './ClothingSection';


class MainPage extends Component {

  componentDidMount() {
    if (this.props.loggedIn === false) {
      this.props.logIn()
    }
  }

  selectAll = () => {
    this.props.selectAll()
    this.props.SelectAllHats(this.props.hats)
    this.props.SelectAllTops(this.props.tops)
    this.props.SelectAllJackets(this.props.jackets)
    this.props.SelectAllBottoms(this.props.bottoms)
    this.props.SelectAllShoes(this.props.shoes)
    console.log(this.props.hats)
  }

  render() {
    return (
      <div className='main-page'>
        <button onClick={this.selectAll}>Select All</button>
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
    logIn: () => dispatch({type: 'LOG_IN', payload: true}),
    selectAll: () => dispatch({type: 'SELECT_ALL', payload: true}),
    SelectAllHats: (data) => dispatch({type: 'SELECT_ALL_HATS', payload: data}),
    SelectAllTops: (data) => dispatch({type: 'SELECT_ALL_TOPS', payload: data}),
    SelectAllJackets: (data) => dispatch({type: 'SELECT_ALL_JACKETS', payload: data}),
    SelectAllBottoms: (data) => dispatch({type: 'SELECT_ALL_BOTTOMS', payload: data}),
    SelectAllShoes: (data) => dispatch({type: 'SELECT_ALL_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
