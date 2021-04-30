function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";
    // не совсем понимаю как можно было испраавить ошибки,
    // чтобы чтобы резульатат приводился к числу
    // поэтому привел аргементы функции к числу
    let parsedPercent = parseInt(percent); 
    let parsedContribution = parseInt(contribution);
    let parsedAmount = parseInt(amount);
    if (isNaN(parsedPercent)) {
        return `Параметр процентная ставка содержит неправильное значение ${percent}`;
    } else if (isNaN(parsedContribution)) {
        return `Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`;
    } else if (isNaN(parsedAmount)) {
        return `Параметр сумма кредита содержит неправильное значение ${amount}`;
    }
    let sumLeft = parsedAmount - parsedContribution;
    let currentDate = new Date();
    let monthsQuantity = date.getMonth() - currentDate.getMonth() + (12 * (date.getFullYear() - currentDate.getFullYear()));
    let monthlyPercent = (parsedPercent / 1200);
    let monthlyPayment = sumLeft * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent)**monthsQuantity) - 1));
    let totalAmount = monthlyPayment * monthsQuantity;
    totalAmount = new Number(totalAmount.toFixed(2));
    return totalAmount;
}
    // код для задачи №2 писать здесь
    function getGreeting(name) {
        if (!name) {
          name = "Аноним";
        }
        let greeting = `Привет, мир! Меня зовут ${name}.`;
        return greeting;
      }