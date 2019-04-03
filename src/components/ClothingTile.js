import React, { Component } from 'react';

import { connect } from 'react-redux';

// import { Icon } from 'semantic-ui-react';

class ClothingTile extends Component {

  state = {
    className: 'unclicked'
  }

  clickHandler = () => {
    if (this.state.className === 'unclicked') {
      this.setState(prevState => {
        return {
          className: 'clicked'
        }
      })

      if (this.props.clothing.category_id === 1) {
        return this.props.addHat(this.props.clothing)

      } else if (this.props.clothing.category_id === 2) {
        return this.props.addTop(this.props.clothing)
      } else if (this.props.clothing.category_id === 3) {
        return this.props.addJacket(this.props.clothing)
      } else if (this.props.clothing.category_id === 4) {
        return this.props.addBottom(this.props.clothing)
      } else if (this.props.clothing.category_id === 5) {
        return this.props.addShoes(this.props.clothing)
      }

    } else {
      this.setState({
        className: 'unclicked'
      })
    }
  }

  render() {
    return (
      <div className='tile' id={this.state.className} onClick={(e) => this.clickHandler(e)}>
        <div className={`check ${this.state.className}`} id='hi'><img src={require('../pics/check.png')}/></div>
        <h3>{this.props.clothing.name}</h3>
        <img src={this.props.clothing.image_url} alt={this.props.clothing.name}></img>
      </div>
    );
  }

}

// function mapStateToProps(state) {
//   return {
//     // loggedIn: state.loggedIn,
//     myhats: state.myhats,
//     mytops: state.mytops,
//     myjackets: state.myjackets,
//     mybottoms: state.mybottoms,
//     myshoes: state.myshoes
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
    // logOut: dispatch({type: 'LOG_IN', payload: false}),
    addHat: (data) => dispatch({type: 'ADD_HAT', payload: data}),
    addTop: (data) => dispatch({type: 'ADD_TOP', payload: data}),
    addJacket: (data) => dispatch({type: 'ADD_JACKET', payload: data}),
    addBottom: (data) => dispatch({type: 'ADD_BOTTOM', payload: data}),
    addShoes: (data) => dispatch({type: 'ADD_SHOES', payload: data})
  }
}

export default connect(null, mapDispatchToProps)(ClothingTile);
