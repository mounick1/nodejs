// Function to add two numerical inputs
function add(a, b) {
    return a + b;
}

// Function to return the difference
function subtract(a, b) {
    return a - b;
}

// Function to return the product
function multiply(a, b) {
    return a * b;
}

// Function to return the quotient with zero-divisor check
function divide(a, b) {
    if (b === 0) {
        return 'Division by zero is not allowed';
    }
    return a / b;
}

// Exporting functions to be used in other modules
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
