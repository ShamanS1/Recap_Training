const validateForm = require("../src/index");
const { JSDOM } = require("jsdom");

describe("Javascript", () => {
  test("Task-VII:should return 'Welcome' for valid credentials", () => {
    // Set up a DOM environment using JSDOM
    const dom = new JSDOM('<html><body><form id="testForm"><input id="username" value="JohnDoe"><input id="password" value="Password1!"></form></body></html>');
    global.document = dom.window.document;

    // Call the function
    const result = validateForm("JohnDoe", "Password1!");

    // Assert that the result is "Welcome"
    expect(result).toBe("Welcome");

    // Clean up, reset the global document
    global.document = undefined;
  });

  test("Task-VII:should return 'Incorrect Credentials' for invalid username", () => {
    // Set up a DOM environment using JSDOM
    const dom = new JSDOM('<html><body><form id="testForm"><input id="username" value=""><input id="password" value="Password1!"></form></body></html>');
    global.document = dom.window.document;

    // Call the function
    const result = validateForm("", "Password1!");

    // Assert that the result is "Incorrect Credentials"
    expect(result).toBe("Invalid credentials. Username cannot be empty");

    // Clean up, reset the global document
    global.document = undefined;
  });

  // Add more test cases as needed

});



//command name npx jest --outputFile=./test-results/test-results.xml
