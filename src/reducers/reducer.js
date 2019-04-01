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
    default:
      return state
  }
}

export default reducer
