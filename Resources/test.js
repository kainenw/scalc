const assert = require('assert');
const fs = require('fs');
//const subtract = require('./scalc.js')
const {inc} = require('./income.js');



//describe ('scalc', () => {
    /* create setup and teardown for each test
    path = './temp-test-file';
    str = '';
    beforeEach(fs.appendFileSync(path, str));
    afterEach(fs.unlinkSync(path));*/
    /*create a test for interaction between HTML form and javascript
    describe('get', () => {
        describe('Income', () => {
        })
    })*/
    describe('income', () => {
        it('hourly and weekly is selected', () => {
            const payType = 'hourly';
            const payPeriod = '1 week';
            const rate = 2;
            const weeklyHours = 2;
            result = inc();
            expectedResult = 4;
            assert.equal(result, expectedResult);
        })
        it('hourly and bi-weekly is selected', () => {
            const payType = 'hourly';
            const payPeriod = '2 weeks';
            const rate = 2;
            const weeklyHours = 2;
            result = inc();
            expectedResult = 8;
            assert.equal(result, expectedResult);
        })
        it('salary and weekly is selected', () => {
            const payType = 'salary';
            const payPeriod = '1 week';
            const rate = 208;
            result = inc();
            expectedResult = 4;
            assert.equal(result, expectedResult);
            
        })
        it('salary and bi-weekly is selected', () => {
            const payType = 'salary';
            const payPeriod = '2 weeks';
            const rate = 208;
            result = inc();
            expectedResult = 8;
            assert.equal(result, expectedResult);
        })
    })
   /* describe('results', () => {
        it('results for weekly', () => {
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