//const tinderUser= new Object()
//Or
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Nitesh"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nitesh",
            lastname:"Kumar"
        }
    }
}
//console.log(regularUser.fullname?.userfullname.firstname);
//? is added to avoid error if fullname is not defined
//This is called optional chaining, it checks if the previous object is defined or not

const obj1= {1:"a", 2:"b"}
const obj2= {3:"c", 4:"d"}
//obj3= {obj1, obj2} This will not merge the objects, it will create a new object with obj1 and obj2 as keys
const obj3= Object.assign({}, obj1, obj2) //It copies all the enumerable properties from source objects to the target object
//Here {} is the target object, and obj1 and obj2 are the source objects
//const obj3= {...obj1, ...obj2} //spread operator which works the best
//console.log(obj3);

const users=[
    {
        id:1,
        email:"abc@xyz.org", 
    },
    {
        id:1,
        email:"abc@xyz.org", 
    },
    {
        id:1,
        email:"abc@xyz.org", 
    },
]

users[1].email
console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
//returns multiple arrays of key-value pairs

console.log(tinderUser.hasOwnProperty("id")); //returns true if the object has the property

