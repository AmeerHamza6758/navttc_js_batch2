
// Answer 2
let orderAmouant=1000
let distance=40
const fee = checkFreeShipping(orderAmouant,distance)
console.log('Your shipping fee is :',fee)
function checkFreeShipping(orderAmouant, distance) 
{
let shippingFee;
if(orderAmouant>=1000 & distance<=50)   
{
  return shippingFee=0 
}
return shippingFee=100
}


/* Write a function calculateTotal(cart) that takes an array of product prices.
Add up all product prices.
If the total is greater than 500, apply a 10% discount.
Return the final amount to pay. */
// Answer 1
let productPrices = [100,100,500,100,200]
let amountToPay=(calculateTotal(productPrices))
console.log(amountToPay)
function calculateTotal(productPrices){
    let total=0
    let discountedPrice
    let finalAmount
 for(let i=0; i<productPrices.length; i++)
 {
     total+= productPrices[i]
 }
 if(total>500)
    {
       discountedPrice=total*0.1
       finalAmount=total-discountedPrice
       return finalAmount
    }
   return "Less amount of purchase, Discount not applied!.."
}

/*3. Daily Step Tracker
Write a function analyzeSteps(steps) that takes an array of steps taken each day for a week.
Calculate the total and average steps.
Print “Goal Achieved” if the average is greater than or equal to 8000.*/
// Answer 3
let steps = [500,300,800,1000,850,670,900]
console.log(analyzeSteps(steps))
function analyzeSteps(steps) {
  let total=0
  let average
  for(let i=0; i<steps.length; i++)
 {
     total+= steps[i]
 }
   average=total/7
   if(average>=8000)
   {
     return "Goal Achieved"
   }
   return "Goal not achieved "
}



/*4. Movie Rating System
Write a function rateMovie(rating) that:
Takes a rating between 1 and 10.
Returns “Poor” if rating < 4, “Average” if rating is between 4 and 7, and “Excellent” if rating ≥ 8.*/
// Answer 4
let rating =8
let movieRating = (rateMovie(rating))
console.log(movieRating)
function rateMovie(rating){
    if(rating<4){
        return "Poor"
    }
    else if(rating>=4 & rating<=7)
        return "Average"
    else 
        return "Excellent"
}


/*5. Electricity Bill Calculator
Write a function calculateBill(units) that:
Charges 5 per unit for the first 100 units.
Charges 7 per unit for the next 100 units.
Charges 10 per unit for units above 200.
Returns the total bill.*/
// Answer 5
let units = 200
let totalBill= (calculateBill(units))
console.log('Total bill for :',units, "units is",totalBill)
function calculateBill(units){
    if(units<=100){
        units*=5
    }
   else if(units>100&& units<=200){
        units*=7
    }
   else {
        units*=10
    }
    return units
}


/*6. ATM Withdrawal Validator
Write a function withdrawMoney(balance, amount) that:
Allows withdrawal only if the balance is greater than or equal to the amount.
Deducts the amount and prints the remaining balance.
Otherwise prints “Insufficient Balance”.*/
// Answer6
let balance=500
let amount =100
let remainingBalance = withdrawMoney(balance,amount)
console.log("Remaining Balance is :",remainingBalance)
function withdrawMoney(balance, amount)
{
  if(amount>0 && balance>=amount){
    balance-=amount
    return balance
  }
  return 'Insufficent Balance'
}

// 7. Restaurant Order Processor
// Write a function generateBill(order) that takes an array of objects like:
// [{name: "Burger", price: 250}, {name: "Fries", price: 120}, {name: "Coke", price: 80}]
// Calculate the total bill.
// Add 10% service tax.
// Return a message like “Your total bill is ₹495 (including tax)”.
// Answer 7
// concept not clear , will study on it 
let order = [{name: "Burger", price: 250}, {name: "Fries", price: 120}, {name: "Coke", price: 80}]
let totalbill= (generateBill(order))
console.log(totalbill);
function generateBill(order) {
    let total = 0
    for (const obj of order) {
        total+=obj.price  
    }
      total+=total*0.1
    return `Your total bill is : ₹${total} inculding tax`
}




/*8. Student Grade Evaluator
Write a function evaluateGrades(marks) that takes an array of marks for 5 subjects.
Calculate the average marks.
Print the grade based on the following:
A: average ≥ 80
B: 70–79
C: 60–69
F: below 60*/
// Answer 8
let marks = [90,95,90,80,78]
let grade = (evaluateGrades(marks))
console.log("Your grade is :",grade)
function evaluateGrades(marks) {
    let sum=0
    let average
    for(let i=0; i<marks.length; i++){
        sum+=marks[i]
    }
     average=sum/marks.length+1
    if(average>=80){
        return'A'
    }
    else if(average>=70&& average<=79){
        return'B'
    }
    else if(average>=60&& average<=69){
        return'C'
    }
    else return 'F'
}

/*9. Employee Bonus Calculator
Write a function calculateBonus(salary, experience) that:
Gives a 5% bonus if experience < 3 years.
Gives a 10% bonus if experience is between 3 and 5 years.
Gives a 20% bonus if experience > 5 years.
Returns the total salary after adding the bonus*/
// Answer 9
let salary = 30000
let experience = 6
let totalSalary = (calculateBonus(salary,experience))
console.log("Total Salary after adding bonus is :",totalSalary)
function calculateBonus(salary, experience)
{
    let bonus
    if(experience<3){
        bonus=salary*0.05
        salary+=bonus
        return salary
    }
    else if(experience>=3 && experience<=5)
    {
        bonus=salary*0.1
        salary+=bonus
        return salary
    }
    else {
        bonus=salary*0.2
        salary+=bonus
        return salary
    }
    
}

// 10. Attendance Tracker
// Write a function calculateAttendance(record) that takes an array of booleans representing attendance for 7 days.
// Count the number of present and absent days.
// If present days ≥ 5, print “Good Attendance”.
// Otherwise, print “Needs Improvement”.
// Answer 10
let record = [true,true,false,true,true,false,true]
let StudentRecord = (calculateAttendance(record))
console.log(StudentRecord)
function calculateAttendance(record){
    let presentday =0;
    let absentday =0
    for(let i=0; i<record.length; i++){
        if(record[i]==true)
            presentday++
        if(record[i]==false)
            absentday++
    }
    if(presentday>=5){
        return 'Good Attendance'
    }
    else 
        return'Needs Improvement'
}


