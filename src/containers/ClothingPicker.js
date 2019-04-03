import React, { Component } from 'react';

import { connect } from 'react-redux';

class ClothingPicker extends Component {

  showClothing = () => {
    // let counter = 0

    if (this.props.category === 'hat') {
      // return
      // (while (counter < 3 || counter < this.props.myhats.length) {
      //   <img src={this.props.myhats[counter].image_url}/>
      //   counter++
      // })

      return <img src={this.props.myhats[0].image_url}/>


    } else if (this.props.category === 'top') {
      return <img src={this.props.mytops[0].image_url}/>
    } else if (this.props.category === 'jacket') {
      return <img src={this.props.myjackets[0].image_url}/>
    } else if (this.props.category === 'bottom') {
      return <img src={this.props.mybottoms[0].image_url}/>
    } else if (this.props.category === 'shoes') {
      return <img src={this.props.myshoes[0].image_url}/>
    }
  }

  render() {
    return (
      <div className='clothing-picker'>
      {this.showClothing()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // loggedIn: state.loggedIn,
    myhats: state.myhats,
    mytops: state.mytops,
    myjackets: state.myjackets,
    mybottoms: state.mybottoms,
    myshoes: state.myshoes
  }
}

export default connect(mapStateToProps, null)(ClothingPicker);
