// object -

// {
// key : "value"
// }


// nested object

const myObj =  {
    name : "mit",
    year : 2024,
    isPvt : true ,
    developer : {
        frontEnd : "ReactJS",
        backEnd : "NodeJS",
        database : "MongoDB"
    },
    team:["trainer","developer","tester"],
    action : function (){
        return (
            `Hello ${this.developer.frontEnd} Coder`
        )
    }


}

// this - current object 

console.log(myObj.name)
console.log(myObj.isPvt)

console.log(myObj.developer.frontEnd)

console.log( myObj.team[1])

console.log(myObj.action())


const car = {
    brand : "BMW",
    model : "X5",
    year : 2023,
}

console.log(car.brand)


const bike = Object.create(car)
bike.brand = "Ducati"


// {
//     brand : "BMW",
//     model : "X5",
//     year : 2023,
//     brand : "Ducati"
// }




console.log(bike.brand)


const movie  = {
    actor : "Vijay",
    actress : "Samantha",
    year : 2022,
    director : "AR Murugadoss"
}

console.log(Object.keys(movie))
console.log(Object.values(movie))


//add
movie.title = "Kaththi"

console.log(movie.title)


//remove / delete

delete movie.year


console.log(movie.year)

console.log(movie.hasOwnProperty("year"))