// String methods

const myName = 'Ameer Hamza'
const stdName = "ArslaN Aklmal"

// slice ,subString, toUppercase , toLowwercase, 
// trim, concat , replace , replaceAll,repeat,  length, includes, charAt, indexOf , lastIndexOf
const slice = myName.slice(-2)
console.log(slice, 'Result')

// toupper/ toLower
const toUpper = stdName.toUpperCase()
console.log(toUpper, 'Upper Result')
const toLower = stdName.toLowerCase()
console.log(toLower, 'Lower Result')

// concat
const concatResult = myName.concat(" :: ", stdName)
console.log(concatResult, 'Concated')

const secondConcatedResult = myName + "==" + stdName
console.log(secondConcatedResult, 'Concated with + symbol')

// replace
const newString = myName.replaceAll("e", "x")
console.log(newString, 'Replaced value')

// repeat
const repeateString = 'ID:'
console.log(repeateString.repeat(5))

// length
console.log(myName.length)

// includes
const includedChar = myName.includes("a")
console.log(includedChar, 'Result')

// CharAt
console.log(myName.charAt(4))
console.log(myName[4])
// IndexOf

console.log(myName.endsWith("za"), 'Start with')
const nums = 764654

console.log(String(nums), 'Converted into string')
console.log(nums.toString(),)


// Number methods
// isInteger, isNaN, parseFloat, parseInt, toFixed, +, Number
//

const priceOfMobile = "20000.3011";
const priceOfBaskets = 130.301
const totalTax = 1000;

console.log(Number(priceOfMobile), 'converted to number')
console.log(parseFloat(priceOfMobile))

const xyz = priceOfBaskets.toFixed(10)
console.log(xyz, typeof xyz)
console.log(totalTax + (+priceOfMobile), 'Total cash to pay')

console.log(Number.isInteger(totalTax), 'is Integer')


// Math methods
//round , float, ceil, trunc, max, min, random, 

const grade = 29.9
console.log(Math.round(grade), "round values")

console.log(Math.ceil(grade), "Upgreaded  values")
console.log(Math.floor(grade), "Upgreaded  values")
console.log(Math.trunc(grade), "Truncate values")

console.log(Math.max(23, 5, 67, 8, 1, 6), "max values")
console.log(Math.min(23, 5, 67, 8, 1, 6), "min values")


//Object methods
// Keys, values, entries, freeze, seal, assign,

const employeeData = {
    name: 'Ameer Hamza',
    email: 'ameer@yopmail.com',
    phone: 34567235,
    gender: 'Male',
    addres: {
        city: 'KPR',
        district: 'RYK',
        division: 'BWP',
        Province: 'Pubjab',
        country: 'Pakistan'
    },
    callMe: () => { console.log("I'm Clicked") }
}
// Freez
// Object.freeze(employeeData)

// Seal
Object.seal(employeeData)
// Assign
employeeData.name = 'Ali Fahad'

employeeData.age = 25
employeeData["brackedtAge"] = 30

console.log(employeeData, 'Employe data object')

console.log(Object.keys(employeeData))
console.log(Object.values(employeeData))
console.log(employeeData.email, 'Employe name')
employeeData.callMe()

console.log(Object.entries(employeeData))



const obj1 = {
    name: 'Ameer',
    email: 'ameer'
}

const obj2 = {
    name: 'Ali',
    email: 'ameer@yopmail.co',
    age: 20
}

const targetObject = {}
console.log(obj2, 'This is object 2')

Object.assign(targetObject, obj1, obj2)

targetObject.email = 'ali@yopmail.co'

console.log(targetObject, 'Target Object')



// Array Methods
// push, pop, shift, unshift, slice

const studentsList = ["Minahil", "Saba", "Aliza", "Fiza", "Shoaib", "Awais"]

console.log(studentsList, 'Here is Students List')

// studentsList.push("Arslan", "Ali")

// studentsList.unshift("Ali","Ali")

// studentsList.pop(2)   
// studentsList.shift(2)


console.log(studentsList, 'Here is Students List')

const slicedValues = studentsList.slice(2, 10)
console.log(slicedValues, 'sliced')

// splice , concat, join, includes, indexOf  || filter, map, foreach, some, every, find , reduce || flat

const spliedArray = studentsList.splice(1, 0, "Ameer", "Hamza")
// console.log(spliedArray, 'Spliced array')
// console.log(studentsList)

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 9]

const newConcatedArray = arr1.concat(arr2)
console.log(newConcatedArray, 'Concated Array')

// console.log(newConcatedArray.flat(), 'Concated Array')

const joinedItems = studentsList.join("=")

console.log(joinedItems, 'Joined Arrayy')

console.log(arr1.includes(7))

console.log(arr1.indexOf(3))


// filter
const filteredNums = arr1.filter((item, index) => {
    return item > 3
})

const filteredStudents = studentsList.filter((x, y) => x == "Ali")
console.log(filteredStudents, 'Filetred Students')
console.log(filteredNums, 'here is filtered array')


// map
const newMappedResult = arr1.map((item, index) => {
    return item * 10
})

console.log(newMappedResult, 'Mapped items')

// foreach
let newArray = []
const eachItems = arr1.forEach((item, index) => {
    newArray.push(item * 10)
})

console.log(newArray, 'Here is foreach')
const arr3 = [20, 20, 30, 40, 20, 50, 30]
const findedArr = arr3.find((i, x) => {
    let abc = i > 20
    if (abc) {
        console.log(i, x, 'index')
        return abc
    }
})
console.log(findedArr, 'Found item')


const checkNum = arr3.every((a, b) => {
    return a > 40
})
console.log(checkNum, 'here is result')

// reduce

const reducedValues = arr3.reduce((accu, current) => {
    accu.push(current * 10)
    return accu
}, [])
console.log(reducedValues, 'Reduced Values')

const studObject = studentsList.reduce((accu, curr, index) => {
    accu[index] = curr
    return accu
}, {})

console.log(studObject, 'Students Object')