// array  - []

console.log("array js file")


const myArray = [1,2,3,4,5, ,6,7,8,9]
console.log(myArray.length)


//add

//push - last add
myArray.push(10);
console.log(myArray)

//pop - last remove

myArray.pop()
console.log(myArray)


//first - unshift -add
myArray.unshift("number")
console.log(myArray)

//shift - first remove
myArray.shift()
console.log(myArray)


// spice - add, remove

//add 

myArray.splice(2,0,"apple","banana")
console.log(myArray)

myArray.splice(9,2)
console.log(myArray)


//reverse

myArray.reverse()
console.log(myArray)

//join
const newArray = myArray.join(" : ")
console.log(newArray)

//concat

const arrayA = [1,2,3]
const arrayB = [4,5,6]

const arrayC = arrayB.concat(arrayA)

console.log(arrayC)

//sperad operator


const arrayX= [1,2,3]
const arrayY= [4,5,6]

const arrayZ = [...arrayY,...arrayX]
console.log(arrayZ)

// example

//html, mysql
const frontEnd = ["html","css","js"]
const backEnd = ["nodejs","expressjs","mongodb"]
const database = ["sql","mysql","oracle"]
const frameWork = ["reactjs","angular","vuejs"]

// task 

// fullstack = html, css, js, nodejs, reactjs, sql

//frontend = html, css, js, angular

//backend = expressjs, mysql

//dummy2 = css,vuejs, mongodb, sql


console.log(frontEnd[1]) 
console.log(backEnd[2])

console.log(frontEnd[1], backEnd[2])

const dummy = frontEnd.concat(database)

console.log(dummy)

const task = [frontEnd, database]

console.log(task[0][0], task[1][1])