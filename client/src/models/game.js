const Game = function(){
  this.playerTurn = 0
  this.players = [];
  this.playerCount = 0;
}

Game.prototype = {

  reset: function(){
    this.players = [];
    this.playerTurn = 0;
    this.playerCount = 0;
  },

  changeTurn: function(){
    if(this.playerTurn < (this.playerCount - 1)){
      this.playerTurn ++;  
    }else{
      this.playerTurn = 0;
    }
    
  },

  addPlayer: function(player){
    this.players.push(player);
    this.playerCount ++;
  },

  increaseScore: function(id){
    let winner = this.players.find(function(player){
      return player.id === id;
    })

    winner.increaseScore();
  }

}

module.exports = Game;