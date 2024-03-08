// temperature-converter.test.js

const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./temperature-converter');

test('Converts 100C to 212F', () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
});

test('Converts 32F to 0C', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
});
