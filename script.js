let oneNumber = 2000;
let twoNumber = 4200;
let money = prompt ('Ваш месячный доход?','');
let expenses = prompt ('Во сколько обойдутся обязательные статьи расходов?','');
let profit = prompt ('Ваш дополнительный месячный доход?','');

let budgetMounth = Math.ceil(money - expenses + profit);

let budgetDay = Math.ceil(budgetMounth/30);

if(budgetDay > 6000) {
 console.log('у вас высокий уровень дохода')
} else if (budgetDay > 3000 && budgetDay < 6000) {
 console.log('у вас средний уровень дохода')
} else if (budgetDay >= 0 && budgetDay < 3000) {
 console.log('у вас низкий уровень дохода')
} else {
 console.log('Что то пошло не так')
}





