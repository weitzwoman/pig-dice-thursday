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
  if (this.activePlayer === 1){
    game.player1 += game.currentScore;
    game.activePlayer = 2;
  }else{
    game.player2 += game.currentScore;
    game.activePlayer = 1;
  }
}

function hold(){
  game.switchActivePlayer();
  game.currentScore = 0;
}


//UI
$(document).ready(function() {
  $("#player1").click(function() {
    var player1DiceRollInput = $("#player1roll").val();
    var player1DiceHoldInput = $("#player1hold").val();

    var newRoll = diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (game.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal)

    $("#player1hold").click(function() {
      var player1hold = (game.hold);
      $("#player1score").text(turnRolltotal);
    });

  });
  $("#player2").click(function() {
    var player2DiceRollInput = $("#player2roll").val();
    var player2DiceHoldInput = $("#player2hold").val();

    var newRoll = diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (game.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal)

    $("#player2hold").click(function() {
      var player2hold = (game.hold);
      $("#player2score").text(turnRolltotal);
    });

    var holdTurn = hold();

  });
});
