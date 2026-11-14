import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "pom": "https://www.figma.com/api/mcp/asset/a258b4f1-f021-4684-bad7-88caf6c519b2.png",
 "bath": "https://www.figma.com/api/mcp/asset/e9635dab-f3d5-4491-bcc0-b14eef683688.png",
 "dry": "https://www.figma.com/api/mcp/asset/605d9ecb-5429-43b8-9052-f37aff81fc5a.png"
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
