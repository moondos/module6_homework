function checkPrimeNumber(num) {
    let result = `${num} - простое число`;
    
    if (num < 2 || num >= 1000) {
        return "Число должно быть больше 1 и меньше 1000";
    } else if (num == 2) {
        return result;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result = `${num} - не простое число`;
                break;
            }
        }
    }
    return result;
}


console.log(checkPrimeNumber(prompt("Введите число от 2 до 1000")));
