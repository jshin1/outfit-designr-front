import React, { Component } from 'react';

class ClothingTile extends Component {

  render() {
    return (
      <div className='tile'>
        <h3>{this.props.name}</h3>
        <img src={this.props.image_url} alt={this.props.name}></img>
      </div>
    );
  }

}

export default ClothingTile;
