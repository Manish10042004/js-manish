// Immediately Invooked Function Expression(IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();


( (name)=>{
    // simple iife
    console.log(`DB CONNECTED TWO ${name}`);
})('manish')