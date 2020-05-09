$(document).ready(function() {

  // Create functions that generate random numbers for the options clicks as well as the Target Number
  function optionsRndNum() {
    return Math.floor((Math.random() * 12) + 1);
  }
  
  function targetRndNum() {
    return Math.floor((Math.random() * 111) + 19); 
  } 
  
  // Declare variables to hold information needed for application
  let balloonRndNum;
  let burnerRndNum;
  let ropeRndNum;
  let xtargetRndNum;
  
  let currentScore = 0;
  let targetScore;
  let wins = 0;
  let losses = 0;

  // Declare an array of photos that will be used when player clicks on an option
  let balloonPics = ["./../images/balloons/b1.jpeg", "./../images/balloons/b2.jpeg", "./../images/balloons/b3.jpeg", "./../images/balloons/b4.jpeg", "./../images/balloons/b5.jpeg", "./../images/balloons/b6.jpeg", "./../images/balloons/b7.jpeg", "./../images/balloons/b8.jpeg", "./../images/balloons/b9.jpeg", "./../images/balloons/b10.jpeg", "./../images/balloons/b11.jpeg", "./../images/balloons/b12.jpeg", "./../images/balloons/b13.jpeg", "./../images/balloons/b14.jpeg", "./../images/balloons/b15.jpeg", "./../images/balloons/b16.jpeg", "./../images/balloons/b17.jpeg", "./../images/balloons/b18.jpeg", "./../images/balloons/b19.jpeg", "./../images/balloons/b20.jpeg", "./../images/balloons/b21.jpeg"];
  
  // Create a reset function that assigns random numbers to each of the options and to the Target Score. Also sets the Current Score back to 0 at the end of each round. And shows the new Target Score on the screen.
  function reset() {
    $("#overlay").css("display", "none");
    balloonRndNum = optionsRndNum();
    burnerRndNum = optionsRndNum();
      if (burnerRndNum === balloonRndNum){
        while (burnerRndNum === balloonRndNum) {
          burnerRndNum = optionsRndNum();
        }
      }
    ropeRndNum = optionsRndNum();
      if (ropeRndNum === balloonRndNum || ropeRndNum === burnerRndNum){
        while (ropeRndNum === balloonRndNum || ropeRndNum === burnerRndNum){
          ropeRndNum = optionsRndNum();
        }
      }
    xtargetRndNum = optionsRndNum();
      if (xtargetRndNum === balloonRndNum || xtargetRndNum === burnerRndNum || xtargetRndNum === ropeRndNum){
        while (xtargetRndNum === balloonRndNum || xtargetRndNum === burnerRndNum || xtargetRndNum === ropeRndNum) {
          xtargetRndNum = optionsRndNum();
        }
      }

    currentScore = 0;
    $("#actualCurrentScore").text(currentScore);
    targetScore = targetRndNum();
    $("#actualTargetScore").text(targetScore);

    $("#images").empty();
  }

  // Begins the game by assigning necessary variables via the reset function.
  reset();
  
  // When an option is clicked, it ads its assigned random number to the Current Score.
  $(".option").on("click", function() {
    if (currentScore < targetScore){
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
    }

    // Creates the Logic for when a person wins or losses and what to do at that point.
    if (currentScore === targetScore) {
      if ($("#overlay").css("display") === "none") {
        wins += 1;
        $("#winTotal").text(wins);
        let imageWin = $("<img>").attr("src", "./assets/images/targetHit.jpg").attr("class", "img-fluid");
        $("#images").html(imageWin);
        $("#overlay").css("display", "block");
        $("#winLossMsg").text("Congratulations!!! You Hit the Target!");
      }
      $("#playAgain").on("click", reset);
    } else if (currentScore > targetScore) {
      if ($("#overlay").css("display") === "none") {
        losses += 1;
        $("#lossTotal").text(losses);
        let imageLoss = $("<img>").attr("src", "./assets/images/targetMissed.jpg").attr("class", "img-fluid");
        $("#images").html(imageLoss);
        $("#overlay").css("display", "block");
        $("#winLossMsg").text("You Missed the Target!");
      }
      $("#playAgain").on("click", reset);
    }

  })
})