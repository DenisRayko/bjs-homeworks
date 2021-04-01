// код для задачи №1

"use strict";
function getResult(a,b,c) {
 
    let results = [];
    let d = Math.pow(b,2) - 4 * a * c;

    if (d < 0) {
        return results;
    }

    else if (d === 0) {

        let x = - b / (2 * a);
        results.push(x);
        return results;
    }

    else {
       let x1 =(- b + Math.pow(d, 0.5)) / 2 * a;
       let x2 =(- b - Math.pow(d, 0.5)) / 2 * a;
        results.push(x1);
        results.push(x2);
        return results; 
    }


    // return x;
}

// код для задачи №2
function getAverageMark(marks) {

    let sum = 0 ;

    if (marks.length > 5) {
        alert("ВНИМАНИЕ! Вы ввели более пяти оценок.");
        marks.splice(5);
    }

   else if (marks.length === 0) {
        return 0;}

    for ( let i = 0; i < marks. length; i++) {
        sum += marks[i];
    } 

    return (sum / marks.length);
  
    
}


// код для задачи №3
function askDrink(name, dateOfBirthday) {

if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) >= 18) {
return `Не желаете ли олд-фэшн, ${name}?`;
}
else {
return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
}
}