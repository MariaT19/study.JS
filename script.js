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

let showTypeof = function(data) {
  console.log(data, typeof(data));
}; 

showTypeof(money);
showTypeof(income);
showTypeof(deposit);

console.log(addExpenses.toLowerCase() .split(' , '));

const getExpensesMonth = function(){
   return amount1 + amount2;
};

 console.log('Расходы за месяц: ' + getExpensesMonth());

const getAccumulatedMonth = function(){
  return money - amount1 - amount2;
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = function(){
  return Math.ceil(mission / accumulatedMonth);
};

console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев (-а)');

let budgetDay = Math.floor(accumulatedMonth/30);

console.log('Бюджет на день ' + budgetDay);

let getStatusIncome = function(){
if(budgetDay > 1200){
  return('У вас высокий уровень дохода');
l}else if(budgetDay >= 600 && budgetDay <= 1200){
  return('У вас средний уровень дохода');
} else if(budgetDay >= 0 && budgetDay < 600){
  return('К сожалению у вас уровень дохода ниже среднего')
} else {
  return('Что то пошло не так');
}
};

console.log(getStatusIncome());
