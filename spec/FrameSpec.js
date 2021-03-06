'use strict';

var frame;
var roll;
var game = new Game();

var firstRoll;
var randomRoll1 = function(){
  firstRoll = Math.floor(Math.random()*(10 + 1));
  return firstRoll;
}
var randomRoll2 = function(firstRoll){
  var secondRoll = Math.floor(Math.random()*
  (10 - firstRoll));
  console.log(firstRoll);
  return secondRoll;
};

describe ('Frame', function (){

  describe ('one frame', function(){
    beforeEach(function(){
      roll =  game.roll();
      frame = new Frame(roll);
    });
    it('a frame consist of max 2 rolls', function(){
      expect(frame.rolls.length).toEqual(2);

    });
    it('two rolls of a frame adds up as the score for the frame', function(){
      roll = [2,3];
      frame = new Frame(roll);
      expect(frame.score).toEqual(5);
    });
  });

  describe ('Score of a frame', function(){
    beforeEach(function(){
      roll = game.roll(1,3);
      frame = new Frame(roll);
    })
    it('at start of the frame the rolls array is empty by default', function(){
      frame = new Frame([]);
      expect(frame.rolls).toBeDefined();
    });

    it('the sum of the first and second roll is max of 10', function(){
      expect(frame.score).toBeLessThan(11);
    });
  });

  describe ('no bonus frame', function(){
    it('when there is no spare and strike roll', function (){
      roll = [3,4];
      frame = new Frame(roll);
      expect(frame.isStrike()).toEqual(false);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe ('Strike frame', function(){
    it('when the first roll is 10 its a strike frame', function(){
      roll = [10,0]
      frame = new Frame(roll);
      expect(frame.isStrike()).toEqual(true);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe ('Spare frame', function(){
    it('when all the pins gets knocked down in the second roll', function(){
      roll = [7,3];
      frame = new Frame(roll);
      expect(frame.isSpare()).toEqual(true);
      expect(frame.isStrike()).toEqual(false);
    });
  });

});
