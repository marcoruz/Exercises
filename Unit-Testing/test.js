const { expect } = require('chai');
const toCelsius = require('./temperature_toCelcius.js');

describe('toCelsius function', () => {
  it('convert positive Fahrenheit to Celsius', () => {
    const temperatureInFahrenheit = 68;
    const temperatureInCelsius = toCelsius(temperatureInFahrenheit);
    expect(temperatureInCelsius).to.equal('20°C');
  });

  it('convert negative Fahrenheit to Celsius', () => {
    const temperatureInFahrenheit = -4;
    const temperatureInCelsius = toCelsius(temperatureInFahrenheit);
    expect(temperatureInCelsius).to.equal('-20°C');
  });

  it('should convert 0 Fahrenheit to Celsius', () => {
    const temperatureInFahrenheit = 0;
    const temperatureInCelsius = toCelsius(temperatureInFahrenheit);
    expect(temperatureInCelsius).to.equal('-17.77777777777778°C');
  });
});

//to_Fahrenheit_______________________________________________________________________


const toFahrenheit = require('./temperature_toFahrenheit.js');

describe('toFahrenheit function', () => {
  it('convert positive Celsius to Fahrenheit', () => {
    const temperatureInCelsius = 20;
    const temperatureInFahrenheit = toFahrenheit(temperatureInCelsius);
    expect(temperatureInFahrenheit).to.equal('68°F');
  });

  it('convert negative Celsius to Fahrenheit', () => {
    const temperatureInCelsius = -4;
    const temperatureInFahrenheit = toFahrenheit(temperatureInCelsius);
    expect(temperatureInFahrenheit).to.equal('24.8°F');
  });

  it('should convert 0 Celsius to Fahrenheit', () => {
    const temperatureInCelsius = 0;
    const temperatureInFahrenheit = toFahrenheit(temperatureInCelsius);
    expect(temperatureInFahrenheit).to.equal('32°F');
  });
});