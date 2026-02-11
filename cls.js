const myPizza = {
  size: "large",
  crust: "thin",
  bake: function () {
    console.log("Baking the pizza...");
  },
};

console.log(myPizza.bake());

// function syntax

// function funName(a,b){
//  return a + b
// }

// class - blueprint

// class yourPizza {
//   constructor(typePizza) {
//     this.size = "Medium";
//     this.crust = "thick";
//     this.type = typePizza;
//     this.topping = "Green Olive";
//   }

//   getToppingPizza () {
//     return this.topping;
//   }

//   setToppingPizza (toppingPizza){
//     this.topping = toppingPizza;
//   }


//   bake() {
//     console.log(`${this.type} Pizza with ${this.topping} is Ready to Eat `);
//   }
// }

// const anotherPizza = new yourPizza("Double Cheese");
// yourPizza.setToppingPizza("Chicken Tikka");

// console.log(anotherPizza.bake());

// const pizza1 = new yourPizza();

// console.log(pizza1.size);
// console.log(pizza1.crust);
// console.log(pizza1.bake());




class yourPizza1 {
  constructor(typePizza) {
    this.size = "Medium";
    this.crust = "thick";
    this.type = typePizza;
    this.topping = "Green Olive";
  }

  getToppingPizza() {
    return this.topping;
  }

  setToppingPizza(toppingPizza) {
    this.topping = toppingPizza;
  }

  bake() {
    console.log(`${this.type} Pizza with ${this.topping} is Ready to Eat`);
  }
}

const anotherPizza1 = new yourPizza1("Double Cheese");


console.log(anotherPizza1.bake());
anotherPizza1.setToppingPizza("Chicken Tikka"); // ✅ correct
console.log(anotherPizza1.bake());

// ✅ correct
