import React, { Component } from 'react';

import { connect } from 'react-redux';

class ClothingPicker extends Component {

  filterClothes = () => {
    let color = this.props.colors.find(c => c.name === this.props.primaryColor)

    if (this.props.category === 'hat') {
      if (this.props.colorScheme === 'complementary') {
        let compColor = this.props.colors.find(c => c.name === color.complementary_color)
        let filtered = this.props.myhats.filter(h => h.color_id === color.id || h.color_id === compColor.id || h.color_id === 17 || h.color_id === 18 || h.color_id === 19)

        if (filtered.length === 0) {
          return 'No matching hats'
        }
        else {
          this.props.filterHat(filtered)
          return <img src={filtered[this.props.idx].image_url} onClick={this.clickHandler}/>
        }
      }



    } else if (this.props.category === 'top') {
      if (this.props.colorScheme === 'complementary') {
        let compColor = this.props.colors.find(c => c.name === color.complementary_color)
        let filtered = this.props.mytops.filter(t => t.color_id === color.id || t.color_id === compColor.id || t.color_id === 17 || t.color_id === 18 || t.color_id === 19)

        if (filtered.length === 0) {
          return 'No matching tops'
        }
        else {
          this.props.filterTop(filtered)
          return <img src={filtered[this.props.idx].image_url} onClick={this.clickHandler}/>
        }
      }



    } else if (this.props.category === 'jacket') {
      if (this.props.colorScheme === 'complementary') {
        let compColor = this.props.colors.find(c => c.name === color.complementary_color)
        let filtered = this.props.myjackets.filter(j => j.color_id === color.id || j.color_id === compColor.id || j.color_id === 17 || j.color_id === 18 || j.color_id === 19)

        if (filtered.length === 0) {
          return 'No matching jackets'
        }
        else {
          this.props.filterJacket(filtered)
          return <img src={filtered[this.props.idx].image_url} onClick={this.clickHandler}/>
        }
      }




    } else if (this.props.category === 'bottom') {
      if (this.props.colorScheme === 'complementary') {
        let compColor = this.props.colors.find(c => c.name === color.complementary_color)
        let filtered = this.props.mybottoms.filter(b => b.color_id === color.id || b.color_id === compColor.id ||b.color_id === 17 || b.color_id === 18 || b.color_id === 19)

        if (filtered.length === 0) {
          return 'No matching bottoms'
        }
        else {
          this.props.filterBottom(filtered)
          return <img src={filtered[this.props.idx].image_url} onClick={this.clickHandler}/>
        }
      }



    } else if (this.props.category === 'shoes') {
      if (this.props.colorScheme === 'complementary') {
        let compColor = this.props.colors.find(c => c.name === color.complementary_color)
        let filtered = this.props.myshoes.filter(s => s.color_id === color.id || s.color_id === compColor.id || s.color_id === 17 || s.color_id === 18 || s.color_id === 19)

        if (filtered.length === 0) {
          return 'No matching shoes'
        }
        else {
          this.props.filterShoes(filtered)
          return <img src={filtered[this.props.idx].image_url} onClick={this.clickHandler}/>
        }
      }
    }
  }



  // showClothing = () => {
  //   if (this.props.category === 'hat') {
  //     return <img src={this.props.myhats[this.props.idx].image_url}/>
  //   } else if (this.props.category === 'top') {
  //     return <img src={this.props.mytops[this.props.idx].image_url}/>
  //   } else if (this.props.category === 'jacket') {
  //     return <img src={this.props.myjackets[this.props.idx].image_url}/>
  //   } else if (this.props.category === 'bottom') {
  //     return <img src={this.props.mybottoms[this.props.idx].image_url}/>
  //   } else if (this.props.category === 'shoes') {
  //     return <img src={this.props.myshoes[this.props.idx].image_url}/>
  //   }
  // }

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
      <div className='clothing-picker'>
      {this.filterClothes()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // loggedIn: state.loggedIn,
    colors: state.colors,
    primaryColor: state.primaryColor,
    colorScheme: state.colorScheme,
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
    filterHat: (data) => dispatch({type: 'FILTER_HAT', payload: data}),
    filterTop: (data) => dispatch({type: 'FILTER_TOP', payload: data}),
    filterJacket: (data) => dispatch({type: 'FILTER_JACKET', payload: data}),
    filterBottom: (data) => dispatch({type: 'FILTER_BOTTOM', payload: data}),
    filterShoes: (data) => dispatch({type: 'FILTER_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClothingPicker);
