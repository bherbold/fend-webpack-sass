const {checkForName} = require('../js/nameChecker');

describe("name from list", () => {
    window.alert = jest.fn();
    it("should return the name", () => {

        expect(checkForName("Picard")).toBe("Picard")
    })
})