$( document ).ready(() => {
  let currentCard = 0;

  let cards = [
    {id:1, question: "question 1", answer: "answer 1"},
    {id:2, question: "question 2", answer: "answer 2"},
    {id:3, question: "question 3", answer: "answer 3"},
    {id:4, question: "question 4", answer: "answer 4"},
    {id:5, question: "question 5", answer: "answer 5"},
    {id:6, question: "question 6", answer: "answer 6"},
    {id:7, question: "question 7", answer: "answer 7"},
    {id:8, question: "question 8", answer: "answer 8"},
    {id:9, question: "question 9", answer: "answer 9"},
    {id:10, question: "question 10", answer: "answer 10"}
  ];

  const displayFirstCard = () => {
    let displayCard = cards[currentCard].question;
    let el = document.getElementById("question-info");
    el.innerHTML = displayCard;

    $("#question-info").show();
  };

  displayFirstCard();


  const toggleCard = () => {
    // el.style.display = "none";

    let cardAnswer = cards[currentCard].answer;
    let el2 = document.getElementById("answer-info");
    el2.innerHTML = cardAnswer;
    $("#answer-info").toggle()
  

    let cardQuestion = cards[currentCard].question;
    let el1 = document.getElementById("question-info");
    el1.innerHTML = cardQuestion;
    $("#question-info").toggle();

  };


  const next = () => {
    if (currentCard < (cards.length - 1)) {
      currentCard++;
    } else {
      currentCard = 0
    }
    toggleCard();
  };

  const previous = () => {
    if (currentCard >= 0) {
      currentCard--;
    } else {
      currentCard = 9
    }
    toggleCard();
  };

  // const deleteCard {
  //   let card = this.id
  //   debugger
  // }
  const create = () => {
    // create form element, append to #content div
    let form = document.querySelectorAll(".form");
    let content = document.querySelectorAll("#conent");
    $("#content").hide();
    $(".form").show();

    debugger
  }

//DONE
$(".card-container").on("click", toggleCard);
$("#next").on("click", next);
$("#previous").on("click", previous);

//NOT DONE
$("#edit").on("click", edit);
// $("#delete").on("click", deleteCard);
$("#create").on("click", create);

});