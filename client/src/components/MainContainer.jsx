const React = require('react');
const BlackCard  =require('./BlackCard.jsx');
const ChoiceButton = require('./ChoiceButton.jsx');
const ChosenCards = require('./ChosenCards.jsx');
const PlayerHand = require('./PlayerHand.jsx');
const Points = require('./Points.jsx')
const Game = require('../models/game.js');
const Player = require('../models/player.js');

const testCards = [{desc: "Card 1"}, {desc: "Card 2"}, {desc: "Card 3"}, {desc: "Card 4"}, {desc: "Card 5"}, {desc: "Card 6"}];

const game = new Game();
//This is a global as I don't know where to initilise it at the moment!!!
//TODO move out of the global scope


const MainContainer = React.createClass({

  getInitialState: function(){
    return{cards: testCards, selectedCard: [{desc: "Please Select a Card"}], playerChosenCard: null, turnPlaying: false, turn: game.playerTurn, playerCount: 2, playerCards: [], aiCards: [], start: false, aiPlayed: false};
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
    if(this.state.turn === 0){
      let chosenCard = {desc: card};
      game.increaseScore("ai");

    }
  },

  nextTurn: function(){
    game.changeTurn();
    this.setState({turn: game.playerTurn, turnPlaying: false, selectedCard: [{desc: "Please Select a Card"}], aiPlayed: false});
  },

  playerIsCzar: function(){
    if(!this.state.turnPlaying){
      this.setState({turnPlaying: true})
    }
  },

  playerSelectCard: function(){
    if(!this.state.turnPlaying){
      this.setState({selectedCard: this.state.playerChosenCard, turnPlaying: true});
      let hand = this.state.cards;
      let index = hand.findIndex(this.findChosenCard);
      let newHand = hand.splice(index, 1);
      game.increaseScore("player");
    }

  },

  aiPlayCards: function(){
  this.setState({selectedCard: [{desc: "ai one"}, {desc: "ai two"}]});
  },

  onButtonClickHandler: function(){
    if(this.state.turn === 0){
      this.playerIsCzar();
      this.nextTurn();
    }else{
      this.playerSelectCard();
      this.nextTurn();
    }
  },

  findChosenCard: function(card){
    return card.desc === this.state.playerChosenCard[0].desc;
  },

  dealCards: function(){
    let playerHand = [];
    let aiHand = [];
    for(var i = 0; i < this.state.cards.length; i++){
      if(i%this.state.playerCount){
        playerHand.push(this.state.cards[i]);
      }else{
        aiHand.push(this.state.cards[i])
      }
    }
    this.setState({playerHand: playerHand, aiHand: aiHand})
  },

  componentWillMount: function(){
    if(this.state.turn === 0 && !this.state.start){
      this.setState({start: true});
      const player = new Player("player");
      const ai = new Player("ai");
      game.addPlayer(player);
      game.addPlayer(ai);
      this.dealCards();
      this.aiPlayCards();
    }
  },

  componentWillUpdate: function(nextProps, nextState){
  if(nextState.turn === 0 && !(this.state.aiPlayed)){
    console.log("ai played")
      this.aiPlayCards();
      this.setState({aiPlayed: true})
    }
  },

  render: function(){
    return (
      <div id="main-container">
        <h3>Main Container</h3>
        <Points playerPoints={game.getScore("player")} aiOnePoints={game.getScore("ai")}/>
        <BlackCard onClicked={this.onBlackClicked}/>
        <ChoiceButton onClickHandler={this.onButtonClickHandler}/>
        <ChosenCards cards={this.state.selectedCard} onClicked={this.onChoiceCardClicked}/>
        <PlayerHand cards={this.state.playerHand} onClicked={this.onCardClickHandler}/>
      </div>
      ) 
  }
})

module.exports = MainContainer;