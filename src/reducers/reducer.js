const initialState = {
  loggedIn: false,
  hats: [],
  tops: [],
  jackets: [],
  bottoms: [],
  shoes: [],
  myhats: [],
  mytops: [],
  myjackets: [],
  mybottoms: [],
  myshoes: [],
}

function reducer(state=initialState, action) {
  switch(action.type) {
    case 'LOG_IN':
      return {...state, loggedIn: action.payload}
    case 'LOG_OUT':
      return {...state, loggedIn: action.payload}


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


    case 'ADD_HAT':
      return {...state, myhats: [...state.myhats, action.payload]}
    case 'ADD_TOP':
      return {...state, mytops: [...state.mytops, action.payload]}
    case 'ADD_JACKET':
      return {...state, myjackets: [...state.myjackets, action.payload]}
    case 'ADD_BOTTOM':
      return {...state, mybottoms: [...state.mybottoms, action.payload]}
    case 'ADD_SHOES':
      return {...state, myshoes: [...state.myshoes, action.payload]}


    default:
      return state
  }
}

export default reducer
