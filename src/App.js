import React, { Component } from 'react';
import './App.css';
import Dealer from './components/Dealer'
import { connect } from 'react-redux';
import  * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props)
    this.buildDecks = this.buildDecks.bind(this)
    this.shuffleDeck = this.shuffleDeck.bind(this)
  }

buildDecks(deckCount) {
  var suits = this.props.data.suits,
      ranks = this.props.data.ranks,
      decks = [];
  for(let deckIndex = 0; deckIndex < deckCount; deckIndex++) {
    let cardArray = [];
    for(let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
      for(let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
        let points;
        if(ranks[rankIndex] === 'K' || ranks[rankIndex] === 'Q' || ranks[rankIndex] === 'J') {
          points = 10;
        } else if(ranks[rankIndex] === 'A') {
          points = [1, 11];
        } else {
          points = parseInt(ranks[rankIndex], 10)
        }

        var cardValue = {
          suit: suits[suitIndex],
          rank: ranks[rankIndex],
          points: points
        }
        cardArray.push(cardValue)
      }
    }
    decks.push(cardArray)
  }
  this.props.newDeck(decks);
  this.shuffleDeck(decks);
}

shuffleDeck(decksToShuffle) {
  var deck = [];
  if(decksToShuffle.length > 0) {
    for(let decksIndex = 0; decksIndex < decksToShuffle.length; decksIndex++) {
      deck = deck.concat(decksToShuffle[decksIndex])
    }
  }
  var remainingCards = deck.length,
      placeHolder,
      shuffleIndex;

  while (remainingCards) {

    // Pick a remaining element…
    shuffleIndex = Math.floor(Math.random() * remainingCards--);

    // And swap it with the current element.
    placeHolder = deck[remainingCards];
    deck[remainingCards] = deck[shuffleIndex];
    deck[shuffleIndex] = placeHolder;
  }
  this.props.newShuffle(deck)
}



componentDidMount() {
  // I wasn't sure how to shuffle a deck in the fastest way possible
  // so I did some googling and found this post from Mike Bostok https://bost.ocks.org/mike/shuffle/
  this.buildDecks(1);
}

  render() {
    return (
      <div className="App">
        {this.props.data.shuffled.length > 0 ? <Dealer /> : ''}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newDeck: (deck) => {
      return dispatch(actions.newDeck(deck))
    },
    newShuffle: (deck) => {
      return dispatch(actions.newShuffle(deck))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
