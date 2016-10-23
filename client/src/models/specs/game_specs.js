const assert = require('assert');
const Game = require('../game.js');

describe("Game", function(){

  var game;

  before(function(){
    game = new Game(4);
  })

  beforeEach(function(){
    game.reset();
  })

  it("has a turn", function(){
    assert.equal(0, game.playerTurn);
  })

  it("can increase in turn", function(){
    game.changeTurn();
    assert.equal(1, game.playerTurn);
  })

  it("can only increase to the amount of players playing", function(){
    for (var i = 0; i < 5; i++){
      game.changeTurn();
    }
    assert.equal(0, game.playerTurn);
  })

  it("can have players", function(){
    assert.deepEqual([], game.players);
  })

})