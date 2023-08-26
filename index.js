var arrowImages = document.getElementsByClassName("arrow");
var questionBlocks = document.getElementsByClassName("qa-block");

for (var i = 0; i < arrowImages.length; i++) {
  arrowImages[i].addEventListener("click", function() {
    // Check if the clicked arrow is already rotated
    var isRotated = this.classList.contains("rotated");

    // Reset the state of all arrows, answers, and questions
    for (var j = 0; j < arrowImages.length; j++) {
      arrowImages[j].classList.remove("rotated");
    }

    for (var k = 0; k < questionBlocks.length; k++) {
      var answer = questionBlocks[k].querySelector(".answer");
      var question = questionBlocks[k].querySelector(".question");
      
      answer.classList.remove("visible");
      question.classList.remove("question-clicked");
    }

    // If the clicked arrow was not already rotated, handle the clicked arrow, answer, and question
    if (!isRotated) {
      var arrowImage = this;
      var question = arrowImage.closest(".qa-block").querySelector(".question");

      arrowImage.classList.toggle("rotated");
      
      var answer = arrowImage.closest(".qa-block").querySelector(".answer");
      answer.classList.toggle("visible");

      question.classList.toggle("question-clicked");
    }
  });
}
