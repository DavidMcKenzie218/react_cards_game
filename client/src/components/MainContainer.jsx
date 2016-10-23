const React = require('react');
const BlackCard  =require('./BlackCard.jsx');
const ChoiceButton = require('./ChoiceButton.jsx');
const ChosenCards = require('./ChosenCards.jsx');
const PlayerHand = require('./PlayerHand.jsx');
const Game = require('../models/game.js');

const testCards = [{desc: "Card 1"}, {desc: "Card 2"}];


const MainContainer = React.createClass({

  getInitialState: function(){

    return{cards: testCards, selectedCard: null, playerChosenCard: null, turnPlaying: false};

  },

  onCardClickHandler: function(card){

    let playerCard = {desc: card}

    this.setState({playerChosenCard: [playerCard]});

  },

  onBlackClicked: function(){
    console.log("Black has been clicked");
  },

  onChoiceCardClicked: function(card){
    console.log("choice " + card + " has been selected")
  },

  onButtonClickHandler: function(){
    console.log("button has been clicked");

    if(!this.state.turnPlaying){
      this.setState({selectedCard: this.state.playerChosenCard, turnPlaying: true});

      let hand = this.state.cards;
      let index = hand.findIndex(this.findChosenCard);
      let newHand = hand.splice(index, 1);
    }
  },

  findChosenCard: function(card){
    return card.desc === this.state.playerChosenCard[0].desc;
  },

  render: function(){

    return (
      <div id="main-container">
        <h3>Main Container</h3>
        <BlackCard onClicked={this.onBlackClicked}/>
        <ChoiceButton onClickHandler={this.onButtonClickHandler}/>
        <ChosenCards cards={this.state.selectedCard} onClicked={this.onChoiceCardClicked}/>
        <PlayerHand cards={this.state.cards} onClicked={this.onCardClickHandler}/>
      </div>
      ) 

  }

})

module.exports = MainContainer;