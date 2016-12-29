// Game describes the beviour of a bowling game keeping track of the overall
//score of the game.

var Frame = require('./Frame')

function Game () {
  this.gameScore = [];
  this.NUMBER_OF_PINS = 10;
  this.MAX_FRAMES = 10;
  this.gameFrames = [];
  this.gameOver = false;
  this.currentFrameNumber = 0;
  this.gameScoreTotal = 0;
}

var randomRoll1 = function(){
  var firstRoll = Math.floor(Math.random()*(10 + 1));
  return firstRoll;
}
var randomRoll2 = function(){
  var secondRoll = Math.floor(Math.random()*
  (10 - randomRoll1() + 1));
  return secondRoll;
};

Game.prototype.newRoll = function(){
  this.roll(randomRoll1(), randomRoll2());
}

Game.prototype.spareBonus = function (){
  if (this.currentFrameNumber !== 0 && this.gameFrames[this.currentFrameNumber -1].spare === true){
    var spareBonus = roll[0];
    this.gameScore[this.currentFrameNumber - 1] = 10 + spareBonus;
  }
};

Game.prototype.strikeBonus = function () {
  if (this.currentFrameNumber !== 0 && this.gameFrames[this.currentFrameNumber -1].strike === true){
    var strikeBonus = roll[0] + roll[1];
    if (this.currentFrameNumber !== 1 && this.gameFrames[this.currentFrameNumber -2].strike === true){
      this.gameScore[this.currentFrameNumber - 2] = 20 + strikeBonus;
    }
    this.gameScore[this.currentFrameNumber - 1] = 10 + strikeBonus;
  }
};
var roll = []
Game.prototype.roll = function (firstRoll, secondRoll) {
  this.isGameOver();
  roll = [firstRoll];
  var frame = new Frame(roll);
  this.spareBonus();
  roll.push(secondRoll);
  this.strikeBonus();
  frame.isSpare(roll);
  frame.addRollScore(roll);
  if (frame.isSpare) {
    this.addToGameFrames(frame);
    this.calculateScore();
  } else if (frame.strike){
    this.addToGameFrames(frame);
    this.calculateScore();
  } else {
    // this.addToGameFrames(frame);
    // this.calculateScore();
  }
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

Game.prototype.currentFrame = function(){
  return this.gameFrames[this.currentFrameNumber - 1];
};

Game.prototype.calculateScore = function(){
  var frameScore = this.currentFrame().score;
  this.updateScore(frameScore);
};

Game.prototype.updateScore = function (score) {
  this.gameScore.push(score);
  this.calculateGameScoreTotal(this.gameScore);
};

Game.prototype.calculateGameScoreTotal = function (gameScore) {
  var total = gameScore.reduce(function(a,b){return a + b;},0);
  this.gameScoreTotal = total;
  return total;
};

module.exports = Game;
