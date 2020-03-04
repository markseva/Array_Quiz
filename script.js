let question = [];
let userAnswers = [];
let correctAnswers = [];
let numberCorrect = [];

let createQuestion = function (questionText, choice1, choice2, choice3, choice4, correctChoice) {

    userAnswers.push(prompt(questionText + "\nYour choices are : \n" + "A: " + choice1 + " B: " + choice2 + " C: " + choice3 + " D: " + choice4));
    correctAnswers.push(correctChoice);


};

let makeTheQuiz = function () {

    createQuestion("What number is above 10", "5", "3", "12", "-3", "C");
    createQuestion("What number is below 0", "5", "3", "12", "-3", "D");
    createQuestion("What number is 10/2", "5", "3", "12", "-3", "A");
    createQuestion("What number is the second smallest", "5", "3", "12", "-3", "B");
};

let checkScore = function () {

    for(let i = 0; i < correctAnswers.length; i++){

        if(userAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
            numberCorrect++;
        }
    }

};

let doTheeQuiz = function () {

    makeTheQuiz();
    checkScore();
    alert("You got " + numberCorrect + " of " +  userAnswers.length + " questions");

};