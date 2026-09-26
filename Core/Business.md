# Business — Cap Entreprendre France (« Cap+ »)

*Dernière mise à jour : 26/09/2026*

> ⚠️ Le business, c'est **Cap Entreprendre France**. Le repo `projet-site-pro` contient aussi « ImmoExpert » (SaaS immo), qui n'est PAS le focus actuel. Seules les pages `campagnes/digitalisation-en-7-jours` y concernent Cap Entreprendre.

## Positionnement
- Agence de digitalisation + assistants IA pour artisans, commerçants et TPE/PME. Cible **nationale** (corrigé le 22/09), point de départ Grasse / PACA (06-83-05).
- Promesse de marque : **« Propriétaire, pas prisonnier »**. Le client possède 100 % de son site, de son domaine, de sa fiche et de ses données, contrairement à Solocal / Wix / Uber Eats.
- Piliers de contenu : « L'IA utile » (principal) + « Propriétaire pas prisonnier » (secondaire). Charte de voix créée le 22/09.

## Offres
| Offre | Prix | Persona |
|---|---|---|
| Pack Digitalisation (« Digitalisation en 7 jours ») | 999 € one-shot : site + domaine + fiche Google Business + SEO de base (+ réseaux, 6 mois de posts selon les versions) | Créateur pressé (0-6 mois) |
| SEO + Contenu | 390 €/mois : SEO local, fiche Google, posts / stories / shorts | Commerçant / artisan installé (« Marc ») |
| Assistants métier / agent IA vocal | Sur devis, ~2 500 € (analyse préalable). Priorité de diffusion depuis le 11/09 | Dirigeant·e TPE/PME (« Julie »), agents immo, marchands de biens |
| Capia Commande (resto) | 2 990 € (ou 4x) + 199 €/mois de maintenance. IA vocale qui prend les commandes et les imprime en cuisine, face à Uber Eats | Restaurateurs |
| Maintenance | 99 €/mois et 199 €/mois (prix à confirmer) | Clients livrés |

## Organisation — l'équipe d'assistants (organigramme)
23 assistants + BOS (coordination) + Ops (maintenance client, ajouté le 22/09), répartis en 7 pôles :
- **Acquisition :** Scout (sourcing), **Capia** (prospection vocale, opérationnelle), Quali (qualification)
- **Production :** Archi (architecture), Léo (dev sites / Lovable), Lina (UX), Sacha (SEO local), Mia (réseaux sociaux, tourne réellement sur Make + Gemini + Buffer depuis juillet), Théo (rédaction)
- **Relation client :** Iris (infos manquantes), Nina (emails), Sam (SAV), Ruby (avis)
- **Fidélisation :** Bilan (bilans mensuels), Timo (parrainage)
- **Stratégie :** Radar (veille IA), Scope (concurrence), Sage (conseil)
- **Pilotage :** BOS
- **Support & maintenance :** Archive (doc), Sentinel (fiabilité / sécurité), Lex (RGPD), Compta
- Statut au 22/09 : Capia et BOS opérationnels ; Léo, Sacha, Mia et Théo ont leur prompt prêt ; tous les autres sont « à traiter ».

## Outils & infrastructure
- **Cerveau Central** (Google Sheet `Cap-Entreprendre-Cerveau-Central-1`) : mémoire de tous les assistants. Make y lit et y écrit. Onglets : CAPIA Inbox, Journal agents, CRM prospects, Audits, Devis, Onboarding, Paiements, Avis, Tâches & validations, KPI.
- **Site public :** Lovable, projet « Stellar Visibility » (publié, one-page style sci-fi avec interface d'assistant vocal, dernière modif 25/09). Blog hébergé hors Lovable (3 articles).
- **Make :** scénarios « CAPIA cerveau Gemini », « Prospection extraction artisans/commerçants », « Recherche Google Places par métier », « CAPIA - Résultat appel vocal » (branché sur HubSpot + Slack #prospection).
- **HubSpot :** 658 contacts importés le 17/09, 0 travaillé.
- **Voix :** Easybell (trunk SIP) + ElevenLabs ; agent Vapi Capia prêt sur le fond, compte Vapi pas encore connecté.
- **Paiement / signature :** Stripe (connexion à finaliser), DocuSign (connecté, template à créer).
- **Artifacts Claude :** Pilotage (dashboard avec base de données), Équipe (chat avec chaque assistant), Espace Client (portail démo), Capia Commande (flyer), Débrief, Agent Vapi, Argumentaire, Entonnoir, contenus (calendrier 15 j, vidéos, blog).

## Prospection
- Liste assainie CAPIA : 57 prospects artisans BTP sans site ni fiche Google (SIRENE + Places), 06 en priorité.
- Grande base « Artisans et commerçants sans site web (par département) ».
- Script vocal CAPIA V1 (3 personas) du 23/09.
- **Rôle de Capia (précisé par Maëlle le 26/09) : closeuse.** Découverte des problèmes → solution adaptée → objections isolées et traitées → closing → lien de paiement + plaquette personnalisée → RDV de lancement avec Maëlle après l'achat.
- **Chaîne après l'appel (état au 26/09) :** le webhook Make « CAPIA - Résultat appel vocal » crée seulement un contact HubSpot et un message Slack. L'envoi automatique du lien de paiement et de la plaquette n'existe pas encore (à construire ; Stripe à finaliser).

## Finances
- CA réel encaissé : **0 €** (tableau de pilotage du 22/09 ; aucune commande enregistrée).
- Pipeline dans le Cerveau Central : 1 pack en cours (Boulangerie Martin, exemple ?), 1 devis assistants de 1 490 € (Plomberie Sud), 1 prospect contacté (SARL Bâti Azur). Ces lignes datent du 01/07 et ressemblent à des exemples : à vérifier.
- Projections 3 ans (scénario normal) : A1 130 k€, A2 299 k€, A3 523 k€.
