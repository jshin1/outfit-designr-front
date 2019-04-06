import React, { Component } from 'react';

import { connect } from 'react-redux';

class Profile extends Component {

  showSavedOutfits = () => {
    fetch('http://localhost:3000/api/v1/outfits')
    .then(res => res.json())
    .then(data => {
      let outfits = data.filter(outfit => outfit.user_id === this.props.user.id)
      console.log(data)
      console.log(this.props.user.id)
    })
  }

  render() {
    return (
      <div className='profile'>

        <div className='personal'>
          <img src={this.props.user.avatar} />
          <div className='personal-desc'>
            <h2>{`${this.props.user.first_name} ${this.props.user.last_name}`}</h2>
            {`${this.props.user.bio}`}
          </div>
        </div>

        <div className='gallery'>
          <h3>Saved Outfits</h3>
          {this.showSavedOutfits()}
        </div>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // logOut: dispatch({type: 'LOG_IN', payload: false}),
    // loadShoes: (data) => dispatch({type: 'LOAD_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
