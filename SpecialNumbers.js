function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = String(i);
        for (let j = 0; j < num.length; j++) {
            sum += Number(num.charAt(j));
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${num} -> True`);
        } else {
            console.log(`${num} -> False`);
        }
    }
}
specialNumbers(15);