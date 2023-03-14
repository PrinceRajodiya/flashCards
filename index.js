
let data = {};

//localStorage.clear();

//displayNewFlashCards();

document.getElementById("new-card-container").style.display = "none";

function addNewFlashCard() {
    document.getElementById("new-card-container").style.display = "block";
}

function closeNewFlashCard() {
    document.getElementById("new-card-container").style.display = "none";
}

function createNewFlashCard() {

    let question = document.getElementById("question-content").value;
    let answer = document.getElementById("answer-content").value;

    if(question == "" || answer == "") {
        document.getElementById("error-msg").innerHTML = "You need to enter Data..!"
    }
    else {
        data.Question = question;
        data.Answer = answer;
        localStorage.setItem(localStorage.length, JSON.stringify(data));

        displayNewFlashCards();
    }

    data = {};
    console.log(data);
    console.log(localStorage);

    document.getElementById("question-content").value = "";
    document.getElementById("answer-content").value = "";

}

function displayNewFlashCards() {

    if (localStorage.length == 0) {
        return false;
    }
    else {

        if (document.getElementById("card-list").innerHTML == "") {
            return false
        }
        else {
            document.getElementById("card-list").innerHTML = "";

            for (const i in localStorage) {

                if (localStorage.getItem(i) == null) {
                    break;
                }
                else {
                    let listCard = document.getElementsByClassName("card-list");
                    let div = document.createElement("display-card");
    
                    console.log(i);
    
                    let displayQuestion = document.createElement("p");
                    displayQuestion.innerHTML = "Question : " + JSON.parse(localStorage.getItem(i)).Question;
    
                    console.log(displayQuestion);
        
                    let displayAnswer = document.createElement("p");
                    displayAnswer.innerHTML = "Answer : " + JSON.parse(localStorage.getItem(i)).Answer;
    
                    console.log(displayAnswer);
    
                    div.appendChild(displayQuestion);
                    div.appendChild(displayAnswer);
    
                    listCard[0].appendChild(div);
                }
            }
        }
    }
}
