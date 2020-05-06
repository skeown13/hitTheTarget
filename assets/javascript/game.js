$(document).ready(function() {

  // Create functions that generate random numbers for the options clicks as well as the Target Number
  function optionsRndNum() {
    return Math.floor((Math.random() * 12) + 1);
  }
  
  function targetRndNum() {
    return Math.floor((Math.random() * 111) + 19); 
  } 
  
  // Declare variables to hold information
  let balloonRndNum;
  let burnerRndNum;
  let ropeRndNum;
  let xtargetRndNum;
  
  let currentScore = 0;
  let targetScore;
  let wins = 0;
  let losses = 0;
  
  // Create a reset function that assigns random numbers to each of the options and to the Target Score. Also sets the Current Score back to 0 at the end of each round. And shows the new Target Score on the screen.
  function reset() {
    // optionsRndNum();
    balloonRndNum = optionsRndNum();
    burnerRndNum = optionsRndNum();
    ropeRndNum = optionsRndNum();
    xtargetRndNum = optionsRndNum();
    currentScore = 0;
    $("#actualCurrentScore").text(currentScore);
    // targetRndNum();
    targetScore = targetRndNum();
    $("#actualTargetScore").text(targetScore);
  }

  // Begins the game by assigning necessary variables via the reset function.
  reset();
  
  // When an option is clicked, it ads its assigned random number to the Current Score.
  // ***Needed feature for later - if a number has already randomly been assigned to an option, do not allow that number to be assigned to another option***
  $(".option").on("click", function() {
    if (this.id === "balloon") {
      currentScore += balloonRndNum;
      $("#actualCurrentScore").text(currentScore);
    } else if (this.id === "burner") {
      currentScore += burnerRndNum;
      $("#actualCurrentScore").text(currentScore);
    } else if (this.id === "rope") {
      currentScore += ropeRndNum;
      $("#actualCurrentScore").text(currentScore);
    } else if (this.id === "xtarget") {
      currentScore += xtargetRndNum;
      $("#actualCurrentScore").text(currentScore);
    }

    // Creates the Logic for when a person wins or losses and what to do at that point.
    if (currentScore === targetScore) {
      wins += 1;
      $("#winTotal").text(wins);
      reset();
    } else if (currentScore > targetScore) {
      losses += 1;
      $("#lossTotal").text(losses);
      reset();
    }

  })
})