function isPrime(n) {
    if (n < 2) {
        return false;
    }

    let num = 2;

    while (num * num <= n) {
        if (n % num === 0) {
            return false;
        }
        num++;
    }

    return true;
}


console.log(isPrime(53));

console.log(3/3);

