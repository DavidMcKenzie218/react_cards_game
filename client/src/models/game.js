const Game = function(playerCount){
  this.playerTurn = 0
  this.playerCount = playerCount;
}

Game.prototype = {

  reset: function(){
    this.playerTurn = 0;
  },

  changeTurn: function(){
    if(this.playerTurn < this.playerCount){
      this.playerTurn ++;  
    }else{
      this.playerTurn = 0;
    }
    
  }

}

module.exports = Game;