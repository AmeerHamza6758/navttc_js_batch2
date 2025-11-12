// "use strict"
console.log("Javascript connected")
// dymanic typed 2-interpreted 3-cross-platform 4-single-threaded

// variables

// const let var
// 
const myName = "Ameer Hamza"; //string

let myNum = 2345678.234567 //number

let isCheck = true //Boolean

let isValue = undefined;

console.log(myName, '1')

//
console.log(myName, '2')
console.log(isValue, '3')


// DataTypes
// primitive=> string, number, Boolean, symbol, null, undefined

//non-primitive
// Array, objects, functions


// const let var
// block level
{
    const stud = "Arslan"
    let studnum = 234567;
    studnum = 555;

    console.log(stud, 'Student name', studnum, 'student number')

}
let studnum = '876545'
const stud = "Hamza"

console.log(stud, 'Student name', studnum, 'student number')

// string, number, boolean, undefined, null, symbol
let teacherName = null;
teacherName = "Ameer Hamza"

let abc = Symbol('sdbvc')

// no-primitve

// Array, Object, function

const studentsName = ["Ameer Hamza", "Arslan ali", "Jawad", "Karimdad", "Alizay"]
console.log(studentsName)

let employeeData = {
    // key:value
    name: "Ameer Hamza",
    email: "ameer@gmail.com"
}

let studentData = {
    // key:value
    name: "Ali Hamza",
    email: "ali@gmail.com"
}
console.log([employeeData, studentData])


// Operators

const basketRed = 100
const basketBlue = 200

// Arithmetic operators
// + - * / % ** ++ --

const sumOfBaskets = basketBlue / basketRed
console.log('Total price is:', sumOfBaskets)

let xyz = 1
xyz++

console.log(xyz, 'xyz')
xyz--
console.log(xyz, 'xyz')

// Assignment operator

let toffe1 = 10
let toffe2 = 20

toffe1 *= toffe2
toffe1 = toffe1 + toffe2
console.log(toffe1)


// Comparison operators
// <, >, ==, ===, >=, <=, != ,

// red=100 blue=200
let a = '5'
let b = 5
console.log(a === b)


// logical operators

// && || !

const isChecked = false
const isLogin = true
console.log(isChecked || isLogin, 'Logical')

// Control flow statements

let isLoggedIn = true
const isRegistered = true

if (isRegistered) {
    console.log('Please login yourself')
    console.log('GO> HOME> Login-Page')
} else if (isLoggedIn) {
    console.log('User logged true')
    console.log('WELOCME TO PAGE')
} else {
    console.log('Guest User')
    console.log('Please Register yourself.')
    console.log('GO> HOME> Registeration-Page')
}

console.log('End section')

const IsBreakfast = true
const isLunch = true
const isDinner = false

if (IsBreakfast) {
    console.log('I have good mindset')
} else {
    console.log('first')
}

if (isLunch) {
    console.log('I have good health')
}

if (isDinner) {
    console.log('Health is Wealth')
}

//Switch

let day = 3
// prompt("Please enter your favourite DAY...")
console.log(day, typeof day, 'user input value')
switch (+day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thrusday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day choose.")
}
let mobilePrice = 4000

mobilePrice > 2000 ? console.log("Expensive mobile price") : console.log("Mobile price is cheap")

// Loop
// let tName = prompt("Please enter your name")

// console.log(tName);
// console.log(tName);
// console.log(tName);
// console.log(tName);
// console.log(tName);
// console.log(tName);
// console.log(tName);
// console.log(tName);
// console.log(tName);
// console.log(tName);
// console.log(tName);


// while, do-while, for
let startNum = 1
const endNum = 10;

// while (startNum <= endNum) {
//     console.log(tName, 'count:', startNum)
//     startNum++
// }

// do-while Loops
// do {
//     console.log(startNum, "Statement Printed")
//     startNum++
//     console.log(startNum, 'plus')
// } while (startNum <= endNum)

// for-loop

// for(intialize;condition; increment/decrementI){}

for (startNum; startNum <= endNum; startNum++) {
    console.log('Ameer Hamza', startNum);
}

// while, do-while , for, for-in, for-of

const tData = {
    name: "Ameer Hamza",
    email: "ameer@gmail.com",
    contact: 3456789,
    salary: 10000,
    adressInfo: {
        country: "PK",
        division: "BWP",
        district: "RYK",
        city: "KPR",
        potalCode: 6100,
    }
}
let count = 1

for (let key in tData) {
    console.log(key, '==', tData[key], count)
    count++
}
const pantsPrice = [1000, 2000, 3000, 4000, 5000]
let discountedPantPrice = []

// for-of
for (let unitPrice of pantsPrice) {
    const calculatedPrice = (unitPrice * 30) / 100
    const discountedUnitPrice = unitPrice - calculatedPrice
    discountedPantPrice.push(discountedUnitPrice)
}

