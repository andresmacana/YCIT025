let x = 3;
const y = x++;
//console.log(`x:${x}, y:${y}`);

//const dayRate = 89;
function dayRate(h){
    return h*8;
}
dayRate(89);
console.log(dayRate(89));
function daysInBugget(budget,days){
    return Math.floor(budget/days)
}
console.log(Math.floor(20000/712));
function discount(ratePerHour,numDays,discount){
    if (numDays < 22){
        console.log(712*numDays);
    }
    else{
        console.log(Math.ceil((712*220)-(712*220*0.42))+(712*10));
    }
    let numMonths = numDays%22
    
    }
//console.log(discount(16,70,0));
//return Math.floor((((numDays-numDays%22)*dayRate(ratePerHour))-((numDays%22)*dayRate(ratePerHour)*discount))+((numDays%22)*712));
console.log((((712*0.42)*220))+712*10);
console.log(Math.ceil((712*220)-(712*220*0.42))+(712*10));
console.log(Math.floor(230/22));
console.log(70-70%22);