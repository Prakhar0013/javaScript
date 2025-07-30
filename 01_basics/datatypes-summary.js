/* Primitive 
  7 types of data:
  String
  Number
  Boolean
  null
  undefined
  Symbol(used to make value unique)
  BigInt

    Javascript is a dynamic language which doesn't require explicit type mentioning during declaration
*/
const score=100
const scoreValue =100.3
// There is no separate datatype for decimals like float

const isLoggedIn=false;//Boolean
const outsideTemp=null;
//let userEmail; //undefined
let userEmail=undefined;
//We declare the value undefined explicitly as well
//console.log(userEmail);

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id== anotherId);

const bigNumber=2762647429876540957n//n at the end of number can be used for bigInt 
console.log(typeof bigNumber);

/* Non-Primitive or Reference types
  Array
  Objects
  Functions

*/ 
const heroes=["shaktiman","naagraj","doga"];  //Example of array

let myObj={
    name:"Prakhar",
    age:22,
}//An object for storing data like a dictionary as key-value pairs
//storing a function definition in a variable
const myFunction=function(){
    console.log("Hello World")

}
//here, myFunction returns the type function but its called as object function
//Mainly non-primitive data types return object as their type
