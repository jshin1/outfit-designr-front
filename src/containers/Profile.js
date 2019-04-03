import React, { Component } from 'react';

import { connect } from 'react-redux';

import ClothingPicker from './ClothingPicker';

class Profile extends Component {

  state = {
    hati: 0,
    topi: 0,
    jacketi: 0,
    bottomi: 0,
    shoesi: 0
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
      return (
        <div>
          <img src={this.props.myhats[this.state.hati].image_url}/>
          <button onClick={this.buttonClick}/>
        </div>
      )
    } else if (this.props.current === 'top') {
      return (
        <div>
          <img src={this.props.mytops[this.state.topi].image_url}/>
          <button onClick={this.buttonClick}/>
        </div>
      )
    } else if (this.props.current === 'jacket') {
      return (
        <div>
          <img src={this.props.myjackets[this.state.jacketi].image_url}/>
          <button onClick={this.buttonClick}/>
        </div>
      )
    } else if (this.props.current === 'bottom') {
      return (
        <div>
          <img src={this.props.mybottoms[this.state.bottomi].image_url}/>
          <button onClick={this.buttonClick}/>
        </div>
      )
    } else if (this.props.current === 'shoes') {
      return (
        <div>
          <img src={this.props.myshoes[this.state.shoesi].image_url}/>
          <button onClick={this.buttonClick}/>
        </div>
      )
    }
  }



  render() {
    return (
      <div className='profile'>

        <div className='info'>

          <img src={require('../pics/colorwheel.png')} />
          {'Please select how you would like to match your outfit:'}<br/><br/>
          <select>
            <option>analogous</option>
            <option>complementary</option>
            <option>triadic</option>
          </select><br/>

          {'What would you like your primary color to be?'}<br/><br/>
          <select onChange={(event) => this.props.setPrimaryColor(event.target.value)}>
            {
              this.props.colors.map(c => <option value={c.name}>{c.name}</option>)
            }
          </select>
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
    colors: state.colors,
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
    // logOut: dispatch({type: 'LOG_IN', payload: false}),
    setPrimaryColor: (data) => dispatch({type: 'SET_PRIMARY_COLOR', payload: data}),
    loadHats: (data) => dispatch({type: 'LOAD_HATS', payload: data}),
    loadTops: (data) => dispatch({type: 'LOAD_TOPS', payload: data}),
    loadJackets: (data) => dispatch({type: 'LOAD_JACKETS', payload: data}),
    loadBottoms: (data) => dispatch({type: 'LOAD_BOTTOMS', payload: data}),
    loadShoes: (data) => dispatch({type: 'LOAD_SHOES', payload: data})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
