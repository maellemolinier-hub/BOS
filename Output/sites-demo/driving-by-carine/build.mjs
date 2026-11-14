import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "driver": "https://www.figma.com/api/mcp/asset/9e17fbec-907e-4801-904b-041d6965220c.png",
 "road": "https://www.figma.com/api/mcp/asset/ab0d155b-862f-4803-8bee-3e69509b7b25.png",
 "lesson": "https://www.figma.com/api/mcp/asset/96383977-8ff1-42da-9070-384c0fde37be.png"
};
fs.mkdirSync('public/img', { recursive: true });
for (const [name, url] of Object.entries(imgs)) {
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const buf = Buffer.from(await r.arrayBuffer());
    await sharp(buf).resize({ width: 1700, withoutEnlargement: true }).jpeg({ quality: 80 }).toFile('public/img/' + name + '.jpg');
    console.log('ok', name, buf.length);
  } catch (e) { console.log('ECHEC', name, String(e)); }
}
