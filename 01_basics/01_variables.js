const accountId= 144553    //const means we can't change it
let accountEmail= "prakhar@gmail.com"
var accountPassword= "12345"
accountcity ="Bengaluru"
let accountState;

// accountId=2  Not allowed Output: TypeError: Assignment to constant variable.
accountEmail="pa@pa.com"
accountPassword= "98765"
accountCity= "Delhi"

console.log([accountId, accountEmail, accountPassword, accountCity, accountState])
// [ 144553, 'pa@pa.com', '98765', 'Delhi', undefined ]

//There are two ways to declare variables in javascript.
// 1. var  2.let
// var is very old variable, does not support scope while let does
/*
Prefer not to use var because of block scope and functional scope
We can declare the variables without var or let also but thats not considered right
*/