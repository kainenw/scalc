let type;
function payType(){
    type = this.value[0];
    let display = type === 'S' ? 'none' : 'block'
    $('.weeklyHours').css('display', display);
    $('#incomeLabel').html(this.value);
    $('.income').css('display', 'block');
}

export let period;
function payPeriod(){
    period = this.value[0];
}

$("input[name='pay-type']").on('click', payType);
$("input[name='pay-period']").on('click', payPeriod);

const inc = (tType = '', tRate = 0, tHours = 0, tPeriod = 0) => {
    const rate = tRate || $("#pay-rate").val();
    const hours = tHours || $("#weeklyHours").val();
    if(tPeriod){period = tPeriod};
    if(tType){type = tType};
    const yearlyPaychecks = 52 / period;
    income = type === 'H' ? rate * hours * period : rate / yearlyPaychecks;
    return income;
}

export { inc }

//module.exports = { inc }