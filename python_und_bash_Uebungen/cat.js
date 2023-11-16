const fs = require('fs');

//
const filename = process.argv[2];

try{
    const data = fs.readFileSync(filename,'utf8');
    console.log(data);
} catch (error){
    console.error('Error reading File ${filename}:',error);
}