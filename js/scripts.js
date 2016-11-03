// backend
function Player(currentScore, totalScore) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
}

var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

Player.prototype.diceRoll = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  if (roll === 1) {
    player1.currentScore = 0;
    player2.currentScore = 0
  }
  else {
    player1.currentScore += roll;
    player2.currentScore += roll;
  }
  return roll;
}



Player.prototype.hold = function() {
  return this.totalScore + this.currentScore;
}

//UI
$(document).ready(function() {

  $("#player1roll").click(function() {
    var player1DiceRollInput = $("#player1roll").val();
    var player1DiceHoldInput = $("#player1hold").val();
    var newRoll = Player.prototype.diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (player1.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal);


  });

  $("#player1hold").click(function() {
    // var saveScore = Player.prototype.hold(Player.totalScore);
    // $("#player1score").text(saveScore);
    $("#diceRollTurnTotal").text("0");
    $("#diceSingleRollTotal").text("");
    $("#player1Buttons").hide();
    $("#player2Buttons").show();

  });
});
