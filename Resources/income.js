let payType;
let weeklyHours = null;

function type(){
    payType = this.value;
    let payLabel = $('#incomeLabel')
    if(this.value === 'hourly'){
        payLabel.html('Hourly Pay');
        $('.income').css('display', 'block');
        $('.weeklyHours').css('display', 'block');
    } else {
        payLabel.html('Salary');
        $('.income').css('display', 'block');
        $('.weeklyHours').css('display', 'none');
    }
    
    console.log(payType);
}

let payPeriod;

function period(){
    payPeriod = this.value;
    console.log(payPeriod);
}

$("input[name='pay-type']").on('click', type);
$("input[name='pay-period']").on('click', period);

export const inc = () => {
    let rate = $("#pay-rate").val();
    console.log(rate);

    let income = 0;
        if(payType === 'hourly'){
            weeklyHours = $("#weeklyHours").val();

            income = weeklyHours * rate * payPeriod[0];
        }
        if(payType === 'salary'){
            const paychecks = 52 / payPeriod[0];
            income = rate / paychecks;
            console.log(rate);
        }


    return income;
}