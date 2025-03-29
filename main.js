function multiplo(n) {
    if (n % 15 == 0) {
        return 'fizzBuzz';
    } else if (n % 5 == 0) {
        return 'Buzz';
    } else if (n % 3 == 0) {
        return 'Fizz';
    } else {
        return n;
    }
}

console.log(multiplo(6));
console.log(multiplo(10));
console.log(multiplo(30));
console.log(multiplo(4));

