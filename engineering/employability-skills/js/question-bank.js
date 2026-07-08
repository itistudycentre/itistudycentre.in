/*
==========================================
ITI STUDY CENTRE
Question Bank Engine
Version : 1.0
==========================================
*/

// Total Questions
let questions = [];

// Current Question
let currentQuestion = 0;

// Load Module
function loadModule(moduleData) {

    questions = moduleData;

    console.log("Module Loaded");

    console.log("Total Questions :", questions.length);

}

// Show Question
function showQuestion(index){

    console.log(questions[index]);

}

// Next Question
function nextQuestion(){

    if(currentQuestion < questions.length - 1){

        currentQuestion++;

        showQuestion(currentQuestion);

    }

}

// Previous Question
function previousQuestion(){

    if(currentQuestion > 0){

        currentQuestion--;

        showQuestion(currentQuestion);

    }

}
