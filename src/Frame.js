// Frame describes the behaviour of one bowling game frame.

function Frame (roll) {
  this.NUMBER_OF_PINS = 10;
  this.score = 0;
  this.rolls = roll;
  this.spare = false;
  this.strike = false;

  this.isSpare(roll);
  this.isStrike(roll);
  this.addRollScore(roll);
}


// checks if the frame is weather a spare or not.
Frame.prototype.isSpare = function (roll) {
  if ((this.rolls[0] + this.rolls[1]) === 10 && this.rolls[0] !== 10){
    this.spare = true;
    return true;
  } else {
    this.spare = false;
    return false;
  }
};

// checks if the frame is weather a strike or not.
Frame.prototype.isStrike = function (roll) {
  if (this.rolls[0] === this.NUMBER_OF_PINS){
    this.strike = true;
    return true;
  } else {
    this.strike = false;
    return false;
  }
};

//adds two roll scores together.
Frame.prototype.addRollScore = function(roll){
  var score = roll[0] + roll[1];
  this.score = score;
  return score;
};





// module.exports = Frame;
