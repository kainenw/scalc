export function exp() {
    let expense = $(".expense");
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