import React, { Component } from 'react';

import { connect } from 'react-redux';

class Profile extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/outfits')
    .then(res => res.json())
    .then(data => {
      let outfits = data.filter(outfit => outfit.user_id === this.props.user.id)
      let collection = []
      outfits.map(outfit => collection.push({clothes: outfit.clothes, id: outfit.id}))
      this.props.setOutfit(collection)
    })
  }

  showSavedOutfits = () => {
    return this.props.myoutfits.map(outfit => {
        return(
          <div className='outfit'>
            {outfit.clothes.map(clothing => <div className='clothing'><img src={clothing.image_url} /></div>)}
            <img onClick={this.deleteOutfit} className='trash' src={require('../pics/trash.png')} id={`${outfit.id}`}/>
          </div>
        )
    })
  }

  deleteOutfit = (event) => {
    fetch(`http://localhost:3000/api/v1/outfits/${event.target.id}`, {
        method: 'DELETE'
    })
    this.props.setOutfit(this.props.myoutfits.filter(outfit => outfit.id != event.target.id))
  }

  render() {
    return (
      <div className='profile'>

        <div className='personal'>
          <img src={this.props.user.avatar} />
          <div className='personal-desc'>
            <h2>{`Hi, ${this.props.user.first_name} ${this.props.user.last_name}!`}</h2>
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
    user: state.user,
    myoutfits: state.myoutfits
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setOutfit: (data) => dispatch({type: 'MY_OUTFITS', payload: data})
    // loadShoes: (data) => dispatch({type: 'LOAD_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
