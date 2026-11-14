import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "night": "https://www.figma.com/api/mcp/asset/73447229-69d4-4945-84e0-947a07fee0a6.png"
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
