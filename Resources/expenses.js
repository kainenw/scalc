const sum = (num1, num2) => {
    return num1 + num2;
}

const weekly = (tInputs = null) => {
    let inputs = tInputs || $(".weekly");
    let expenses = [];
    for (let i = 0; i < inputs.length; i++) {
        let value = inputs[i].valueAsNumber;
        value && expenses.push(value);
    }
    console.log(inputs)
    return !expenses.length ? 0 : expenses.reduce(sum);
}

const monthly = (tInputs = null) => {
    let inputs = tInputs || $(".monthly");
    let expenses = [];
    for (let i = 0; i < inputs.length; i++) {
        let value = inputs[i].valueAsNumber;
        value && expenses.push(value);
    }
    return !expenses.length ? 0 : expenses.reduce(sum);
}

export function exp(tPerWeek = null, tPerMonth = null, tPeriod = null) {
    let perWeek = tPerWeek || weekly();
    console.log(perWeek)
    let perMonth = tPerMonth || monthly();
    console.log(perMonth)
    let payPeriod = tPeriod || $("input[name='pay-period']:checked").val()[0];
    console.log(payPeriod)
    let perYear = perWeek * 52 + perMonth * 12;
    console.log(perYear)
    let yearlyPayPeriods = 52 / payPeriod;
    console.log(yearlyPayPeriods)
    let expPerPayPeriod = perYear / yearlyPayPeriods;
    console.log(expPerPayPeriod)
    return expPerPayPeriod;
}

