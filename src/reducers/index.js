// import * as actions from '../actions/index'

const initialState = {
  ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  suits: ["C", "D", "H", "S"],
  deck: [],
  shuffled: [],
}

export const blackJackReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'NEW_DECK': {
      return { ...state, deck: action.payload}
    }
    case 'NEW_SHUFFLE': {
      console.log('hit shuffle', action.payload)
      return { ...state, shuffled: action.payload}
    }
    default:
      return state
  }
}
