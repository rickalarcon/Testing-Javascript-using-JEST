
const substract = require('./subtract')

test('subtract two numbers',() =>{
	expect(substract(1,2)).toBe(-1);
})