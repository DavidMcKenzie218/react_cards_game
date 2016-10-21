const React = require('react');
const Card = require('./Card.jsx')

const ChosenCards = React.createClass({

  chosenCards: function(){

    if(this.props.cards){

      let cards = this.props.cards.map(function(card, index){
        return (<Card key={index} id="white-card" face={card.desc} onClicked={this.props.onClicked}/>)
      }.bind(this))

      return cards;

    }else{
      return (<p>Please Select a Card</p>)
    }
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