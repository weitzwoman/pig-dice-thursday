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
    this.isTurn = false;
  }
  else {
    this.currentScore += roll;
  }
  return roll;
}

Player.prototype.switchActivePlayer = function() {
  // this.currentScore = 0;
  if (this.isTurn === true) {
    this.isTurn = false;
  }
}

Player.prototype.hold = function() {
  //var playerTotalScore = this.totalScore + this.currentScore;
  this.totalScore + this.currentScore;
  this.isTurn = true;
  //this.currentScore = 0;
}

//UI

$(document).ready(function() {
  var player1 = new Player(0, 0, "");
  var player2 = new Player(0, 0, "");
  $("#player1roll").click(function() {
    // var player1DiceRollInput = $("#player1roll").val();
    // var player1DiceHoldInput = $("#player1hold").val();
    var newRoll = player1.diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (player1.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal);
  });

  $("#player1hold").click(function() {
    var saveScore = player1.hold();
    $("#player1score").text(saveScore);
    //saveScore
    $("#diceRollTurnTotal").text("0");
    $("#diceSingleRollTotal").text("");
    $("#player1Buttons").hide();
    $("#player2Buttons").show();
  });

  $("#player2roll").click(function() {
    var newRoll = player2.diceRoll();
    $("#diceSingleRollTotal").text(newRoll);
    var turnRolltotal = (player2.currentScore);
    $("#diceRollTurnTotal").text(turnRolltotal);
  });

  $("#player2hold").click(function() {
    var saveScore = player2.hold();
    $("#player2score").text(saveScore);
    // player2.switchActivePlayer();
    $("#diceRollTurnTotal").text("0");
    $("#diceSingleRollTotal").text("");
    $("#player2Buttons").hide();
    $("#player1Buttons").show();
  });

});
