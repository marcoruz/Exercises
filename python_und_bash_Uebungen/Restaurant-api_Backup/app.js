const express = require('express');
const mongoose = require('mongoose');
const restaurant  = require('./DBAnbindung')

require('./connect')
const app = express();

const port = 3000;
const hostname = 'localhost';

app.use(express.json());












app.get('/restaurants', (_, res) => {
    restaurant.find()
    .then(
        (restaurants)=>{

            res.send(restaurants);

        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
});

app.post('/restaurant', (req, res) => {
    let  data = {
        "name": req.body.name ,
        "adresse": req.body.adresse ,
        "kategorie": req.body.kategorie ,
       }
        restau = new restaurant(data);
        restau.save()
            .then(
                (savedrestaurant)=>{
                    res.send(`restaurant saved \n Name : ${req.body.name}\n Adresse : ${req.body.adresse} \n Kategorie : ${req.body.kategorie}`)
                }
            )
            .catch(
                (err)=>{
                    res.send(err)
                }
            )
});

app.get('/restaurant/:name', (req, res) => {
    // variable fuer suchergebnis anlegen (undefined)
    restaurant.findOne({ name:req.params.name})
    .then(
        (restauranta)=>{
            
            res.send(restauranta);
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
});

// // * Restaurant aktualisieren mit Löschen
// app.put('/restaurant/:name', (req, res) => {
//     // prüfe, ob restaurant in liste vorhanden ist
//     if (getIndex(req.params.name) != -1) {
//         const r = req.body;
//         if (r.name && r.adresse && r.kategorie) {
//             // löschen & neu einfügen
//             delRestaurant(r.name);
//             restaurants.push(r);
//             // neues Restaurant zurückgeben
//             res.send(r); 
//             console.log(`Aktualisiere: ${req.params.name}: ${r.name}, ${r.adresse}, ${r.kategorie}.`);
//         } else {
//             res.status(400);
//             res.send("Daten unvollständig, nicht aktualisiert.");
//         }
//     } else { // restaurant nicht existent
//         res.status(404);
//         res.send("Restaurant nicht gefunden.")
//     }
// });

// * Restaurant aktualisieren mit Löschen
app.put('/restaurant/:name', (req, res) => {
    // prüfe, ob restaurant in liste vorhanden ist
     let newdata = {
        "name": req.body.name ,
        "adresse": req.body.adresse ,
        "kategorie": req.body.kategorie ,
       }
        
      restaurant.findOneAndUpdate({name:req.params.name}, newdata)
            .then(
                (savedrestaurant)=>{
                    res.send(`restaurant saved \n Name : ${req.body.name}\n Adresse : ${req.body.adresse} \n Kategorie : ${req.body.kategorie}`)
                }
            )
            .catch(
                (err)=>{
                    res.send(err)
                }
            )
});

app.delete('/restaurant/:name', (req, res) => {
    restaurant.findOneAndDelete({ name:req.params.name})
    .then(
        (deletedrestaurant)=>{
            
            res.send("restaurant deleted");
        })
        .catch(
            (err)=>{
                res.send(err)
            }
        )
});


app.listen(port, hostname, () => {
    console.log(`Server gestartet ${hostname}:${port}.`);
});