const React = require('react');
const BlackCard  =require('./BlackCard.jsx');
const ChoiceButton = require('./ChoiceButton.jsx');
const ChosenCards = require('./ChosenCards.jsx');
const PlayerHand = require('./PlayerHand.jsx');


const MainContainer = React.createClass({

  render: function(){

    return (
      <div id="main-container">
        <h3>Main Container</h3>
        <BlackCard/>
        <ChoiceButton/>
        <ChosenCards/>
        <PlayerHand cards={[{desc: "Card 1"}, {desc: "Card 2"}]}/>
      </div>
      ) 

  }

})

module.exports = MainContainer;