# Journal

## 2026-11-05
- Reprise du site du Vesper (client). Constat : agenda vide (Wyylde non branché), quasi zéro trafic.
- Décision : créer un espace /admin pour que le gérant colle ses flyers dans l'agenda. Construction lancée via Lovable.
- À suivre : créer le compte admin du client (e-mail à récupérer), puis traiter le trafic (domaine, fiche Google, SEO local).
- Nouveau projet Lovable « Vesper – site officiel » (b1e58e72…) : reproduction stricte de la maquette vesper-cannes-maquette.maelle-molinier.chatgpt.site, vidéo hero fournie, logo chapeau, flyers à la place de l'encadré Wyylde, 17 langues, indexation SEO, responsive. Décision Maëlle : menu burger sur mobile, menu maquette sur desktop. Compte Gaethan à créer seulement après validation finale.
- 19h50 : site « Vesper – site officiel » terminé en préversion (hero identique maquette, 17 langues, flyers récurrents, indexation vérifiée : HTML brut fr/ru, robots, sitemap 68 pages, hreflang, JSON-LD). Erreur BOS : mesures logo 53 % prises sur capture en mode ordinateur → corrigé en suivant la maquette. En attente : validation Maëlle sur téléphone, décision transfert vs forfait, captures DNS o2switch de Gaethan, coordonnées GPS à confirmer.

## 2026-11-08
- Décision : Gaethan (à l'aise en informatique) reprend et héberge lui-même le site hors Lovable. Livrable : zip autonome (médias embarqués, sans dépendances Lovable) + supabase-setup.sql + DEPLOIEMENT.md (Vercel + Supabase, domaine o2switch). Export portable demandé à Lovable, vérification locale avant envoi.
- À faire Maëlle : facturer la création (vente unique), envoyer zip + message à Gaethan.
- 20h20 : zip autonome livré à Maëlle (/home/user/vesper-site.zip, 143 fichiers, 5 Mo). Vérifié localement : tsc 0 erreur, eslint 0, 23/23 tests, build Vercel OK, build node-server OK et rendu /fr /ru /ar /privatisation /admin /robots.txt /sitemap.xml (68 URL) + vidéo OK. Non testé : supabase-setup.sql sur un Supabase vierge. Flyers existants non repris (base neuve).
