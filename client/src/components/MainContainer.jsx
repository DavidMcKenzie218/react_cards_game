const React = require('react');
const BlackCard  =require('./BlackCard.jsx');
const ChoiceButton = require('./ChoiceButton.jsx');
const ChosenCards = require('./ChosenCards.jsx');
const PlayerHand = require('./PlayerHand.jsx');

const testCards = [{desc: "Card 1"}, {desc: "Card 2"}];


const MainContainer = React.createClass({

  getInitialState: function(){

    return{cards: testCards, selectedCard: null};

  },

  onClickHandler: function(card){

    let playerCard = {desc: card}

    this.setState({selectedCard: [playerCard]});

  },

  onBlackClicked: function(){
    console.log("Black has been clicked");
  },

  onChoiceCardClicked: function(card){
    console.log("choice " + card + " has been selected")
  },

  render: function(){

    return (
      <div id="main-container">
        <h3>Main Container</h3>
        <BlackCard onClicked={this.onBlackClicked}/>
        <ChoiceButton />
        <ChosenCards cards={this.state.selectedCard} onClicked={this.onChoiceCardClicked}/>
        <PlayerHand cards={this.state.cards} onClicked={this.onClickHandler}/>
      </div>
      ) 

  }

})

module.exports = MainContainer;