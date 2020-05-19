const check = require('../js/nameChecker');

describe("name from list", () => {
    window.alert = jest.fn();
    it("should return the name", () => {

        expect(check.checkForName("Picard")).toBe("Picard")
    })
})