console.log(pantsPrice, 'Orignal Prices')
console.log(discountedPantPrice, 'Discounted Prices')


//Functions 

// unit block of code
//reusiblity, readblity, easy to maintain.

console.log('Function declaration start')

function calculatePrices() {
    let ab = 10;
    let cd = 20;
    let sum = ab + cd;
    console.log('Sum of ab and cd is :', sum)
}

console.log('Function calls start form here...')

calculatePrices()

console.log('Function calls end form here...')

calculatePrices()


function calculator() {
    // console.log('Calculator function start')
    // console.log('Addition:', calNum1 + calNum2)
    // console.log('Multiply:', calNum1 * calNum2)
    // console.log('Subtraction:', calNum1 - calNum2)
    // console.log('Division:', calNum1 / calNum2)

    var vname = 'Ameer hamza'
    let lname = 'Ameer hamza'
    const cname = 'Ameer hamza'
    console.log('Name is :', vname)
    console.log('Name is :', lname)
    console.log('Name is :', cname)
    return { vname, lname, cname }
}


// const calNum1 = 10
// const calNum2 = 20

const calFunc = calculator()
console.log('function called return', calFunc.lname)

function greetings(p1 = "Ali", p2 = "Zohaib") {

    console.log('Hello', p1)
    console.log('Hi', p2)
}

// greetings("Ameer Hamza")



// break and continue
// for (let i = 1; i <= 5; i++) {
//     if (i == 2) {
//         break;
//     }
//     console.log('Statement printed: ', i)
// }
let priceArray = [10, 23, 44, 5]
// for (const unit of priceArray) {
//     console.log(unit, 'Units')
// }

// Objects
// for (const unit in priceArray) {
//     console.log(unit, 'Units')
// }

let studentRegData = {
    name: 'Ameer Hamza',
    email: 'ameer@gmail.com',
    age: 25
}


// for (const unit of studentRegData) {
//     console.log(unit, 'object')
// }

// Objects
// for (const unit in studentRegData) {
//     console.log(unit, 'object')
// }


// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// DOM
const domTitle = document.getElementById('title')
// console.log(domTitle, 'DOM Accessed')
// domTitle.innerText = 'Ameer Hamza'


//getElementById //getElementsByClassName //querySelector
//getElementByTagName //querySelectorAll

//createElement //createTextNode //appendChild //remove

//textContent // innerHtml 

// events 
//click //mousemove 

const getClasses = document.getElementsByClassName("desc")
getClasses.title = "Title updated"
console.log(getClasses, 'Classes get By DOM')

const getElements = document.getElementsByTagName("p");
// getClasses.title="Title updated"
console.log(getElements, 'Classes get By DOM')
//
let stdName = document.createElement("h2")
console.log(stdName, 'Element created')
stdName.textContent = "Ameer hamza"
document.body.append(stdName)

//events
const button = document.getElementById("btn")
// button.style.backgroundColor = "blue"
console.log(button, 'button get')
button.addEventListener("mouseover", addMessage)

function addMessage() {
    let messageElement = document.getElementById("message")
    messageElement.textContent = "Hey Ameer sb I'm clicked"
}

//Promises

console.log('start')

// setTimeout(() => {
//     console.log('ye 1000ms  bad execute hua ha')
// }, 10000);

const isLogged = new Promise((resolve, rejected) => {
    let isStudLogged = false
    if (isStudLogged) {
        console.log('promise ha')
        let sum = 10 + 20
        resolve(sum)
    }
    else {
        console.log('rejected ha')
        // rejected("Student is not logged-In")
    }
})

// isLogged.then((data) => console.log('here is data:', data))
//     .catch((error) => console.log("Here is promise rejected", error)).finally(() => console.log('hello finally'))

console.log('End')
console.log('AWAIS')

function timerFunc(time) {
    return new Promise((resolve, rejected) => {
        // setTimeout(() => { resolve("Resolved") }, time)
    })
}

// asyc await
// async function showResults() {
//     const result1 = await timerFunc(4000)
//     console.log(result1, 'here is result-1')
//     const result2 = await timerFunc(4000)
//     console.log(result2, 'here is result-2')
//     const result3 = await timerFunc(4000)
//     console.log(result3, 'here is result-3')
// }

// showResults()

console.log('Hello Enddd')




// `hello ${abc}`
let str = "abcdefghIg"
const [p, o, c, ...res] = str
// console.log(p, o, c, '===', res)





function greet(data) {
    const { name, age } = data
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person = { name: "Bob", age: 25 };
greet(person); // Output: Hello, Bob! You are 25 years old.


const currentTime = new Date()

currentTime.setFullYear(2026)
console.log(currentTime.getFullYear())
console.log(currentTime, 'cureent time')