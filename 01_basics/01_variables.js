const accountId = 144553
let accountEmail = "prabin@google.com"
var accountPassword = "123"

accountCity = "Janakpur"
//  accountId = 2
accountEmail = "karan@gmailcom"
accountPassword = "6910"
accountCity = "kathmandu"
let accountState;
/*
prefer not to use var 
Because of issue in block Scope and functional scope
*/
console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState])
