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


console.log([employeeData,studentData])