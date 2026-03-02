// Importing the calculator module from calculator.js
const calculator = require('./calculator');

function performCalculation(a, b, operation) {
    // Determine the operation based on the 'operation' parameter
    if (operation === 'add') {
        return calculator.add(a, b);
    } else if (operation === 'subtract') {
        return calculator.subtract(a, b);
    } else if (operation === 'multiply') {
        return calculator.multiply(a, b);
    } else if (operation === 'divide') {
        return calculator.divide(a, b);
    } else {
        // Return for non-matching cases
        return 'Invalid operation';
    }
}

// Console Outputs as per Requirement
console.log('add', performCalculation(10, 5, 'add'));
console.log('subtract', performCalculation(10, 5, 'subtract'));
console.log('multiply', performCalculation(10, 5, 'multiply'));
console.log('divide', performCalculation(10, 0, 'divide'));

// Exporting function for evaluation
module.exports = performCalculation;
