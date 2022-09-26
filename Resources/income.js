let type;
function payType(){
    type = this.value[0];
    console.log(type)
    let display = type === 'S' ? 'none' : 'block'
    $('.weeklyHours').css('display', display);
    $('#incomeLabel').html(this.value);
    $('.income').css('display', 'block');
}

let period;
function payPeriod(){
    period = this.value[0];
    console.log(period)
}

$("input[name='pay-type']").on('click', payType);
$("input[name='pay-period']").on('click', payPeriod);

const inc = (tType = null, tRate = null, tHours = null, tPeriod = null) => {
    const rate = tRate || $("#pay-rate").val();
    const hours = tHours || $("#weeklyHours").val();
    if(tPeriod){period = tPeriod};
    if(tType){type = tType};
    const yearlyPaychecks = 52 / period;
    income = type === 'H' ? rate * hours * period : rate / yearlyPaychecks;
    console.log(rate + hours + period + type + yearlyPaychecks);
    return income;
}

export { inc }

//module.exports = { inc }