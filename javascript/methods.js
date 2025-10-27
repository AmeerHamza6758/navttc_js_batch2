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





