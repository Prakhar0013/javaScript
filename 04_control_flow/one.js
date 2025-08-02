// if

//Used for conditional execution

if(true){
    //code within will be executed
}
if(false){
    //code not to be executed
}

// <, >, <= , >=, ==, !=
if(2=="2"){
    console.log("executed");
    
}
// To match data type as well, we use ===
let temperature=41
if(temperature<50){
    console.log("Temperature is less than 50");
}
else{
    console.log("temperature is greater than 50");
}

// const score=200

// if(score>100){
//     let power= "Fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`);
//This returns error as let is within the scope

const balance= 1000

//if(balance>500) console.log("test");
//We can execute the if statement like this, for a single line with colon at end.
// //If we want to execute more than one line of code, we have to execute code like:
// if(balance>500)
//     console.log("test"), console.log("test");
//But this sort of code is not readable at all because of unreadability

// if(balance <500){
//     console.log("less than");
    
// }else if(balance<750){
//     console.log("less than 750");
    
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn=true
const debitCard= true
const loggedInFromGoogle= false
const loggedInFromEmail = true
//&& check if both the conditions are true or not
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
