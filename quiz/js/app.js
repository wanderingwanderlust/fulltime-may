// Have a series of questions
// Have a correct answer
// store these in a way for us to check these answers
// select one random question
// provide user with a response if correct or incorrect
// keep score

(function() {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    // display our question to the console.
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    // determine if the answer is correct
    Question.prototype.checkAnswer = function(ans, callback) {
        var scr;
        if(ans === this.correct) {
            console.log('Correct Answer');
            scr = callback(true);
        } else {
            console.log('Wrong Answer, try again!');
            scr = callback(false);
        }
        this.displayScore(scr);
    }

    // display the score
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('---------------------------------')
    }

    var q1 = new Question(
        'Is Javascript difficult to learn?',
        ['Yes', 'No', 'Maybe'], 
        0
    );

    var q2 = new Question(
        'What is the name of this OH teacher',
        ['Ryan', 'Greg'],
        1
    )

    var q3 = new Question(
        'What describes coding the best?',
        ['Boring', 'Hard', 'Fun', 'Tedious'],
        2
    )

    var questions = [q1, q1, q3];

    function score() {
        var scr = 0;
        return function(correct) {
            if(correct){
                scr++;
            }
            return scr;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer');
    
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
   
    nextQuestion();
})();