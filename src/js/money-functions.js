function formatCurrency(amount) {
    //let num = Math.round(amount)
    let decimalNum = amount.toFixed(2);
    if (decimalNum >= 0) {
    return "$" + decimalNum;
    } else {
        return "-$" + decimalNum;
    }
}

console.log(formatCurrency(4.45879));

function getCoins (cents) {
    let quarterCount = 0;
    let dimeCount = 0;
    let nickelCount = 0;
    let pennyCount = 0;
    let coins = {
        quarters: quarterCount,
        dimes: dimeCount,
        nickels: nickelCount,
        pennies: pennyCount,
    };
    let currentTotal = cents;
    while (currentTotal > 0) {
        if (currentTotal >= 25) {
            quarterCount += 1;
            currentTotal - 25;
        } else if (currentTotal >= 10 && currentTotal < 25) {
            dimeCount += 1;
            currentTotal - 10;
        } else if (currentTotal >= 5 && currentTotal < 10) {
            nickelCount += 1;
            currentTotal -5
        } else if (currentTotal >= 1 && currentTotal < 5) {
            pennyCount += 1;
            currentTotal - 1;
        } else {
            break;
        };
    }
    // update coins object with latest coin count
    coins.quarters = quarterCount;
    coins.dime = dimeCount;
    coins.nickels = nickelCount;
    coins.pennies = pennyCount;
}

console.log(getCoins(35));


module.exports = {formatCurrency, getCoins};