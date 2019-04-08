import React, { Component } from 'react';

import { connect } from 'react-redux';

import ClothingPicker from './ClothingPicker';

class DesignPortal extends Component {

  state = {
    hati: 0,
    topi: 0,
    jacketi: 0,
    bottomi: 0,
    shoesi: 0
  }

  // saveOutfit = () => {
  //   fetch("http://localhost:3000/api/v1/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({
  //       username: this.state.username.trim(),
  //       password: this.state.password
  //     })
  //   })
  // }

  save = () => {
  const outfit = [this.props.filteredhats[this.state.hati].id, this.props.filteredtops[this.state.topi].id, this.props.filteredjackets[this.state.jacketi].id, this.props.filteredbottoms[this.state.bottomi].id, this.props.filteredshoes[this.state.shoesi].id]

  fetch('http://localhost:3000/api/v1/outfits', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        occasion_id: 2,
        user_id: this.props.user.id,
        clothes: outfit
      })
    })
  .then(res=>res.json())
  .then(data => console.log(data))
}


  buttonClick = () => {

    if (this.props.current === 'hat') {
      return this.setState(prevState => {
        return {
          hati: prevState.hati + 1
        }
      })
    } else if (this.props.current === 'top') {
      return this.setState(prevState => {
        return {
          topi: prevState.topi + 1
        }
      })
    } else if (this.props.current === 'jacket') {
      return this.setState(prevState => {
        return {
          jacketi: prevState.jacketi + 1
        }
      })
    } else if (this.props.current === 'bottom') {
      return this.setState(prevState => {
        return {
          bottomi: prevState.bottomi + 1
        }
      })
    } else if (this.props.current === 'shoes') {
      return this.setState(prevState => {
        return {
          shoesi: prevState.shoesi + 1
        }
      })
    }
  }

  showCurrentClothing = () => {
    if (this.props.current === 'hat') {
      console.log(this.props.filteredhats)

      if (this.props.filteredhats.length === 0) {
        return 'No matching hat.'
      } else {
        return (
          <div className='current-item'>
            <button className='prev' onClick={this.buttonClick}>Previous</button>
            <img src={this.props.filteredhats[this.state.hati].image_url}/>
            <button className='next' onClick={this.buttonClick}>Next</button>
          </div>
        )
      }
    } else if (this.props.current === 'top') {
      if (this.props.filteredtops.length === 0) {
        return 'No matching top.'
      } else {
        return (
          <div className='current-item'>
            <button className='prev' onClick={this.buttonClick}>Previous</button>
            <img src={this.props.filteredtops[this.state.topi].image_url}/>
            <button className='next' onClick={this.buttonClick}>Next</button>
          </div>
        )
      }
    } else if (this.props.current === 'jacket') {
      if (this.props.filteredjackets.length === 0) {
        return 'No matching jacket.'
      } else {
        return (
          <div className='current-item'>
            <button className='prev' onClick={this.buttonClick}>Previous</button>
            <img src={this.props.filteredjackets[this.state.jacketi].image_url}/>
            <button className='next' onClick={this.buttonClick}>Next</button>
          </div>
        )
      }
    } else if (this.props.current === 'bottom') {
      if (this.props.filteredbottoms.length === 0) {
        return 'No matching bottoms'
      } else {
        return (
          <div className='current-item'>
            <button className='prev' onClick={this.buttonClick}>Previous</button>
            <img src={this.props.filteredbottoms[this.state.bottomi].image_url}/>
            <button className='next' onClick={this.buttonClick}>Next</button>
          </div>
        )
      }
    } else if (this.props.current === 'shoes') {
      if (this.props.filteredshoes.length === 0) {
        return 'No matching shoes.'
      } else {
        return (
          <div className='current-item'>
            <button className='prev' onClick={this.buttonClick}>Previous</button>
            <img src={this.props.filteredshoes[this.state.shoesi].image_url}/>
            <button className='next' onClick={this.buttonClick}>Next</button>
          </div>
        )
      }
    }
  }



  render() {
    return (
      <div className='design-portal'>

        <div className='info'>

          <img src={require('../pics/colorwheel.png')} />
          {'Please select how you would like to match your outfit:'}<br/><br/>
          <select className='dropdown' onChange={(event) => this.props.setColorScheme(event.target.value)}>
          <option value='complementary'>complementary</option>
            <option value='analogous'>analogous</option>
            <option value='triadic'>triadic</option>
          </select><br/>

          {'What would you like your primary color to be?'}<br/><br/>
          <select className='dropdown' onChange={(event) => this.props.setPrimaryColor(event.target.value)}>
            {
              this.props.colors.map(c => <option value={c.name}>{c.name}</option>)
            }
          </select>

          <button onClick={this.save}>Save Outfit</button>
        </div>



        <div className='current'>
          {
            this.props.current ?
            this.showCurrentClothing()
            :
            'Please select an article of clothing!'
          }
        </div>


        <div className='picker-container'>
        <ClothingPicker category='hat'
                        idx={this.state.hati}
        />
        <ClothingPicker category='top'
                        idx={this.state.topi}
        />
        <ClothingPicker category='jacket'
                        idx={this.state.jacketi}
        />
        <ClothingPicker category='bottom'
                        idx={this.state.bottomi}
        />
        <ClothingPicker category='shoes'
                        idx={this.state.shoesi}
        />
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    // loggedIn: state.loggedIn,
    user: state.user,
    colors: state.colors,
    current: state.current,
    myhats: state.myhats,
    mytops: state.mytops,
    myjackets: state.myjackets,
    mybottoms: state.mybottoms,
    myshoes: state.myshoes,
    filteredhats: state.filteredhats,
    filteredtops: state.filteredtops,
    filteredjackets: state.filteredjackets,
    filteredbottoms: state.filteredbottoms,
    filteredshoes: state.filteredshoes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // logOut: dispatch({type: 'LOG_IN', payload: false}),
    setPrimaryColor: (data) => dispatch({type: 'SET_PRIMARY_COLOR', payload: data}),
    setColorScheme: (data) => dispatch({type: 'SET_COLOR_SCHEME', payload: data}),
    loadHats: (data) => dispatch({type: 'LOAD_HATS', payload: data}),
    loadTops: (data) => dispatch({type: 'LOAD_TOPS', payload: data}),
    loadJackets: (data) => dispatch({type: 'LOAD_JACKETS', payload: data}),
    loadBottoms: (data) => dispatch({type: 'LOAD_BOTTOMS', payload: data}),
    loadShoes: (data) => dispatch({type: 'LOAD_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignPortal);
