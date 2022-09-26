export const res = () => {
    let perPeriod = $('.results');
    perPeriod.show();
    let total = inc() - exp();
    let pos = total > 0 ? true : false;
    let color = pos ? 'green' : 'red';
    $('span').html(total);
    $('span').css('color', color);
}