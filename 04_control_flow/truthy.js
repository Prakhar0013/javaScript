const userEmail= []

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// rest are considered as true

//truthy values

//"0", 'false', " ", [], {}. function(){}
//last one is an empty array

if(userEmail.length===0){
    console.log("Array is empty"); 
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator

let val1;
val1=5?? 10;

//many times while using databases, firebase externally, while calling data,we may get undefined, null 
//for such cases (null, undefined) structure of the code could be disturbed
//For such cases, this is used

val1=null??10

// Here in place of number 10, we put a complex function which calls the data from the database

val1=null??10??20
//In case of multiple values, we get the first proper value to be assigned
val1= undefined??35
console.log(val1);

//Ternary operator

// condition? true:false

const iceTeaPrice=100
iceTeaPrice>=80 ?console.log("Price more than 80"):console.log("Price less than 80");

