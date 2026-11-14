import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "chair": "https://www.figma.com/api/mcp/asset/c87dd41b-7ee2-43a5-94a2-e33502be2541.png",
 "hands": "https://www.figma.com/api/mcp/asset/580a61f4-0411-460e-b572-8b3e3909f11c.png",
 "curtains": "https://www.figma.com/api/mcp/asset/45db23d0-3594-42c7-8c7c-c8c12a8c2f6d.png"
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
