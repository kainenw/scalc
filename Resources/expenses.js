const sum = (num1, num2) => {
    return num1 + num2;
}

const parse = (inputs) => {
    let exp = [];
    for (let i = 0; i < inputs.length; i++) {
        let value = inputs[i].valueAsNumber;
        value && exp.push(value);
    }
    return !exp.length ? 0 : exp.reduce(sum);
}

const obj = (tWeekly = null, tMonthly = null) => {
    let exp = {
        weekly: tWeekly || parse($(".weekly")),
        monthly: tMonthly || parse($(".monthly")),
    }
    return exp;
}

export function exp(tWeekly = null, tMonthly = null, tPeriod = null) {
    let exp = !tWeekly ? obj() : {weekly: tWeekly, monthly: tMonthly}
    let period = tPeriod || $("input[name='pay-period']:checked").val()[0];
    let yearlyTotal = exp.weekly * 52 + exp.monthly * 12;
    let yearlyPeriods = 52 / period;
    let result = yearlyTotal / yearlyPeriods;
    return result;
}

