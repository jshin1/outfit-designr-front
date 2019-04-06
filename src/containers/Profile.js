import React, { Component } from 'react';

import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    return (
      <div className='profile'>

        <div className='personal'>
          <img src={this.props.user.avatar} />
          <div className='personal-desc'>
            {`${this.props.user.first_name} ${this.props.user.last_name}`}
            {`${this.props.user.bio}`}
          </div>
        </div>

        <div className='gallery'>
          saved outfits
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
