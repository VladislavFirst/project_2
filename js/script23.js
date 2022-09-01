"use strict"

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10; 
    console.log(num);
}

showFirstMessage("Hello world");
console.log(num);


// function calk(a, b){
//     return(a+b);
// }
// console.log(calk(4,3));

// console.log(calk(443,2));

// console.log(calk(33,3));
// calk(5,3);

function red(){
    let num = 50;


    return num;
}

const anotherNum = red();
console.log(anotherNum);

const logger = function(){
    console.log('Error');
};

logger();

const calc = (a,b) => { return a + b };
