function specialNumbers1(n) {

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = String(i);
        for (let j = 0; j < num.length; j++) {
            sum += Number(num.charAt(j));
        }
        (sum === 5 || sum === 7 || sum === 11) ? console.log(`${num} -> True`) : console.log(`${num} -> False`);
    }
}
specialNumbers1(15);