import React, { Component } from 'react';
import * as actions from '../actions/index'
import { connect } from 'react-redux';
import CardArea from './CardArea'

class Dealer extends Component {
  constructor(props) {
    super(props)
    this.drawCard = this.drawCard.bind(this)
    this.initialDraw = this.initialDraw.bind(this)
  }

  drawCard() {
    if(this.props.data.shuffled.length !== 0) {
      this.props.dealerHit();
    }
  }

  initialDraw() {
    this.drawCard();
    this.drawCard();
  }

  componentDidMount() {
    this.initialDraw();
  }

  render() {
    return (
      <div className="dealer">
        <h2>Dealer: {this.props.data.dealer.points}</h2>
        <CardArea cards={this.props.data.dealer.cards} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(Dealer);
