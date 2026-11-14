import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "gown": "https://www.figma.com/api/mcp/asset/c1da9c7c-d9ee-4f5b-a7ed-17d7bcef067b.png",
 "costumes": "https://www.figma.com/api/mcp/asset/87b1e646-1ca1-4a41-bab6-7615cbb9222a.png",
 "sewing": "https://www.figma.com/api/mcp/asset/bce3f06a-8487-4a17-beef-d9b34898339c.png"
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
