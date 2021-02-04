const {sum,extra} = require('./sum');

test("properly adds two numbers",() =>{
	expect(sum(1,2)).toBe(3);
})

test("properly Multiply two numbers",() =>{
		expect(extra(1,2)).toBe(2);
})