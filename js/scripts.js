// backend
function Pig(player1, player2, currentScore, activePlayer) {
  this.player1 = 0;
  this.player2 = 0;
  this.currentScore = 0;
  this.activePlayer = 1;
}

var game = new Pig();

function diceRoll() {
  var roll = Math.floor(Math.random() * 6) + 1;
  if (roll === 1) {
    game.currentScore = 0;
    this.switchActivePlayer();
  }
  else {
    game.currentScore += roll;
  }
  return roll;
}

function switchActivePlayer() {
  if (game.activePlayer === 1){
    game.player1 += game.currentScore;
    game.activePlayer = 2;
  }else{
    game.player2 += game.currentScore;
    game.activePlayer = 1;
  }
}

Pig.prototype.hold = function(hold) {
  switchActivePlayer();
  game.currentScore = 0;
}

//UI
$(document).ready(function() {

  $("#player1roll").click(function() {
    var player1DiceRollInput = $("#player1roll").val();
    var player1DiceHoldInput = $("#player1hold").val();
    var newRoll = diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (game.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal)
  });

  $("#player1hold").click(function() {
    game.hold();
    var turnRolltotal = (game.currentScore);
    $("#player1score").text(game.player1);
    $("#diceRollTurnTotal").text("0");
    $("#diceSingleRollTotal").text("");
  });

  $("#player2roll").click(function() {
    var player2DiceRollInput = $("#player2roll").val();
    var player2DiceHoldInput = $("#player2hold").val();
    var newRoll = diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (game.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal)
  });

  $("#player2hold").click(function() {
    game.hold();
    var turnRolltotal = (game.currentScore);
    $("#player2score").text(game.player2);
    $("#diceRollTurnTotal").text("0");
    $("#diceSingleRollTotal").text("");
  });
});
