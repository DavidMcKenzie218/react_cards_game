const React = require('react');
const BlackCard  =require('./BlackCard.jsx');
const ChoiceButton = require('./ChoiceButton.jsx');
const ChosenCards = require('./ChosenCards.jsx');
const PlayerHand = require('./PlayerHand.jsx');

const testCards = [{desc: "Card 1"}, {desc: "Card 2"}];


const MainContainer = React.createClass({

  getInitialState: function(){

    return{cards: testCards};

  },

  render: function(){

    return (
      <div id="main-container">
        <h3>Main Container</h3>
        <BlackCard/>
        <ChoiceButton/>
        <ChosenCards cards={this.state.cards}/>
        <PlayerHand cards={this.state.cards}/>
      </div>
      ) 

  }

})

module.exports = MainContainer;