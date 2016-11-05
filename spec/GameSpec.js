'use strict';

var Frame = require('../src/Frame');
var Game = require('../src/Game');
require('jasmine-expect');
// var frame = new Frame();
var frame;
var roll;
var game;

// // this is a random roll function that never returns strike or spare.
// var NUMBER_OF_PINS = 10;
// roll = function () {
//   var firstRoll = Math.floor(Math.random()*(NUMBER_OF_PINS));
//   var secondRoll = Math.floor(Math.random()*(NUMBER_OF_PINS - firstRoll));
//   var roll = [firstRoll, secondRoll];
//   var frame = new Frame(roll);
//   return roll;
// };

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

  it('a game has a max of 10 frames', function(){

  });

  it('when all the frames are normal no bonus scenarios', function(){
    roll = [2,2];
    for(var i = 0; i < 10; i++){
       new Frame(roll);
    }
    expect(game.gameScore).toEqual(40);
  });
});

describe ('Game score in no bonus frames', function(){
  beforeEach(function(){
    game = new Game();
    game.roll();
  });

  it('is 0 at start of the game', function(){

  });

  it('updating after every frame', function(){

  });

});
