
window.onload = function () {
    show(0);
}
//options objects...
var questions = [
    {
        id: 1,
        question: "what is the full form of RAM?",
        answer: "random access memory",
        options: [
            "random access memory",
            "random ordinary memory",
            "radom action memory",
            "radom acceed memory"
        ]

    },
    {
        id: 2,
        question: "PM of Pakistan?",
        answer: "imran khan",
        options: [
            "nawaz shareef",
            "imran khan",
            "donald trump",
            "salleh"
        ]

    },
    {
        id: 3,
        question: "provinces of pakistan?",
        answer: "4",
        options: [
            "5",
            "2",
            "10",
            "4"
        ]

    }

]
// next counter...
let question_counter = 0;
let points = 0;
function next() {
    var result = isSelected();
    if (result == 1) {
        var point_conrol = document.querySelector(".active").innerHTML
        if (questions[question_counter].answer == point_conrol) {
            points += 10;
            sessionStorage.setItem("point",points)
        }
        question_counter++
        if(question_counter<=questions.length-1) {
        show(question_counter)
    }else {
        clearInterval(intervel)
        sessionStorage.setItem("user_time_taken", `${final_minutes} Minutes and ${final_seconds} seconds`)
        location.href="end.html"
    }
    }
}


//showing diffrenet questions wrt counter...
function show(count) {
    let target_questions = document.getElementById("questions")
    //  target_questions.innerHTML = "<h2>"+ questions[count].question +"<h2>" ;
    target_questions.innerHTML = `<h2> ${questions[question_counter].question} </h2>
    <ul class="options_ul">
                <li class="options">${questions[question_counter].options[0]}</li>
                <li class="options">${questions[question_counter].options[1]}</li>
                <li class="options">${questions[question_counter].options[2]}</li>
                <li class="options">${questions[question_counter].options[3]}</li>
            </ul>
    `
    slector()
}
function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    sessionStorage.setItem("getName", name)
    location.href = "quiz.html"

}

function slector() {
    let option_selector = document.querySelectorAll(".options")
    for (let i = 0; i < option_selector.length; i++) {
        option_selector[i].onclick = function () {
            for (let j = 0; j < option_selector.length; j++) {
                if (option_selector[j].classList.contains("active")) {
                    option_selector[j].classList.remove("active")
                }
            }
            option_selector[i].classList.add("active")
        }
    }
}
function isSelected() {
    var flag = 0;
    let checkSelected = document.querySelectorAll(".options")
    for (let i = 0; i < checkSelected.length; i++) {
        if (checkSelected[i].classList.contains("active")) {
            flag = 1;
        }
    }
    return flag
}
