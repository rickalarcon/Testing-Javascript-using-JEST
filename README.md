# Testing Javascript using JEST

JEST is a open source javascript testing framework released by Facebook

# Project Setup

1) npm init -y
2) npm install --save-dev jest
3) in package.json add: "scripts" : {"test" : jest}
4) Optional: if testing multiple files, modify package.json to:
		"scripts" : {"test" : "jest --coverage"}


# To run test

1) create new test files: my_file.test.js
2) Syntax to test JEST: test("test name",()=>{expect(...).toBe(...)})
3) in the console: npm run test