
const cloneArray = require("./cloneArray.js");

test("properly clones array",() =>{
	const array = [1,2,3]
	expect(cloneArray(array)).toEqual(array)// this check value, not mem loc
 	expect(cloneArray(array)).not.toBe(array)
})