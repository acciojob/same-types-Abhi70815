function isSameType(value1, value2) {
    // Check if both values are NaN
    if (typeof value1 === 'number' && typeof value2 === 'number' && isNaN(value1) && isNaN(value2)) {
        return true;
    }
    
    // Compare types using typeof operator
    return typeof value1 === typeof value2;
}

// Do not change the code below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert the prompt inputs to their correct types
value1 = parseFloat(value1);
value2 = parseFloat(value2);

// If parseFloat results in NaN and the original values are not empty strings, keep them as strings
if (isNaN(value1) && value1 !== "") {
    value1 = prompt("Enter Start of the Range.");
}
if (isNaN(value2) && value2 !== "") {
    value2 = prompt("Enter End Of the Range.");
}

alert(isSameType(value1, value2));
