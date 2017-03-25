export const NEW_DECK = 'NEW_DECK'
export const newDeck = (deck) => ({
  type: NEW_DECK,
  payload: deck
})

export const NEW_SHUFFLE = 'NEW_SHUFFLE'
export const newShuffle = (deck) => ({
  type: NEW_SHUFFLE,
  payload: deck
})

export const NEW_CARD = 'NEW_CARD'
export const newCard = () => ({
  type: NEW_CARD,
})

export const DEALER_HIT = 'DEALER_HIT'
export const dealerHit = () => ({
  type: DEALER_HIT,
})

export const DEALER_POINTS = 'DEALER_POINTS'
export const dealerPoints = (points) => ({
  type: DEALER_POINTS,
  payload: points
})

// export const drawCardState = (user, id, card) => {
//   return dispatch => {
//     if(user === 'dealer') {
//       dispatch(newCard(user, 0, card))
//     } else {
//       dispatch(newCard, id, card)
//     }
//   }
// }
