import React, { Component } from 'react';

import { connect } from 'react-redux';
import ClothingTile from '../components/ClothingTile';

class ClothingSection extends Component {

  loadHats = () => {
    return this.props.hats.map(h => {
      console.log(h)
      return (
        <ClothingTile name={h.name}
                      image_url={h.image_url}
        />
      )
    })
  }

  render() {
    console.log(this.props.hats)
    return (
      <div className='clothing-section'>
        <h2>Hats or props</h2>
        <div className='row'>
          {this.loadHats()}
        </div>
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

export default connect(mapStateToProps, null)(ClothingSection);
