document.getElementById('createAccount').addEventListener('click', createAccount);
class Account{
  constructor(type, balance){
    this.type = type;
    this.balance = balance;
  }
}
const account = []; 
function createAccount(type, balance){
    var accType = document.getElementById('accountName').innerText;
    var balance = document.getElementById('deposit').innerText;
    var acc = new Account(accType,balance);
    account.push(acc); 
}