"use strict";
exports.__esModule = true;
exports.validateNhsNumber = void 0;
function validateNhsNumber(nhsNumber) {
    if (nhsNumber === undefined ||
        nhsNumber === null ||
        isNaN(Number(nhsNumber))) {
        return false;
    }
    var nhsNumberAsArray = nhsNumber.split('');
    var remainder = nhsNumberAsArray.slice(0, 9)
        .map(multiplyByPosition)
        .reduce(addTogether, 0) % 11;
    var checkDigit = 11 - remainder;
    if (checkDigit === 11) {
        checkDigit = 0;
    }
    var providedCheckDigit = nhsNumberAsArray[9];
    return checkDigit === Number(providedCheckDigit);
}
exports.validateNhsNumber = validateNhsNumber;
function multiplyByPosition(digit, index) {
    return Number(digit) * (11 - (index + 1));
}
function addTogether(previousValue, currentValue) {
    return previousValue + currentValue;
}
//# sourceMappingURL=validateNhsNumber.js.map