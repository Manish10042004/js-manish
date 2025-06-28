// console.log("H");
// console.log("I");
// console.log("J");
// console.log("K");
// console.log("L");
// console.log("M");

/*
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
    console.log("M");
}
// sayMyName()

*/



// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }


function addTwoNumbers(number1,number2){
    // let result = number1+number2
    // return result

    return number1+number2
}
const result=addTwoNumbers(3,5)

// console.log("Result:",result);

function loginUserMessage(username="sam"){
    // if(username===undefined){
    if(!undefined){
        console.log("please enter a username");
        return
    }
    return ` ${username} just logged in `
}
// console.log(loginUserMessage("Manish"))
console.log(loginUserMessage("Manish"))