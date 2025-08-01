

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("A");
    console.log("R");
}
// sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }
// const result= addTwoNumbers(3,5)
// console.log("Result:", result);
//Here, result is undefined as we are not returning anything
function addTwoNumbers(number1, number2){
    // let result= number1+number2;    
    // return result;
    return number1+number2;
    console.log("Prakhar"); //Any code written after return is ignored
}
const result= addTwoNumbers(3,5);
// console.log("Result:",result);
//Below, User is a default value
function loginUserMessage(username="User"){
    if(!username){
        console.log("Please enter a username");
        return        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
//If we pass an empty string, we don't get anything but if we don't pass anything at all, we get undefined in its place

// function calculateCarPrice(...num1){return num1}
// console.log(calculateCarPrice(700,200,300));
//When we try to insert elements directly, we are able to insert only one element which is in the 0th index
//Using rest operator(...) just like spread operator, we are able to insert multiple elements
function calculateCarPrice(val1, val2, ...num1){return num1}
console.log(calculateCarPrice(700,200,500,2000));


const user={
    username: "test",
    price: 100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);   
}

//handleObject(user)
handleObject({
    username:"Dynamo",
    price:19999
})

const myNewArray= [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue([200,400,500,1000]));

