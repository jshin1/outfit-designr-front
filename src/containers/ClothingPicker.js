import React, { Component } from 'react';

import { connect } from 'react-redux';

class ClothingPicker extends Component {

  showClothing = () => {
    if (this.props.category === 'hat') {
      return this.props.myhats.map(h => <img src={h.image_url}/>)
    } else if (this.props.category === 'top') {
      return this.props.mytops.map(t => <img src={t.image_url}/>)
    } else if (this.props.category === 'jacket') {
      return this.props.myjackets.map(j => <img src={j.image_url}/>)
    } else if (this.props.category === 'bottom') {
      return this.props.mybottoms.map(b => <img src={b.image_url}/>)
    } else if (this.props.category === 'shoes') {
      return this.props.myshoes.map(s => <img src={s.image_url}/>)
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
