function binaryToDecimal(number) {
    let decimal = 0;
    let numberAsString = String(number);

    for (let i = 0; i < numberAsString.length; i++) {
        decimal = (decimal * 2) + Number(numberAsString.charAt(i));
    }
    console.log(decimal);

}
binaryToDecimal('00001001');