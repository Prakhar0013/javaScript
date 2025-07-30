//Date objects in JS represent single moment in time. They encapsulate an integral number that represents milliseconds since midnight at the beginning of January 1, 1970, UTC
let myDate= new Date();
//console.log(myDate)//Output: 2025-07-30T11:12:04.940Z

//console.log(myDate.toString());//Output: Wed Jul 30 2025 11:12:52 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());//Output: Wed Jul 30 2025
//console.log(myDate.toISOString());//Output: 2025-07-30T11:15:02.420Z
//console.log(myDate.toJSON());//Output: 2025-07-30T11:15:02.420Z

//toISOString() throws an error for invalid dates, while toJSON() returns null.
//console.log(myDate.toLocaleDateString());
//Output: 7/30/2025
//console.log(myDate.toLocaleString());
//Output: 7/30/2025, 11:15:02 AM
//console.log(typeof myDate);//Output:Object
// let myCreatedDate= new Date("2023-01-23");
// let myCreatedDate= new Date(2023,0,23,5,3);//Output: 1/23/2023, 5:03:00 AM
let myCreatedDate= new Date("4-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);//Returns time in milliseconds from beginning
// console.log(myCreatedDate.getTime());//function getTime() converts time to ms

//console.log(Math.round(Date.now()/1000));
//We can get day, month, year etc from using the functions like getMonth() etc. in place of getTime() used above 
//We have to add 1 to month in order to make it right for user as its 0 indexed


//toLocaleString() is one of the most important functions as we define object, we can define many parameters

let newDate= new Date();
console.log(newDate.toLocaleString('default',{
    weekday:"long",
}));

//In place of default we define the kind of internationalization