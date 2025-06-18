const accountId = 144553
let accountEmail = "manish@google.com"
var accountPassword = "12345"
accontCity = "Jaipur"
let accountState;

// accountId=2  //not allowed

acoountEmail="hc@hc.com"
accountPassword="21212121"
accontCity="bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accontCity,accountState])