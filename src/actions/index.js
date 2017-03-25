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
