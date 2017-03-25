import React, { Component } from 'react';
import * as actions from '../actions/index'
import { connect } from 'react-redux';

class Card extends Component {

  render(props) {
    console.log(this.props)
    return (
      <div className="card">
        <h3 className="card-text">{this.props.suit + this.props.rank} : {this.props.points}</h3>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, actions)(Card);
