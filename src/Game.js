// Game describes the beviour of a bowling game keeping track of the overall
//score of the game.

var Frame = require('./Frame')

function Game () {
  this.gameScore = 0;
  this.NUMBER_OF_PINS = 10;
  this.MAX_FRAMES = 10;
  this.gameFrames = [];
  this.gameOver = false;
  this.currentFrameNumber = 0;
}

Game.prototype.roll = function () {
  this.isGameOver();
  var firstRoll = Math.floor(Math.random()*(this.NUMBER_OF_PINS + 1));
  var secondRoll = Math.floor(Math.random()*
  (this.NUMBER_OF_PINS - firstRoll + 1));
  var roll = [firstRoll, secondRoll];
  var frame = new Frame(roll);
  this.addToGameFrames(frame);
  this.calculateScore();
  return roll;
};

Game.prototype.addToGameFrames = function (frames) {
  this.gameFrames.push(frames);
  this.updateCurrentFrameNumber();
};

Game.prototype.updateCurrentFrameNumber = function () {
  this.currentFrameNumber ++ ;
};

Game.prototype.isGameOver = function () {
  if(this.gameFrames.length === this.MAX_FRAMES){
    this.gameOver = true;
    return true;
  }
};

Game.prototype.updateScore = function (score) {
  this.gameScore += score;
};

Game.prototype.calculateScore = function(){
  if (this.currentFrame().spare) {
    this.calculateSpareBonus(this.currentFrameNumber)+
    this.updateScore(this.currentFrame().score);


  // } else if (this.currentFrame().strike) {
  //   this.calculateStrikeBonus();
  } else {
    var frameScore = this.currentFrame().score;
    this.updateScore(frameScore);
  }
};

Game.prototype.currentFrame = function(){
  return this.gameFrames[this.currentFrameNumber - 1];
};

Game.prototype.calculateSpareBonus = function (currentFrameNumber) {
  var bonus = 0;
  bonus = this.gameFrames[currentFrameNumber - 1].rolls[0];
  console.log(bonus);
  return bonus;
};


module.exports = Game;
