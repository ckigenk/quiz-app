const qst = document.getElementById('question');
const ansaEl = document.getElementById('ans-a'); 
const ansbEl = document.getElementById('ans-b'); 
const anscEl = document.getElementById('ans-c'); 
const ansdEl = document.getElementById('ans-d'); 
const btnEl = document.getElementById('btn');

const aEl = document.getElementById('a');
const bEl = document.getElementById('b');
const cEl = document.getElementById('c');
const dEl = document.getElementById('d');

const correctEl = document.getElementById('correct');
const wrongEl = document.getElementById('wrong');

let currentQuestion=0;
let count=0;
const quizData=[
    {
        question: 'Who is the current president of Kenya',
        a: "Kibaki",
        b:"Uhuru",
        c:"Odinga",
        d:"WSR",
        answer: "Uhuru", 
    },
    {
        question: "Who is the minister for interior?",
        a: "Kibicho",
        b: 'Rotich',
        c: "Matiangi",
        d: "Yator",
        answer: "Matiangi", 
    },
    {
        question: "Which is the leading university in kenya?",
        a: "JKUAT",
        b: "KU",
        c: "MOI",
        d: "UoN",
        answer: "UoN", 
    }

];
// loadQuiz();
function loadQuiz(){
    qst.innerHTML = quizData[currentQuestion].question;
    ansaEl.innerHTML = quizData[currentQuestion].a;
    ansbEl.innerHTML = quizData[currentQuestion].b;
    anscEl.innerHTML = quizData[currentQuestion].c;
    ansdEl.innerHTML = quizData[currentQuestion].d;
};
loadQuiz()
let userAnswer;
function checkAnswer(){

    if(aEl.checked){
        userAnswer=quizData[currentQuestion].a
    }
    else if (bEl.checked){
        userAnswer=quizData[currentQuestion].b
    }
    else if (cEl.checked){
        userAnswer=quizData[currentQuestion].c
    }
    else if(dEl.checked){
        userAnswer=quizData[currentQuestion].d
    };
    // console.log(userAnswer);

    if(userAnswer == quizData[currentQuestion].answer){
        correctEl.innerHTML = "Correct";
        count++;
    } 
    else{
    wrongEl.innerHTML = `Wrong. The right answer is ${quizData[currentQuestion].answer}`;
};


};
// checkAnswer()

    btnEl.addEventListener('click', () => {
        if (btnEl.innerHTML === 'submit'){
            checkAnswer()
            btnEl.innerHTML = 'next question'
        } else {
            correctEl.innerHTML = '';
            wrongEl.innerHTML = '';
            btnEl.innerHTML = 'submit';
            if(currentQuestion<quizData.length-1){
                currentQuestion++;
                loadQuiz()
             } else {
                 console.log(count);
                currentQuestion=0;
                loadQuiz()
            }
        }
    });

   
    // 
    // 