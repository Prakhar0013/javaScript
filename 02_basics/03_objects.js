// There are two main ways to create objects, as literal, as constructor
// Singleton: A single object of its type created from a constructor 
// With literals, we don't get a singleton

const mySym= Symbol("key1")

Object.create // for singleton
const JsUser= {
    name: "Akshat",
    age:16,
    "full name":"Prakhar Agrawal",
    location:"Delhi",
    [mySym]: "myKey1",
    email:"abc@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// Unlike arrays, where there are only indexes, here, in objects there can different attributes set
console.log(JsUser.email) 
console.log(JsUser["email"]);
//Latter way of accessing the attribute from the object is preferable
console.log(JsUser["full name"]);
//This method allows attributes having spaces to be accessed as well

//When we try to use symbols directly into the objects, we get the attribute value, not the symbol value
// console.log(JsUser.mySym);
//Output: myKey1
console.log(JsUser.mySym);//Output: undefined
//Type is supposed to be symbol, but we get string

//The correct syntax to access the symbol is to enclose it within square brackets [] like above

//Correct way to access:
console.log(JsUser[mySym]);

//Changing the attributes can be done simply by overwriting

JsUser.email= "prakharagrawal@gmail.com"
console.log(JsUser.email);

//Object.freeze(JsUser)
JsUser.email= "Prakhar@yahoo.com"
//Object.freeze(JsUser)
console.log(JsUser);
//Here we don't get any error but, the values don't remain same

JsUser.greeting= function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo= function(){
    console.log(`Hello JS User, ${this.name}`);
    
}
console.log(JsUser.greeting);//Here we don't get result, we get function's reference
console.log(JsUser.greeting());
//Now, we get error that greeting is not a function
//We got the error as we had used freeze on the object
console.log(JsUser.greetingTwo());
