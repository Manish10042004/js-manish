/*
let myName="Manish     "
let mychannel="chai"

console.log(myName.truelength);
*/

let myHeros=["thor", "spiderman"]

let heroPower={
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.manish=function(){
    console.log(`manish is present in all objects`);
    
}

Array.prototype.heyManish=function(){
    console.log(`Manish says hello`);
    
}
// heroPower.manish()
// myHeros.manish()
// myHeros.heyManish()
// heroPower.heyManish()



// Inheritance
const User={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername="ChaiAurCode    "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"manish".trueLength()
"iceTea".trueLength()