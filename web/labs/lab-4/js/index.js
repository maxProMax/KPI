(function () {
    class CountMobule {
        constructor(formSelector, resultSelector) {
            this.form = document.querySelector(formSelector);
            this.result = document.querySelector(resultSelector);
            this.registerEvents();

            this.prepareForm();

            console.log('CountMobule ready');
        }

        registerEvents() {
            this.form.addEventListener('submit', this.hanldeSubmit.bind(this));
        }

        prepareForm() {
            this.form.querySelector('input').removeAttribute('disabled');
        }

        hanldeSubmit(e) {
            e.preventDefault();

            const dataStr = e.target.elements.namedItem('data').value;

            const dataArr = this.parseData(dataStr);
            const maxVal = this.getMaxVal(dataArr);
            const result = this.calculate(dataArr, maxVal);

            this.renderResult(dataArr, maxVal, result);
        }

        parseData(dataStr = '') {
            return (dataStr.split(',') || [])
                .map((n) => parseInt(n))
                .filter(Boolean);
        }

        getMaxVal(data = []) {
            return Math.max.apply(Math, data);
        }

        calculate(data = [], maxVal) {
            return data.map((item) => item * maxVal);
        }

        renderResult(initArr, maxVal, resultArr) {
            this.result.innerHTML = `
                Початкове значення - [${initArr}] <br/>
                Найбільший елемент - ${maxVal} <br/>
                Результат - [${resultArr}] <br/>
            `;
        }
    }

    class Calc {
        stackVals = [];
        queueOperator = [];

        constructor(formSelector, fieldSelector, resultSelector) {
            this.form = document.querySelector(formSelector);
            this.field = document.querySelector(fieldSelector);
            this.result = document.querySelector(resultSelector);

            this.registerEvents();
        }

        registerEvents() {
            this.form.addEventListener('submit', this.hanldeSubmit.bind(this));
            this.form.addEventListener('click', this.hanldeClick.bind(this));
        }

        hanldeSubmit(e) {
            e.preventDefault();
        }

        hanldeClick(e) {
            if (e.target.type === 'button') {
                this.run(e.target.value);
            }
        }

        run(operator) {
            const inputVal = this.field.value;

            if (inputVal) {
                this.stackVals.push(parseInt(inputVal));
            }

            if (operator === '=') {
                this.calculate();
            } else {
                if (!inputVal) {
                    this.queueOperator.pop();
                }
                this.queueOperator.push(operator);
            }

            this.updateField();
        }

        calculate() {
            if (!this.queueOperator.length) {
                return;
            }

            const result = this.doMath();

            this.renderResult(result);
            this.reset();
        }

        doMath() {
            const mapMethods = {
                '+': this.addition,
                '-': this.subtraction,
                '*': this.multiplication,
                '/': this.division,
            };

            return this.stackVals.reduce((a, b) => {
                return mapMethods[this.queueOperator.shift()](a, b);
            });
        }

        reset() {
            this.stackVals = [];
            this.queueOperator = [];
        }

        updateField() {
            this.field.value = '';
            this.field.focus();
        }

        addition(a, b) {
            return a + b;
        }

        subtraction(a, b) {
            return a - b;
        }

        multiplication(a, b) {
            return a * b;
        }

        division(a, b) {
            return a / b;
        }

        renderResult(val) {
            this.result.innerHTML = val;
        }
    }

    window.addEventListener('load', () => {
        new CountMobule('#form', '#result');
        new Calc('#calc', '#calc-field', '#calc-result');
    });
})();
