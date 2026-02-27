import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function main() {
    try {
        console.log("Loading Otávio's new image (otavio_05)...");
        const inputPath = 'C:\\Users\\HQ TECH\\Downloads\\Fotos\\otavio_05.png';
        const outputPath = 'c:\\Arena-Finance\\landing-page\\public\\images\\otavio_hero_5_cutout.png';

        const imageBuffer = fs.readFileSync(inputPath);
        const blob = new Blob([imageBuffer], { type: 'image/png' });

        console.log("Removing background (this may take a minute)...");
        const resultBlob = await removeBackground(blob);

        console.log("Saving image...");
        const arrayBuffer = await resultBlob.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        fs.writeFileSync(outputPath, buffer);
        console.log("Done! Saved to", outputPath);
    } catch (error) {
        console.error("Error during background removal:", error);
    }
}
main();
