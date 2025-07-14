
const  validateForm  = require('../src/index');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

// Initialize JSDOM
const { document } = new JSDOM(html).window;
describe('User Listing Form', () => {
    test('Form contains fields for First Name, Last Name, Email Address, Date of Birth, Gender, Country, and Interests', () => {
        const firstNameInput = document.querySelector('input[name="firstName"]');
        const lastNameInput = document.querySelector('input[name="lastName"]');
        const emailAddressInput = document.querySelector('input[name="emailAddress"]');
        const dateOfBirthInput = document.querySelector('input[name="dateOfBirth"]');
        const genderInputs = document.querySelectorAll('input[name="gender"]');
        const countrySelect = document.querySelector('select[name="country"]');
        const interest1Checkbox = document.querySelector('input[name="interest1"]');
        const interest2Checkbox = document.querySelector('input[name="interest2"]');
        const interest3Checkbox = document.querySelector('input[name="interest3"]');
        
        expect(firstNameInput).not.toBeNull();
        expect(lastNameInput).not.toBeNull();
        expect(emailAddressInput).not.toBeNull();
        expect(dateOfBirthInput).not.toBeNull();
        expect(genderInputs.length).toBe(2); // Assuming there are two radio buttons for gender
        expect(countrySelect).not.toBeNull();
        expect(interest1Checkbox).not.toBeNull();
        expect(interest2Checkbox).not.toBeNull();
        expect(interest3Checkbox).not.toBeNull();
    });

  // Check if submit button is present
  test('Form has a submit button', () => {
      const submitButton = document.querySelector('button[type="button"]');
      expect(submitButton).not.toBeNull();
  });


  test('Alert message is displayed for missing fields', () => {
    // Mock FormData object
    const formData = new Map([
        ['firstName', ''],
        ['lastName', ''],
        ['emailAddress', 'test@example.com'],
        ['dateOfBirth', '1990-01-01'],
        ['gender', 'Male'],
        ['country', 'India'],
        ['interest1', 'on'],
        ['interest2', ''],
        ['interest3', 'on']
    ]);

    // Mock alertBox element
    const alertBox = document.createElement('div');
    alertBox.id = 'alertBox';
    document.body.appendChild(alertBox);

    // Call the function
    var response = validateForm(formData);

    // Check if alert message is displayed
    expect(response).toBe('Please fill in the following fields: firstName, lastName, interest2. ');
});

test('Success message is displayed for missing fields', () => {
  // Mock FormData object
  const formData = new Map([
    ['firstName', 'AB'],
    ['lastName', 'AB'],
    ['emailAddress', 'test@example.com'],
    ['dateOfBirth', '1990-01-01'],
    ['gender', 'Male'],
    ['country', 'India'],
    ['interest1', 'on'],
    ['interest2', 'on'],
    ['interest3', 'on']
]);

// Mock alertBox element
const alertBox = document.createElement('div');
alertBox.id = 'alertBox';
document.body.appendChild(alertBox);

// Call the function
var response = validateForm(formData);

// Check if alert message is displayed
expect(response).toBe('Property details: firstName: AB, lastName: AB, emailAddress: test@example.com, dateOfBirth: 1990-01-01, gender: Male, country: India, interest1: on, interest2: on, interest3: on');
});
});









