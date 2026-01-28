// Number

const myNumber = 42;

console.log(myNumber)

console.log(typeof myNumber)


const myFloat = 42.0;

console.log(myFloat)

console.log(typeof myFloat)

console.log(myNumber === myFloat)



// string to number 
const myNumber2 = "42"

console.log(myNumber2 + 5)

console.log(Number(myNumber2) + 8)


console.log(Number("5")+5)


console.log(Number("abc")+5)
//  NaN - Not a Number

console.log(Number(undefined)+5)  //nan

console.log(Number(true)+5)   //1

console.log(Number(false)+5)  // 0


// Maths


console.log(Number.isInteger(42.2)) //passing the value


//parseFloat

const myNum = "123.25abc"
console.log(Number.parseFloat(myNum))

//parseInt

const myNum2 = "32.07"
const myNum3 = "32abc.07"
const myNum4 = "abc32.07"

console.log(Number.parseInt(myNum2))
console.log(Number.parseInt(myNum3))
console.log(Number.parseInt(myNum4))


//to fixed

const myDigit = "32.456311"
console.log(Number.parseFloat(myDigit).toFixed(3))


//number to string

// const myNumber3 = 25
const myNumber3 = 25.25
console.log(myNumber3.toString())


//chaining
const myMob = "789456.125469"

console.log(Number(parseFloat(myMob).toFixed(2).toString()))


// pi  - 22/7 = 3.141554849848
console.log(Math.PI)

// trunc
console.log(Math.trunc(Math.PI))


//round of
console.log(Math.round(Math.PI))


//ceil - .5 < > = next number
console.log(Math.ceil(4.8))
console.log(Math.ceil(4.2))


//floor
console.log(Math.floor(4.8))
console.log(Math.floor(4.2))


//pow
console.log(Math.pow(10, 3))


console.log(Math.min(10,2.5,4,6,8,9215) )
console.log( Math.max(10,2.0,4,6,8,9215) )



// rondom 

// 0.52 * 10 = 5.2
console.log(Math.floor(Math.random()*10000))



// task 
// "Mahixinfotech" 