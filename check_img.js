import fs from 'fs';

const p = 'C:\\Users\\HQ TECH\\Downloads\\Fotos\\otavio_05.png';
if (fs.existsSync(p)) {
    console.log("File exists, size:", fs.statSync(p).size);
}
