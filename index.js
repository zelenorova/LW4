/* task 1 */
const a = 2;
const b = 2;
let result = a + b;
console.log(result);
result = a - b;
console.log(result);
result = a * b;
console.log(result);
result = a / b;
console.log(result);

/*task 2 */
const age = 18;
console.log(`I am ${age} years old.`);

/* task 3 */
c = 25;
d = 50;
e = 65;

function check(time) {
    return (time <= 50 ? 'Дані перадаються у відповідності зі вказаним часом передачі сигналу' : 'Час передачі перевищений!')
}

console.log(check(c));
console.log(check(d));
console.log(check(e));

/* task 4 */

let condition = prompt('Enter number: ');
condition = Number(condition);

if (Number.isNaN(condition) == false) {
    if ((condition % 2 == 0) && ((condition < 15) != (condition > 30))) {
        condition = condition ** 3;
        console.log(condition);
    }
    else {
        console.log(condition);
    }
}
else {
    console.log('this is not a number!');
}


/* task 5 */

let X = prompt('Enter number: ');
X = Number(X);

if ((Number.isNaN(X) == false) && (X >= 1) && (X <= 10)) {
    switch (X) {
    case 1:
        console.log('I');
        break;
    case 2:
        console.log('II');
        break;
    case 3:
        console.log('III');
        break;
    case 4:
        console.log('IV');
        break;
    case 5:
        console.log('V');
        break;
    case 6:
        console.log('VI');
        break;
    case 7:
        console.log('VII');
        break;
    case 8:
        console.log('VIII');
        break;
    case 9:
        console.log('IX');
        break;
    case 10:
        console.log('X');
        break;
    default:
        console.log('Error');
        break;
}
}
else {
    console.log('This is not a number or it is too big|small!')
}