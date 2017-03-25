// import * as actions from '../actions/index'

const initialState = {
  ranks: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  suits: ["C", "D", "H", "S"],
  deck: [],
  shuffled: [],
  dealer: {
    id: 0,
    points: 0,
    cards: []
  },
  players: {

  },
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
    case 'DEALER_HIT': {
      const shuffled = state.shuffled
      const card = shuffled.shift()
      const dealer = state.dealer
      dealer.cards.push(card)
      return { ...state, shuffled: shuffled, dealer: dealer }
    }
    case 'DEALER_POINTS': {
      const dealer = state.dealer
      dealer.points = action.payload
      return { ...state, dealer: dealer}
    }
    default:
      return state
  }
}
