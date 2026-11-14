import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "shirts": "https://www.figma.com/api/mcp/asset/56f86de4-5e80-4854-8025-d4683f86c38d.png"
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
