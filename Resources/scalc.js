const getInc = () => {
    let incomeElement = document.getElementById("income");
    let income = 0;
    if (incomeElement.valueAsNumber > 0) {
        income = incomeElement.valueAsNumber;
    }
    return income;
}

function getExp() {
    let expense = document.getElementsByClassName("expense");
    let expenses = [0];
    const sum = (num1, num2) => {
        return num1 + num2;
    }
    for (let i = 0; i < expense.length; i++) {
        let value = expense[i].valueAsNumber;
        if (value > 0) {
            expenses.push(value);
        }
    }
    return expenses.reduce(sum);
}

const print = () => {
    let result = document.getElementById('result');
    let total = getInc() - getExp();
    if(total > 0) {
        result.innerHTML = `You could add<br> <span>$${total}</span><br> to your savings each month!`;
       result.getElementsByTagName('span')[0].style.color = "forestgreen";
    }else if(total < 0) {
        absVal = Math.abs(total);
        result.innerHTML = `You would lose<br> <span>$${absVal}</span><br> from your savings each month!`;
        result.getElementsByTagName('span')[0].style.color = "red";
    }else if(total === 0) {
        result.innerHTML = "You wouldn't be able to save any money on this budget.";
    }
}

let button = document.getElementById('button');
button.addEventListener('click', print);