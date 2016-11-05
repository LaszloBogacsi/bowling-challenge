// Game describes the beviour of a bowling game keeping track of the overall
//score of the game.

var Frame = require('./Frame')

function Game () {
this.gameScore = 0;
this.NUMBER_OF_PINS = 10;
this.gameFrames = [];
this.gameOver = false;

}

Game.prototype.roll = function () {
  this.isGameOver();
  var firstRoll = Math.floor(Math.random()*(this.NUMBER_OF_PINS + 1));
  var secondRoll = Math.floor(Math.random()*(this.NUMBER_OF_PINS - firstRoll + 1));
  var roll = [firstRoll, secondRoll];
  var frame = new Frame(roll);
  this.addToGameFrames(frame);
  this.calculateScore();
  return roll;
};


Game.prototype.addToGameFrames = function (frames) {
  this.gameFrames.push(frames);
};

Game.prototype.isGameOver = function () {
  if(this.gameFrames.length === 10){
    this.gameOver = true;
    return true;
  }
};

Game.prototype.updateScore = function (score) {
  this.gameScore += score;
}

Game.prototype.calculateScore = function(){
  var frameNumber = this.gameFrames.length;
  var frameScore = this.gameFrames[frameNumber - 1].score;

  this.updateScore(frameScore);
}


module.exports = Game;
