function dayRate(ratePerHour) {
    return ratePerHour*8;
}
function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget/dayRate(ratePerHour));
}
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    
    let daysExtra = numDays%22;
    let months = numDays-daysExtra;
    let totalDiscount = months*discount;
    if(numDays < 22){
      return numDays*dayRate(ratePerHour);
    }
    else{
      return Math.ceil((dayRate(ratePerHour)*months - dayRate(ratePerHour)*totalDiscount)+(dayRate(ratePerHour)*daysExtra))
      
    }
}
console.log(priceWithMonthlyDiscount(89,230,0.42)); 