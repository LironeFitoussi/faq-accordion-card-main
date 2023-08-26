var arrowImages = document.getElementsByClassName("arrow");
var questionBlocks = document.getElementsByClassName("qa-block");

for (var i = 0; i < arrowImages.length; i++) {
  arrowImages[i].addEventListener("click", function() {
    var arrowImage = this;
    var question = arrowImage.closest(".qa-block").querySelector(".question");

    // Toggle the rotated class for arrow
    arrowImage.classList.toggle("rotated");
    
    // Toggle the visible class for answer
    var answer = arrowImage.closest(".qa-block").querySelector(".answer");
    answer.classList.toggle("visible");

    // Toggle the question-clicked class
    question.classList.toggle("question-clicked");
  });
}
