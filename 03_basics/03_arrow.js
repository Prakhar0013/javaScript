const user= {
    username: "Prakhar",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username="Sam"
// //here, we have changed the context
// user.welcomeMessage()

//console.log(this);
//Here, we get empty object, {} as we are in Node environment as this refers to an empty object in global scope
//Within browser, the global object is Window

// function chai(){
//     let username="Prakhar"
//     console.log(this);
    
// }
// //
// chai()
//We are not able to get the context within a function
//like using this within didn't return an object, instead, we get global value, performace evaluations etc

// const chai(){
//     let username="Prakhar"
//     console.log(this.username);
// }
// chai()
//Output: Here the output we get is actually undefined


//This is our arrow function
// const chai=()=>{
//     let username="Prakhar"
//     console.log(this);
    
// }
// chai()
//Here too output is {}

// const chai=()=>{
//     let username="Prakhar"
//     console.log(this.username);
    
// }
// chai()
// Output: undefined

//Arrow function syntax
// const addTwo= (num1, num2) =>{
//     return num1+num2;
// }
// const addTwo= (num1, num2) => num1+num2;

// const addTwo= (num1, num2) =>(num1+num2);

const addTwo= (num1, num2) =>({username: "hitesh"})

console.log(addTwo(3,4));

const myArray= [2, 5, 3, 7, 8]
// myArray.forEach()