import React, { Component } from 'react';

import { connect } from 'react-redux';
import ClothingTile from '../components/ClothingTile';

class ClothingSection extends Component {

  loadClothing = () => {
    if (this.props.hats) {
      return this.props.hats.map(h => {
        return <ClothingTile
                      name={h.name}
                      image_url={h.image_url}/>
      })
    } else if (this.props.tops) {
      return this.props.tops.map(t => {
        return <ClothingTile
                      name={t.name}
                      image_url={t.image_url}/>
      })
    } else if (this.props.jackets) {
      return this.props.jackets.map(j => {
        return <ClothingTile
                      name={j.name}
                      image_url={j.image_url}/>
      })
    } else if (this.props.bottoms) {
      return this.props.bottoms.map(b => {
        return <ClothingTile
                      name={b.name}
                      image_url={b.image_url}/>
      })
    } else if (this.props.shoes) {
      return this.props.shoes.map(s => {
        return <ClothingTile
                      name={s.name}
                      image_url={s.image_url}/>
      })
    }
  }

  render() {
    console.log(this.props.hats)
    return (
      <div className='clothing-section'>
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
