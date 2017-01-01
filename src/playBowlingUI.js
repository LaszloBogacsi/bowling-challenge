$(document).ready(function(){

  var game = new Game();

$("#roll").click(function() {
  game.newRoll();
  console.log(game)
  updateFrameScore();

})

function updateFrameScore() {
  var frameCount = game.currentFrameNumber;
  console.log(frameCount);


  var roll1 = game.gameFrames[frameCount - 1].rolls[0];
  var roll2 = game.gameFrames[frameCount - 1].rolls[1];
  var prevPrevScore = game.gameScore[frameCount - 3];
  var prevScore = game.gameScore[frameCount - 2];
  var currScore = game.gameScore[frameCount - 1];
  var total = game.gameScoreTotal;


if (roll1 === 10) {
  roll1 = 'X'
  roll2 = ''
} else if (roll1 + roll2 === 10) {
  roll2 = '/'
};

  $(`#roll${(frameCount*2)-2}`).text(roll1);
  $(`#roll${(frameCount*2)-1}`).text(roll2);
  $(`#sum${(frameCount-1)}`).text(currScore);
  $(`#sum${(frameCount-2)}`).text(prevScore);
  $(`#sum${(frameCount-3)}`).text(prevPrevScore);
  $("#total").text(total);




}






});
