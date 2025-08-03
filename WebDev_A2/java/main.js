// Init all the global variables

// Load audio files
const clickAudio = new Audio('audio/click.mp3');

//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
const page6btn = document.querySelector("#page6btn");
const page7btn = document.querySelector("#page7btn");
const learn1 = document.querySelector("#learn1");
const learn2 = document.querySelector("#learn2");
const learn3 = document.querySelector("#learn3");
const learn4 = document.querySelector("#learn4");
const learn5 = document.querySelector("#learn5");
const learn6 = document.querySelector("#learn6");

const qns2 = document.getElementById("q2");
const qns2display = document.getElementById("q2display");
const qns3 = document.getElementById("q3");
const qns3display = document.getElementById("q3display");
const respg = document.querySelector(".result");

const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");
var allpages = document.querySelectorAll(".page");
var allquestions = document.querySelectorAll(".question");

const playbtn = document.getElementById("play");
const startState = document.querySelector(".start-state");
const playState = document.querySelector(".play-state");
const loseState = document.querySelector(".lose-state");
const timeui = document.querySelector(".time-ui")

//ints and bools
var currqn = 1;
var score = 0;
var running = false;
var stopwatch = 0;
var lives = 0;
var updateID;

const menuItemsList = document.querySelector("ul");
const hamIcon = document.querySelector("#hamIcon");

// init all the functions
function toggleMenus() { /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("show");
    //if menu is showing (has the class “menuShow”)
    if (menuItemsList.classList.contains("show")) {
        hamIcon.innerHTML = "Close Menu"; //change button text to chose menu

    } 
    else { //if menu NOT showing
        hamIcon.innerHTML = "Open Menu"; //change button text open menu
    }
}

hamIcon.addEventListener("click", function () { toggleMenus(); clickAudio.play(); });
//select all subtopic pages
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
    hideall();
    onepage.style.display = "block"; //show the page
}

function hideqns() {
    for (let qns of allquestions) { //go through all question tabs
        qns.style.display = "none"; //hide it
    }
}
function initForm() {
    prevbtn.style.display = "block";
    nextbtn.style.display = "block";
    nextbtn.innerHTML = "Next";
    respg.style.display = "none";
    hideqns();
    let question1 = document.querySelector("#question1");
    question1.style.display = "block";
    currqn = 1;
    // Did not reset the value of questions because checked and reset() are not working for me
    // However, you still can retake the survey without changing the page, just press the page button in the nav
    // It will allow you to edit your response and resubmit
}
function submitForm() {
    var answer;
    score = 0;
    for (let i = 1; i <= 5; i++) {

        if (parseInt(i) == 2) {
            answer = qns2.value;
            score -= parseInt(answer) - 3;
        }
        else if (parseInt(i) == 3) {
            // Minus 3 because neutral is 3 so the value should be negative
            answer = qns3.value;
            score += parseInt(answer) - 3;
        }
        else {
            try { answer = parseInt(document.querySelector("input[name='q" + i + "']:checked").value); }
            catch (err) {
                alert("Please answer all the questions before submitting.");
                return;
            }
            score += parseInt(answer);
        }
    }
    // Since no errors, proceed to display results page
    //begin with removing the questions
    hideqns();
    //hide the prev and next btns
    prevbtn.style.display = "none";
    nextbtn.style.display = "none";
    // display page
    respg.style.display = "flex";
    var scoreDisp = document.querySelector(".score-display");
    // enter score
    scoreDisp.innerHTML = score;
    //if overall score is positive, capitalist. else if score is negative, commie. else neutral.
    var restext = document.querySelector(".result-text");
    if (parseInt(score) > 0) {
        restext.innerHTML = "Congratulations, you are a capitalist!";
    }
    else if (parseInt(score) < 0) {
        restext.innerHTML = "Congratulations, you are a communist!";
    }
    else {
        // Small note: it is possible to get zero for the quiz
        restext.innerHTML = "Congratulations, you are a neither!";
    }
}

// Game js

