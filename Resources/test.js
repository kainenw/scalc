const assert = require('assert');
const fs = require('fs');
//const subtract = require('./scalc.js')
const { inc, input } = require('./income.js');
/* JSDOM for a mock dom
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

const $ = jQuery = require('jquery')(window);

/* describe ('scalc', () => {
    create setup and teardown for each test
    path = './temp-test-file';
    str = '';
    beforeEach(fs.appendFileSync(path, str));
    afterEach(fs.unlinkSync(path));*/
    /*create a test for interaction between HTML form and javascript
    describe('get', () => {
        describe('Income', () => {
        })
    })
    describe('JSDOM', () => {
        it('income.js', () => {
            const document = new JSDOM(
                `<!DOCTYPE html 
                <input type="text" value="hourly">
                <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
                <input type="number" class="income" id="pay-rate" name="income" value="200> 
                <input type="number" id="weeklyHours" class="weeklyHours" name="weeklyHours" value="60">
                <input type="radio" id="weekly" name="pay-period" value="1 week">`
            )
            result = inc(200, 'W');
            expectedResult = 1200;
            assert.equal(result, expectedResult)
        })
    }) */
    describe('income', () => {
        it('hourly and weekly', () => {
            result = inc('H', 200, 20, 1);
            expectedResult = 4000;
            assert.equal(result, expectedResult);
        })
        it('hourly and bi-weekly', () => {
            result = inc('H', 200, 20, 2);
            expectedResult = 8000;
            assert.equal(result, expectedResult);
        })
        it('salary and weekly', () => {
            result = inc('S', 52000, 1, 1);
            expectedResult = 1000;
            assert.equal(result, expectedResult);
            
        })
        it('salary and bi-weekly', () => {
            result = inc('S', 52000, 1, 2);
            expectedResult = 2000;
            assert.equal(result, expectedResult);
        })
    })
   /* describe('results', () => {
        it('test object', () => {
            period = '1 week';
            result = response.length;
            expectedResult = 52;
        })
        it('results for weekly', () => {
            
        })
    })
    describe('subtract', () => {
        it('income is greater than expenses', () => {
            const income = 10;
            const expenses = 5;
            const result = subtract(income, expenses);
            const expectedResult = 5;
            assert.equal(result, expectedResult);
        })
        it('income is less than expenses', () => {
            const income = 5;
            const expenses = 10;
            const result = subtract(income, expenses);
            const expectedResult = -5;
            assert.equal(result, expectedResult);
        })
        it('income is equal to expenses', () => {
            const income = 10;
            const expenses = 10;
            const result = subtract(income, expenses);
            const expectedResult = 0;
            assert.equal(result, expectedResult);
        })
        it('income and expenses are 0', () => {
            const income = 0;
            const expenses = 0;
            const result = subtract(income, expenses);
            const expectedResult = 0;
            assert.equal(result, expectedResult);
        })
    })*/
//})