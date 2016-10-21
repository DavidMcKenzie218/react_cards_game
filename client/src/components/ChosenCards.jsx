const React = require('react');
const Card = require('./Card.jsx')

const ChosenCards = React.createClass({

  chosenCards: function(){

    let cards = this.props.cards.map(function(card, index){
      return (<Card key={index} id="white-card" face={card.desc}/>)
    })

    return cards;
  },

  render: function(){ 

    let chosenCards = this.chosenCards();

    return (
      <div id="chosen-cards">
        <h4>Chosen Cards</h4>
        {chosenCards}
      </div>
      )

  }

})

module.exports = ChosenCards;