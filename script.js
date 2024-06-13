'use strict';
console.log("Hi");
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data //should be fetched from a data base using APIS.
const account1 = {
  owner: 'Ahmed Ayman',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jonas Statham',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Dalia Ayman',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Manal Ahmed',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Arrays are the most used data structure in JS
//we can use spread operator or slice() to create a shallow copy from an array

// const numbers = [1, 2, 3];
// const numbers2 = [...numbers];
// const numbers3 = numbers.slice();
// console.log(numbers, numbers2, numbers3);

//slice return a new array , splice mutate original array

//For of & Foreach()
//forEach is better for chaining.
//break doesn't work with foreach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement >= 0) {
//     console.log(`you deposited ${movement}$`);
//   } else {
//     console.log(`you withdrawed ${Math.abs(movement)} $`);
//   }
// }

// console.log('//'.repeat(20));

// movements.forEach(function (movement) {
//   if (movement >= 0) {
//     console.log(`you deposited ${movement}$`);
//   } else {
//     console.log(`you withdrawed ${Math.abs(movement)} $`);
//   }
// });
console.log('Start');
const displayMovements = function (movements, sort = false) {
  //to override old html content
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  //we do forEach on each movement array.
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //we use template lateral to concatenat html content
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    //to add new html content
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//to convert user name to it's initilas (Ahmed Ayman Amin => A.A.A) and so on.
const createUserName = function (userName) {
  // userName = userName
  //   .split(' ')
  //   .map(el => el[0].toLocaleUpperCase())
  //   .join('.');
  // console.log(userName);
  return userName
    .split(' ')
    .map(el => el[0].toLocaleUpperCase())
    .join('.');
};

//we will use later the logged in account
displayMovements(account1.movements);
account1.userName = createUserName(account1.owner);
account2.userName = createUserName(account2.owner);
account3.userName = createUserName(account3.owner);
account4.userName = createUserName(account4.owner);
console.log(account1);
console.log(account2);
console.log(account3);
console.log(account4);

// createUserName(account1.owner);
// const userName = 'Ahmed a yman Amin';
// const arrUserName = userName.split(' ');
// console.log(arrUserName);
// const updatedUserName = arrUserName.map(el => el[0].toUpperCase());
// console.log(updatedUserName);
// const finalUserName = updatedUserName.join('.');
// console.log(finalUserName);

// const TODO = userName
//   .split(' ')
//   .map(el => el[0].toLocaleUpperCase())
//   .join('.');
// console.log(TODO);
// displayMovements(account2.movements);

// const money1 = [10, 20, 30];
// const converter = 50;

// const money2 = money1.map(function (mov) {
//   return mov * converter;
// });

// console.log(money1);
// console.log(money2);

// const names = ['ahmed', 'ayman', 'amin'];
// const names2 = names.map(function (arrName) {
//   let [firstLetter, ...word] = arrName;
// console.log(firstLetter);
// console.log(word);
//to convert first letter of a string to capital letter
//   let str = arrName.charAt(0).toUpperCase() + arrName.slice(1);
//   return `Mr.${str}`;
// });

// console.log(names);
// console.log(names2);

//use arrow function instead of expression(annonymous fuction) call back function
// const money3 = money1.map(arr => arr * 10);
// console.log(money3);

// let money4 = money1.map(function (ele, i, allarr) {
//   console.log(ele);
//   console.log(i);
//   console.log(allarr);
//   return ele * i;
// });
// console.log(money4);

//------------------Reduce-----------------
// const numbers = [1, 2, 3, 4, 5];

// const numbersSum = numbers.reduce(function (acc, cur, i) {
//   console.log(i);
//   console.log(acc);
//   console.log(cur);
//   console.log('-'.repeat(30));
//   return acc + cur;
// }, 0);

// console.log(numbersSum);
//------------------Reduce-----------------

const calcDisplayBalance = function (account) {
  const balance = account.movements.reduce((acc, move) => acc + move, 0);
  labelBalance.textContent = `${balance} $`;
  account.balance = balance;
};

//to add balance property to all acounts
calcDisplayBalance(account1);
calcDisplayBalance(account2);
calcDisplayBalance(account3);
calcDisplayBalance(account4);

//we will use later the logged in account
//calcDisplayBalance(account1.movements);

//calculate maximum movement for account
const calcMaximum = function (movements) {
  const maxValue = movements.reduce((acc, move) => {
    return acc > move ? acc : move;
  }, movements[0]);
  return maxValue;
};

//calculate minimum movement for account
const calcMinimum = function (movements) {
  const maxValue = movements.reduce((acc, move) => {
    return acc < move ? acc : move;
  }, movements[0]);
  return maxValue;
};

const displaySummary = function (movement) {
  // console.log(movement);
  const totalIncome = movement
    .filter(move => move > 0)
    .reduce((acc, move) => {
      return acc + move;
    }, 0);
  const totalOutcome = movement
    .filter(move => move < 0)
    .reduce((acc, move) => {
      return acc + move;
    }, 0);
  labelSumIn.textContent = `${totalIncome}$`;
  labelSumOut.textContent = `${Math.abs(totalOutcome)}$`;
};

//we will use logged in user later
// displaySummary(account1.movements);

const updateUI = function (account) {
  //display Movements
  displayMovements(account.movements);

  //display SUmmary
  displaySummary(account.movements);
  //display balance
  calcDisplayBalance(account);
  //display Interest Rate
  document.querySelector('.summary__value--interest').textContent =
    account.interestRate;
};

//--------------------Chaining Methods---------------------------//

//----------------------Find---------------------//
//we can use find to retrieve first element of an array of values , or first object of an array of objects
// const firstWithdrawal = account1.movements.find(move => move < 0);
// console.log(account1.movements);
// console.log(firstWithdrawal);
// const firstDeposit = account1.movements.find(move => move > 0);
// console.log(account1.movements);
// console.log(firstDeposit);

// const oneAccount = accounts.find(acc => acc.owner === 'Steven Thomas Williams');
// console.log(oneAccount);

//-----------------------find----------------------------//

//-----Event handlers--------//

let currentAccount = {};
//Login In
btnLogin.addEventListener('click', function (e) {
  //prevent form fomr submitting and refreshing the page
  e.preventDefault();
  console.log(this);
  console.log(e);
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  // console.log(currentAccount);
  // console.log(inputLoginUsername.value);
  // console.log(inputLoginPin.value);

  if (currentAccount?.pin === Number(inputLoginPin?.value)) {
    //display WElcome Message
    labelWelcome.textContent = `Welcome Mr ${currentAccount.owner}`;

    //Show App Element
    containerApp.style.opacity = 100;

    updateUI(currentAccount);
  }
  //hide login & pin
  inputLoginPin.value = '';
  inputLoginUsername.value = '';
  inputLoginPin.blur();
  inputLoginUsername.blur();
});

//Implement Transfers
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  //to clear amount and transfer to labels
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
  inputTransferTo.blur();
  console.log('Transfer Button Is Clicked');
  console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    currentAccount.userName !== receiverAcc.userName
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

//to take loan from the bank

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount && amount > 0) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
    //to remove focus from input element
    // inputLoanAmount.blur();
  }
});

//to remove account from accounts array.
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const deletedUserName = inputCloseUsername.value;
  const deletedPin = Number(inputClosePin.value);
  console.log(deletedUserName, deletedPin);
  if (
    deletedUserName === currentAccount.userName &&
    deletedPin === currentAccount.pin
  ) {
    const deletedIndex = accounts.findIndex(
      acc => acc.userName === deletedUserName
    );
    console.log(deletedIndex);
    accounts.splice(deletedIndex, 1);
    containerApp.style.opacity = 0;
    // console.log('Delete Account');
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
console.log('End');

///////////////////////////////////////
// flat and flatMap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

///////////////////////////////////////

// Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//how to convert a nodel list of dom elements to array
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//how to convert a node list to array
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = arr.splice(2, 2);
// console.log(arr);
// console.log(arr2);
