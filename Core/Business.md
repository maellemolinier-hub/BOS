# Business

## Identité
- **Nom** : Cap Entreprendre France
- **Activité** : Agence de communication, studio graphique et digitalisation pour entrepreneurs, artisans et PME. Basée à Grasse (06130), clients dans toute la France.
- **Site** : https://cap-entreprendre-france.fr — repo `maellemolinier-hub/projet-site-pro` (monorepo Next.js 15 / Turborepo, historiquement un template immobilier "ImmoExpert" rebrandé).
- **Différenciateur** : positionnement IA — Capia (assistante IA du site) + service "Assistants IA sur-mesure" pour les clients. C'est l'angle qui la distingue des agences de com classiques.

## Offre (Core/Business.md — Services)
9 services packagés (voir `apps/web/lib/offers.ts`, source unique réutilisée par le site) :
identité visuelle, sites web intelligents, assistants IA sur-mesure, communication digitale,
stratégie de marque, design graphique, refonte de marque, accompagnement entrepreneurial,
conseils & formation.

## Tarifs
3 forfaits (voir `apps/web/lib/offers.ts` — pricingPlans) :
- Essentiel : 242 €/mois (annuel) ou 290 €/mois
- Business (le plus vendu) : 492 €/mois ou 590 €/mois — inclut désormais un assistant IA personnalisé
- Premium : 1075 €/mois ou 1290 €/mois — inclut un assistant IA avancé multi-canal
- Sur-mesure réseaux/promoteurs : à partir de 3 500 €/an (page /contact-entreprise)

## Outils
- Site : Next.js 15, Tailwind, Vercel (vercel.json présent), Prisma/Supabase pour l'auth (NextAuth), Stripe pour le paiement des forfaits.
- Repo GitHub : `maellemolinier-hub/projet-site-pro` (site public) + `maellemolinier-hub/BOS` (ce système).

## Points de vigilance identifiés (à trancher avec Maëlle, pas d'action unilatérale)
- Le repo contient un ancien produit SaaS immobilier complet et non lié à l'activité actuelle
  (dashboard "Prospection IA"/"Carte des prix"/formation "Expert Valeur Vénale", API Python,
  pipeline de données DVF, app mobile Expo, Stripe/NextAuth pour ce SaaS). Non touché pour
  l'instant — décision à prendre : garder, archiver ou supprimer.
- Le groupe de routes `(dashboard)` a un `page.tsx` qui semble entrer en conflit avec la page
  d'accueil marketing (`app/page.tsx`) sur la route `/` — bug pré-existant, pas encore vérifié
  à fond ni corrigé (hors périmètre de la restructuration demandée).
