const quizData = [{
    question: 'How old is Florin?',
    a: '10',
    b: '17',
    c: '26',
    d: '110',
    correct: 'c',
}, {
    question: 'What is the most used programming language?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javscript',
    correct: 'd',
},{
    question: 'Who is he President of South_Korea?',
    a: 'chulsu',
    b: 'yeonghui',
    c: 'badug',
    d: 'munjaein',
    correct: 'd',
}, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Javascript Object Notation',
    d: 'Helicopterts Terminlas Motorboats Lamborgins',
    correct: 'a',
}, {
    question: 'What year was Javscript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'd',
}];
const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const sumbitBtn = document.getElementById("submit");
const answerArray = document.getElementsByName("answer");
let currentQuiz = 0;
let score = 0;

loadQuize();

function loadQuize() {
    answerUnSelect();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}
// quizData[currentQuiz].correct
function answerSelect(){

    let answer = undefined;

    answerArray.forEach(answerEl => {
        if(answerEl.checked){
           answer =  answerEl.id
        }
        })
        return answer
}

function answerUnSelect(){
    answerArray.forEach(answerEl => {
        answerEl.checked = false
        })
}



sumbitBtn.addEventListener("click", () => {
            const answer = answerSelect()
            console.log(answer,quizData[currentQuiz].correct )
            if(answer){
                if(answer === quizData[currentQuiz].correct){
                    score++;
            }
            currentQuiz++;

            if (currentQuiz < quizData.length) {
                loadQuize();
            }else {
                quiz.innerHTML = `<div id="quiz-result"><h1>You answered correctly at ${score} / ${quizData.length}</h1></div>
                <button onclick="location.reload()">Reload</button>
                `
            }
            }   
    })