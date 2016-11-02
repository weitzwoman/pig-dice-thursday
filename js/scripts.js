// backend
function Pig(player1, player2, currentScore, activePlayer) {
  this.player1 = 0;
  this.player2 = 0;
  this.currentScore = 0;
  this.activePlayer = 1;
}

function diceRoll() {
  var roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

//UI
$(document).ready(function() {
  $("#player1").click(function() {
    var player1DiceRollInput = $("#player1roll").val();
    var player1DiceHoldInput = $("#player1hold").val();

    var newRoll = diceRoll();
    $("#diceSingleRollTotal").text(newRoll);

  });
  $("form#player1").click(function(event) {
    event.preventDefault();
    var player2DiceRollInput = $("#player2roll").val();
    var player2DiceHoldInput = $("#player2hold").val();

  });
});
