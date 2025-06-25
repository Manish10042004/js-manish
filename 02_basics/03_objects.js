// singleton
// Object.create



// object literals


const mySym=Symbol("key1")
const JsUser= {
    name:"Manish",
    "full name":"Manish Shrivas",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"manish@google.com",
    isLoggedIn:false,
    lastLogindaus:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(typeof JsUser[mySym]);

JsUser.email="manish@chatgpt.com"
// objec.freeze(JsUser)
JsUser.email="manish@microsoft.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JS  user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS  user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());