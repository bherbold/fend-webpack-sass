const validInput = require('../js/formHandler');

test('empty string should be invalid and through alert', ()=>{
    expect(validInput("")).toBe(null);
});