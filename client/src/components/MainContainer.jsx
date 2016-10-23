const React = require('react');
const BlackCard  =require('./BlackCard.jsx');
const ChoiceButton = require('./ChoiceButton.jsx');
const ChosenCards = require('./ChosenCards.jsx');
const PlayerHand = require('./PlayerHand.jsx');
const Game = require('../models/game.js');

const testCards = [{desc: "Card 1"}, {desc: "Card 2"}, {desc: "Card 3"}, {desc: "Card 4"}, {desc: "Card 5"}, {desc: "Card 6"}];

const game = new Game(2)

const MainContainer = React.createClass({

  getInitialState: function(){

    return{cards: testCards, selectedCard: [{desc: "Selected Card"}], playerChosenCard: null, turnPlaying: false, turn: game.playerTurn, playerCount: 2, playerCards: [], aiCards: []};

  },

  onCardClickHandler: function(card){

    if(this.state.turn != 0){
      let playerCard = {desc: card};
    
        this.setState({playerChosenCard: [playerCard]});
    }

  },

  onBlackClicked: function(){
    console.log("Black has been clicked");
  },

  onChoiceCardClicked: function(card){
    console.log("choice " + card + " has been selected");
    if(this.state.turn === 0){

      let chosenCard = {desc: card};

      console.log(chosenCard);

    }
  },

  nextTurn: function(){
    game.changeTurn();
    this.setState({turn: (game.playerTurn), turnPlaying: false})
    console.log(this.state.turn)
  },

  playerIsCzar: function(){
    if(!this.state.turnPlaying){
      this.setState({selectedCard: this.state.playerChosenCard, turnPlaying: true})

      console.log(this.state.selectedCard);
    }
  },

  playerSelectCard: function(){
    if(!this.state.turnPlaying){
      this.setState({selectedCard: this.state.playerChosenCard, turnPlaying: true});

      let hand = this.state.cards;
      let index = hand.findIndex(this.findChosenCard);
      let newHand = hand.splice(index, 1);
    }

  },

  onButtonClickHandler: function(){
    console.log("button has been clicked");
    console.log(this.state.turn);

    if(this.state.turn === 0){
      this.playerIsCzar();
      this.nextTurn();
    }else{
      this.playerSelectCard();
    }
  },

  findChosenCard: function(card){
    return card.desc === this.state.playerChosenCard[0].desc;
  },

  dealCards: function(){
    let playerHand = [];
    let aiHand = [];
    for(var i = 0; i < this.state.cards.length; i++){
      if(i%2){
        playerHand.push(this.state.cards[i]);
      }else{
        aiHand.push(this.state.cards[i])
      }
    }
    this.setState({playerHand: playerHand, aiHand: aiHand})
  },

  componentWillMount: function(){
    if(this.state.turn === 0){
      this.dealCards();
    }
  },

  render: function(){

    return (
      <div id="main-container">
        <h3>Main Container</h3>
        <BlackCard onClicked={this.onBlackClicked}/>
        <ChoiceButton onClickHandler={this.onButtonClickHandler}/>
        <ChosenCards cards={this.state.selectedCard} onClicked={this.onChoiceCardClicked}/>
        <PlayerHand cards={this.state.playerHand} onClicked={this.onCardClickHandler}/>
      </div>
      ) 

  }

})

module.exports = MainContainer;