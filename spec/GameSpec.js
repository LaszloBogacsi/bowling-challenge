'use strict';

var Frame = require('../src/Frame');
var Game = require('../src/Game');
require('jasmine-expect');
// var frame = new Frame();
var frame;
var roll;
var game;

var randomRoll1 = function(){
  var firstRoll = Math.floor(Math.random()*(10 + 1));
  return firstRoll;
}
var randomRoll2 = function(){
  var secondRoll = Math.floor(Math.random()*
  (10 - randomRoll1() + 1));
  return secondRoll;
};

describe ('A game', function(){

  beforeEach(function(){
    game = new Game();
  });
  it('has a max of 10 frames', function(){
    for(var i = 0; i < 10; i++){
      game.roll(1,2);
    }
    expect(game.gameOver).toEqual(false);
  });

  it('is over at 10 frames', function(){
    for(var i = 0; i < 11; i++){
      game.roll(randomRoll1(),randomRoll2());
    }
    expect(game.gameOver).toEqual(true);
  });

  it('has an empty score array at start of the game', function(){
    expect(game.gameScore).toEqual([]);
  });

});

describe ('Playing multiple frames', function(){
  beforeEach(function(){
    game = new Game();
  });

  it('stores all the frames in an array', function(){
    for(var i = 0; i < 3; i++){
      game.roll(1,1);
    }
    expect(game.gameFrames.length).toEqual(3);
  });

  it('updates scores when all the frames are normal no bonus scenarios', function(){
    for(var i = 0; i < 10; i++){
      game.roll(2,2);
    }
    expect(game.gameScoreTotal).toEqual(40);
  });
});

describe ('Game score in bonus frames', function(){
  beforeEach(function(){
    game = new Game();
  });
  it('spare scenario', function(){
    game.roll(3,4);
    game.roll(5,5);
    game.roll(1,1);
    expect(game.gameScoreTotal).toEqual(20);
  });
  it('triple strike scenario starting off with a strike', function(){
    game.roll(10,0);
    game.roll(10,0);
    game.roll(10,0);
    expect(game.gameScoreTotal).toEqual(60);
  });
  it('strike scenario', function(){
    game.roll(3,4);
    game.roll(10,0);
    game.roll(3,4);
    expect(game.gameScoreTotal).toEqual(31);
  });

  it('double strike scenario', function(){
    game.roll(3,4);
    game.roll(10,0);
    game.roll(10,0);
    game.roll(3,4);
    expect(game.gameScoreTotal).toEqual(58);
  });

  it('strike and spare scenario', function(){
    game.roll(3,4);
    game.roll(10,0);
    game.roll(6,4);
    game.roll(3,4);
    expect(game.gameScoreTotal).toEqual(47);
  });
});
