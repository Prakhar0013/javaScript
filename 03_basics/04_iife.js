//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`); 
})();
// If we apply brackets on function definition, after it, we are able to execute it directly

//(Definition)()
//second brackets are for execution
//global scope's pollution causes problem many times
//to remove global scope declaration we use IIFE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);    
})('Prakash');
//Each function can be called by itself but we have to be careful to with termination of previous one
