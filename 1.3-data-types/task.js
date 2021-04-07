"use strict";

"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    let today =  new Date();
    let monthsQuantity = (date.getFullYear() - today.getFullYear()) * 12 - (today.getMonth() + 1) + date.getMonth() + 1;;
    if (isNaN(percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    }
     
    else if (isNaN(contribution)) {
        return `Параметр "Первоначальный вхнос" содержит неправильное значение ${contribution}`;
        }

  else if (isNaN(amount)) {
            return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
            }

    else if (date =='Invalid date'|| monthsQuantity < 12) {
                return `Введите корректную дату погашения ипотеки`;
                }
else{
let sumLeft = amount - contribution;
let monthlyPercent = percent / 1200; 
let monthlyPayment = sumLeft * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent)) - 1));
let totalAmount = monthlyPayment * monthsQuantity; 
 return totalAmount.toFixed(2);
}
}

    // код для задачи №2 писать здесь
    function getGreeting(name) {
        if (!name || name == "null" || name == "undefined") {
          name = "Анон";
        }
        let greeting = `Привет, мир! Меня зовут ${name}`;
        return greeting;
      }