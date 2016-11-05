// Game describes the beviour of a bowling game keeping track of the overall
//score of the game.

var Frame = require('./Frame')

function Game () {
this.gameScore = [];
this.NUMBER_OF_PINS = 10;
this.gameFrames = [];

}

Game.prototype.roll = function () {
  var firstRoll = Math.floor(Math.random()*(this.NUMBER_OF_PINS + 1));
  var secondRoll = Math.floor(Math.random()*(this.NUMBER_OF_PINS - firstRoll + 1));
  var roll = [firstRoll, secondRoll];
  var frame = new Frame(roll);
  this.addToGameFrames(frame);
  return roll;
};


Game.prototype.addToGameFrames = function (frames) {
  this.gameFrames.push(frames);
};


module.exports = Game;
