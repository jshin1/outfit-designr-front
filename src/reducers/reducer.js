const initialState = {
  hats: [],
  tops: [],
  jackets: [],
  bottoms: [],
  shoes: []
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case 'LOAD_HATS':
      return {...state, hats: action.payload}
    case 'LOAD_TOPS':
      return {...state, tops: action.payload}
    case 'LOAD_JACKETS':
      return {...state, jackets: action.payload}
    case 'LOAD_BOTTOMS':
      return {...state, bottoms: action.payload}
    case 'LOAD_SHOES':
      return {...state, shoes: action.payload}
    default:
      return state
  }
}

export default reducer
