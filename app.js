var quizdata = [
    {
        question: 'Which framework is related to JS?',
        a: '.NET',
        b: 'Django',
        c: 'React',
        d: 'Flask',
        correct: 'c'
    },
    {
        question: 'Which is not a programming language?',
        a: 'HTML',
        b: 'Python',
        c: 'Java',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Which is not a Framework',
        a: 'React',
        b: 'Javascript',
        c: 'Angular',
        d: 'Django',
        correct: 'b'
    },
    {
        question: 'CSS stands for :-',
        a: 'Cascading Style State',
        b: 'Cascading Style Sheets',
        c: 'Both',
        d: 'None',
        correct: 'b'
    }
]

var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')
var final_msg =  document.getElementById('quizdiv')

var submitBtn = document.getElementById('submit')

var curr_question = 0;
var score = 0;

loadquiz()

function loadquiz(){

    deselect()

    question.innerHTML = quizdata[curr_question].question
    option_a.innerText = quizdata[curr_question].a
    option_b.innerHTML = quizdata[curr_question].b
    option_c.innerHTML = quizdata[curr_question].c
    option_d.innerHTML = quizdata[curr_question].d
}

function deselect(){
    answer.forEach(answer=>answer.checked = false)
}

submitBtn.addEventListener('click', ()=>{
    var selected_opt;
    answer.forEach(answer=>{
        if(answer.checked){
            selected_opt = answer.id
        }
    })
    if(selected_opt==quizdata[curr_question].correct){
        score=score+1;
    }
    curr_question = curr_question+1
    
    if(curr_question == quizdata.length){
        final_msg.innerHTML = `<h3>You have answered ${score} out of ${quizdata.length} correctly</h3>
        <button>Retake</button>
        `
    }
    else{
        loadquiz()
    }
})