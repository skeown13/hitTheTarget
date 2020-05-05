$(document).ready(function() {
  // let optionsRndNum = Math.floor((Math.random() * 12) + 1);
  function optionsRndNum() {
    return Math.floor((Math.random() * 12) + 1);
  }
  
  let targetRndNum = Math.floor((Math.random() * 111) + 19);

  let balloonRndNum = optionsRndNum();
  let burnerRndNum = optionsRndNum();
  let ropeRndNum = optionsRndNum();
  let xtargetRndNum = optionsRndNum();

  let currentScore;
  let targetScore = targetRndNum;


  // Needed feature for later - if a number has already randomly been assigned to an option, do not allow that number to be assigned to another option
  $(".option").on("click", function() {
    if (this.id === "balloon") {
      console.log (balloonRndNum);
    } else if (this.id === "burner") {
      console.log (burnerRndNum);
    } else if (this.id === "rope") {
      console.log (ropeRndNum);
    } else if (this.id === "xtarget") {
      console.log (xtargetRndNum);
    }

  })
})