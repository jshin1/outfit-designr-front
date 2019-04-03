import React, { Component } from 'react';

import { connect } from 'react-redux';

class ClothingPicker extends Component {

  showClothing = () => {
    if (this.props.category === 'hat') {
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

  clickHandler = () => {
    if (this.props.category === 'hat') {
      this.props.chooseCurrent(this.props.myhats[0])
    } else if (this.props.category === 'top') {
      this.props.chooseCurrent(this.props.mytops[0])
    } else if (this.props.category === 'jacket') {
      this.props.chooseCurrent(this.props.myjackets[0])
    } else if (this.props.category === 'bottom') {
      this.props.chooseCurrent(this.props.mybottoms[0])
    } else if (this.props.category === 'shoes') {
      this.props.chooseCurrent(this.props.myshoes[0])
    }
  }

  render() {
    return (
      <div className='clothing-picker' onClick={this.clickHandler}>
      {this.showClothing()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // loggedIn: state.loggedIn,
    current: state.current,
    myhats: state.myhats,
    mytops: state.mytops,
    myjackets: state.myjackets,
    mybottoms: state.mybottoms,
    myshoes: state.myshoes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    chooseCurrent: (data) => dispatch({type: 'CHOOSE_CURRENT', payload: data}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothingPicker);
