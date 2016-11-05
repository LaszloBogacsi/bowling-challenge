'use strict';

var Frame = require('../src/frame');
require('jasmine-expect');
var frame = new Frame();
var roll;
describe ('one frame', function(){
  frame = new Frame();
  it('two rolls of a frame adds up as the score for the frame', function(){
    roll = [2,3];
    frame.addRollScore(roll);
    expect(frame.score).toEqual(5);
  });
});

describe ('score', function(){
  frame = new Frame();
  it('at start of the frame the rolls array is empty', function(){
    expect(frame.rolls).toEqual([]);
  });

  it('the sum of the first and second roll is max of 10', function(){
    frame = new Frame();
    var rollScore = frame.roll();
    frame.addRollScore(rollScore);
    expect(frame.score).toBeLessThanOrEqualTo(10);
  });
});

describe ('Strike frame', function(){
  frame = new Frame();
  it('when the first roll is 10 its a strike frame', function(){
    frame.rolls = [10,0];
    frame.addRollScore(roll);
    expect(frame.isStrike()).toEqual(true);
  });
});

describe ('Spare frame', function(){
  frame = new Frame();
  it('when all the pins gets knocked down in the second roll', function(){
    frame.rolls = [7,3];
    frame.addRollScore(roll);
    expect(frame.isSpare()).toEqual(true);
  });
});


// have a game
// a game has a frame
// a frame has two rolls (normally), one roll if first is strike
// can roll
// rolls have scores equivalent to the number of knocked pins
// a roll is random between 0-10
// a frame can be strike if all pins get knocked in the first roll
// a frame can be spare is all remining pins get knocked in the second
  // roll of a frame
// bonuses:
  // spare bonus: first roll of next frame
  // strike bonus: 2 rolls after strike.
