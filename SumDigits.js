function sumDigits(number) {

    let sum = 0;
    let numAsString = String(number);

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString.charAt(i));
    }
    console.log(sum);
}
sumDigits(245678);