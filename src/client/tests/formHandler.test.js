const {validInput} = require('../js/formHandler');

/*test('empty string should be invalid and through alert', ()=>{
    expect(validInput("")).toBe(null);
});*/

describe("invalid empty string", () => {
    window.alert = jest.fn();
    it("Input should be invalid", () => {
        expect(validInput("")).toBe(null)
    })
})