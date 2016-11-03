// backend
function Player(currentScore, totalScore, isTurn) {
  this.currentScore = currentScore;
  this.totalScore = totalScore;
  this.isTurn = true;
}

Player.prototype.diceRoll = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  if (roll === 1) {
    this.currentScore = 0;
    $("#player1Buttons").toggle();
    $("#player2Buttons").toggle();
  }
  else {
    this.currentScore += roll;
  }
  return roll;
}


Player.prototype.hold = function() {
  this.totalScore = this.totalScore + this.currentScore;
  this.isTurn = true;
}

//UI

$(document).ready(function() {
  var player1 = new Player(0, 0, "");
  var player2 = new Player(0, 0, "");
  $("#player1roll").click(function() {
    var newRoll = player1.diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (player1.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal);
  });

  $("#player1hold").click(function() {
    player1.hold();
    $("#player1score").text(player1.totalScore);
    $("#diceRollTurnTotal").text("0");
    $("#diceSingleRollTotal").text("");
    $("#player1Buttons").hide();
    $("#player2Buttons").show();
    console.log(player1.totalScore)
  });

  $("#player2roll").click(function() {
    var newRoll = player2.diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (player2.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal);
  });

  $("#player2hold").click(function() {
    player2.hold();
    $("#player2score").text(player2.totalScore);
    $("#diceRollTurnTotal").text("0");
    $("#diceSingleRollTotal").text("");
    $("#player2Buttons").hide();
    $("#player1Buttons").show();
  });

});
