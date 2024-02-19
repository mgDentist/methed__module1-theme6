const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            console.log(false);
            return;
        }
    }

    console.log(true);
};

isPrime(911);