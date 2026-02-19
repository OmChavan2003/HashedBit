
// 1. Display even numbers from 1 to 100
console.log("Even numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}



// 2. Calculator Function using switch
function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operator";
    }

    return result;
}

// Example usage
console.log("\nCalculator Results:");
console.log(calculate(10, 5, "+"));
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 5, "/"));


// 3. Tax Calculation using switch
function findTax(salary) {
    let taxRate;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20;
            break;
        case (salary > 1500000):
            taxRate = 0.30;
            break;
        default:
            return "Invalid salary";
    }

    return salary * taxRate;
}

// Example usage
console.log("\nTax Amount:");
console.log(findTax(400000));   // 0
console.log(findTax(800000));   // 10%
console.log(findTax(1200000));  // 20%
console.log(findTax(2000000));  // 30%


// 4. Sum of product of corresponding digits
function sumOfDigitProducts(n1, n2) {
    let s1 = n1.toString();
    let s2 = n2.toString();

    // Pad shorter number with leading zeros
    let maxLength = Math.max(s1.length, s2.length);
    s1 = s1.padStart(maxLength, '0');
    s2 = s2.padStart(maxLength, '0');

    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        sum += Number(s1[i]) * Number(s2[i]);
    }

    return sum;
}

// Example usage
console.log("\nSum of Digit Products:");
console.log(sumOfDigitProducts(6, 34));  // 24
console.log(sumOfDigitProducts(123, 456));  // 1*4 + 2*5 + 3*6 = 32
