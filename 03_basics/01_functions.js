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


function calculatePrice(val1,val2,...num1){
    return num1
}
// console.log(calculatePrice(200,400,500,4000))



const user={
    usernaem:"manish",
    prices:199
}

function handleObject(anyobject){
    console.log(`Usernmae is ${anyobject.username} and price is ${anyobject.price}`);
}

 handleObject(user)

// handleObject({
//     username:"sam",
//     price:399
// })

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,100,600]));