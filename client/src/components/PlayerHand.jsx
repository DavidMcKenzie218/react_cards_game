const React = require('react');
const Card = require('./Card.jsx')

const PlayerHand = React.createClass({

  playerHand: function(){

    let cards = this.props.cards.map(function(card, index){
      return (<Card key = {index} id="white-card" face={card.desc} onClicked={this.props.onClicked}/>)
    }.bind(this))

    return cards

  },

  render: function(){

    let playerCards = this.playerHand();

    return (
      <div id="player-hand">
        <h4>Player Hand</h4>
        {playerCards}
      </div>
      )

}

})

module.exports = PlayerHand;