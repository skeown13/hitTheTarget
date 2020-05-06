$(document).ready(function() {
  // let optionsRndNum = Math.floor((Math.random() * 12) + 1);
  function optionsRndNum() {
    return Math.floor((Math.random() * 12) + 1);
  }
  
  function targetRndNum() {
    return Math.floor((Math.random() * 111) + 19); 
  } 
  
  
  let balloonRndNum;
  let burnerRndNum;
  let ropeRndNum;
  let xtargetRndNum;
  
  let currentScore = 0;
  let targetScore;
  let wins = 0;
  let losses = 0;
  
  function reset() {
    optionsRndNum();
    balloonRndNum = optionsRndNum();
    burnerRndNum = optionsRndNum();
    ropeRndNum = optionsRndNum();
    xtargetRndNum = optionsRndNum();
    currentScore = 0;
    $("#actualCurrentScore").text(currentScore);
    targetRndNum();
    targetScore = targetRndNum();
    $("#actualTargetScore").text(targetScore);
  }

  reset();
  // $("#actualTargetScore").text(targetScore);
  console.log(targetScore);
  // Needed feature for later - if a number has already randomly been assigned to an option, do not allow that number to be assigned to another option
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