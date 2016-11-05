
function Game () {
  this.rolls = [];
  this.score = 0;
}


function Frame () {
  this.score = 0;
  this.rolls = [];
  this.NUMBER_OF_PINS = 10;
  
}

Frame.prototype.roll = function () {
  var firstRoll = Math.floor(Math.random()*(this.NUMBER_OF_PINS + 1));
  var secondRoll = Math.floor(Math.random()*(this.NUMBER_OF_PINS - firstRoll));
  var roll = [firstRoll, secondRoll];
  this.rolls.push(roll);
  return roll;
};

Frame.prototype.isSpare = function (roll) {
  if ((this.rolls[0] + this.rolls[1]) === this.NUMBER_OF_PINS){
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isStrike = function (roll) {
  if (this.rolls[0] === this.NUMBER_OF_PINS && this.rolls[1] === 0){
    return true;
  } else {
    return false;
  }
};

Frame.prototype.addRollScore = function(roll){
  var score = roll[0] + roll[1];
  this.score += score;
};



module.exports = Frame;
