import React, { Component } from 'react';

import { connect } from 'react-redux';
import ClothingTile from '../components/ClothingTile';

class ClothingSection extends Component {

  loadClothing = () => {
    if (this.props.hats) {
      return this.props.hats.map(h => {
        return <ClothingTile clothing={h}/>
      })
    } else if (this.props.tops) {
      return this.props.tops.map(t => {
        return <ClothingTile clothing={t}/>
      })
    } else if (this.props.jackets) {
      return this.props.jackets.map(j => {
        return <ClothingTile clothing={j}/>
      })
    } else if (this.props.bottoms) {
      return this.props.bottoms.map(b => {
        return <ClothingTile clothing={b}/>
      })
    } else if (this.props.shoes) {
      return this.props.shoes.map(s => {
        return <ClothingTile clothing={s}/>
      })
    }
  }

  render() {
    console.log(this.props.hats)
    return (
      <div className='clothing-section'>
        <h2>{this.props.category}</h2>
        <div className='row'>
          {this.loadClothing()}
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

export default connect(null, null)(ClothingSection);