function initGame() {
    // if start state is not active state
    startState.style.display = "block";
    playState.style.display = "none";
    loseState.style.display = "none";
}
function Update() {
    //update stopwatch
    stopwatch -= parseFloat(0.333);
    console.log(stopwatch);
    //check if timer finish
    // Not running is to check if user switch to different page, stop the update
    if ((parseFloat(stopwatch) <= 0) || !(running)) {
        //if yes end game
        playState.style.display = "none";
        loseState.style.display = "block";
        clearInterval(updateID);
        return;
    }
    
    //check for active objs
    //if active objs are present
    //check keyboard input
    //update game object positions

    // ball.style.right = ballX + "%"; //set left property to man x variable
    // ball.style.bottom = ballY + "%"; //set top property to man y variable
    //check collision
    //check if obj reach destination
    //if yes then remove obj, increment score
    //set person spawn to a random time
    //else if no active objs
    //if random time has passed
    //spawn a obj
    //render game scene
    //render ui
    timeui.innerHTML = `Time left: ${stopwatch}`;
}
function Run() {
    running = true;
    stopwatch = parseFloat(10);
    lives = 3;
    updateID = setInterval(Update, 333); //to run the game at 30 fps
}

//Add event listeners

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    clickAudio.play();
    show(1);
    toggleMenus();
    // Stop game from running in case transitioning out of running game, save cpu ram
    running = false;
});
page2btn.addEventListener("click", function () {
    clickAudio.play();
    show(2);
    toggleMenus();
    running = false;
});
page3btn.addEventListener("click", function () {
    clickAudio.play();
    show(3);
    toggleMenus();
    running = false;
});
page4btn.addEventListener("click", function () {
    clickAudio.play();
    show(4);
    toggleMenus();
    running = false;
});
page5btn.addEventListener("click", function () {
    clickAudio.play();
    show(5);
    toggleMenus();
    running = false;
});
page6btn.addEventListener("click", function () {
    clickAudio.play();
    show(6);
    toggleMenus();
    initForm();
    running = false;
});
page7btn.addEventListener("click", function () {
    clickAudio.play();
    show(7);
    toggleMenus();
    initGame();
    running = false;
});

// Event listeners for learn buttons. Must use different listeners because this one does not toggle menu
learn1.addEventListener("click", function () {
    clickAudio.play();
    show(2);
    // No need to set running to false as these buttons are only in home page
});
learn2.addEventListener("click", function () {
    clickAudio.play();
    show(3);
});
learn3.addEventListener("click", function () {
    clickAudio.play();
    show(4);
});
learn4.addEventListener("click", function () {
    clickAudio.play();
    show(5);
});
learn5.addEventListener("click", function () {
    clickAudio.play();
    show(6);
    initForm();
});
learn6.addEventListener("click", function () {
    clickAudio.play();
    show(7);
    initGame();
});

//Qns java
qns2.oninput = function () {
    //this is the this pointer of qns2 range html, value refers to the number the slider is on
    qns2display.innerHTML = `Current number: ${this.value}`;
};
qns3.oninput = function () {
    //this is the this pointer of qns2 range html, value refers to the number the slider is on
    qns3display.innerHTML = `Current number: ${this.value}`;
};

// Prev and next button functions
prevbtn.addEventListener("click", function () {
    clickAudio.play();
    if (currqn > 1) {
        if (currqn == 5) {
            nextbtn.innerHTML = "Next";
        }
        currqn--;
        hideqns();
        let question = document.querySelector("#question" + currqn);
        question.style.display = "block";
    }
});
nextbtn.addEventListener("click", function () {
    clickAudio.play();
    if (currqn < 5) { //Number in if statement is max number of questions
        currqn++;
        hideqns();
        let question = document.querySelector("#question" + currqn);
        question.style.display = "block";
        if (currqn == 5) {
            this.innerHTML = "Submit";
        }
    }
    else if (currqn == 5) {
        submitForm();
    }
});

playbtn.addEventListener("click", function() {
    // show play state
    playState.style.display = "block";
    // disable start state
    startState.style.display = "none";
    Run();
});

document.addEventListener('keydown', function (kbEvt) {
//kbEvt: an event object passed to callback function
if ((kbEvt.code === "Space") && (running)){
    clickAudio.play();
}
//Better option: use switch case instead
});

//Run the init functions here to create the start page
hideall();
show(1);
