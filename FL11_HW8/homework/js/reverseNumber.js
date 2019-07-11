function reverseNumber(num) {
    let length = Math.floor(Math.log10(Math.abs(num))) + 1;
    let reversed = 0;
    for (let i = 0; i < length; i++) {
        reversed = reversed * 10 + num % 10;
        num = parseInt(num / 10, 10);
    }
    return reversed;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
