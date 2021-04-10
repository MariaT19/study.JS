'use strict';

let money = +prompt('Ваш месячный доход?');
let income = 'rent';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 20000;
let period = 6;
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?');

console.log(typeof money);

console.log(typeof income);

console.log(typeof deposit);

console.log(addExpenses.length);

let phrase1 = `Период равен ${period} месяцев`;

console.log(phrase1);

let phrase2 = `Цель заработать ${mission} долларов`;

console.log(phrase2);

console.log(addExpenses.toLowerCase() .split(' , '));

let budgetMonth = money-amount1-amount2;
let phrase3 = `Бюджет на месяц:${budgetMonth}`;

console.log(phrase3);

let timeframe =  Math.ceil(mission/budgetMonth);

console.log('Цель будет достигнута за ' + timeframe + ' месяцев (-а)');

let budgetDay = Math.floor(budgetMonth/30);

console.log('Бюджет на день ' + budgetDay);

if(budgetDay >= 1200){
  console.log('У вас высокий уровень дохода');
}else if(budgetDay >= 600){
  console.log('У вас средний уровень дохода');
} else if(budgetDay >= 0){
  console.log('К сожалению у вас уровень дохода ниже среднего')
} else if(budgetDay < 0){
  console.log('Что то пошло не так');
}