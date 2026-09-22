# Skill: Omniroute

Point d'entrée unique et invisible de BOS. À **chaque** interaction, avant tout le reste, `omniroute` décide où envoyer l'entrepreneur : `onboard` (premier contact), `organize` (le plan doit être rafraîchi), la continuation directe du focus en cours (rien n'a changé), ou un diagnostic complet suivi du skill spécialisé adapté (`find`, `traffic`, `offer`, `funnel`, `mindset`, `chase`, `digestion`). Aucune autre logique de routing n'existe dans BOS — tout passe par ici.

## Objectif

Répondre, en un seul passage silencieux, à « qu'est-ce qu'on fait maintenant ? » et atterrir sur UNE destination exécutable. Si le chemin passe par un diagnostic complet : phase identifiée, sous-problème nommé, fichiers Core à jour, routing vers le bon skill. L'entrepreneur ne voit jamais le routage — il voit juste BOS qui sait déjà quoi faire.

## Croyances

- **Un seul routeur.** Toute décision « quel skill maintenant » passe par `omniroute`. CLAUDE.md ne tranche jamais lui-même le routing — il délègue systématiquement ici.
- **L'ordre de priorité est fixe : Setup > Organize > Continuation > Diagnostic complet.** Ne jamais diagnostiquer un business dont le profil n'existe pas. Ne jamais rafraîchir un plan qui n'a pas bougé. Ne jamais lancer un diagnostic complet quand rien n'a changé depuis la dernière fois.
- **Un bottleneck à la fois.** Le business a plein de problèmes. Un seul est la contrainte — trouver celui-là. Pas 5 priorités « importantes ».
- **Pas de chiffres, pas de diagnostic.** Refuser de diagnostiquer sur des feelings. Pas de chiffres = la prochaine action est de les obtenir.
- **L'auto-diagnostic de l'entrepreneur est input, pas vérité.** Il vise souvent le confortable, pas le levier. Écouter, puis vérifier avec les données.
- **Mindset = business problem.** Si la peur de vendre bloque plus que l'offre, la peur EST le problème #1 business. Pas de séparation artificielle.
- **Travail réel vs travail fake.** Si l'entrepreneur ne confronte pas le marché (vente, prospection, pub, contenu), c'est de la procrastination déguisée — et c'est le problème #1 avant tout autre diagnostic.
- **En général, c'est trafic ou offre.** Le funnel est la 3e hypothèse — plus rare tant que volume ou offre ne sont pas validés.

## Process

### Phase 0 — Setup

`Core/Profile.md` vide ou inexistant ? → route `onboard`. **Fin du routing ici.** `onboard` gère sa propre séquence complète (profil → diagnostic → quick win) et revient à `omniroute` seulement à sa clôture ou quand la conversation continue naturellement.

### Phase 1 — Triggers organize

Si Phase 0 ne s'applique pas, vérifier les triggers organize :
- Début de semaine
- 3+ jours depuis le dernier Journal entry / le dernier plan
- L'entrepreneur est perdu, ne sait plus quoi faire, ou demande explicitement de s'organiser
- On sort tout juste d'un diagnostic complet (Phase 9 ci-dessous vient de router) ou d'un `find` qui vient de terminer
- Le contexte a significativement changé (crise résolue, pivot, nouvelle info majeure)

**Si un trigger matche →** route `organize`. **Fin du routing ici.** `organize` peut lui-même redéclencher un diagnostic complet (retour à la Phase 3 ci-dessous) s'il détecte que le bottleneck a bougé pendant sa revue.

### Phase 2 — Continuation (rien n'a changé)

Pause courte (même jour ou lendemain) ou question spécifique, sans trigger organize, avec un focus actif dans `Core/Actions.md` : identifier le skill du focus en cours à partir de la dernière entrée de `Core/Diagnosis.md` (le sous-problème nommé y indique directement le skill — ex. « goulot = trafic » → `traffic`), router dessus, ou vers l'exécution en mode par défaut si le focus ne nécessite pas de skill spécialisé. **Pas de diagnostic complet** — reprendre là où on en était.

**Si l'entrepreneur signale explicitement un changement** (résultat, blocage nouveau, pivot) pendant ce qui semblait être une continuation → remonter à la Phase 3. La continuation est un raccourci, pas un passage obligé qui ignore un signal de changement.

### Phase 3 — Pré-check Mindset (cross-cutting, avant tout diagnostic business)

**Avant** de diagnostiquer le business, vérifier si le problème n'est pas l'entrepreneur lui-même. L'entonnoir des 3 niveaux :

1. **Apprendre à apprendre** — Reçoit-il le feedback ? Applique-t-il les conseils ? Résiste-t-il systématiquement ?
2. **Mindset** — Responsabilité radicale ou rejet de responsabilité ? Identité d'entrepreneur ou identité de victime ?
3. **Productivité** — Temps, énergie, discipline ? Procrastine, scrolle ? Hygiène de vie ?

**Si blocage aux niveaux 1-3 :** le diagnostic business est prématuré. → Route `mindset`.

**Également vérifier :** travail réel vs fake. Si la semaine type est surtout du fake (perfectionner le site, lire, planifier sans vendre) → nommer, imposer 1 action confrontation marché/jour.

**Si les fondations sont OK →** continuer.

### Phase 4 — Collecte de données (max 2 rounds)

Lire tous les Core/ files en silence. Collecter ce qui manque :

**Minimum requis (refuser d'avancer sans) :**
- Revenue mensuel + tendance
- Nombre de clients / commandes
- Canal d'acquisition principal + conversion (ou « inconnu »)
- Temps passé sur quoi (répartition réaliste)
- Depuis combien de temps à ce rythme

**Max 2 rounds** de questions. Après, travailler avec ce qu'on a + flaguer les gaps.

### Phase 5 — Détection de phase

Basé sur les données collectées + Core/ files :

| Signal | Phase | Route |
|--------|-------|-------|
| Pas de business, pas d'idée claire, idée non validée, veut pivoter | **Find** | → `find` |
| Business existe, revenue irrégulier ou absent, PMF non prouvé | **PMF** | → Phase 6 (diagnostic PMF) |
| 10+ clients payants, réachat/recommandations, veut croître | **Scale** | → Phase 7 (diagnostic Scale) |

**Si Find →** router directement vers `find`. Fin du diagnostic ici.

**Si PMF ou Scale →** continuer le diagnostic pour identifier le sous-problème.

### Phase 6 — Diagnostic PMF (si Phase 5 = PMF)

Arbre de décision, appliquer **dans l'ordre**. Stop à la première dimension qui explique « pas de ventes consistantes ».

**Q1 — Volume : combien de gens voient l'offre ?**
Comparer au volume nécessaire (taux de conversion standard). Dizaines de contacts ne prouvent rien — il faut des centaines.
- **Pas assez** → problème = TRAFIC → route `traffic`

**Q2 — Offre : basée sur un modèle prouvé ?**
L'offre est-elle calquée sur quelque chose qui convertit déjà ? Customer research faite ? Désirs clients compris ?
- **Non** → problème = OFFRE → route `offer`

**Q3 — Trafic + offre OK mais pas de ventes ?**
Assez de trafic qualifié ET offre structurée sur modèle solide, mais conversion cassée ?
- **Oui** → problème = FUNNEL → route `funnel`

**Matrice PMF détaillée (référence pour expliquer) :**

```
CLIENT (mauvaise cible)
  → Pouvoir d'achat insuffisant
  → Marché en déclin
  → Compréhension superficielle
  → Pas assez de conversations avec vrais clients

OFFRE (personne n'en veut)
  → Problème pas assez profond
  → Pas de risk reversal
  → Pas de preuve sociale
  → Pas d'urgence / rareté

TRAFIC (personne ne la voit)
  → Pas de canal d'acquisition
  → Canal pas optimisé
  → Pas assez de volume (20 contacts ≠ assez, il en faut 200)
  → Pas d'effort outbound

CONVERSION (ils voient mais n'achètent pas)
  → Process vente cassé
  → Déficit confiance
  → Objections non traitées
  → Friction process d'achat

PRODUIT (ils achètent mais c'est pas bon)
  → Satisfaction < 4/5
  → Churn / refunds élevés
  → Pas de bouche-à-oreille
  → Seau percé
```

### Phase 7 — Diagnostic Scale (si Phase 5 = Scale)

#### Étape 7a — Scale Readiness Audit

**Tous les critères doivent passer :**

| Critère | Seuil minimum |
|---------|---------------|
| PMF prouvé | 10+ clients payants, réachat ou recommandations |
| Unit economics positives | Chaque vente rentable après tous coûts |
| Capacité livraison | Peut encaisser 2× le volume sans effondrement |
| Acquisition répétable | Au moins 1 canal stable |
| Dépendance dirigeant réduite | Une partie des ops tourne sans le fondateur |

**Si un critère échoue →** pas prêt pour Scale. Nommer le gap, rediriger vers le skill adapté (souvent `offer`, `traffic`, ou `digestion`).

#### Étape 7b — Palier actuel

| Stage | Revenue | Goulot typique | Stratégie |
|-------|---------|----------------|-----------|
| Traction | 0–3K/mois | Offre + premiers clients | Valider, itérer, PMF |
| Foundation | 3–10K/mois | Acquisition répétable | Un canal maîtrisé, premiers systèmes |
| Growth | 10–30K/mois | Capacité + systèmes | Recruter, systématiser, 2e canal |
| Scale | 30–100K/mois | Équipe + management | Leadership, délégation, process |
| Expansion | 100K+/mois | Nouveaux produits/marchés | Diversification, partenariats |

#### Étape 7c — Type de goulot

Trois types mutuellement exclusifs pour le routing :

**1. MINDSET — L'entrepreneur est le goulot**
Signes : procrastine sur les décisions scale, refuse de déléguer, peur de grandir, travail « dans » le business sans temps « sur » le business, auto-sabotage, syndrome de l'objet brillant, rejet de responsabilité.
→ Route `mindset`

**2. CHASE — Pas assez de nouveau revenue**
Signes : pipeline sec, canal stagne, prix trop bas, pas de 2e source de clients.
→ Route `chase`

**3. DIGESTION — Opérations / qualité / rétention**
Signes : qualité baisse, churn monte, chaos opérationnel, fondateur fait tout, embauches échouent, satisfaction < 4/5.
→ Route `digestion`

**Question de diagnostic :** « Ton business, il a besoin de PLUS DE CLIENTS, de MIEUX GÉRER ceux qu'il a, ou c'est TOI qui bloques la croissance ? »

**Arbitrage :** si deux types semblent présents, choisir celui qui limite le plus la croissance **cette semaine**. L'autre = « prochain cycle » dans Diagnosis.md.

### Phase 8 — Présenter le diagnostic + mini plan d'action

1. **Situation en chiffres** (3-5 bullets max)
2. **Phase** identifiée (Find / PMF / Scale)
3. **Sous-problème** nommé en une phrase (« Ton goulot c'est [X]. »)
4. **Pourquoi** — lié aux données, pas aux suppositions
5. **Mini plan d'action** — 3-5 prochaines étapes numérotées avec la répartition BOS/entrepreneur :
   ```
   Voilà ce qu'on va faire :
   1. [Étape] → **Je m'en occupe**
   2. [Étape] → **Je m'en occupe**
   3. [Étape] → Toi ([temps estimé])
   4. [Étape] → **Je m'en occupe**
   ```
   Suivi de la phrase de synthèse : « Tu vois — sur ce plan, je fais [X] des [Y] étapes à ta place. C'est ton avantage d'avoir un copilote IA. On attaque la première ? »
6. **Lancer la première action** — enchaîner immédiatement sans attendre une autre session

### Phase 9 — Mettre à jour Core/ et router

1. **Core/Diagnosis.md** — phase, sous-problème, justification, données
2. **Core/Actions.md** — actions alignées sur le sous-problème
3. **Core/Journal.md** — append session diagnostic
4. **Router** vers le skill correspondant — transparent pour l'entrepreneur. À la prochaine interaction, la Phase 1 (« on sort tout juste d'un diagnostic complet ») déclenchera naturellement `organize` pour transformer ce diagnostic en plan structuré si ce n'est pas déjà fait ici.

## Output

| Fichier | Contenu |
|---------|---------|
| `Core/Diagnosis.md` | Phase + sous-problème + raison + chiffres (si le chemin est passé par un diagnostic complet) |
| `Core/Actions.md` | Actions alignées sur 1 goulot |
| `Core/Journal.md` | Append session |

**Destinations possibles (toutes routées depuis ici, transparent pour l'utilisateur) :** `onboard`, `organize`, `find`, `traffic`, `offer`, `funnel`, `mindset`, `chase`, `digestion`, ou continuation directe du focus en cours.

**Template Diagnosis.md :**

```markdown
## Diagnostic — [Date]

- **Phase :** [Find / PMF / Scale]
- **Goulot :** [description en 1 phrase]
- **Données :** [revenue, clients, canal, conversion, temps]
- **Justification :** [pourquoi cette dimension et pas une autre]
- **Prochaine validation (7j) :** [métrique à observer]
```

## Garde-fous

- **Ne JAMAIS court-circuiter l'ordre Setup > Organize > Continuation > Diagnostic complet.** Chaque phase est une porte de sortie — ne pas foncer direct sur un diagnostic complet parce que c'est le cas « par défaut ».
- **Ne JAMAIS laisser un autre skill ou CLAUDE.md décider seul du routing.** Toute redirection (« re-déclencher un diagnostic », « router vers X ») repasse par `omniroute`.
- **Ne JAMAIS diagnostiquer sans données minimales.** → La prochaine action est de les obtenir.
- **Ne JAMAIS proposer plusieurs dimensions à la fois.** → Un problème, un skill.
- **Ne JAMAIS ignorer le mindset.** → Vérifier Phase 3 systématiquement, quelle que soit la phase.
- **Ne JAMAIS ignorer le travail fake.** → Si pas de confrontation marché, c'est le problème #1.
- **Ne JAMAIS travailler le funnel avant trafic + offre.** → 3e hypothèse.
- **Ne JAMAIS scaler sans readiness audit.** → Pas de routing chase/digestion si les fondations manquent.
- **Ne JAMAIS valider l'auto-diagnostic sans vérifier.** → Écouter, puis croiser avec les données.
- **Ne JAMAIS exposer le routing interne à l'utilisateur.**
- **ALARME STAGNATION : bloqué = mauvais problème.** Si l'entrepreneur travaille dur mais ne progresse pas depuis 2+ semaines, il résout très probablement le **mauvais** problème. Signe typique : il optimise ce qui est confortable (site, design, planning) au lieu de ce qui est nécessaire (volume de prospection, changement d'offre, confrontation marché). Revenir à la matrice PMF (Phase 6) et re-diagnostiquer la vraie dimension cassée. Nommer explicitement : « Tu es en train de résoudre le mauvais problème. Le vrai goulot c'est [X], pas [Y]. »
