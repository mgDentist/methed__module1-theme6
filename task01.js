const exponentiation = () => {
    for (let i = 1; i <= 10; i++) {
        console.log('----------')
        for (let y = 1; y <= 10; y++) {
            console.log(`${i} в степени ${y}: ${i ** y}`)
        }
    }
}

exponentiation();