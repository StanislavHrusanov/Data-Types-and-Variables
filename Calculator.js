function calculator(a, operator, b) {
    if (operator == '+') {
        console.log((a + b).toFixed(2));
    } else if (operator == '-') {
        console.log((a - b).toFixed(2));
    } else if (operator == '/') {
        console.log((a / b).toFixed(2));
    } else if (operator == '*') {
        console.log((a * b).toFixed(2));
    }
}
calculator(5,
    '+',
    10
);