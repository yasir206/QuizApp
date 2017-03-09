// class Question {
//     constructor(
//         public text: string,
//         public choices: string[],
//         public answer: number,
//     ){

//     }



// correctAnswer (choice) {
//     return choice === this.answer;

// }
// }
// let _question1 = "What animal do you like?";
// let _question2 = "What candy is your favorite?";
// let _question3 = "What school do you go to?";
// let _question4 = "Whats your choice of caffeine?";
// let _question5 = "Whats my name?"

// let answer1 = "lion";
// let answer2 = "snickers";
// let answer3 = "WSU";
// let answer4 = "coffee";
// let answer5 = "Yasir";


// let question1 = window.prompt(
//     `${_question1} 

// ${answer1}`)
// window.alert(answer1);

// let question2 = window.prompt(
//     `${_question2}``${`)`
// window.alert(answer2);

// let question3 = window.prompt(`${_question3}`)
// window.alert(answer3);

// let question4 = window.prompt(`${_question4}`)
// window.alert(answer4);

// let question5 = window.prompt(`${_question5}`)
// window.alert(answer5);

// //     function Question(text, choices, answer) {
// //         this.text = text;
// //         this.choices = choices;
// //         this.answer = answer;

// //     }

// // Question.prototype.correctAnswer = function (choice) {
// //     return choice === this.answer;

// // }


class Question {
    constructor(
        public query:string,
        public choices:string[],
        public answer: string
    ) {

    }

    public correctAnswer(choice: string) {
        return choice.toLowerCase() === this.answer.toLowerCase();
    }
}

let questions = [
    new Question(
        "what color is the sky?",
        ["white", "blue", "red"],
        "blue"
    ),

    new Question(
        "What candy is your favorite?",
        ["snicker", "twix", "hersheys"],
        "twix"
    )
];

for (let value of questions) {
    console.log(value);
    window.prompt(
      ` ${Question} +
${"blue"} +
${"blue2"} +
${"blue3"}
      `  )
}

