import { inc, period } from "./income.js";
import { exp, parse } from "./expenses.js";

function tableCreate(income, expenses, total) {
    const body = document.body;
    const goal = parse($(".goals"))
    let tbl = document.querySelector('table');
    let cumulativeSavings = 0;
    const rows = 52 / period;
    //const cols = 6;
    const inc = income;
    const exp = expenses;
    let weeksOut = 0;
    for (let i = 0; i <= rows; i++) {
      let tr = document.createElement('TR');
      period === '1' ? weeksOut += 1 : weeksOut += 2;
      const income = inc;
      const expenses = exp;
      const saving = total;
      const totalSavings = cumulativeSavings;
      const distance = goal - cumulativeSavings;
      let td1 = document.createElement('TD');
      let td2 = document.createElement('TD');
      let td3 = document.createElement('TD');
      let td4 = document.createElement('TD');
      let td5 = document.createElement('TD');
      let td6 = document.createElement('TD');
      td1.appendChild(document.createTextNode(weeksOut));
      td2.appendChild(document.createTextNode(income));
      td3.appendChild(document.createTextNode(expenses));
      td4.appendChild(document.createTextNode(saving));
      td5.appendChild(document.createTextNode(totalSavings));
      td6.appendChild(document.createTextNode(distance));
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
      tbl.appendChild(tr);
      cumulativeSavings += total;
  }
}

export const res = () => {
    const goal = Math.round(parse($(".goals")));
    const income = Math.round(inc());
    const expenses = Math.round(exp());
    const total = income - expenses;
    const pos = total > 0 ? true : false;
    const color = pos ? 'green' : 'red';
    const periodsFromGoal = Math.floor(goal / total) * period;
    const displayedDistance = periodsFromGoal > 0 ? `${periodsFromGoal} weeks!` : 'the sun explodes!'

    tableCreate(income, expenses, total);

    $('#results').css('display', 'block');
    $('#savable').html(total);
    $('span').css('color', color);
    $('#weeksAway').html(displayedDistance);
}