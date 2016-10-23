const assert = require('assert');
const Game = require('../game.js');

describe("Game", function(){

  var game;

  before(function(){
    game = new Game();
  })

  it("has a turn", function(){
    assert.equal(0, game.playerTurn)
  })

})