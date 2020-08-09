window.onload = function () {
    show(0)
}

let questions = [
    {
        id: 1,
        question: "Who is the richest man in the world?",
        answer: "Jeff Bezos",
        options: [
            "Bill Gates",
            "Warren Buffett",
            "Jeff Bezos",
            "Mark Zuckerberg"
        ]
    },
    {
        id: 2,
        question: "Google consists of how many lines of code(approx)?",
        answer: "2000 Billion",
        options: [
            "2000 Billion",
            "140 Million",
            "3300 Billion",
            "5 Billion"
        ]
    },
    {
        id: 3,
        question: "The logo of Google consists of how many colors?",
        answer: "4",
        options: [
            "6",
            "3",
            "5",
            "4"
        ]
    }
];



function submitform(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    sessionStorage.setItem("name",name)
    location.href = "ques.html"
    console.log(name)
}

var ques_count = 0;
var points = 0

function next() {
    var user_ans = document.querySelector("li.active").innerHTML;

    // check user answer
      if (user_ans == questions[ques_count].answer){
        points+=10
        sessionStorage.setItem("points",points)
    }
    // jump to final page if questions are wrong

    if (ques_count == questions.length-1){
        location.href = "result.html";
        return;
    }

    
  

    ques_count++;
    show(ques_count);
}

function show(count) {
    var question = document.getElementById("questions");
    // question.innerHTML = "<h2>" + questions[count].question + "</h2>"
    question.innerHTML = `<h2> Q${ques_count+1}. ${questions[count].question} </h2>
                <ul class="option_grp">
                    <li class="option">${questions[count].options[0]}</li>
                    <li class="option">${questions[count].options[1]}</li>
                    <li class="option">${questions[count].options[2]}</li>
                    <li class="option">${questions[count].options[3]}</li>
                </ul> `;
    activeclass()
}

function activeclass(){
    var option = document.querySelectorAll("li.option");
    for (let i=0; i<option.length; i++){
        option[i].onclick = function() {
            for (let j = 0; j<option.length; j++){
                if(option[j].classList.contains("active")){
                    option[j].classList.remove("active")
                }
            }
            option[i].classList.add("active");
        }
    }
}


var finalName = sessionStorage.getItem("name");
var pt = sessionStorage.getItem("points");

document.querySelector(".name").innerHTML = finalName;
document.querySelector(".points").innerHTML = pt;