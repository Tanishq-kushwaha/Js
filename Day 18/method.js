// action that can be performed on an object
const calculate = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};
calculate.add(1, 2);
console.log(calculate.sub(10, 5));