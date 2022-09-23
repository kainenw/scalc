import {inc} from "./income.js";
import {exp} from "./expenses.js";

const print = () => {
    let result = $('#result');
    let total = inc() - exp();
    if(total > 0) {
        result.html(`You could add<br> <span>$${total}</span><br> to your savings each month!`);
        $('span').css('color', "forestgreen");
    }else if(total < 0) {
        let absVal = Math.abs(total);
        result.html(`You would lose<br> <span>$${absVal}</span><br> from your savings each month!`);
        $('span').css('color', 'red');
    }else if(total === 0) {
        result.html("You wouldn't be able to save any money on this budget.");
    }
}

$('#button').click(print);