const readlineSync = require("readline-sync");

let trueQuestions = {
    funciona: "Funciona?",
    loHasTocado: "Lo has tocado?",
    loSabeAlguien: "Lo sabe alguien?",
    puedesCulparAOtro: "Puedes culpar a otro?",
    nosDaraProblemas: "Nos dará problemas?",
}
let afirmaciones = {
    noLoToques: "No lo toques",
    burro: "burro",
    laHasCagao: "La has cagao",
    lanzalo: "Lánzalo",
    escondelo: "Escóndelo",
    sinProblemas: "Sin problema",
}
let question1 = firstQuestion();
let question2 = secondQuestion();
let question3 = thirdQuestion();
let question4 = forthQuestion();

function askToUser(){
    return readlineSync.question("y/n"); 
} 

// functions questions
function firstQuestion(){
    console.log(trueQuestions.funciona);
    let decition = askToUser();
    if (decition === 'y') {
        console.log(`${afirmaciones.noLoToques} que ahora funciona ${afirmaciones.sinProblemas} `)
    } else {
        console.log(`${trueQuestions.loHasTocado}`)
    }   
}

function secondQuestion (){
    let decition = askToUser();
    if(decition === 'y'){
        console.log (`${afirmaciones.burro}, pero ${trueQuestions.loSabeAlguien}`);
    } else console.log(`${trueQuestions.nosDaraProblemas}`)
}

function thirdQuestion(){
    let decition = askToUser();
    if(decition === 'y'){
        console.log (`${afirmaciones.laHasCagao}, pero ${trueQuestions.puedesCulparAOtro}`);
    } else console.log(`${afirmaciones.lanzalo}, ${afirmaciones.sinProblemas}`)
}
function forthQuestion(){
    let decition = askToUser();
    if(decition === 'y'){
        console.log (`${afirmaciones.sinProblemas}`);
    } else console.log(`${afirmaciones.laHasCagao}`)
}