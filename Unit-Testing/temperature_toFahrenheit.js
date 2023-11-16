function toFahrenheit(Celscius) {
    // Umrechnung von Celsius in Fahrenheit: (Fahrenheit - 32) * 5/9
    const Fahrenheit = (Celscius * 9/5) + 32;
    return Fahrenheit + "°F";
  }
    // Aufruf
  const temperatureInCelsius = -4; // Celscius
  const temperatureInFahrenheit = toFahrenheit(temperatureInCelsius);
  console.log(temperatureInFahrenheit); // Ausgabe: 24.8 °F
  


  module.exports = toFahrenheit;
  
  
  
  
  
  