$(document).ready(function(){

  var game = new Game();

$("#roll").click(function() {
  game.newRoll();
  console.log(game)
  updateFrameScore();
})

function updateFrameScore() {
  var roll1 = game.gameFrames[0].rolls[0];
  var roll2 = game.gameFrames[0].rolls[1];
  var currScore = game.gameScore[0];


if (roll1 === 10) {
  roll1 = 'X'
  roll2 = ''
} else if (roll1 + roll2 === 10) {
  roll2 = '/'
};

var frameCount = game.currentFrameNumber;
  $(`#id${(frameCount*2)-2}`).text(roll1);
  $(`#id${(frameCount*2)-1}`).text(roll2);
  $("#sum td:nth-child(1)").text(currScore);


}






});
