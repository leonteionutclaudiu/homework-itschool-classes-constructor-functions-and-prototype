`use strict`;

// Homework IT School - 17 Octombrie 2022
// Leonte Ionut-Claudiu

// Clasa noastra "Banking"
class Banking {
  name;
  swiftCode;
  country;
  accountsList = [];

  constructor(name, swiftCode, country) {
    this.name = name;
    this.swiftCode = swiftCode;
    this.country = country;
  }

  // Metoda prin care adaugam un cont nou in lista(array-ul) cu conturile.
  addAcountToAccountsList(account) {
    this.accountsList.push(account);
  }

  // Metoda prin care afisam un mesaj pentru fiecare cont in parte.
  showAllAccounts() {
    this.accountsList.forEach((acc) =>
      console.log(
        `This is one account owner ${acc.name} with account number ${acc.accountNumber} , id ${acc.id} and balance of ${acc.balance} EUR! 💰 `
      )
    );
  }

  // Metoda prin care afisam un Array cu conturile ce au balance negativ.
  showAllAccountsWithNegativeBalance() {
    let negativeAccounts = this.accountsList.filter((acc) => acc.balance < 0);
    console.log(negativeAccounts);
  }
}

// Constructor function-ul care poate crea conturi bancare noi.
function Account(accountNumber, id, balance, name) {
  this.accountNumber = accountNumber;
  this.id = id;
  this.balance = balance;
  this.name = name;
}

// Banca noastra
const leonteBanking = new Banking(`Leonte-Banking`, `LEBKROBBR998`, `Romania`);

// Am creat 3 conturi : 1 cu balance pozitiv si 2 cu balance negativ.
const account1 = new Account(`RO291302`, 28381, 10000, `Leonte Ionut`);
leonteBanking.addAcountToAccountsList(account1);

const account2 = new Account(`RO839139`, 34922, -210, `Marius Popescu`);
leonteBanking.addAcountToAccountsList(account2);

const account3 = new Account(`DE409459`, 09785, -5000, `Freuler Kroos`);
leonteBanking.addAcountToAccountsList(account3);

leonteBanking.showAllAccounts();
leonteBanking.showAllAccountsWithNegativeBalance();

// Am creat o metoda care scade valoarea 10 din "balance" de fiecare data cand este chemata.
Account.prototype.pay10Euros = function () {
  this.balance = this.balance - 10;
};

// Afisarea conturilor inainte de chemarea metodei "pay10Euros".
console.log(account1);
console.log(account2);
console.log(account3);

// Chemarea functiei "pay10Euros"
account1.pay10Euros();
account2.pay10Euros();
account3.pay10Euros();

// Afisarea conturilor dupa de chemarea metodei "pay10Euros".
console.log(account1);
console.log(account2);
console.log(account3);
