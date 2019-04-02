import React, { Component } from 'react';

// import { Icon } from 'semantic-ui-react';

class ClothingTile extends Component {

  state = {
    className: 'unclicked'
  }

  clickHandler = () => {
    if (this.state.className === 'unclicked') {
      this.setState({
        className: 'clicked'
      })
    } else {
      this.setState({
        className: 'unclicked'
      })
    }
  }

  render() {
    return (
      <div className='tile' id={this.state.className} onClick={this.clickHandler}>
        <div className={`check ${this.state.className}`} id='hi'><img src={require('../pics/check.png')}/></div>
        <h3>{this.props.name}</h3>
        <img src={this.props.image_url} alt={this.props.name}></img>
      </div>
    );
  }

}

export default ClothingTile;
