# Journal

## 26/09/2026
- Installé le skill `find-skills` dans BOS et dans projet-site-pro.
- Première reco de skills trop orientée ImmoExpert (le repo projet-site-pro contient surtout ce SaaS). Maëlle a recadré : l'activité, c'est Cap Entreprendre France.
- Scan complet : Drive (Cerveau Central, personas, 3 offres, projections, script CAPIA, liste assainie), artifacts des sessions précédentes (Équipe, Pilotage, Débrief, Espace Client, Agent Vapi, Capia Commande), Lovable (Stellar Visibility = site public).
- Core/ rempli pour la première fois (Profile, Business, Goal, Diagnosis, Actions).
- Relevé : mot de passe SIP Easybell en clair dans un Google Doc, à changer.

## 26/09/2026 (suite)
- Skills installés dans BOS : Vapi (8), ElevenLabs (agents, text-to-speech, speech-to-text), skill-creator, mcp-builder, seo-local, seo-maps, prospecting, cold-email, copywriting, offers, product-marketing.
- Capia existe déjà sur ElevenLabs (« Capia (vocal) - Prospection 06/05 »), branchée sur la ligne Easybell en sortant, avec le webhook Make vers le CRM. Pas besoin de Vapi.
- Prompt de Capia aligné sur le script V1 du 23/09 : 3 personas, objectif RDV de 15 min avec Maëlle, aucune vente ni lien de paiement pendant l'appel, ouverture raccourcie qui annonce l'IA, variables {{nom_entreprise}}/{{ville}}/{{metier}}. Les anciennes versions restent dans l'historique ElevenLabs.
- Lancement de la campagne d'appels non fait : Maëlle garde la main sur le déclenchement.
- Correction de Maëlle : Capia doit closer, pas seulement caler un RDV. Prompt réécrit (découverte → solutions → objections isolées → closing → lien de paiement + plaquette → RDV de lancement après achat). Catalogue d'offres de l'ancienne version de Capia rétabli. Règle ajoutée dans CLAUDE.md.
- Constat : aucun scénario Make n'envoie aujourd'hui le lien de paiement ni la plaquette après l'appel.
- Maëlle confirme les prix de la version Capia. Paiement en 3 ou 4 fois disponible (Stripe/Klarna). Capia connaît maintenant les fonctionnalités de chaque offre, dont Capia Resto (imprimante, bon de livraison) et Capia Entreprise (accueil paramétrable). Catalogue et liens Stripe consignés dans Core/Offres.md.
