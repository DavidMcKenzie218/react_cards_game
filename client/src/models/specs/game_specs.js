const assert = require('assert');
const Game = require('../game.js');
const Player = require("../player.js");

describe("Game", function(){

  var game;
  var player;
  var ai;

  before(function(){
    game = new Game();
    player = new Player("player");
    ai = new Player("ai");
  })

  beforeEach(function(){
    game.reset();
  })

  it("has a turn", function(){
    assert.equal(0, game.playerTurn);
  })

  it("can increase in turn", function(){
    for(var i = 0; i < 2; i++){
      game.addPlayer({id: "player", score: 0});
    }
    game.changeTurn();
    assert.equal(1, game.playerTurn);
  })

  it("can only increase to the amount of players playing", function(){
    for (var i = 0; i < 4; i++){
      game.addPlayer({id: ("player" + i), score: 0});
    }
    for (var i = 0; i < 4; i++){
      game.changeTurn();
    }
    assert.equal(0, game.playerTurn);
  })

  it("can have players", function(){
    assert.deepEqual([], game.players);
  })

  it("has a player", function(){
    game.addPlayer({id: "player1" ,score: 0});
    assert.deepEqual([{id: "player1" ,score: 0}], game.players)
  })

  it("can add player objects", function(){
    game.addPlayer(player);
    assert.deepEqual(1, game.playerCount)
  })

  it("can increase a players score", function(){
    game.addPlayer(player);
    game.increaseScore("player")
    assert.equal(1, player.score)
  })

})