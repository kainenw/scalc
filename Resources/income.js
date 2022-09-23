export const inc = () => {
    let incomeElement = $("#income");
    let income = 0;
    if (incomeElement.val() > 0) {
        income = incomeElement.val();
    }
    return income;
}