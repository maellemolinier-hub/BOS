# Actions

## Focus actuel
**Décider du sort du vieux SaaS immobilier caché dans le repo** (dashboard, API Python, pipeline DVF, app mobile) — garder, archiver ou supprimer. Bloque une vraie clarté sur ce que le site expose publiquement.

**Activer Capia pour de vrai** — brancher une clé `ANTHROPIC_API_KEY` sur Vercel pour que Capia réponde avec l'IA (Claude) au lieu du moteur scripté de secours actuellement actif par défaut.

## En cours / à faire
- [ ] Décider : garder / archiver / supprimer le SaaS immobilier résiduel (dashboard, apps/api, data/pipelines, apps/mobile)
- [ ] Ajouter `ANTHROPIC_API_KEY` (et éventuellement `CAPIA_MODEL`) dans les variables d'environnement Vercel
- [ ] Fournir une vraie vidéo de présentation (le site a un emplacement prêt, actuellement en placeholder "à venir")
- [ ] Relire le ton de Capia et des textes une fois en ligne, ajuster si besoin
- [ ] Envisager d'ouvrir une Pull Request GitHub pour merger `claude/capia-site-restructure-0xj1o1` (pas fait automatiquement — à valider avec Maëlle)
- [ ] Vérifier/corriger le conflit de route potentiel entre `(dashboard)/page.tsx` et `app/page.tsx` sur `/`

## Terminé (07/08/2026)
| Action | Résultat |
|---|---|
| Capia rendue interactive (widget flottant + page /capia dédiée) | Fait — répond via Claude si clé API présente, sinon moteur scripté basé sur les vraies offres/tarifs |
| Service "Assistants IA sur-mesure" + section "Nos IA" (Capia, Léa, Max, Nova) | Fait — humanise les IA que Maëlle crée pour ses clients |
| Espace Actualités (/articles) | Fait — 5 articles rédigés (IA, digitalisation, SEO local, identité visuelle) |
| Pages /services + /services/[slug] | Fait — les 9 offres présentées comme de vrais services (bénéfices, livrables, cible) |
| Nettoyage du Hero (résidu immobilier) + section vidéo | Fait — mockup cohérent avec l'activité réelle, emplacement vidéo prêt |
| SEO repositionné sur l'angle IA/digitalisation | Fait — metadata, JSON-LD (dont FAQPage), sitemap mis à jour |
| Bug de build Next.js 15 pré-existant sur /widget/carte | Corrigé (bloquait toute mise en production) |
| Commit + push sur `claude/capia-site-restructure-0xj1o1` | Fait — `projet-site-pro` et `BOS` |
