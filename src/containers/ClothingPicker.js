import React, { Component } from 'react';

import { connect } from 'react-redux';

class ClothingPicker extends Component {


  filterClothes = () => {
    let color = this.props.colors.find(c => c.name === this.props.primaryColor)

    if (this.props.category === 'hat') {
      let filtered = this.props.myhats.filter(h => h.color_id === color.id || h.color_id === 17 || h.color_id === 18 || h.color_id === 19)

      if (filtered.length === 0) {
        return 'No matching hats..'
      }
      else {
        return <img src={filtered[this.props.idx].image_url} />
      }
    }
    // } else if (this.props.category === 'top') {
    //   return <img src={this.props.mytops[this.props.idx].image_url}/>
    // } else if (this.props.category === 'jacket') {
    //   return <img src={this.props.myjackets[this.props.idx].image_url}/>
    // } else if (this.props.category === 'bottom') {
    //   return <img src={this.props.mybottoms[this.props.idx].image_url}/>
    // } else if (this.props.category === 'shoes') {
    //   return <img src={this.props.myshoes[this.props.idx].image_url}/>
    // }
  }



  showClothing = () => {
    if (this.props.category === 'hat') {
      return <img src={this.props.myhats[this.props.idx].image_url}/>
    } else if (this.props.category === 'top') {
      return <img src={this.props.mytops[this.props.idx].image_url}/>
    } else if (this.props.category === 'jacket') {
      return <img src={this.props.myjackets[this.props.idx].image_url}/>
    } else if (this.props.category === 'bottom') {
      return <img src={this.props.mybottoms[this.props.idx].image_url}/>
    } else if (this.props.category === 'shoes') {
      return <img src={this.props.myshoes[this.props.idx].image_url}/>
    }
  }

  clickHandler = () => {
    if (this.props.category === 'hat') {
      this.props.chooseCurrent('hat')
    } else if (this.props.category === 'top') {
      this.props.chooseCurrent('top')
    } else if (this.props.category === 'jacket') {
      this.props.chooseCurrent('jacket')
    } else if (this.props.category === 'bottom') {
      this.props.chooseCurrent('bottom')
    } else if (this.props.category === 'shoes') {
      this.props.chooseCurrent('shoes')
    }
  }

  render() {
    return (
      <div className='clothing-picker' onClick={this.clickHandler}>
      {this.filterClothes()}
      {this.showClothing()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // loggedIn: state.loggedIn,
    colors: state.colors,
    primaryColor: state.primaryColor,
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
