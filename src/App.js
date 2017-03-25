import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
        var cardValue = suits[suitIndex] + ranks[rankIndex];
        cardArray.push(cardValue)
      }
    }
    decks.push(cardArray)
  }
  console.log(decks)
  this.props.newDeck(decks);
  this.shuffleDeck(decks);
}

shuffleDeck(decksToShuffle) {
  var deck = [];
  if(decksToShuffle.length > 0) {
    for(let decksIndex = 0; decksIndex < decksToShuffle.length; decksIndex++) {
      deck = deck.concat(decksToShuffle[decksIndex])
      console.log(deck)
    }
  }
  console.log(decksToShuffle)
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
  console.log(deck)
  this.props.newShuffle(deck)
}



componentDidMount() {
  // I wasn't sure how to shuffle a deck in the fastest way possible
  // so I did some googling and found this post from Mike Bostok https://bost.ocks.org/mike/shuffle/
  this.buildDecks(1);
}

  render() {
    console.log(this.props.data)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
