// Date

/*
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
*/

// let myCreatesDate=new Date(2023,0,23)
// console.log(myCreatesDate.toDateString())

// let myCreatesDate=new Date(2023,0,23,5,3)
// console.log(myCreatesDate.toLocaleString());

// let myCreatesDate=new Date("2023-01-14")
// console.log(myCreatesDate.toLocaleString());

// let myCreatesDate=new Date("01-14-2023")
// console.log(myCreatesDate.toLocaleString());

let myCreatesDate=new Date("01-14-2023")


let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreatesDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`


newDate.toLocaleString('default',{
    weekday:"long",
})