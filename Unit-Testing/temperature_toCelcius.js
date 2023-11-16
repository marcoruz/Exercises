function toCelsius(fahrenheit) {
    // Umrechnung von Fahrenheit in Celsius: (Fahrenheit - 32) * 5/9
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius + "°C";
  }
    // Aufruf
  const temperatureInFahrenheit = 70; // Fahrenheit
  const temperatureInCelsius = toCelsius(temperatureInFahrenheit);
  console.log(temperatureInCelsius); // Ausgabe: 21,1 °C
  


  module.exports = toCelsius;
  
  
  
  
  
  