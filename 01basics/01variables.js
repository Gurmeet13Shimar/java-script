const accountId=1445555
let accountEmail="gunjan@gmail.com"
//not use var generally
var accountPassword = "12335"
let accountState;

console.log(accountId);
// we cant update const because of issue in block scope and functional scope
//{}===scope
accountEmail="jnkwe.com"
accountPassword="24767643"
console.table([accountEmail,accountPassword])