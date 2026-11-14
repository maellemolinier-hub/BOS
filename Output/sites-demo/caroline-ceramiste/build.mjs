import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "table": "https://www.figma.com/api/mcp/asset/71584980-417f-4597-ac78-cfbfb6cd5a9c.png",
 "hands": "https://www.figma.com/api/mcp/asset/0f261fea-85f4-4947-81ef-9ff3019d7395.png",
 "shop": "https://www.figma.com/api/mcp/asset/850ef558-f7ad-4e26-9df1-230afee9c2e1.png"
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
