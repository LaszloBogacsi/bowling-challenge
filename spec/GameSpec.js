'use strict';

var Frame = require('../src/Frame');
var Game = require('../src/Game');
require('jasmine-expect');
// var frame = new Frame();
var frame;
var roll;
var game;

// // this is a random roll function that never returns strike or spare.
var NUMBER_OF_PINS = 10;
var rollHelper = function (fRoll, sRoll) {
  var firstRoll = fRoll;
  var secondRoll = sRoll;
  var roll = [firstRoll, secondRoll];
  var frame = new Frame(roll);
  game.addToGameFrames(frame);
  game.calculateScore();
  return roll;
};

describe ('A game', function(){

  beforeEach(function(){
    game = new Game();
  });
  it('has a max of 10 frames', function(){
    for(var i = 0; i < 10; i++){
      game.roll();
    }
    expect(game.gameOver).toEqual(false);
  });

  it('is over at 10 frames', function(){
    for(var i = 0; i < 11; i++){
      game.roll();
    }
    expect(game.gameOver).toEqual(true);
  });

  it('has a 0 score at start of the game', function(){
    expect(game.gameScore).toEqual(0);
  });

});

describe ('Playing multiple frames', function(){
  beforeEach(function(){
    game = new Game();
  });

  it('stores all the frames in an array', function(){
    for(var i = 0; i < 3; i++){
      game.roll();
    }
    expect(game.gameFrames.length).toEqual(3);
  });


  it('updates scores when all the frames are normal no bonus scenarios', function(){
    // roll = [2,2];
    for(var i = 0; i < 10; i++){
      rollHelper(2,2);
    }
    expect(game.gameScore).toEqual(40);
  });
});

describe ('Game score in no bonus frames', function(){
  beforeEach(function(){
    game = new Game();
    game.roll();
  });
});
