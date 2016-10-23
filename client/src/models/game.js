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
    console.log(this.playerCount)
    if(this.playerTurn < this.playerCount){
      this.playerTurn ++;  
    }else{
      this.playerTurn = 0;
    }
    
  },

  addPlayer: function(player){
    this.players.push(player);
    this.playerCount ++;
  }

}

module.exports = Game;