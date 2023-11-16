const fs = require("fs");

var args = process.argv.slice(2);

const filePath = args[0];

if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(data);
} else {
    console.error(`Die Datei ${filePath} ist nicht vorhanden.`);
    process.exit(2);
}