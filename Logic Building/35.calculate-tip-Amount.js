// Q. Wap to calculate tip Amount for a given set of percentages
// ex tipAmount = 1000, tip percentages = [5, 10, 15]

function calculateTipAmount(baseAmount, tipPercentages) {
    let tipAmount = 0;
    let result = [];

    for (let i = 0; i < tipPercentages.length; i++) {
        tipAmount = baseAmount * (tipPercentages[i] / 100);
        const formatter = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });
        result.push(formatter.format(tipAmount));
    }
    return result;
}

console.log(calculateTipAmount(1000, [5, 10, 15]));
console.log(calculateTipAmount(8000, [5, 10, 15]));



console.log('function 2');

function calculateTipAmount2(baseAmount, tipPercentages, locale, currency) {
    let tipAmount = 0;
    let result = [];

    for (let i = 0; i < tipPercentages.length; i++) {
        tipAmount = baseAmount * (tipPercentages[i] / 100);
        const formatter = Intl.NumberFormat(locale, {
            style: "currency",
            currency: currency,
        });
        result.push(formatter.format(tipAmount));
    }
    return result;
}

console.log(calculateTipAmount2(1000, [5, 10, 15], 'en-IN', 'INR'));
console.log(calculateTipAmount2(5000, [5, 10, 15], 'en-US', 'USD'));
