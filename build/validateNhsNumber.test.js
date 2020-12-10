"use strict";
exports.__esModule = true;
var validateNhsNumber_1 = require("./validateNhsNumber");
var nhsSamples = generateSampleNumbers();
var validNumberExamples = nhsSamples[0];
var invalidNumberExamples = nhsSamples[1];
describe("validating valid numbers", function () {
    validNumberExamples.forEach(function (validNumber) {
        it("returns TRUE for" + validNumber, function () {
            expect(validateNhsNumber_1.validateNhsNumber(validNumber)).toBe(true);
        });
    });
    it("validates numbers wrapped in strings", function () {
        expect(validateNhsNumber_1.validateNhsNumber("2983396363")).toBe(true);
    });
});
describe("validating invalid numbers", function () {
    invalidNumberExamples.forEach(function (invalidNumber) {
        it("returns FALSE for " + invalidNumber, function () {
            expect(validateNhsNumber_1.validateNhsNumber(invalidNumber)).toBe(false);
        });
    });
    it("returns FALSE for the empty string", function () {
        expect(validateNhsNumber_1.validateNhsNumber("")).toBe(false);
    });
    it("returns FALSE for null", function () {
        expect(validateNhsNumber_1.validateNhsNumber(null)).toBe(false);
    });
    it("returns FALSE for 0", function () {
        expect(validateNhsNumber_1.validateNhsNumber("0")).toBe(false);
    });
    it("returns FALSE for non-number strings", function () {
        expect(validateNhsNumber_1.validateNhsNumber("a string")).toBe(false);
    });
    it("must be 10 digits long", function () {
        expect(validateNhsNumber_1.validateNhsNumber("1")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("12")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("123")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("1234")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("12345")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("123456")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("1234567")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("12345678")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("123456789")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("12345678901")).toBe(false);
        expect(validateNhsNumber_1.validateNhsNumber("123456789012")).toBe(false);
    });
});
function randomSlice(array, sliceLength) {
    return shuffle(array).slice(0, sliceLength);
}
function shuffle(array) {
    var currentIndex = array.length;
    while (0 !== currentIndex) {
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        var temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateSampleNumbers() {
    var validNumberExamples = [];
    var invalidNumberExamples = [];
    var ZERO_TO_NINE = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var numbersToSample = 2;
    randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number1) {
        randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number2) {
            randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number3) {
                randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number4) {
                    randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number5) {
                        randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number6) {
                            randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number7) {
                                randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number8) {
                                    randomSlice(ZERO_TO_NINE, numbersToSample).forEach(function (number9) {
                                        var multipliedTotal = number1 * 10 + number2 * 9 + number3 * 8 + number4 * 7 + number5 * 6 + number6 * 5 + number7 * 4 + number8 * 3 + number9 * 2;
                                        var remainder = multipliedTotal % 11;
                                        var checkDigit = 11 - remainder;
                                        if (checkDigit === 11) {
                                            checkDigit = 0;
                                        }
                                        if (checkDigit === 10) {
                                            invalidNumberExamples.push([number1, number2, number3, number4, number5, number6, number7, number8, number9, getRandomInt(0, 10)].join(''));
                                        }
                                        else {
                                            validNumberExamples.push([number1, number2, number3, number4, number5, number6, number7, number8, number9, checkDigit].join(''));
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    console.log('Sample data generated:');
    console.log(validNumberExamples.length + ' valid samples');
    console.log(invalidNumberExamples.length + ' invalid samples');
    return [validNumberExamples, invalidNumberExamples];
}
//# sourceMappingURL=validateNhsNumber.test.js.map