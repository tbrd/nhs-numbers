import { generateInvalidNhsNumbers, generateValidNhsNumbers } from "./generateNhsNumber";
import { validateNhsNumber } from "./validateNhsNumber"

const validNumberExamples = generateValidNhsNumbers(20);
const invalidNumberExamples = generateInvalidNhsNumbers(20)

describe("validateNhsNumber", () => {
  describe("validating valid numbers", function () {
    validNumberExamples.forEach(function (validNumber) {
      it("returns TRUE for" + validNumber, function () {
        expect(validateNhsNumber(validNumber)).toBe(true);
      });
    });

    it("validates numbers wrapped in strings", function () {
      expect(validateNhsNumber("2983396363")).toBe(true);
    });
  });

  describe("validating invalid numbers", function () {
    invalidNumberExamples.forEach(function (invalidNumber) {
      it("returns FALSE for " + invalidNumber, function () {
        expect(validateNhsNumber(invalidNumber)).toBe(false);
      });
    });

    it("returns FALSE for the empty string", function () {
      expect(validateNhsNumber("")).toBe(false);
    });

    it("returns FALSE for null", function () {
      expect(validateNhsNumber(null)).toBe(false);
    });

    it("returns FALSE for 0", function () {
      expect(validateNhsNumber("0")).toBe(false);
    });

    it("returns FALSE for non-number strings", function () {
      expect(validateNhsNumber("a string")).toBe(false);
    });

    it("must be 10 digits long", function () {
      expect(validateNhsNumber("1")).toBe(false);
      expect(validateNhsNumber("12")).toBe(false);
      expect(validateNhsNumber("123")).toBe(false);
      expect(validateNhsNumber("1234")).toBe(false);
      expect(validateNhsNumber("12345")).toBe(false);
      expect(validateNhsNumber("123456")).toBe(false);
      expect(validateNhsNumber("1234567")).toBe(false);
      expect(validateNhsNumber("12345678")).toBe(false);
      expect(validateNhsNumber("123456789")).toBe(false);
      expect(validateNhsNumber("12345678901")).toBe(false);
      expect(validateNhsNumber("123456789012")).toBe(false);
    });
  });
});


