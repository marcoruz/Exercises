const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware für JSON-Anfragen

// Routen-Handler für POST-Anfragen an /restaurant
app.post('/restaurant', (req, res) => {
  const restaurantData = req.body; // Die Daten aus der POST-Anfrage
  // Hier kannst du den Code hinzufügen, um die Daten in die Datenbank einzufügen
  // und eine Antwort an den Client zu senden, je nachdem, ob der Vorgang erfolgreich war oder nicht
});

app.listen(port, () => {
  console.log(`Server gestartet auf Port ${port}.`);
});
