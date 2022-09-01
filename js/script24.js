"use strict"

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr){
     return curr * amount;
}

function promoution(result){
    console.log(result * discount);

}

const res = convert(500, usdCurr)
promoution(res);


function test(){
    for( let i = 0; i < 5; i++){
        console.log(i);
        if(i === 3 ) return
    }
    console.log('done');
}

test();

function doNothing(){};
console.log(doNothing()=== undefined);