/* Page produit en français — le chaînon manquant.
 *
 * Constat du 28/07 au soir : le seul produit vendable de Kanaky Tech
 * n'existait qu'en anglais, alors que trois des cinq marchés
 * mélanésiens sont francophones et que la Kanaky (Nouvelle-Calédonie) est le
 * marché le plus solvable de la région.
 *
 * Un patron calédonien qui lisait /prix-automatisation-ia-nouvelle-
 * caledonie/ ne pouvait pas acheter dans sa langue. Le moteur SEO
 * tournait sans porte de sortie.
 *
 * Prix affiché en XPF ET en USD : la transaction se fait en dollars
 * (Stripe), mais un prospect calédonien raisonne en francs. Cacher
 * l'un ou l'autre serait malhonnête.
 */

export default [

{
  slug: 'machine-prospection-commerciale',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/marketplace/cold-outreach-machine/' },
  title: 'Machine de prospection commerciale — trouve vos clients et écrit à chacun',
  description: 'Un logiciel de prospection acheté une fois, pas un abonnement : il trouve les entreprises qui correspondent à vos clients idéaux, écrit un message différent pour chacune et les envoie seul, à un rythme qui protège votre domaine. Code source inclus, appel d’installation, 30 jours de support.',
  keywords: 'logiciel prospection commerciale, prospection automatique entreprise, trouver des clients automatiquement, email prospection Nouvelle-Calédonie, logiciel commercial achat unique, prospection B2B Pacifique',
  eyebrow: 'Produit',
  short: 'La machine de prospection',
  ogTitle: 'Machine de prospection commerciale — achetée une fois, à vous pour toujours',
  h1: 'Recrutez un commercial une fois. <span style="color:var(--grey-4);font-weight:300;">Gardez-le pour toujours.</span>',
  cta: 'service-fr',
  extraGraph: [{
    '@type': 'Product',
    '@id': 'https://kanaky.xyz/machine-prospection-commerciale/#produit',
    name: 'Machine de prospection commerciale',
    image: ['https://kanaky.xyz/assets/og/cold-outreach-machine.png'],
    url: 'https://kanaky.xyz/machine-prospection-commerciale/',
    category: 'Logiciel de prospection commerciale',
    description: 'Logiciel de prospection vendu une fois, sans abonnement. Il identifie les entreprises correspondant au profil de client décrit, lit ce que chacune publie, rédige un message différent par entreprise et les envoie à un rythme espacé pendant les heures ouvrées. Tourne sur votre propre machine ; la rédaction peut passer par un fournisseur IA ou tourner entièrement en local.',
    brand: { '@id': 'https://kanaky.xyz/#organization' },
    inLanguage: 'fr',
    offers: {
      '@type': 'Offer',
      price: '299.99',
      priceValidUntil: '2026-08-11',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://kanaky.xyz/marketplace/cold-outreach-machine/',
      seller: { '@id': 'https://kanaky.xyz/#organization' },
    },
  }],
  body: [
    { lead: '**Trouver les bonnes entreprises, lire ce qu’elles publient, écrire à chacune un message qui la concerne vraiment, recommencer chaque semaine — c’est un métier.** Alors ça se remet à demain, jusqu’au mois creux qui rend ça urgent. Cette machine fait ce travail, et elle s’achète une fois.' },

    { h: 'Ce qu’elle fait, concrètement' },
    { steps: [
      '**Vous décrivez votre client idéal.** Pas « les entreprises du BTP » — « les électriciens indépendants du Grand Nouméa qui refusent du chantier ». Plus c’est précis, mieux elle écrit.',
      '**Elle trouve ces entreprises** et récupère leurs vraies coordonnées.',
      '**Elle lit ce que chacune publie** sur son site, pour avoir quelque chose de vrai et de spécifique à dire.',
      '**Elle écrit un message différent par entreprise.** Pas un modèle avec le nom changé : avant chaque envoi, tous les messages sont comparés entre eux, et si deux partagent ne serait-ce que six mots de suite, le lot est réécrit.',
      '**Elle envoie seule** — environ un message toutes les vingt-cinq minutes, uniquement en journée, plafonné à une vingtaine par jour.',
      '**Elle vous prévient quand un humain répond.** Pas avant.',
    ]},

    { h: 'Le prix' },
    { table: {
      minWidth: 520,
      head: ['', 'Cette machine', 'Les plateformes par abonnement'],
      rows: [
        ['Prix', '**299,99 USD** — environ **36 000 F CFP**, une fois. <s>499 USD</s> — prix de lancement **jusqu’au 11 août 2026**', '39 à 97 USD **par mois**'],
        ['Sur un an', '36 000 F, puis plus rien', '**56 000 à 139 000 F**, chaque année'],
        ['Si vous arrêtez de payer', 'Elle continue de tourner', 'L’accès s’arrête'],
        ['Le code', 'Il est à vous', 'Vous n’y avez pas accès'],
        ['Vos prospects', 'Sur votre machine', 'Sur leurs serveurs'],
      ],
    }},
    'Le paiement se fait en dollars — c’est la contrainte du paiement en ligne, pas un choix. Le montant en francs est donné à titre indicatif, au cours du jour.',
    { note: '**Ce que le prix ne couvre pas, et personne ne devrait vous le cacher :** un domaine d’envoi (environ 1 400 F par an), un service d’envoi d’e-mails, et — si vous utilisez un fournisseur IA pour la rédaction — quelques francs par message. Ou rien du tout si vous faites tourner l’IA sur votre propre machine.' },

    { h: 'Ce que vous recevez' },
    { list: [
      '**Le code source complet.** Il vous appartient, vous pouvez le modifier.',
      '**Un installateur guidé** qui demande ce dont il a besoin, explique quels comptes créer, et teste chaque connexion avant de continuer. Aucune ligne de code à écrire.',
      '**Une documentation** écrite pour quelqu’un qui n’est pas développeur.',
      '**Une licence commerciale à votre nom.**',
      '**Un appel d’installation d’une heure**, en direct — on met le système en route ensemble.',
      '**Trente jours de support par e-mail**, avec la personne qui a écrit le code.',
    ]},
    'La livraison est automatique : quelques secondes après le paiement, votre copie est construite et envoyée par e-mail.',

    { h: 'L’installation : une commande, le reste en menus' },
    'Pas de fichier de configuration à remplir, pas de manuel à lire d’abord. Vous tapez une commande, et la machine conduit sa propre installation : des menus à flèches pour chaque choix, des préréglages pour les fournisseurs d’e-mail et d’IA courants, les clés saisies masquées comme un mot de passe. Elle installe ses propres dépendances et teste chaque connexion en direct **avant** d’enregistrer quoi que ce soit — si une clé est fausse, vous le savez sur-le-champ, avec une explication en clair et la possibilité de corriger.',
    { term: `$ node setup.js

┌──────────────────────────────────────────────┐
│ Cold Outreach Machine — Setup                │
└──────────────────────────────────────────────┘

  What would you like to do?
   ❯ Set everything up          about 5 minutes
     Test my existing configuration
     Quit

  1 / 6 — Installing dependencies
  ✓ Dependencies installed
  3 / 6 — The writing engine
  ✓ Writing engine connected — test draft written
  4 / 6 — Sending
  ✓ SMTP server reachable
  ✓ Configuration saved · your machine is ready` },
    'L’installateur parle anglais — le logiciel est vendu sur cinq marchés, dont trois anglophones. L’appel d’installation, lui, se fait dans votre langue : on déroule ces écrans ensemble.',
    { note: 'Déjà installé, et quelque chose ne marche plus ? La même commande propose **« Test my existing configuration »** : elle revérifie en quelques secondes le moteur de rédaction, le serveur d’envoi et la base de données contre vos réglages enregistrés, et vous dit lequel a lâché.' },

    { h: 'Où tourne la rédaction — vous choisissez' },
    { cards: [
      { t: 'Chez un fournisseur IA', d: 'Meilleure qualité de rédaction, quelques francs par message, et vos coordonnées de prospects transitent par ce fournisseur.' },
      { t: 'Sur votre propre machine', d: 'Aucun coût par message, et **vos prospects ne quittent jamais votre ordinateur**. Il faut 16 Go de mémoire ; la rédaction est un peu moins fine. Voir [l’IA en local](/ia-locale-entreprise/).' },
    ]},
    'Les deux fonctionnent d’origine, et on configure celui que vous voulez pendant l’appel.',

    { h: 'Ce qu’il faut savoir avant d’acheter' },
    { list: [
      '**Un domaine séparé pour envoyer.** Jamais celui de votre entreprise — si la délivrabilité se dégrade un jour, vos factures et vos échanges clients ne doivent pas être touchés.',
      '**Trois enregistrements DNS à coller** (SPF, DKIM, DMARC). Sans eux, l’essentiel de vos messages part en indésirable, quel que soit le logiciel.',
      '**Vous restez responsable légalement** de votre campagne. La machine applique les règles techniques — une entreprise contactée une seule fois, désinscriptions définitives, identité réelle, volume plafonné — mais la conformité vous incombe.',
      '**Aucun résultat n’est garanti.** Le taux de réponse dépend de votre marché, de votre offre et de la justesse de votre ciblage. Qui vous promet des chiffres vous vend quelque chose.',
    ]},

    { h: 'Ce que ça remplace, en temps' },
    'Fait à la main correctement, chaque entreprise demande huit à douze minutes : la trouver, vérifier qu’elle correspond, lire son site, écrire quelque chose qui la concerne. À vingt par jour, c’est près de trois heures quotidiennes.',
    '**C’est pour ça que presque personne ne tient une prospection régulière** — pas par manque de volonté, par manque d’heures. [Le calcul complet est ici.](/blog/cold-email-subscription-vs-one-time-cost/)',

    { note: 'Une question honnête avant d’acheter : **allez-vous encore prospecter dans un an ?** Si oui, acheter une fois revient nettement moins cher qu’un abonnement. Si vous testez seulement si la prospection fonctionne pour vous, louez un trimestre ailleurs d’abord — nous préférons le dire.' },
  ],
  faq: [
    { q: 'Faut-il savoir coder ?', a: 'Non. Un installateur guidé vous demande ce dont il a besoin, explique quels comptes créer et teste chaque connexion. Vous taperez une commande dans un terminal et collerez trois enregistrements DNS chez votre hébergeur de domaine — c’est le niveau technique demandé, et l’appel d’installation d’une heure est là pour ça.' },
    { q: 'Combien ça coûte vraiment, tout compris ?', a: 'Environ 36 000 F CFP une fois pour le logiciel, plus 1 400 F par an de domaine d’envoi, un service d’envoi d’e-mails, et quelques francs par message si vous utilisez un fournisseur IA — ou rien par message si l’IA tourne sur votre machine. Comptez quelques milliers de francs par mois d’infrastructure selon votre volume.' },
    { q: 'Est-ce légal de prospecter par e-mail ?', a: 'Oui en business-to-business, sous conditions qui varient selon le pays du destinataire. Deux obligations sont quasi universelles : vous identifier réellement, et cesser immédiatement si on vous le demande. La machine applique les règles techniques, mais la responsabilité juridique reste la vôtre — nos guides détaillent les règles en Nouvelle-Zélande, Australie, États-Unis, Europe et Royaume-Uni.' },
    { q: 'Puis-je le revendre ou le proposer à mes clients ?', a: 'Non. La licence vous donne le droit perpétuel de l’utiliser et de le modifier au sein d’une seule entité, et interdit la revente, la sous-licence, la publication du code et son exploitation comme service pour des tiers.' },
    { q: 'Ça marche pour un marché local comme la Kanaky (Nouvelle-Calédonie) ?', a: 'C’est même là que ça fonctionne le mieux. Les grandes bases de données de prospection couvrent mal les marchés locaux et insulaires : la machine, elle, va chercher les entreprises sur leurs propres sites, au moment où vous lancez la recherche. Les données sont fraîches et le tissu local est correctement couvert.' },
  ],
  related: [
    ['/marketplace/cold-outreach-machine/', 'This page in English'],
    ['/combien-coute-automatisation-ia/', 'Combien coûte l’automatisation IA'],
    ['/ia-locale-entreprise/', 'Faire tourner l’IA en local'],
    ['/prix-automatisation-ia-nouvelle-caledonie/', 'Nos tarifs en Kanaky (Nouvelle-Calédonie)'],
  ],
},

];
