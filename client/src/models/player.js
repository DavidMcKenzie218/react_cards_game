const Player = function(){

  this.score = 0;

}

Player.prototype = {

  increaseScore: function(){
    this.score ++;
  }

}

module.exports = Player;