const initialState = {
  loggedIn: false,
  user: null,
  allSelected: false,


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

  filteredhats: [],
  filteredtops: [],
  filteredjackets: [],
  filteredbottoms: [],
  filteredshoes: [],

  myoutfits: [],

  current: 'hat',
  // currentClothes: [],
  colors: [],
  primaryColor: 'magenta',
  colorScheme: 'complementary'
}

function reducer(state=initialState, action) {
  switch(action.type) {

    case 'MY_OUTFITS':
      return {...state, myoutfits: action.payload}

    case 'SELECT_ALL':
      return {...state, allSelected: action.payload}

    case 'SET_USER':
      return {...state, user: action.payload}

    case 'SET_PRIMARY_COLOR':
      return {...state, primaryColor: action.payload}
    case 'SET_COLOR_SCHEME':
      return {...state, colorScheme: action.payload}

    case 'SET_COLORS':
      return {...state, colors: [...state.colors, action.payload]}

    case 'CHOOSE_CURRENT':
      return {...state, current: action.payload}

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

      case 'SELECT_ALL_HATS':
        return {...state, myhats: action.payload}
      case 'SELECT_ALL_TOPS':
        return {...state, mytops: action.payload}
      case 'SELECT_ALL_JACKETS':
        return {...state, myjackets: action.payload}
      case 'SELECT_ALL_BOTTOMS':
        return {...state, mybottoms: action.payload}
      case 'SELECT_ALL_SHOES':
        return {...state, myshoes: action.payload}


    case 'FILTER_HAT':
      return {...state, filteredhats: action.payload}
    case 'FILTER_TOP':
      return {...state, filteredtops: action.payload}
    case 'FILTER_JACKET':
      return {...state, filteredjackets: action.payload}
    case 'FILTER_BOTTOM':
      return {...state, filteredbottoms: action.payload}
    case 'FILTER_SHOES':
      return {...state, filteredshoes: action.payload}


    default:
      return state
  }
}

export default reducer
