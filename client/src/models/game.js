const Game = function(){
  this.playerTurn = 0
}

Game.prototype = {

  changeTurn: function(){
    this.playerTurn ++;
  }

}

module.exports = Game;