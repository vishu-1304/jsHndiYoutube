//  primitive

// const { useInsertionEffect } = require("react");

// 7 types : String , number ,  boolean , null , undefined , symbol , BigInt

// const score = 100; // number
// const scoreValue ="100.3"; // string
// const isLoggedIn = false; // boolean
const outsideTemp = null; // null
// let userEmail; // undefined
// const id = symbol("123"); // symbol
// // const bigNumber = 1234567890123456789012345678901234567890n; // bigInt






// // reference (Non premitive)

// Array , Objects, Functions

const heros =["spiderman", "ironman","dogo"];
const myobj = {
    name : "vishu"
    // age: 23,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// Stack(Premitive) , heap (non-primitive)

let myYouTubename = "hiteshchoudharydotcom"

anothername = "chaiaurcode"

 

console.log(myYouTubename);;
console.log(anothername);

let user = {
    email  : "usergoggle.com",
    upi : "user@ybl"

}
let userOne = user
let userTwo = userOne 
userTwo.email = "hitesh@goggle.com"
console.log(userOne.email);
console.log(userTwo.email);


