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

const prevbtn = document.querySelector("#prev");
const nextbtn = document.querySelector("#next");
var allpages = document.querySelectorAll(".page");
var allquestions = document.querySelectorAll(".question");

//ints and bools
var muteAudio = false;
var currqn = 1;

const menuItemsList = document.querySelector("ul");
const hamIcon = document.querySelector("#hamIcon");

// init all the functions
function toggleMenus() { /*open and close menu*/
    //if menuItemsList dont have the class "menuShow", add it, else remove it
    menuItemsList.classList.toggle("show");
    //if menu is showing (has the class “menuShow”)
    if (menuItemsList.classList.contains("menuShow")) {
        hamIcon.innerHTML = "Close Menu"; //change button text to chose menu

    } else { //if menu NOT showing
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
function toggleAudio() {
    muteAudio = -muteAudio;
}

function hideqns() {
    for (let qns of allquestions) { //go through all subtopic pages
        qns.style.display = "none"; //hide it
    }
}
function initForm() {
    hideqns();
    let question1 = document.querySelector("#question1");
    question1.style.display = "block";
    currqn = 1;
}
function run() {
    //insert game loop into here
}

//Add event listener

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    clickAudio.play();
    show(1);
    toggleMenus();
});
page2btn.addEventListener("click", function () {
    clickAudio.play();
    show(2);
    toggleMenus();
});
page3btn.addEventListener("click", function () {
    clickAudio.play();
    show(3);
    toggleMenus();
});
page4btn.addEventListener("click", function () {
    clickAudio.play();
    show(4);
    toggleMenus();
});
page5btn.addEventListener("click", function () {
    clickAudio.play();
    show(5);
    toggleMenus();
});
page6btn.addEventListener("click", function () {
    clickAudio.play();
    show(6);
    toggleMenus();
    initForm();
});
page7btn.addEventListener("click", function () {
    clickAudio.play();
    show(7);
    toggleMenus();
});

// Event listeners for learn buttons. Must use different listeners because this one does not toggle menu
learn1.addEventListener("click", function () {
    clickAudio.play();
    show(2);
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
});

//Qns java
qns2.oninput = function() {
    //this is the this pointer of qns2 range html, value refers to the number the slider is on
  qns2display.innerHTML = `Current number: ${this.value}`
}
qns3.oninput = function() {
    //this is the this pointer of qns2 range html, value refers to the number the slider is on
  qns3display.innerHTML = `Current number: ${this.value}`
}

// Prev and next button functions
prevbtn.addEventListener("click", function () {
    clickAudio.play();
    if (currqn > 1) {
        currqn--;
        hideqns();
        let question = document.querySelector("#question" + currqn);
        question.style.display = "block";
    }
})
nextbtn.addEventListener("click", function () {
    clickAudio.play();
    if (currqn < 3) { //Number in if statement is max number of questions
        currqn++;
        hideqns();
        let question = document.querySelector("#question" + currqn);
        question.style.display = "block";
    }
    // else{
    //     //submit form
    // }
})

//Run the init functions here to create the start page
hideall();
show(1);
