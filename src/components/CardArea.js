import React, { Component } from 'react';
import * as actions from '../actions/index'
import { connect } from 'react-redux';
import Card from './Card'

class CardArea extends Component {

  render(props) {
    return (
      <div className="card-area">
        {this.props.cards.map(function(card, index) {
          console.log(card)
          return <Card key={index} suit={card.suit} rank={card.rank} points={card.points} />
        })}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(CardArea);
