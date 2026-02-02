// function

// console.log(2+2)
// console.log(3+2)
// console.log(2+5)
// console.log(22+2)
// console.log(2+26)

function sum(a, b) {
  console.log("sum is : ", a + b);
}

sum(10, 20);

// muhesh@gmail.com
// dhinesh@gmail.com
// sandhoshini@gmail.com
// sathish@gmail.com

// console.log("sathish@gmail.com".slice(0, "sathish@gmail.com".indexOf("@")));
// console.log(
//   "sandhoshini@gmail.com".slice(0, "sandhoshini@gmail.com".indexOf("@")),
// );

function getUserName(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserName("muhesh@gmail.com"));
console.log(getUserName("dhinesh@gmail.com"));
console.log(getUserName("sandhoshini@gmail.com"));
console.log(getUserName("sathish@gmail.com"));



// console.log(name.toUpperCase());
// const name = "mahIX INfotech"


// Mahix infotech

function properCase(val){
    return(
        val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
    )
}


console.log(properCase("mahIX INfotech"))
console.log(properCase("mahIX"))


const company = (val) => {
    return(
        val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
    )
}

console.log(company("infOTECH"))

