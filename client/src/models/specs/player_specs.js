const assert = require('assert');
const Player = require('../player.js');

describe("Player", function(){

  let player;

  before(function(){
    player = new Player();
  })

  it("Has a score", function(){
    assert.equal(0, player.score);
  })

  it("Can increse the score", function(){
    player.increaseScore();
    assert.equal(1, player.score);
  })

})