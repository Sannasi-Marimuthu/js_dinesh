// task start 

// const myCal = "Mahixinfotech"


// console.log(myCal.charAt(0))

// console.log(myCal.charAt(Math.floor(Math.random()*13)))

// task end

//  if - else

    // syntax

    // if(condi) {
    //     //code
    // }else{
    //     //code
    // }

    // let condition = false

    // if(condition){
    //     console.log("condition :  true")
    // }else {
    //     console.log("condition : false")
    // }


    //  == | ===

    // let weather = "normal"

    // if(weather === "hot" ) {
    //     console.log("Weather is hot")
    // }
    // else {
    //     console.log("Weather is cold")
    // }

    // === equal

    // !== not equal

    // || or


    // let isRainy =false
    // let isClody = true
    // if(isRainy || isClody ) {
    //     console.log("Take umberla")
    // }
    // else {
    //     console.log("Don't take umberla")
    // }



// else if 

// if(codi1){
//     //code 
// }
// else if(condi2){
//     //code
// }
// else if(condi3){
//     //code 
// }else {
//     //code
// }



// gud mrg = 0'clk - 11'clk 

// gud aft - 12'clk - 15clk 
// gud eve - 16'clk - 20clk 

// gud ni8 - 20clk 



// const hours = new Date().getHours()


// if( hours >=0 && hours <=11 ) {
//     console.log("Say Gud Mrg")
// }
// else if ( hours >=12 && hours <=15){
//     console.log("Say gud afternoon")
// }
// else if ( hours >=16 && hours <=20){
//     console.log("Say gud eve")
// }
// else {
//     console.log("Say gud ni8")
// }


// const hour = new Date().getHours()


// console.log(hour)


// swtich case

// switch(codi) {
//     case a : 
//         //code
//     case b : 
//         //code
//     default: 
//         //code
    
// }


//  a m- spr grade
// s - excellent
// p - pass

//  unkonwn



// const grade = "m"

// switch(grade) {
//     case "a" :
//     case "m" : 
//         console.log("Spr Grade");
//         break;
        
       

//     case "s" :
//         console.log("Excellent");
//         break;

//     case "p" : 
//         console.log("Just pass");
//         break;

//     default : 
//         console.log("Unkonwn grade")
     
// }


// if(condi){

// }else

// ternarry opertaot


// condi ?  "true"  : "false"


// const age = 16

// if(age>=18) {
//     console.log("Adult")
// }

// else {
//     console.log("Child")
// }

//     const age = 25
// const naMe = age>=18 ? console.log("Men")  : console.log("Boy")

// console.log(naMe)




// var - global scope - re assign - yes , re declare - yes



var x = 1

var x = 3


function myFun(){
    var x = 10
    console.log(x)
}

myFun()

var x = 33

console.log(x)





// let - block scope - re assign - yes , re declare - no

let y = 5

 y = 10

console.log(y)

// const - block scope - reassign n- no .redeclare - no

const z = 30

console.log(z)