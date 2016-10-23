const Player = function(id){

  this.score = 0;
  this.id = id;

}

Player.prototype = {

  increaseScore: function(){
    this.score ++;
  }

}

module.exports = Player;