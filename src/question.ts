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
}

var question1 = window.prompt("What is 50 * 1 ?")
window.alert(question1);

var question2 = window.prompt("What is 50 * 2 ?")
window.alert(question2);

var question3 = window.prompt("What is 50 * 3 ?")
window.alert(question3);

var question4 = window.prompt("What is 50 * 3 ?")
window.alert(question4);

var question5 = window.prompt("What is 50 * 3 ?")
window.alert(question5);

//     function Question(text, choices, answer) {
//         this.text = text;
//         this.choices = choices;
//         this.answer = answer;

//     }

// Question.prototype.correctAnswer = function (choice) {
//     return choice === this.answer;

// }