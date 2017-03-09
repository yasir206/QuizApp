class Question {
    constructor(
        public text: string,
        public choices: number,
        public answer: number,
    ){

    }



correctAnswer (choice) {
    return choice === this.answer;

}

var question1 = window.alert("What is 50 * 1 ?")
window.prompt(question1);
var question2 = window.alert("What is 50 * 2 ?")
window.prompt(question2;
var question3 = window.alert("What is 50 * 3 ?")
window.prompt(question3);
var question4 = window.alert("What is 50 * 4 ?")
window.prompt(question4;
var question5 = window.alert("What is 50 * 0 ?")
window.prompt(question5);

//     function Question(text, choices, answer) {
//         this.text = text;
//         this.choices = choices;
//         this.answer = answer;

//     }

// Question.prototype.correctAnswer = function (choice) {
//     return choice === this.answer;

// }