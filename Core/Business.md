# Business

## Entreprise
- **Nom :** Cap Entreprendre France — agence web basée à Grasse (PACA)
- **Site :** https://cap-entreprendre-france.fr

## Persona
- Artisans et TPE à Grasse et en PACA, souvent sans site web ni fiche Google optimisée.
- Ne comprennent pas le web, veulent que « quelqu'un s'en occupe ».

## Offres
### Priorités actuelles (dites par l'entrepreneure, 11/11/2026)
1. **Sites internet** — obtenir des commandes de sites.
2. **Capia Resto** — assistant IA vocal pour restaurants. Détails à compléter (fonctions, prix, état : démo prête ?).

### Offre secondaire (pas le focus aujourd'hui)
- **« Digitalisation en 7 jours »** : site web sur-mesure + fiche Google Business optimisée.
- Coût unique, délai garanti (7 jours).
- Déroulé : J1 échange 30 min → J2 rédaction → J3 design → J4 intégration → J5 fiche Google → J6 relecture → J7 mise en ligne.
- Prix : à confirmer avec l'entrepreneure.

## Marketing / Prospection
- Pages de campagne SEO « Digitalisation en 7 jours » (une page par jour).
- Scénario Make existant : import Google Sheet → Brevo « prospection sans site » (cold email vers entreprises sans site).
- Outil envisagé : Sellbird (ex-Harvey), open source AGPL-3.0, prospection cold email automatisée. Nécessite un ordi allumé ou un serveur + abonnement Claude + boîte mail sur domaine secondaire. Version hébergée sellbird.ai en accès anticipé.

## Système de prospection actuel (constaté le 11/11/2026 dans Google Sheets + Gmail)
- Agent automatisé (cold email Gmail, sous le nom « Maëlle JEAN / Cap Entreprendre France ») : onglet « CEF — Collecte nationale » du sheet « Prospection - Artisans et commerçants sans site web ». Objectif affiché 450 envois.
- Cible actuelle des envois : département 01 (Ain : Buellas, Cerdon, Certines, Cessy, Ceyzériat, Chalamont…).
- Volume : ~20 premiers envois + ~12 relances en une semaine (4–11/11). Beaucoup de prospects bloqués « email manquant ».
- Emails HTML soignés, CTA = créneau Google Agenda 15 min (https://calendar.app.google/HvZE8LtaQg5Fwyrv9).
- Résultat au 11/11 : aucune réponse prospect visible dans Gmail. 1 bounce.
- Listes avec téléphones, jamais appelées (« A contacter ») : « Prospects SITE INTERNET - BTP, Coiffeurs, Jardiniers » (~500, national) et « CAPIA — Liste assainie » (artisans 06 + 83, avec téléphones). « Prospects AGENT VOCAL CAPIA » est vide.
- Fiche Google Business Cap Entreprendre : 0 vue en octobre 2026.

## Outils
- Site : Next.js (monorepo `projet-site-pro`), déployé sur Vercel.
- Make, Brevo, Google Sheets.

## Finances
- À compléter (nb clients, CA actuel).
