import sharp from 'sharp';
import fs from 'fs';
// Télécharge les photos en haute définition au moment de la mise en ligne.
// En cas d'échec, la version basse définition déjà présente dans public/img est conservée.
const imgs = {
 "stones": "https://www.figma.com/api/mcp/asset/77883913-c20f-4496-bc10-1af9b8de09b6.png",
 "wrist": "https://www.figma.com/api/mcp/asset/b5de701f-edb3-45a1-8302-512cae496ab3.png",
 "shop": "https://www.figma.com/api/mcp/asset/2057eb03-7bdf-469c-bf37-0f8d5335ff4a.png"
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
