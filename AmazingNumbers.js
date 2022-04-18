function amazingNumbers(number) {

    let numAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString.charAt(i));
    }
    let indexOfNine = 0;
    for (let i = 0; i < String(sum).length; i++) {
        if (String(sum).charAt(i) == '9') {
            indexOfNine++;
        }
    }
    if (indexOfNine > 0) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`)
    }
}
amazingNumbers(999);