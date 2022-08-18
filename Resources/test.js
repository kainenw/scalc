const assert = require('assert');
const fs = require('fs');
const subtract = require('./scalc.js')
const { it } = require('node:test');
const { builtinModules } = require("module");

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
    })
//})