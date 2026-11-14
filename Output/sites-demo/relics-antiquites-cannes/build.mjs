import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "shop": "https://www.figma.com/api/mcp/asset/e94393ac-daf4-4b97-aeb0-c9865bf40576.png",
 "still": "https://www.figma.com/api/mcp/asset/4cd5bfb4-0049-459b-baaa-23f5659f7ce7.png",
 "delivery": "https://www.figma.com/api/mcp/asset/03db7ead-081d-4c88-b646-5e07a407fa41.png"
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
