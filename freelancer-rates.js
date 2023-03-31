
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * param {number} ratePerHour
 * returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
    return ratePerHour*8;
  }
  
  /**
   * Calculates the number of days in a budget, rounded down
   *
   * param {number} budget: the total budget
   * param {number} ratePerHour: the rate per hour
   * returns {number} the number of days
   */
  export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget/dayRate(ratePerHour));
  }
  
  /**
   * Calculates the discounted rate for large projects, rounded up
   *
   * param {number} ratePerHour
   * param {number} numDays: number of days the project spans
   * param {number} discount: for example 20% written as 0.2
   * returns {number} the rounded up discounted rate
   */
  export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    
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