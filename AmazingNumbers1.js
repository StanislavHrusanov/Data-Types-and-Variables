function amazingNumbers(number) {

    let numAsString = String(number);
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString.charAt(i));
    }

    if (String(sum).includes(9)) {
        console.log(`${number} Amazing? True`);
    } else {
        console.log(`${number} Amazing? False`)
    }
}
amazingNumbers(1233);