const fs = require('fs');

function catFiles(fileNames) {
  for (const fileName of fileNames) {
    try {
      const data = fs.readFileSync(fileName, 'utf8');
      console.log(data);
    } catch (error) {
      console.error(`Fehler beim Lesen der Datei '${fileName}':`, error);
    }
  }
}

const args = process.argv.slice(2);
if (args.length > 0) {
  catFiles(args);
} else {
  console.log('Es wurden keine Dateien angegeben.');
}