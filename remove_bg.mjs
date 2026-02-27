import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function main() {
    try {
        console.log("Loading image...");
        const inputPath = 'C:\\Users\\HQ TECH\\Downloads\\Fotos\\Michele_05.png';
        const outputPath = 'c:\\Arena-Finance\\landing-page\\public\\speakers\\michele_bg_removed.png';

        const imageBuffer = fs.readFileSync(inputPath);
        const blob = new Blob([imageBuffer], { type: 'image/png' });

        console.log("Removing background (this may take a minute and download models)...");
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
