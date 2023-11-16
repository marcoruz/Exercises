function istPalindrom(wort) {
    // Leerzeichen entfernen und Wort in Kleinbuchstaben umwandeln
    wort = wort.toLowerCase().replace(/\s/g, '');
  
    // Wort umdrehen und mit dem ursprünglichen Wort vergleichen
    return wort === wort.split('').reverse().join('');
  }
  
  // Beispielaufruf
  var wort = "Anna";
  console.log(istPalindrom(wort)); // Output: true