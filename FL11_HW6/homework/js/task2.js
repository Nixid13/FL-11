let a = +prompt('Enter A side of triangle', '');
let b = +prompt('Enter B side of triangle', '');
let c = +prompt('Enter C side of triangle', '');

if (a > 0 && b > 0 && c > 0) {
    if (a > b + c || b > a + c || c > a + b) {
        console.log('Triangle doesn’t exist');
    } else if (a === b && b === c && c === a) {
        console.log('Equivalent triangle');
    } else if (a === b || b === c || c === a) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Invalid input or your input should be more than 0');
}