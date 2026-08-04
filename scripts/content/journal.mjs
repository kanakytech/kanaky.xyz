/* Journal — un article de fond par jour.
 *
 * Un objet par publication, ajouté en tête de tableau (le plus récent
 * d'abord). Règle de fond : une position, des faits datés, des sources
 * nommées dans le texte. Si un paragraphe pouvait être publié n'importe
 * quel autre jour de l'année, il n'a rien à faire dans un journal. */

export default [

/* ── hub : sommaire du journal, tenu à jour à chaque publication ── */
{
  slug: 'journal',
  lang: 'en',
  title: 'Journal — Kanaky Tech · One long-form piece a day',
  description: 'A daily piece on AI automation for businesses in New Caledonia, New Zealand and the Pacific. Named sources, dated figures, a stated position. Published in French and English.',
  keywords: 'Kanaky Tech journal, AI automation Pacific blog, IA PME Pacifique journal, AI New Caledonia articles',
  eyebrow: 'Journal',
  short: 'Journal',
  h1: 'Journal. <span style="color:var(--grey-4);font-weight:300;">One piece a day, in two languages.</span>',
  cta: 'service',
  published: '2026-08-05',
  body: [
    { lead: 'One long-form piece per working day, on what AI automation actually does for a business in this part of the world. Each one states a position, names its sources and shows its arithmetic. Every piece appears in French and in English — not a word-for-word translation, but the same substance written natively in each language. Most recent first.' },

    { list: [
      '**5 August 2026** — [Quoting speed as a competitive weapon: what the numbers actually support](/quoting-speed-the-numbers/) · [Français — Le devis en deux heures au lieu de cinq jours, anatomie](/devis-en-deux-heures-anatomie/)',
      '**4 August 2026** — [Automatiser sans licencier : ce que la phrase engage vraiment](/automatiser-sans-licencier/) · [English — What the promise actually covers](/automating-without-layoffs/)',
      '**3 August 2026** — [L’IA locale en cinq minutes : ce qui tourne vraiment sur un ordinateur normal](/ia-locale-en-cinq-minutes/) · [English — What actually runs on a normal computer in 2026](/local-ai-on-a-normal-computer/)',
      '**2 August 2026** — [The real cost of an unanswered enquiry, measured](/cost-of-an-unanswered-enquiry/) · [Français — La demande client restée sans réponse : le calcul](/demande-client-sans-reponse-cout/)',
      '**1 August 2026** — [Facturation en retard : ce que la loi du pays de juin 2026 a déplacé](/facturation-en-retard-cout-reel/) · [English — Seven days of paperwork, thirty-one days of cash](/late-invoicing-real-cost/)',
      '**31 July 2026** — [Why island businesses are better positioned for AI than they think](/island-businesses-ai-advantage/) · [Français — Pourquoi la petite taille est un avantage face à l’IA](/petite-entreprise-avantage-ia/)',
      '**30 July 2026** — [Automatiser sans attendre la fibre parfaite : le calcul](/automatiser-sans-attendre-la-fibre/) · [English — You don’t need perfect internet to automate](/automation-without-perfect-internet/)',
      '**29 July 2026** — [Actualité IA, juillet 2026 : ce que ça change pour une PME du Pacifique](/actualite-ia-pme-pacifique-juillet-2026/) · [English — AI news, July 2026: what it actually means](/ai-news-pacific-smes-july-2026/)',
    ] },

    { note: 'No newsletter, no signup. The journal is a public record of how we read this field: what the numbers support, what they do not, and where we have changed our mind. If a piece here is wrong, the correction goes in the same place.' },
  ],
  related: [
    ['/guides/', 'All guides — the reference library'],
    ['/ai-audit/', 'Book a free AI opportunity audit'],
    ['/local-commitment/', 'The 10% that stays in the region'],
  ],
},

{
  slug: 'quoting-speed-the-numbers',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/devis-en-deux-heures-anatomie/' },
  title: 'Quoting Speed as a Competitive Weapon — What the Numbers Actually Support',
  description: 'A quote that takes five days to arrive contains under two hours of work. The rest is storage. Here is the stage-by-stage anatomy, why the ISEE building index kills the "prices are moving" argument for speed, and the honest ceiling on a two-hour promise.',
  keywords: 'quote turnaround time small business, faster quoting trades, automate quoting process, quote response time win rate, estimating time savings contractors, process cycle efficiency quoting',
  eyebrow: 'Journal',
  short: 'Journal · Quoting',
  h1: 'The quote that takes five days. <span style="color:var(--grey-4);font-weight:300;">Almost none of it is work.</span>',
  cta: 'service',
  published: '2026-08-05',
  body: [
    { lead: 'A quote that takes five days to reach the client contains, in nearly every job book I have opened, somewhere between forty minutes and two hours of actual work. Everything else is the document sitting still: in a diary waiting for a site visit, in an inbox waiting for a supplier price, on a kitchen table waiting for the owner to have a free evening. That ratio is the entire subject, and you can measure it by Friday without buying anything.' },

    { h: 'The statistic everyone quotes, and why this piece will not' },
    'Search for what fast quoting is worth and the same claims come back: being first doubles your win rate, firms that quote same-day take a third more work, quick follow-up lifts conversion by 27 per cent. Trace any of them to a stated method and there is nothing there — a vendor blog citing a vendor blog. We ran that exercise properly for [the cost of an unanswered enquiry](/cost-of-an-unanswered-enquiry/) and reached the same place: two of the most repeated speed figures in the industry have no primary source at all.',
    'What survives is thin and worth saying plainly. The 2011 *Harvard Business Review* study by Oldroyd, McElheran and Elkington, covering 1.25 million leads, measures contact and qualification — not quotes. No comparable dataset exists for quote turnaround in any industry. Anyone offering you a quoting multiplier is inventing it. So the honest reading of "the numbers" in the title is not an industry benchmark. It is two figures out of your own job book.',

    { h: 'Touch time and elapsed time' },
    'Touch time is the total minutes a person spends actually producing the quote. Elapsed time is the wall clock, from enquiry to the client holding the document. Divide the first by the second and you have what the lean literature calls process cycle efficiency. The rule of thumb published across that literature puts most unimproved processes between 5 and 10 per cent, and treats 25 per cent as the point where a process earns the description. It is a rule of thumb rather than a measured constant, and it deserves to be used as one.',
    'Apply it. One hour fifty of work spread across five working days is 110 minutes against roughly 2,400 available — under 5 per cent. That number says something quite specific, and it is not that quoting is slow. It is that quoting barely happens. The five days are storage.',

    { table: {
      minWidth: 700,
      head: ['Stage of a five-day quote', 'Touch time', 'Elapsed', 'What it is waiting on'],
      rows: [
        ['Enquiry read, job understood, call returned', '15 min', '4 hours', 'Somebody noticing the message'],
        ['Site visit, or specification confirmed', '45 min', '2 days', 'Two diaries agreeing'],
        ['Supplier prices requested and received', '10 min', '1.5 days', 'A third party — genuinely'],
        ['Pricing, margin, wording, formatting', '35 min', '1 day', 'An evening the owner has free'],
        ['Sent, and a follow-up scheduled', '5 min', 'half a day', 'Nothing at all'],
        ['**Total**', '**about 1 h 50**', '**5 days**', '**Under 5 per cent efficiency**'],
      ],
    }},

    { h: 'The margin argument does not hold' },
    'One justification for speed should be put down before it spreads: that a slow quote loses money because input prices move underneath it. In Kanaky (New Caledonia) that claim is checkable. The BT21 all-works index published monthly by ISEE, the territory\'s statistics institute, stood at 99.72 in February 2026 and 102.02 provisionally in May, a rise of 1.7 per cent across the preceding twelve months. May\'s movement came mostly from diesel, up 21.5 per cent, alongside bitumen at 6.5 per cent and the equipment index at 2 per cent.',
    'Read that properly. Even in a month with a violent fuel component, the general index moves about a point. Five days of that is a rounding error against any sane margin. Price drift is a real problem across a ninety-day validity window; it is not an argument for answering faster, and selling it as one is dishonest. Quoting speed is worth money because the client is comparing you against someone else this week — not because concrete moved.',

    { h: 'What compresses, and what does not' },
    'Go back to the table and sort it by who is waiting. Two rows wait on the physical world: a site visit needs two diaries to meet, and a supplier answers when the supplier answers. Those are floors, and pretending otherwise is how projects lose credibility in week three. Everything else is waiting on the business itself — roughly fifty-five minutes of work stretched across three days.',
    'That is where a two-hour quote comes from. Not from working faster, but from deleting the storage between the working. And it sets an honest ceiling: for a job that genuinely needs a visit, two hours is a fiction. The promise holds on standard, repeat-shape work with a known specification, which in most trade books is more than half the volume. So the correct sentence is not "every quote in two hours". It is "quotes that need no visit go out the same day, and the rest get a dated commitment within two hours".',

    { steps: [
      'Measure both numbers on the last ten quotes before changing anything. Job book, two columns, one afternoon. Most owners are wrong about which stage is slow, and it is rarely the one they blame.',
      'Split the jobs that need a visit from the ones that do not, and write that split down as a rule rather than deciding it case by case. This one distinction does more than any software.',
      'Put the price list into a template that assembles the document from a handful of inputs. The 35 minutes of pricing and formatting is where a machine is genuinely good and genuinely safe: arithmetic and layout, not judgement about scope.',
      'Ask suppliers for a standing price file instead of a quote per job. A monthly sheet removes the day-and-a-half row entirely for anything standard.',
      'Commit to a time in the first reply. "You will have this by Thursday midday" holds a client through a wait that unexplained silence loses. [An hour of scoping](/ai-audit/) is usually enough to find which rows are yours.',
    ] },

    { h: 'Where quoting fast loses money' },
    'Speed is the easiest thing in this field to oversell, so the failure modes belong in the same article. The first is scope. A quote produced quickly on work that was never pinned down becomes a variation argument three weeks later, and variations cost more than the job you won by being early. Firms pricing bespoke work know this and are right to resist. The rule that keeps both: compress the administrative wait, never the scope conversation. Where scope is genuinely unclear, the fast output is a dated holding position with its assumptions listed — a different document, which should look like one.',
    'The second is quieter. A quote sent in two hours and never followed up performs worse than a slow quote from someone who rings on Tuesday. Sending is not the finish line, and the follow-up is the cheapest component of the whole system.',

    { note: 'All of this rests on two numbers you do not have yet and could have by Friday: how many minutes of work a quote actually contains, and how many hours it spends in storage. If the ratio comes back above 25 per cent, quoting is not your problem and this is the wrong project — go and look at where enquiries land instead. If it comes back under 10 per cent, which it usually does, you are not slow at quoting. You are queuing, and a queue is the cheapest thing in a business to remove.' },
  ],
  faq: [
    { q: 'How fast can a quote realistically go out?', a: 'It depends entirely on whether the job needs a site visit. For standard work with a known specification, same-day is achievable and two hours is achievable once the price list sits in a template — because almost all of the delay is waiting rather than working. For anything requiring a visit or a bespoke supplier price, two hours is not honest, and the useful commitment is a dated one given within two hours. Promising a single turnaround figure across both categories is how quoting promises fail.' },
    { q: 'Is there real evidence that the first quote wins the job?', a: 'Not in any form worth relying on. The widely repeated claims — that being first doubles win rates, or that same-day quoting adds a third to won work — have no traceable methodology behind them. The credible speed research, notably the 2011 Harvard Business Review study of 1.25 million leads, measures contact and lead qualification, not quote turnaround. The defensible position is narrower: a client actively comparing suppliers this week is more likely to decide before a slow quote arrives. That is a reason to be quick without inventing a coefficient.' },
    { q: 'Does automating quotes make the pricing less accurate?', a: 'It should not, because the part worth automating is not the pricing judgement. Assembling a document from an agreed price list, applying the margin rule, checking the arithmetic and formatting the output are mechanical steps where a machine outperforms a tired person at nine in the evening. Deciding what the job involves, whether the scope is complete and whether the work is worth taking stays with the person who carries the risk. Systems that blur that line produce fast quotes that lose money on variations.' },
    { q: 'What is the single first thing to change if quotes take too long?', a: 'Measure touch time against elapsed time on the last ten quotes, then look at which stages are waiting on you rather than on a third party. In almost every case the largest recoverable block is the pricing-and-formatting evening, which sits waiting for the owner to be free. Removing that one queue typically cuts a five-day quote to under two, before anything else changes and before any supplier or diary problem is touched.' },
  ],
  related: [
    ['/ai-for-builders/', 'AI for builders and construction firms'],
    ['/workflow-automation-examples/', 'Workflow automation examples that hold up'],
    ['/business-process-automation/', 'Business process automation, explained plainly'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Quoting Speed as a Competitive Weapon — What the Numbers Actually Support',
    datePublished: '2026-08-05',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'devis-en-deux-heures-anatomie',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/quoting-speed-the-numbers/' },
  title: 'Le devis en deux heures au lieu de cinq jours : anatomie du temps perdu',
  description: 'Un devis qui met cinq jours à partir contient rarement plus de deux heures de travail. Le reste est de l’attente. La décomposition étape par étape, ce que l’index BT21 de l’ISEE dit vraiment de l’argument « les prix bougent », et le plafond honnête de la promesse.',
  keywords: 'délai de devis, devis rapide artisan, automatiser les devis, gagner du temps sur les devis PME, index BT21 Nouvelle-Calédonie, devis BTP Nouméa, automatisation devis entreprise',
  eyebrow: 'Journal',
  short: 'Journal · Devis',
  h1: 'Le devis qui met cinq jours. <span style="color:var(--grey-4);font-weight:300;">Il ne contient presque pas de travail.</span>',
  cta: 'service-fr',
  published: '2026-08-05',
  body: [
    { lead: 'Un devis qui met cinq jours à parvenir au client contient, dans la quasi-totalité des carnets que nous avons ouverts, entre quarante minutes et deux heures de travail réel. Tout le reste, c’est le document immobile : dans un agenda avant une visite, dans une boîte mail avant un prix fournisseur, sur un coin de table avant que le gérant ait une soirée. Ce rapport est le sujet entier, et il se mesure sans rien acheter.' },

    { h: 'Le chiffre que tout le monde cite, et pourquoi celui-ci ne le citera pas' },
    'Cherchez ce que rapporte un devis rapide et les mêmes affirmations reviennent : être le premier double le taux de signature, répondre le jour même décroche un tiers d’affaires en plus, relancer vite monte la conversion de 27 %. Remontez l’une d’elles jusqu’à une méthode déclarée : il n’y a rien, un blog d’éditeur qui cite un blog d’éditeur. Nous avons fait l’exercice pour [le coût d’une demande restée sans réponse](/demande-client-sans-reponse-cout/), avec le même résultat — deux des statistiques les plus recopiées du secteur n’ont aucune source primaire.',
    'Ce qui résiste est mince. L’étude publiée en 2011 dans la *Harvard Business Review* par Oldroyd, McElheran et Elkington, sur 1,25 million de demandes, mesure la prise de contact et la qualification — pas les devis. Aucun jeu de données comparable n’existe sur le délai d’émission d’un devis, dans aucun secteur. Qui vous vend un multiplicateur sur ce point l’invente. La lecture honnête du mot « chiffres » n’est donc pas un étalon sectoriel : ce sont deux nombres tirés de votre propre carnet.',

    { h: 'Temps de travail et temps écoulé' },
    'Le temps de travail, c’est le total des minutes pendant lesquelles une personne fabrique effectivement le devis. Le temps écoulé, c’est l’horloge murale, de la demande jusqu’au moment où le client tient le document. Divisez le premier par le second : c’est ce que la littérature lean appelle l’efficience du cycle. L’ordre de grandeur qu’on y trouve situe la plupart des processus non retravaillés entre 5 et 10 %, et retient 25 % comme seuil. C’est une règle empirique et non une constante mesurée ; elle doit être maniée comme telle.',
    'Appliquez-la. Une heure cinquante étalée sur cinq jours ouvrés, c’est 110 minutes sur environ 2 400 disponibles : moins de 5 %. Ce chiffre dit quelque chose de précis, et ce n’est pas que faire un devis serait lent. C’est que faire un devis n’a presque pas lieu. Les cinq jours sont du stockage.',

    { table: {
      minWidth: 700,
      head: ['Étape d’un devis à cinq jours', 'Temps de travail', 'Temps écoulé', 'Ce qu’on attend'],
      rows: [
        ['Demande lue, chantier compris, rappel effectué', '15 min', '4 heures', 'Que quelqu’un voie le message'],
        ['Visite sur place, ou spécification confirmée', '45 min', '2 jours', 'Que deux agendas se rencontrent'],
        ['Prix fournisseurs demandés et reçus', '10 min', '1,5 jour', 'Un tiers — réellement'],
        ['Chiffrage, marge, rédaction, mise en forme', '35 min', '1 jour', 'Une soirée libre du gérant'],
        ['Envoi, et relance programmée', '5 min', 'une demi-journée', 'Rien du tout'],
        ['**Total**', '**environ 1 h 50**', '**5 jours**', '**Moins de 5 % d’efficience**'],
      ],
    }},

    { h: 'L’argument de la marge ne tient pas' },
    'Une justification de la vitesse mérite d’être écartée : le devis lent coûterait de l’argent parce que les prix d’achat bougent en dessous. En Kanaky (Nouvelle-Calédonie), l’affirmation est vérifiable. L’index BT21 « tous travaux confondus », publié chaque mois par l’ISEE, s’établissait à 99,72 en février 2026 et à 102,02 en provisoire au mois de mai, soit une progression de 1,7 % sur les douze mois précédents. La hausse de mai tenait surtout au gazole, à +21,5 %, accompagné du bitume à +6,5 % et de l’indice matériel à +2 %.',
    'Lisez-le correctement : même sur un mois où le carburant s’emballe, l’index général prend environ un point. Cinq jours là-dedans sont une erreur d’arrondi face à n’importe quelle marge saine. La dérive des prix est un vrai sujet sur une validité de quatre-vingt-dix jours ; ce n’est pas un argument pour répondre plus vite. Le devis rapide vaut de l’argent parce que le client compare cette semaine — pas parce que le béton a bougé.',

    { h: 'Ce qui se comprime et ce qui ne se comprime pas' },
    'Reprenez le tableau et triez-le par « qui attend quoi ». Deux lignes attendent le monde physique : une visite suppose que deux agendas se rencontrent, un fournisseur répond quand il répond. Ce sont des planchers. Tout le reste attend l’entreprise elle-même — cinquante-cinq minutes de travail étirées sur trois jours.',
    'C’est de là que vient le devis en deux heures. Pas d’un travail plus rapide, mais de la suppression du stockage entre les moments de travail. Et cela fixe un plafond honnête : pour un chantier qui exige vraiment une visite, deux heures est une fiction. La promesse tient sur les travaux standards, à spécification connue — soit, dans la plupart des carnets, plus de la moitié du volume. La formulation juste n’est donc pas « tous les devis en deux heures », mais « les devis sans visite partent le jour même, les autres reçoivent une date ferme sous deux heures ».',

    { steps: [
      'Mesurer les deux nombres sur les dix derniers devis avant de changer quoi que ce soit. Le carnet, deux colonnes, un après-midi. La plupart des gérants se trompent sur l’étape lente, et c’est rarement celle qu’ils accusent.',
      'Séparer les chantiers qui exigent une visite de ceux qui n’en exigent pas, et écrire cette règle au lieu de trancher au cas par cas. Cette seule distinction fait davantage que n’importe quel logiciel.',
      'Mettre la bibliothèque de prix dans un modèle qui assemble le document à partir de quelques entrées. Les 35 minutes de chiffrage et de mise en forme sont l’endroit où une machine est bonne et sans danger : de l’arithmétique et de la mise en page, pas un jugement sur le périmètre.',
      'Demander aux fournisseurs un fichier de prix permanent plutôt qu’une consultation par chantier. Une feuille mensuelle supprime la ligne d’un jour et demi sur tout ce qui est standard.',
      'Annoncer une date dès la première réponse. « Vous l’aurez jeudi midi » retient un client là où un silence sans explication le perd. [Un cadrage d’une heure](/commencer-avec-ia-entreprise/) suffit à identifier les lignes qui vous appartiennent.',
    ] },

    { h: 'Là où le devis rapide fait perdre de l’argent' },
    'La vitesse est ce qui se survend le plus facilement dans ce métier ; les modes de défaillance ont donc leur place ici. Le premier est le périmètre. Un devis produit vite sur un chantier jamais cadré devient une discussion d’avenant trois semaines plus tard, et les avenants coûtent plus cher que le chantier gagné en arrivant tôt. Les entreprises qui chiffrent du sur-mesure le savent et ont raison de résister. La règle qui préserve les deux : comprimer l’attente administrative, jamais la conversation sur le périmètre. Quand celui-ci reste flou, la sortie rapide est une position d’attente datée, hypothèses listées — un autre document, qui doit en avoir l’air.',
    'Le second est plus discret. Un devis parti en deux heures et jamais relancé fait moins bien qu’un devis lent d’un concurrent qui appelle le mardi. L’envoi n’est pas la ligne d’arrivée.',

    { note: 'Tout ceci repose sur deux nombres que vous pourriez avoir vendredi : combien de minutes de travail contient réellement un devis, et combien d’heures il passe en stockage. Si le rapport ressort au-dessus de 25 %, le devis n’est pas votre problème et ce chantier est le mauvais — allez plutôt regarder où atterrissent les demandes. S’il ressort sous 10 %, ce qui est le cas habituel, vous n’êtes pas lent à faire des devis. Vous faites la queue, et une file d’attente est la chose la moins coûteuse à supprimer dans une entreprise.' },
  ],
  faq: [
    { q: 'En combien de temps un devis peut-il réellement partir ?', a: 'Tout dépend de la nécessité d’une visite. Pour un travail standard à spécification connue, le jour même est atteignable et deux heures le deviennent dès que la bibliothèque de prix est dans un modèle — parce que la quasi-totalité du délai est de l’attente et non du travail. Pour un chantier exigeant une visite ou un prix fournisseur sur mesure, deux heures n’est pas honnête, et l’engagement utile est une date ferme donnée sous deux heures. Annoncer un délai unique pour les deux catégories est la façon habituelle dont ces promesses se cassent.' },
    { q: 'Existe-t-il une preuve que le premier devis emporte l’affaire ?', a: 'Aucune sur laquelle il soit raisonnable de s’appuyer. Les affirmations les plus répandues — être le premier doublerait le taux de signature, le devis du jour même ajouterait un tiers d’affaires — n’ont aucune méthodologie traçable derrière elles. La recherche crédible sur la vitesse, notamment l’étude de la Harvard Business Review de 2011 sur 1,25 million de demandes, mesure la prise de contact et la qualification, pas le délai d’émission d’un devis. La position défendable est plus étroite : un client qui compare activement cette semaine a de bonnes chances d’avoir tranché avant l’arrivée d’un devis lent. C’est une raison d’aller vite sans inventer de coefficient.' },
    { q: 'Automatiser les devis rend-il le chiffrage moins juste ?', a: 'Cela ne devrait pas, parce que la partie qui mérite d’être automatisée n’est pas le jugement de prix. Assembler un document à partir d’une bibliothèque validée, appliquer la règle de marge, vérifier l’arithmétique et mettre en forme sont des étapes mécaniques où la machine fait mieux qu’une personne fatiguée à vingt et une heures. Décider de ce que comprend le chantier, si le périmètre est complet et si l’affaire vaut d’être prise reste à celui qui porte le risque. Les systèmes qui brouillent cette frontière produisent des devis rapides qui perdent de l’argent en avenants.' },
    { q: 'Par quoi commencer si les devis mettent trop de temps ?', a: 'Par mesurer le temps de travail et le temps écoulé sur les dix derniers devis, puis regarder quelles étapes attendent après vous plutôt qu’après un tiers. Dans presque tous les cas, le bloc récupérable le plus gros est la soirée de chiffrage et de mise en forme, qui attend que le gérant soit disponible. Supprimer cette seule file ramène en général un devis de cinq jours sous les deux jours, avant tout autre changement et sans avoir touché au problème des agendas ou des fournisseurs.' },
  ],
  related: [
    ['/ia-btp-nouvelle-caledonie/', 'L’IA pour le BTP en Nouvelle-Calédonie'],
    ['/exemples-automatisation-pme/', 'Exemples concrets d’automatisation en PME'],
    ['/automatisation-ia-nouvelle-caledonie/', 'L’automatisation par l’IA en Nouvelle-Calédonie'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Le devis en deux heures au lieu de cinq jours : anatomie du temps perdu',
    datePublished: '2026-08-05',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'automatiser-sans-licencier',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/automating-without-layoffs/' },
  title: 'Automatiser sans licencier : ce que la phrase engage vraiment, chiffres à l’appui',
  description: 'Le secteur privé calédonien a perdu 13 200 emplois en deux ans. Dans ce contexte, promettre d’automatiser « sans licencier » demande mieux qu’une réassurance. L’arithmétique sur une entreprise de six personnes, la mesure danoise sur 25 000 salariés, et l’endroit exact où la promesse devient malhonnête.',
  keywords: 'automatiser sans licencier, automatisation et emploi PME, IA suppression de postes, emploi salarié Nouvelle-Calédonie 2025, licenciement économique mutation technologique, obligation de reclassement Nouvelle-Calédonie, IA et emploi Pacifique',
  eyebrow: 'Journal',
  short: 'Journal · Emploi',
  h1: 'Automatiser sans licencier. <span style="color:var(--grey-4);font-weight:300;">Ce que la phrase engage, et ce qu’elle ne couvre pas.</span>',
  cta: 'service-fr',
  published: '2026-08-04',
  body: [
    { lead: 'C’est la question qui vient en deuxième, jamais en premier, et presque toujours à voix plus basse : est-ce que ça veut dire supprimer des postes. Elle mérite une réponse chiffrée plutôt qu’une réassurance. Voici la nôtre — ce qu’elle couvre, et l’endroit précis où l’engagement cesse d’être honnête.' },

    { h: 'Pourquoi la question pèse plus lourd ici' },
    'Selon la synthèse annuelle de l’emploi de l’ISEE, le secteur privé de Kanaky (Nouvelle-Calédonie) comptait 55 880 salariés en 2025 : 4 050 de moins qu’un an plus tôt, soit un recul de 7 %, et 13 200 de moins qu’il y a deux ans. Tous secteurs confondus, les 77 120 salariés recensés ramènent le territoire sous son niveau de 2008. La construction cède 13 % en un an et touche son plus bas depuis trente ans ; l’industrie perd 11,8 %. Les employeurs privés ne sont plus que 9 140, en baisse de 15 % sur deux ans.',
    'Une entreprise qui tient debout dans ces conditions n’a pas un problème de sureffectif : elle a un problème de charge. Les mêmes commandes avec une équipe amputée, et personne à qui confier ce que plus personne ne fait. Le même ISEE relève un recul de 34 % des ruptures de contrats : la phase de réduction s’essouffle, elle ne s’étend pas.',

    { h: 'Ce que les données disent de l’effet sur l’emploi' },
    'Le Bureau international du travail a publié le 20 mai 2025 une mise à jour de son indice mondial d’exposition professionnelle à l’IA générative. Un emploi sur quatre dans le monde présente une exposition, très inégalement répartie : 34 % dans les pays à revenu élevé contre 11 % dans les pays à faible revenu. La conclusion des auteurs est explicite : peu d’emplois se composent de tâches entièrement automatisables par la technologie actuelle, et la transformation des postes reste l’effet le plus probable. Leur inquiétude porte sur la qualité des emplois plus que sur leur disparition.',
    'Une mesure directe existe aussi, et elle est danoise. Anders Humlum et Emilie Vestergaard ont apparié deux enquêtes d’adoption aux registres administratifs de l’emploi : 25 000 salariés, 7 000 établissements, onze métiers parmi les plus exposés. Le gain de temps moyen s’établit à 2,8 %. Sur les salaires et les heures déclarées, aucun effet significatif dans aucun des onze métiers, avec des intervalles excluant un effet supérieur à 1 %.',

    { h: 'L’arithmétique, sur une entreprise de six personnes' },
    'Six personnes à 39 heures représentent 234 heures par semaine. Supprimer un poste suppose d’en libérer 39, soit un sixième du total. Le gain diffus mesuré au Danemark en libère 6,5. Il faudrait six fois l’effet observé pour que la question de l’effectif se pose seulement.',
    'L’objection est juste, et il vaut mieux la formuler soi-même : cette moyenne porte sur l’usage général d’un assistant conversationnel, pas sur l’automatisation ciblée d’un processus. Sur une tâche unique et répétée — relancer les impayés, sortir un devis, trier les demandes — on ne gagne pas 3 % mais 70 ou 80 %. C’est exactement ce que nous vendons. Seulement cette tâche ne constitue presque jamais un emploi entier : elle fait quatre heures par semaine chez trois personnes.',
    'Cette dispersion est le fait central, et le plus souvent tu. Un gain concentré sur un processus se répartit sur plusieurs fiches de poste, et il en faut un nombre considérable pour qu’il se recompose en un poste entier. Une entreprise de six personnes n’a pas ce nombre de processus ; une de deux cents, oui — et [le calcul](/combien-coute-automatisation-ia/) n’y obéit pas à la même logique.',

    { h: 'Les trois cas, et celui où le discours dérape' },
    { table: {
      minWidth: 660,
      head: ['Ce qui arrive', 'Effet sur l’effectif', 'Ce qu’il faut dire'],
      rows: [
        ['Réaffectation. Les heures libérées vont à un travail nommé d’avance : rappeler les devis sans réponse, ouvrir un créneau le samedi.', 'Aucun', 'Lequel, précisément, et avant de commencer.'],
        ['Non-remplacement. Personne n’est licencié ; un départ volontaire n’est pas remplacé, six ou dix mois plus tard.', 'Il baisse', 'Que c’est un choix. Ici « sans licencier » devient techniquement exact et pratiquement trompeur.'],
        ['Suppression de poste. Le poste disparaît parce que son contenu a disparu.', 'Il baisse', 'Le mot juste, et la procédure qui va avec.'],
      ],
    }},
    'Le deuxième cas est le seul intéressant : c’est le seul où la formule tient sans être vraie. Il est fréquent, légal et souvent raisonnable. Ce qui ne l’est pas, c’est d’y arriver en ayant laissé croire au premier.',

    { h: 'Ce que la loi calédonienne impose déjà' },
    'Le code du travail de Nouvelle-Calédonie range les mutations technologiques parmi les motifs économiques recevables, aux articles Lp. 122-9 et suivants : automatiser peut légalement fonder un licenciement. Mais la procédure impose l’entretien préalable, l’information des délégués du personnel — ou, à défaut, du directeur du travail — et une lettre motivée énonçant les recherches menées. Selon la Direction du travail et de l’emploi, un licenciement économique dont le reclassement n’a pas été sérieusement recherché est privé de cause réelle et sérieuse.',
    'Ce cadre n’est pas un bouclier mais une discipline : il oblige à écrire ce qui a été tenté avant de supprimer. Une direction incapable de produire cet écrit n’a pas un problème d’outillage.',

    { h: 'La version tenable de l’engagement' },
    { steps: [
      'Nommer le processus, jamais la personne. « Le devis part en moins de deux heures » est un objectif de processus ; « tenir l’accueil à deux » est un objectif d’effectif. Les deux se défendent, aucun ne se déguise en l’autre.',
      'Écrire d’avance la destination des heures libérées, avec une tâche et un volume. Sans destination, elles retournent à la boîte de réception en trois semaines.',
      'Fixer la durée d’observation avant toute décision d’effectif — un trimestre — et l’annoncer au démarrage. Une équipe qui découvre la règle après coup a raison de se méfier de la suivante.',
      'Confier le réglage aux personnes dont il modifie le travail. Un outil imposé par-dessus est éteint en deux mois.',
      'Si la conclusion reste qu’un poste ne se justifie plus, quitter le vocabulaire de l’automatisation pour celui de la procédure. [Cadrer en amont](/commencer-avec-ia-entreprise/) évite de trancher sous contrainte.',
    ] },

    { h: 'Le cas où la réponse honnête est non' },
    'Une entreprise dont le carnet de commandes s’est effondré porte une masse salariale calibrée pour un volume disparu. L’automatisation y rend de la capacité à une équipe qui en a déjà trop : le problème est commercial, et le traiter par la technologie revient à financer un contournement. Ça se dit en cadrage, pas une fois le devis signé.',

    { note: 'La question à poser à un prestataire tient en une phrase : que suis-je censé faire des heures que vous me rendez. Sans réponse, ce n’est pas de l’automatisation qu’il vend — c’est une réduction d’effectif sans le nommer, en vous laissant porter la procédure et la conversation avec l’équipe. Autant les décider avant la signature.' },
  ],
  faq: [
    { q: 'Automatiser conduit-il mécaniquement à supprimer des postes ?', a: 'Les données disponibles ne le montrent pas à l’échelle où travaillent la plupart des entreprises du territoire. L’étude danoise de Humlum et Vestergaard, portant sur 25 000 salariés et 7 000 établissements dans onze métiers exposés, mesure un gain de temps moyen de 2,8 % et aucun effet significatif sur les salaires ou les heures. Le Bureau international du travail conclut de son côté que peu d’emplois sont entièrement automatisables et que la transformation des postes reste l’effet le plus probable. La suppression de poste est une décision de gestion, pas une conséquence de l’outil.' },
    { q: 'Peut-on licencier pour motif économique en invoquant l’automatisation en Nouvelle-Calédonie ?', a: 'Oui. Le code du travail de Nouvelle-Calédonie range les mutations technologiques parmi les motifs économiques recevables, aux articles Lp. 122-9 et suivants. La procédure reste entière : entretien préalable, information des délégués du personnel ou à défaut du directeur du travail, lettre motivée. L’employeur doit surtout démontrer qu’il a sérieusement cherché à reclasser le salarié dans l’entreprise ; à défaut, le licenciement est privé de cause réelle et sérieuse.' },
    { q: 'Ne pas remplacer un départ, est-ce vraiment « automatiser sans licencier » ?', a: 'Techniquement oui, et c’est là que la formule devient trompeuse. Aucune procédure n’est engagée, aucun salarié ne perd son emploi, mais l’effectif baisse et la charge se redistribue sur ceux qui restent. C’est un choix parfaitement défendable dans un marché qui a perdu 13 200 emplois privés en deux ans. Il devient malhonnête seulement quand on l’a présenté à l’équipe comme une simple libération de temps.' },
    { q: 'Comment savoir si les heures libérées ont vraiment servi à quelque chose ?', a: 'En leur ayant donné une destination écrite avant le démarrage, avec une tâche identifiée et un volume attendu. Sans cela, la capacité rendue se dissipe dans les interruptions ordinaires et personne ne peut dire, trois mois plus tard, si le système a produit un effet. C’est la cause la plus fréquente des automatisations jugées décevantes : elles fonctionnaient, mais rien n’avait été prévu pour recevoir ce qu’elles rendaient.' },
  ],
  related: [
    ['/automatiser-ou-embaucher/', 'Automatiser ou embaucher : la comparaison chiffrée'],
    ['/exemples-automatisation-pme/', 'Exemples concrets d’automatisation en PME'],
    ['/automatisation-ia-nouvelle-caledonie/', 'L’automatisation par l’IA en Nouvelle-Calédonie'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Automatiser sans licencier : ce que la phrase engage vraiment, chiffres à l’appui',
    datePublished: '2026-08-04',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'automating-without-layoffs',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/automatiser-sans-licencier/' },
  title: 'Automating Without Layoffs — What the Promise Actually Covers',
  description: 'A Danish study of 25,000 workers found average time savings of 2.8% and no measurable effect on hours or pay. Here is the arithmetic on a six-person firm, what New Zealand law already requires of a restructure, and the exact point where "no redundancies" stops being an honest sentence.',
  keywords: 'automating without layoffs, AI job losses small business, does automation cause redundancies, restructuring consultation New Zealand, AI and employment Pacific, automation headcount small firm',
  eyebrow: 'Journal',
  short: 'Journal · Jobs',
  h1: 'Automating without layoffs. <span style="color:var(--grey-4);font-weight:300;">What the promise covers, and where it stops.</span>',
  cta: 'service',
  published: '2026-08-04',
  body: [
    { lead: 'It is the second question, never the first, and it usually arrives at lower volume: does this mean jobs go. It deserves arithmetic rather than reassurance. Here is ours — what the promise genuinely covers, and the precise point, three steps into the reasoning, where it stops being an honest sentence.' },

    { h: 'Why the question is heavier in this part of the world' },
    'The reason to take it seriously is regional and recent. According to the annual employment summary from ISEE, the statistics institute of Kanaky (New Caledonia), private-sector employment there stood at 55,880 in 2025 — down 4,050 in a year, a fall of 7 percent, and 13,200 below where it was two years earlier. Total salaried employment, 77,120 people, has dropped below its 2008 level. Construction shed 13 percent in twelve months and sits at a thirty-year low. Private employers now number 9,140, down 15 percent over two years.',
    'Nothing in New Zealand looks like that. But the firm that survives such a contraction has the shape most small businesses already have: the same order book, fewer hands, and no one left to hand the overflow to. That is the real starting position, and it changes what the word "automation" is being asked to do.',

    { h: 'What the evidence shows about employment' },
    'On 20 May 2025 the International Labour Organization published an update to its global index of occupational exposure to generative AI. One job in four worldwide carries some exposure, distributed very unevenly: 34 percent in high-income countries against 11 percent in low-income ones. The authors are direct about the consequence — few jobs consist of tasks that are fully automatable with current technology, and transformation of roles remains the likeliest outcome. Their stated worry is job quality rather than job disappearance.',
    'There is also a direct measurement, and it is Danish. Anders Humlum and Emilie Vestergaard linked two large adoption surveys to Denmark\'s administrative employment records: 25,000 workers, 7,000 workplaces, eleven of the most exposed occupations. Average time saved came to 2.8 percent. On earnings and recorded hours they found no significant effect anywhere, with confidence intervals ruling out anything larger than 1 percent.',

    { h: 'The arithmetic on a six-person firm' },
    'Six people at 39 hours is 234 hours a week. Removing a role means freeing 39 of them, a sixth of the total. The diffuse gain measured in Denmark frees 6.5. You would need six times the observed effect before headcount became a question at all.',
    'The objection is fair, and better made here than left to someone else: that average covers general use of a chat assistant, not targeted automation of a defined process. On a single repeated task — chasing unpaid invoices, producing a quote, triaging enquiries — the saving is not 3 percent but 70 or 80. That is true, and it is precisely what we sell. What it is not is a whole job. It is four hours a week spread across three people.',
    'That dispersion is the central fact and the one most often left out. A gain concentrated on one process lands across several job descriptions, and it takes a great many automated processes before the fragments reassemble into a full role. A six-person firm does not have that many. A two-hundred-person firm does, and [the same work](/business-process-automation/) answers to a different logic there.',

    { h: 'Three outcomes, and the one where the language slips' },
    { table: {
      minWidth: 660,
      head: ['What happens', 'Effect on headcount', 'What has to be said'],
      rows: [
        ['Reallocation. The freed hours go to work named in advance: calling back quotes that went quiet, opening a Saturday slot.', 'None', 'Which work, specifically, and before the build starts.'],
        ['Non-replacement. Nobody is made redundant; somebody resigns six or ten months later and is not replaced.', 'It falls', 'That this is a decision. Here "no layoffs" is technically accurate and practically misleading.'],
        ['Disestablishment. The role goes because its contents went.', 'It falls', 'The correct word, and the process that attaches to it.'],
      ],
    }},
    'The second row is the only interesting one: it is the only case where the phrase holds up without being true. It is common, lawful and frequently sensible. What is not sensible is arriving there having let everyone believe in the first row.',

    { h: 'What New Zealand law already requires' },
    'Restructuring on the back of new technology is lawful here, and nobody needs permission to consider it. What the Employment Relations Act 2000 requires is a genuine business reason and a good-faith process around it: giving affected employees the information the proposal actually rests on, inviting feedback before any decision is made, considering it properly, and looking at redeployment inside the business before any employment ends. A decision taken first and consulted on afterwards is the standard way employers lose these cases.',
    'That framework is not a shield but a discipline, and a useful one: it forces the reasoning onto paper before the outcome is fixed. An owner who cannot write down what was tried has a management problem, not a tooling problem.',

    { h: 'The version of the commitment that holds' },
    { steps: [
      'Name the process, never the person. "Quotes go out inside two hours" is a process target; "run reception with two people" is a headcount target. Both are defensible. Neither should be dressed as the other.',
      'Write down where the freed hours go, with a named task and an expected volume, before anything is built. Without a destination they are reabsorbed by the inbox within three weeks.',
      'Set the observation window before any headcount decision — one quarter — and say so at the start. A team that learns the rule afterwards is right to distrust the next one.',
      'Let the people whose work changes do the tuning. A tool imposed over a team is switched off within two months.',
      'If the conclusion is still that a role no longer stands up, drop the language of automation and pick up the language of process. [An hour of scoping](/ai-audit/) stops that decision being made under pressure.',
    ] },

    { h: 'When the honest answer is no' },
    'A firm whose order book has collapsed carries a payroll sized for volume that no longer exists. Automation there hands spare capacity to a team that already has too much: the problem is commercial, and treating it with technology funds an elaborate way of not deciding. That belongs in the scoping hour, not once the invoice exists.',

    { note: 'The question worth putting to any supplier fits in one line: what am I meant to do with the hours you hand back. If there is no answer, they are not selling automation. They are selling a headcount reduction without naming it, and leaving you to carry both the process and the conversation with your team. Better decided before signing than after.' },
  ],
  faq: [
    { q: 'Does automating a small business inevitably cost jobs?', a: 'The available evidence does not show that at the scale most small firms operate. The Danish study by Humlum and Vestergaard, covering 25,000 workers and 7,000 workplaces across eleven exposed occupations, measured average time savings of 2.8 percent and no significant effect on earnings or recorded hours. The International Labour Organization concludes separately that few jobs are fully automatable and that role transformation is the likelier outcome. Cutting a role is a management decision, not a consequence of the tool.' },
    { q: 'Can I make someone redundant in New Zealand because a system now does their work?', a: 'Yes, provided there is a genuine business reason and the process is run in good faith under the Employment Relations Act 2000. That means giving affected employees the information the proposal relies on, seeking and genuinely considering their feedback before deciding, and looking at redeployment within the business first. Employers who lose these cases usually lose on process rather than on the underlying commercial logic.' },
    { q: 'Is not replacing someone who leaves really "automating without layoffs"?', a: 'Technically yes, and that is where the phrase becomes misleading. No process is run, nobody loses a job, but headcount falls and the remaining work redistributes onto the people still there. It is a perfectly defensible choice. It only becomes dishonest when the team was told the project was about freeing up time and nothing else.' },
    { q: 'How do I know whether the freed hours were actually worth anything?', a: 'By giving them a written destination before the build starts, with a named task and an expected volume. Without that, the recovered capacity dissolves into ordinary interruptions and nobody can say three months later whether the system achieved anything. This is the most common reason automations get written off as disappointing: they worked, but nothing had been set up to receive what they gave back.' },
  ],
  related: [
    ['/ai-vs-hiring/', 'AI versus hiring: the honest comparison'],
    ['/workflow-automation-examples/', 'Workflow automation examples that pay for themselves'],
    ['/ai-audit/', 'Book a free AI opportunity audit'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Automating Without Layoffs — What the Promise Actually Covers',
    datePublished: '2026-08-04',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'ia-locale-en-cinq-minutes',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/local-ai-on-a-normal-computer/' },
  title: 'L’IA locale expliquée simplement : ce qui tourne sur un ordinateur normal en 2026',
  description: 'La règle « un paramètre, un octet de mémoire » ne tient plus depuis mars 2026. Mistral Small 4 : 119 milliards de paramètres, 6,5 milliards actifs, et soixante gigaoctets à charger. Pourquoi mémoire et vitesse sont devenues deux questions distinctes, et ce que ça change pour une PME.',
  keywords: 'IA locale entreprise, faire tourner un modèle IA en local, IA sans connexion internet PME, mémoire vive modèle IA, Mistral Small 4 poids ouverts, modèle IA sur ordinateur portable, IA locale Nouvelle-Calédonie',
  eyebrow: 'Journal',
  short: 'Journal · IA locale',
  h1: 'L’IA locale, en cinq minutes. <span style="color:var(--grey-4);font-weight:300;">Ce qui tourne sur la machine que vous avez déjà.</span>',
  cta: 'service-fr',
  published: '2026-08-03',
  body: [
    { lead: 'Un dirigeant qui pose la question n’a pas cinq minutes à perdre en vocabulaire. Voici donc la version courte, avec une seule chose à retenir avant de signer un devis matériel : depuis le printemps 2026, « est-ce que ça tourne sur ma machine ? » n’a plus une réponse mais deux. Les confondre est aujourd’hui la façon la plus répandue d’acheter le mauvais ordinateur.' },

    { h: 'Ce que c’est, sans vocabulaire' },
    'Un modèle d’IA est un fichier. Un très gros fichier de chiffres, téléchargé une fois, qu’un petit programme lit pour produire du texte. C’est tout. Pas d’abonnement, pas de compte, pas de liaison permanente : une fois le fichier sur le disque, on peut débrancher le câble réseau et le modèle continue de répondre.',
    'La conséquence tient en une phrase. Ce que vous lui donnez à lire ne part nulle part — ni le contrat, ni le fichier clients, ni la comptabilité, ni le dossier d’un salarié. Pour une bonne partie des métiers, ce n’est pas un raffinement : c’est la seule configuration dans laquelle on accepte de montrer les vrais documents à une machine.',

    { h: 'La règle de calcul qui a changé cette année' },
    'Pendant trois ans, la règle du pouce était commode : un modèle réclame à peu près autant de gigaoctets de mémoire vive que son nombre de milliards de paramètres, une fois compressé. Nous l’avons écrite telle quelle sur notre propre [page matériel](/local-llm-hardware-requirements/). Elle est devenue incomplète, et il vaut mieux le dire ici que laisser quelqu’un s’en apercevoir après l’achat.',
    'Ce qui l’a cassée porte un nom qu’il est inutile de retenir — mélange d’experts — mais dont l’effet se lit sur une facture. Prenez Mistral Small 4, publié le 16 mars 2026 par l’éditeur parisien, poids téléchargeables sous licence Apache 2.0 : **119 milliards de paramètres au total, dont 6,5 milliards seulement travaillent à chaque réponse.** Le modèle a donc la vitesse d’un petit modèle et l’encombrement d’un très gros. Compressé en 4 bits, son fichier réclame de l’ordre de soixante gigaoctets de mémoire pour être chargé. Le mot « Small » de son nom ne parle pas de votre ordinateur.',
    'D’où les deux réponses, et c’est la seule phrase technique de cet article : **la mémoire suit le nombre total de paramètres, la vitesse suit le nombre actif.** Quelqu’un qui vous vante un modèle rapide ne vous a rien dit sur la machine qu’il faut pour le tenir en mémoire. C’est très exactement l’endroit où les budgets dérapent.',

    { table: {
      minWidth: 640,
      head: ['Mémoire de la machine', 'Ce qui tient dedans, compressé en 4 bits', 'Ce que ça fait, honnêtement'],
      rows: [
        ['8 Go', 'Modèles de 3 à 4 milliards de paramètres', 'Résumer, classer, extraire. Rédaction courte correcte.'],
        ['16 Go', 'Modèles de 7 à 8 milliards', 'Le point d’entrée réaliste. Couvre l’essentiel du travail de bureau.'],
        ['32 Go', 'Modèles de 12 à 14 milliards, contexte confortable', 'Nettement meilleur sur les documents longs et le français soutenu.'],
        ['64 Go et plus', 'Les grands modèles ouverts, mélange d’experts compris', 'Le plus proche du cloud qu’on puisse tenir chez soi.'],
      ],
    }},

    'La colonne du milieu est de l’arithmétique, pas une opinion : un paramètre compressé en 4 bits pèse un demi-octet, le reste est de la place pour le texte en cours de traitement. La colonne de droite, elle, n’est pas de l’arithmétique — et c’est pourtant la seule qui décide de quelque chose.',

    { h: 'Ce qu’un modèle de huit milliards fait vraiment' },
    'Sur une machine de 16 Go que vous possédez déjà, un modèle de cette taille lit un contrat de quarante pages et en ressort les échéances et les pénalités. Il trie deux cents courriels par urgence. Il rédige la première version d’une réponse, d’un compte rendu, d’une traduction. Il retrouve, dans vos propres devis, ce qui avait été facturé sur un chantier comparable. Ce sont des tâches ennuyeuses et fréquentes, et c’est là que la gratuité par exécution pèse : en local, la deux-centième réponse coûte le même prix que la première, c’est-à-dire rien.',
    'Ce qu’il ne fait pas mérite la même netteté. Il se trompe sur les raisonnements longs et sur les calculs. Il ignore tout de ce qui s’est passé après son entraînement. Il invente des références avec le même aplomb qu’il en cite des vraies. Un modèle local supprime la page blanche, pas la relecture — et surtout pas la responsabilité de ce qui sort signé de votre entreprise.',

    { h: 'Le français n’est pas un détail de confort' },
    'Pour une entreprise de Kanaky (Nouvelle-Calédonie), de Wallis ou de Polynésie, le rang d’un modèle sur des tests anglophones dit peu de chose de ce qu’il vaudra sur un courrier administratif en français. Les modèles européens ouverts sont ici l’option sérieuse : Mistral publie ses poids et destine explicitement sa famille Les Ministraux aux appareils du bord, ordinateurs personnels et téléphones compris. Interrogé par TechCrunch le 4 juillet 2026, son dirigeant Arthur Mensch annonçait un nouveau modèle à poids ouverts pour l’été, avec un accès anticipé dès juillet. Selon Artificial Analysis, Mistral Small 4 obtient 20 sur son indice d’intelligence, contre une médiane de 9 pour les modèles ouverts de sa catégorie.',
    'Le test qui compte ne figure dans aucun classement. Prenez trois documents réellement produits par votre entreprise, en français, et regardez ce que le modèle en fait. Un score publié par un laboratoire ne saura jamais si l’outil comprend la formulation d’un bon de commande calédonien.',

    { h: 'Les cinq minutes, concrètement' },
    { steps: [
      'Installez Ollama sur la machine que vous avez. Une commande, gratuit, et réversible : la désinstallation ne laisse rien derrière elle.',
      'Téléchargez un seul modèle de 7 à 8 milliards de paramètres. Un seul. La tentation d’en essayer six fait perdre la semaine et ne conclut rien.',
      'Donnez-lui du vrai travail pendant cinq jours : vos documents, vos courriers, vos devis. Pas des questions posées pour l’éprouver.',
      'Tenez deux colonnes, « assez bon » et « pas assez bon ». C’est le seul livrable de la semaine, et il vaut plus que n’importe quel comparatif en ligne.',
      'Alors seulement, décidez s’il faut acheter du matériel. [Une heure de cadrage](/commencer-avec-ia-entreprise/) suffit généralement à trancher, et souvent la réponse est non.',
    ] },

    { h: 'Quand la réponse est non' },
    'Trois cas où monter tout ça n’a aucun sens, et où un abonnement cloud reste le bon choix. Si le volume est faible — quelques dizaines de demandes par mois — le matériel ne s’amortira jamais, et l’arithmétique est sans appel. Si vos données n’ont rien de particulièrement sensible, vous payez une confidentialité dont vous n’avez pas l’usage. Et si personne dans l’entreprise n’a envie de s’occuper d’une machine, le système finira éteint dans un placard au bout de deux mois : ce n’est pas un problème de technologie, et aucun matériel ne le corrige.',

    { note: 'La question à poser à quiconque vous vend de l’IA locale tient en deux temps, et se pose avant le devis : combien de paramètres au total, et combien actifs à chaque réponse. Le premier chiffre dit la mémoire qu’il faut acheter. Le second dit la vitesse que vous aurez. Un fournisseur qui ne donne que le second vous montre une démonstration, pas un système.' },
  ],
  faq: [
    { q: 'Combien de mémoire faut-il vraiment pour faire tourner un modèle en local ?', a: 'Comptez un demi-octet par paramètre pour un modèle compressé en 4 bits, plus une réserve pour le texte en cours de traitement. Un modèle de 8 milliards de paramètres occupe donc environ 5 à 6 Go et tient confortablement dans une machine de 16 Go, ce qui correspond à beaucoup d’ordinateurs de bureau déjà en service. En dessous de 8 Go de mémoire, il reste possible de faire tourner de très petits modèles, mais l’écart de qualité se sent immédiatement sur du travail réel.' },
    { q: 'Pourquoi un modèle appelé « Small » peut-il réclamer soixante gigaoctets ?', a: 'Parce que « small » qualifie désormais le nombre de paramètres qui travaillent à chaque réponse, pas la taille du fichier à charger. Mistral Small 4, publié le 16 mars 2026, totalise 119 milliards de paramètres dont 6,5 milliards seulement sont actifs à chaque requête : il répond vite comme un petit modèle, mais l’intégralité des poids doit tenir en mémoire, soit une soixantaine de gigaoctets une fois compressée en 4 bits. C’est la distinction à vérifier avant tout achat de matériel.' },
    { q: 'Un modèle local fonctionne-t-il vraiment sans connexion internet ?', a: 'Oui, complètement, une fois le fichier téléchargé. C’est la propriété qui distingue le plus nettement le local du cloud, et elle compte particulièrement dans un territoire dont la connectivité dépend d’un câble sous-marin. Ce qui continue d’exiger une connexion, ce sont les mises à jour du modèle et tout ce que vous branchez autour — messagerie, agenda, outils tiers. Le modèle lui-même, non.' },
    { q: 'Existe-t-il des modèles ouverts vraiment bons en français ?', a: 'Oui, et c’est aujourd’hui l’argument le plus solide en faveur des modèles européens pour une entreprise francophone du Pacifique. Mistral publie des poids téléchargeables, sous licence Apache 2.0 pour Mistral Small 4, et destine sa famille Les Ministraux aux appareils personnels. Reste que le classement d’un modèle sur des tests anglophones ne vous dit presque rien : la seule vérification qui vaille consiste à lui soumettre trois de vos propres documents en français et à juger le résultat.' },
  ],
  related: [
    ['/ia-locale-entreprise/', 'L’IA en local : le guide pratique complet'],
    ['/combien-coute-automatisation-ia/', 'Combien coûte vraiment une automatisation'],
    ['/commencer-avec-ia-entreprise/', 'Par où commencer avec l’IA dans votre entreprise'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'L’IA locale expliquée simplement : ce qui tourne sur un ordinateur normal en 2026',
    datePublished: '2026-08-03',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'local-ai-on-a-normal-computer',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/ia-locale-en-cinq-minutes/' },
  title: 'Local AI for Small Firms — What Actually Runs on a Normal Computer in 2026',
  description: 'The rule of thumb that a model needs roughly its parameter count in gigabytes stopped holding in March 2026. Mistral Small 4 carries 119 billion parameters and activates 6.5 billion. Why memory and speed are now two separate questions, and what a small firm should buy.',
  keywords: 'local AI small business, run LLM on laptop 2026, local model memory requirements, mixture of experts memory, Mistral Small 4 open weights, offline AI business, local AI Pacific',
  eyebrow: 'Journal',
  short: 'Journal · Local AI',
  h1: 'Local AI, in five minutes. <span style="color:var(--grey-4);font-weight:300;">What actually runs on the machine you already own.</span>',
  cta: 'service',
  published: '2026-08-03',
  body: [
    { lead: 'An owner asking this question has no interest in vocabulary, so here is the short version — with one thing worth knowing before any hardware quote gets signed. Since the spring of 2026, "will it run on my machine?" no longer has one answer. It has two, and confusing them has become the most common way to buy the wrong computer.' },

    { h: 'What it is, without the jargon' },
    'A model is a file. A very large file of numbers, downloaded once, which a small program reads in order to produce text. That is the whole of it. No subscription, no account, no permanent connection: once the file is on the disk you can unplug the network cable and it keeps answering.',
    'The consequence fits in a sentence. Whatever you hand it to read goes nowhere — not the contract, not the client list, not the accounts, not an employee file. For a good number of trades that is not a refinement. It is the only arrangement under which anyone is willing to show a machine the real documents, and showing it the real documents is where nearly all the value sits.',

    { h: 'The arithmetic that changed this year' },
    'For three years the rule of thumb was convenient: a model wants roughly as many gigabytes of memory as it has billions of parameters, once compressed. We wrote it that way on our own [hardware page](/local-llm-hardware-requirements/). It has become incomplete, and it is better said here than discovered after the purchase order.',
    'What broke it has a name not worth memorising — mixture of experts — and an effect that shows up on an invoice. Take Mistral Small 4, released on 16 March 2026 by the Paris company with downloadable weights under an Apache 2.0 licence: **119 billion parameters in total, of which only 6.5 billion do any work on a given response.** It therefore has the speed of a small model and the footprint of a very large one. Compressed to 4 bits, the file wants something in the order of sixty gigabytes of memory to load. The word "Small" in the name is not describing your computer.',
    'Hence the two answers, and this is the only technical sentence in the piece: **memory follows the total parameter count, speed follows the active one.** Anyone praising a model for being fast has told you nothing about the machine required to hold it. That gap is precisely where hardware budgets go wrong.',

    { table: {
      minWidth: 640,
      head: ['Memory in the machine', 'What fits, compressed to 4 bits', 'What it honestly does'],
      rows: [
        ['8GB', 'Models of 3 to 4 billion parameters', 'Summarising, sorting, extracting. Decent short drafting.'],
        ['16GB', 'Models of 7 to 8 billion', 'The realistic entry point. Covers most desk work.'],
        ['32GB', '12 to 14 billion, with comfortable context', 'Markedly better on long documents and formal register.'],
        ['64GB and up', 'Large open-weight models, mixture-of-experts included', 'The closest thing to cloud quality you can keep in the building.'],
      ],
    }},

    'The middle column is arithmetic rather than opinion: a parameter compressed to 4 bits weighs half a byte, and the remainder is room for the text being worked on. The right-hand column is not arithmetic — and it is the only one that decides anything.',

    { h: 'What an eight-billion model actually does' },
    'On a 16GB machine you already own, a model that size reads a forty-page contract and returns the dates and the penalty clauses. It sorts two hundred emails by urgency. It writes the first version of a reply, a set of minutes, a translation. It finds, in your own past quotes, what was charged on a comparable job. These are dull, frequent tasks, and that is where free-per-run matters: locally, the two-hundredth answer costs exactly what the first one did, which is nothing.',
    'What it does not do deserves the same directness. It gets long chains of reasoning wrong, and arithmetic wrong more often than that. It knows nothing of what happened after it was trained. It invents citations with the same composure it uses for real ones. A local model removes the blank page. It does not remove the read-through, and it certainly does not remove responsibility for what leaves your business with your name on it.',

    { h: 'Language is not a comfort feature' },
    'For a firm in Kanaky (New Caledonia), Vanuatu or Fiji, a model\'s ranking on English-language tests says little about what it is worth on the correspondence you actually send. Where the work is bilingual, European open-weight models are the serious option: Mistral publishes its weights and aims its Les Ministraux family explicitly at edge devices, personal computers and phones included. Speaking to TechCrunch on 4 July 2026, chief executive Arthur Mensch flagged a further open-weight model for the summer with early access opening in July. Artificial Analysis scores Mistral Small 4 at 20 on its intelligence index, against a median of 9 for open-weight models in the same class.',
    'The test that counts appears in no league table. Take three documents your business genuinely produced and see what the model makes of them. A benchmark run in a laboratory will never tell you whether the thing understands how a purchase order is worded here.',

    { h: 'The five minutes, in practice' },
    { steps: [
      'Install Ollama on the machine you already have. One command, free, and reversible — uninstalling leaves nothing behind.',
      'Download exactly one model in the 7 to 8 billion range. One. The urge to try six of them costs a week and concludes nothing.',
      'Give it real work for five days: your documents, your correspondence, your quotes. Not questions designed to test it.',
      'Keep two columns, "good enough" and "not good enough". That list is the only deliverable of the week, and it is worth more than any comparison article online.',
      'Only then decide whether hardware is warranted. [An hour of scoping](/ai-audit/) usually settles it, and the answer is often no.',
    ] },

    { h: 'When the answer is no' },
    'Three cases where building this makes no sense and a cloud subscription remains the right call. If the volume is low — a few dozen requests a month — the hardware will never pay itself back, and the arithmetic is not close. If your data is not particularly sensitive, you are buying privacy you have no use for. And if nobody in the business wants to look after a machine, the system will be switched off in a cupboard within two months. That is not a technology problem, and no amount of hardware fixes it.',

    { note: 'The question to put to anyone selling you local AI comes in two parts, and it comes before the quote: how many parameters in total, and how many active per response. The first number tells you the memory you have to buy. The second tells you the speed you will get. A supplier who offers only the second is showing you a demonstration rather than a system.' },
  ],
  faq: [
    { q: 'How much memory do I need to run a model locally?', a: 'Budget half a byte per parameter for a model compressed to 4 bits, plus headroom for the text being processed. An 8-billion-parameter model therefore occupies about 5 to 6GB and sits comfortably in a 16GB machine, which describes a great many computers already in service. Below 8GB you can still run very small models, but the drop in quality is obvious within a day of real work.' },
    { q: 'Why does a model called "Small" need sixty gigabytes?', a: 'Because "small" now refers to how many parameters work on each response, not to the size of the file you have to load. Mistral Small 4, released on 16 March 2026, holds 119 billion parameters of which only 6.5 billion are active per request: it answers with the speed of a small model, but the full set of weights must fit in memory, which is roughly sixty gigabytes once compressed to 4 bits. That distinction is the thing to check before buying any hardware.' },
    { q: 'Does a local model really work without an internet connection?', a: 'Yes, entirely, once the file is downloaded. It is the property that separates local from cloud most sharply, and it matters more in a territory whose connectivity depends on a single submarine cable. What still needs a connection is updating the model and anything you wire around it — mail, calendars, third-party tools. The model itself does not.' },
    { q: 'Which open-weight models handle languages other than English well?', a: 'European releases are currently the strongest argument for local AI in a bilingual business. Mistral publishes downloadable weights, Apache 2.0 in the case of Mistral Small 4, and its Les Ministraux family targets personal devices. That said, a model\'s position in an English-language ranking tells you very little about your case. The only worthwhile check is to feed it three of your own documents in the language you actually work in and judge the output yourself.' },
  ],
  related: [
    ['/local-llm-hardware-requirements/', 'Hardware requirements for local models'],
    ['/local-ai-vs-cloud-ai/', 'Local versus cloud, compared honestly'],
    ['/ai-audit/', 'Book a free AI opportunity audit'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Local AI for Small Firms — What Actually Runs on a Normal Computer in 2026',
    datePublished: '2026-08-03',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'cost-of-an-unanswered-enquiry',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/demande-client-sans-reponse-cout/' },
  title: 'The Real Cost of an Unanswered Enquiry, Measured',
  description: 'Half the speed-to-lead statistics in circulation have no traceable source. Here is what survives a check — Harvard Business Review on 1.25 million leads, Drift on 433 companies — and the three numbers that turn it into your figure rather than someone else\'s.',
  keywords: 'cost of slow lead response, lead response time statistics, unanswered enquiry small business, speed to lead small business, missed enquiries revenue, automate enquiry response small business',
  eyebrow: 'Journal',
  short: 'Journal · Enquiries',
  h1: 'The enquiry nobody answered. <span style="color:var(--grey-4);font-weight:300;">The only lost revenue that leaves no trace.</span>',
  cta: 'service',
  published: '2026-08-02',
  body: [
    { lead: 'An unanswered enquiry costs money and records nothing. It never reaches the accounts, no line item appears against it, and by Friday nobody in the business remembers it existed. That silence is why it is the one loss most owners have never put a figure on — and the figure is calculable. Just not from the statistics the industry keeps circulating, and the difference between those two things is worth more than the number.' },

    { h: 'What survives a look at the sources' },
    'Speed-to-lead research gets quoted constantly and checked rarely. Two claims appear in nearly every vendor deck: that 78 per cent of customers buy from whoever replies first, and that 35 to 50 per cent of sales go to the first vendor to respond. Follow either one back and there is no published methodology at any point — the citations loop between blogs quoting each other. Discard both.',
    'What is left is a smaller set and a considerably more useful one. The 2011 *Harvard Business Review* study by James Oldroyd, Kristina McElheran and David Elkington examined **1.25 million sales leads** across 42 companies: firms attempting contact within an hour were roughly **seven times** as likely to qualify a lead as those trying an hour later, and more than sixty times as likely as those waiting a full day. The same authors audited 2,241 US companies and measured an average first response of **42 hours**, with **23 per cent never responding at all**. Oldroyd\'s earlier work with InsideSales — six companies, 15,000 leads, over 100,000 call attempts — put the odds of actually reaching someone at 100 times higher inside five minutes than at thirty. Drift\'s 2017 secret-shopper test of 433 business software firms found **7 per cent** replying within five minutes and **55 per cent** not replying across five working days. XANT\'s 2021 analysis of 5.7 million inbound leads is the most recent of the set, and reports eight times the conversion inside five minutes.',
    'Now note the dates. Most of that is over a decade old, and much of it was funded by companies selling response software; I would not stake a decision on any single figure in it. What makes the pattern serious is that separate samples, different decades and unrelated industries all point one way, and none point back.',

    { h: 'The multiplier is not your number' },
    'This is where most articles on the subject stop, and where the useful part starts. A seven-times qualification multiplier measured across 42 American companies tells you nothing about what a delay costs in your business. Three numbers do, and you already hold all three: how many enquiries go past a day unanswered, what one converted enquiry is worth, and how far your close rate really differs between the ones answered quickly and the ones answered late.',
    'Multiply them out and something awkward surfaces. The answer is governed by average job value, not by response speed. Identical delay, identical fix, three completely different verdicts.',

    { table: {
      minWidth: 680,
      head: ['Same delay, three businesses', 'Café or small retailer', 'Trades or services firm', 'Charter or tour operator'],
      rows: [
        ['Enquiries a month going past 24 hours', '20', '15', '8'],
        ['Value of one converted enquiry', 'NZ$80', 'NZ$2,400', 'NZ$5,500'],
        ['Conversion gap assumed, fast against slow', '5 points', '10 points', '10 points'],
        ['Extra jobs a year if the gap closes', '12', '18', '10'],
        ['Revenue at stake per year', 'about NZ$960', 'about NZ$43,200', 'about NZ$52,800'],
        ['Worth building a system for?', 'No', 'Yes', 'Without question'],
      ],
    }},

    'Those conversion gaps are assumptions, stated as assumptions — substitute your own and the shape holds. A café losing under a thousand dollars a year to slow replies should not buy anything; the honest advice is to leave it alone. The same delay at the charter operator is worth fifty times more, on fewer enquiries. And convert to gross margin first: NZ$43,200 at a 30 per cent margin is about NZ$13,000 of actual money — still real, no longer dramatic.',

    { h: 'Where enquiries actually die' },
    'Response time is the wrong first question anyway, because the expensive enquiries are not answered slowly — they are never answered. 411 Locals tracked 85 small businesses across 58 industries and found **37.8 per cent** of calls reaching a live person, an equal share going to voicemail and about a quarter simply ringing out. The fieldwork ran from 2013 to 2015 — an order of magnitude, not a current benchmark.',
    'In this region there is a second leak, more specific and easier to fix: the enquiry that lands on a channel nobody owns. The Facebook page message read by whoever last had the login. The WhatsApp thread on a personal phone that goes home at five. The contact form still posting to an address a web developer created three years ago. Those enquiries are not late — they are invisible, and appear in no count of anything. Add the time difference on top: a message sent from Europe or Asia arrives here overnight, and by the time it is read, someone closer has answered it.',

    { h: 'What actually closes the gap' },
    { steps: [
      'Find the channels before you count anything. List every route an enquiry can take into the business, including the ones nobody admits to. Most of the recovery is discovered here, before any tool is involved.',
      'Acknowledge with content, not with a receipt. "We have received your message" resets nothing and everybody knows what it means. A reply carrying a price range, a next step and a named time buys you days of patience, and it is the part a machine drafts well.',
      'Send the second one. Velocify\'s analysis of roughly 3.5 million leads found half were never contacted a second time, while 93 per cent of converted ones were reached by the sixth attempt. It is the cheapest fix available and it requires no technology whatsoever.',
      'Automate the night, not the judgment. Overnight a system can acknowledge, classify by urgency and draft the reply. In the morning a person decides what is worth taking on. [Start by measuring](/ai-audit/) how many enquiries arrived last month and how many got an answer the same day.',
    ] },

    { h: 'When speed is the wrong project' },
    'It would be easy to end there, and dishonest. Fast replies cannot repair a price problem, a reputation problem or an offer nobody wants — answering quicker only gets you to no quicker. There is also a failure mode the vendor decks leave out: an enquiry answered in ninety seconds by a system that then takes four days to produce the quote is worse than a slow, honest reply. Speed at the front of a slow process advertises the slow process.',

    { note: 'The reason this loss goes unmeasured is that it produces no evidence. Nothing arrives, nothing is filed, nothing is missed. The correction is unglamorous and takes about an hour: count last month\'s enquiries by channel, count how many were answered the same day, multiply the gap by what one converted enquiry is worth. Whatever comes out, it is your figure rather than a decade-old multiplier from someone else\'s industry — and if it comes out small, the right decision is to walk away and spend the attention elsewhere.' },
  ],
  faq: [
    { q: 'How fast do I actually need to reply to an enquiry?', a: 'The published research consistently rewards the first hour and rewards the first five minutes disproportionately, but the honest answer for most small businesses is that the gap worth closing is between "same day" and "never", not between five minutes and one hour. Chasing a five-minute response usually means staffing or software; getting every enquiry answered the same working day usually means fixing which channels are monitored. The second one is cheaper and recovers more.' },
    { q: 'Are the famous speed-to-lead statistics reliable?', a: 'Partly. The Harvard Business Review work on 1.25 million leads, the InsideSales call-attempt data and Drift\'s test of 433 companies all have stated samples and methods. The widely quoted claims that 78 per cent of buyers purchase from the first responder, or that 35 to 50 per cent of sales go to the first vendor, have no traceable primary source and should not be used. Most of the credible material is also over ten years old and much of it was vendor-funded, which is why it is better treated as a direction than as a coefficient.' },
    { q: 'How do I calculate what slow replies cost my business?', a: 'Three figures, all of which you already have. Count the enquiries in one recent month that went more than 24 hours without a reply. Take the average value of one enquiry that converts. Estimate, honestly, the difference in close rate between the ones you answer quickly and the ones you do not — five to ten percentage points is a defensible working assumption. Multiply the three, then multiply by your gross margin. If the result does not clear the cost of a fix by a comfortable margin, do not buy the fix.' },
    { q: 'Can this be handled without hiring someone to answer the phone?', a: 'Usually, because the problem is rarely a shortage of people to answer. It is that enquiries arrive on channels with no owner and outside working hours. Routing every channel into one place, sending a useful acknowledgement automatically, and having drafted replies waiting each morning covers most of it. Where a human is genuinely irreplaceable is the judgment call about whether a job is worth taking — and that part should stay where it is.' },
  ],
  related: [
    ['/ai-for-marine-businesses/', 'AI for marine and charter operators — where bookings leak'],
    ['/workflow-automation-examples/', 'Workflow automation examples that hold up'],
    ['/ai-audit/', 'Book a free AI opportunity audit'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'The Real Cost of an Unanswered Enquiry, Measured',
    datePublished: '2026-08-02',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'demande-client-sans-reponse-cout',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/cost-of-an-unanswered-enquiry/' },
  title: 'La demande client restée sans réponse : le coût réel, calculé',
  description: 'La moitié des statistiques sur le délai de réponse commerciale n’a aucune source vérifiable. Ce qui résiste à la vérification — Harvard Business Review sur 1,25 million de demandes, Drift sur 433 entreprises — et les trois chiffres qui donnent le vôtre.',
  keywords: 'délai de réponse demande client, demande client sans réponse, coût réponse tardive prospect, répondre aux demandes clients PME, automatiser réponse demande client, perte de chiffre d’affaires demandes non traitées',
  eyebrow: 'Journal',
  short: 'Journal · Demandes',
  h1: 'La demande à laquelle personne n’a répondu. <span style="color:var(--grey-4);font-weight:300;">La seule perte qui ne laisse aucune trace.</span>',
  cta: 'service-fr',
  published: '2026-08-02',
  body: [
    { lead: 'Une demande client sans réponse coûte de l’argent et n’enregistre rien. Elle n’arrive jamais jusqu’à la comptabilité, aucune ligne ne lui correspond, et le vendredi personne ne se souvient qu’elle a existé. Ce silence explique qu’elle soit la seule perte que presque aucun dirigeant n’a chiffrée — et elle se chiffre. Simplement pas avec les statistiques que le secteur fait circuler, et l’écart entre les deux vaut mieux que le résultat.' },

    { h: 'Ce qui résiste à la vérification des sources' },
    'Les études sur le délai de réponse commerciale sont citées en permanence et vérifiées rarement. Deux affirmations reviennent dans presque tous les argumentaires : 78 % des clients achèteraient à celui qui répond le premier, et 35 à 50 % des ventes iraient au premier fournisseur à répondre. Remontez l’une ou l’autre : aucune méthodologie publiée nulle part, les citations tournant en boucle entre des blogs qui se recopient. À écarter, toutes les deux.',
    'Reste un ensemble plus mince et nettement plus utile. L’étude publiée en 2011 par la *Harvard Business Review*, signée James Oldroyd, Kristina McElheran et David Elkington, porte sur **1,25 million de demandes** dans 42 entreprises : celles qui tentaient un contact dans l’heure avaient environ **sept fois** plus de chances de qualifier la demande que celles qui s’y prenaient une heure plus tard, et plus de soixante fois plus que celles qui attendaient un jour. Les mêmes auteurs ont testé 2 241 entreprises américaines : délai moyen de première réponse **42 heures**, et **23 % qui ne répondaient jamais**. Les travaux antérieurs d’Oldroyd avec InsideSales — six entreprises, 15 000 demandes, plus de 100 000 tentatives d’appel — situent les chances de joindre quelqu’un à 100 fois supérieures dans les cinq premières minutes qu’à trente. Le client mystère de Drift, en 2017, sur 433 éditeurs de logiciels : **7 %** de réponses sous cinq minutes, **55 %** aucune réponse en cinq jours ouvrés. Et l’analyse de XANT en 2021, la plus récente, sur 5,7 millions de demandes entrantes : huit fois le taux de conversion en deçà de cinq minutes.',
    'Regardez maintenant les dates. L’essentiel a plus de dix ans, et une bonne partie a été financée par des vendeurs de logiciels de réponse : je ne fonderais aucune décision sur un chiffre isolé de cet ensemble. Ce qui rend la tendance sérieuse, c’est que des échantillons distincts, à des décennies différentes et dans des secteurs sans rapport, vont tous dans le même sens.',

    { h: 'Le multiplicateur n’est pas votre chiffre' },
    'C’est ici que la plupart des articles s’arrêtent, et ici que commence la partie utile. Un facteur sept mesuré sur 42 entreprises américaines ne dit rien de ce qu’un délai coûte chez vous. Trois chiffres le disent, et vous les détenez déjà : combien de demandes passent la journée sans réponse, ce que vaut une demande transformée, et de combien votre taux de transformation diffère entre celles traitées vite et celles traitées tard.',
    'Posez la multiplication et quelque chose de gênant apparaît : le résultat est commandé par le montant moyen d’une affaire, pas par la vitesse de réponse. Même délai, même correctif, trois verdicts sans rapport.',

    { table: {
      minWidth: 680,
      head: ['Même délai, trois entreprises', 'Commerce de détail', 'Artisan ou prestataire', 'Prestataire nautique'],
      rows: [
        ['Demandes par mois dépassant 24 heures', '20', '15', '8'],
        ['Valeur d’une demande transformée', '6 000 F', '180 000 F', '450 000 F'],
        ['Écart de transformation supposé, vite/tard', '5 points', '10 points', '10 points'],
        ['Affaires gagnées en plus sur l’année', '12', '18', '10'],
        ['Chiffre d’affaires en jeu par an', 'environ 72 000 F', 'environ 3 240 000 F', 'environ 4 320 000 F'],
        ['Faut-il monter un système ?', 'Non', 'Oui', 'Sans hésitation'],
      ],
    }},

    'Ces écarts sont des hypothèses, annoncées comme telles — remplacez-les par les vôtres, la forme du résultat tient. Un commerce qui perd moins de cent mille francs par an sur des réponses tardives ne doit rien acheter : le conseil honnête est de laisser ça tranquille. Le même délai chez le prestataire nautique pèse soixante fois plus, sur moins de demandes. Et ramenez à la marge d’abord : 3,24 millions de francs à 30 % font environ un million de vrai argent — sérieux, plus spectaculaire.',

    { h: 'Là où les demandes meurent vraiment' },
    'Le délai est de toute façon la mauvaise première question : les demandes coûteuses ne sont pas traitées tard, elles ne sont jamais traitées. La société 411 Locals a suivi 85 petites entreprises dans 58 secteurs et relevé **37,8 %** d’appels aboutissant à une personne, autant partant sur messagerie, et près d’un quart sonnant dans le vide. Le relevé date de 2013-2015 : un ordre de grandeur, pas une référence actuelle.',
    'S’y ajoute une fuite plus spécifique, et plus facile à colmater : la demande qui arrive sur un canal qui n’appartient à personne. Le message de la page Facebook, lu par celui qui avait l’identifiant en dernier. Le fil WhatsApp sur un téléphone personnel qui rentre à la maison à dix-sept heures. Le formulaire de contact qui écrit encore à une adresse créée par un prestataire web il y a trois ans. Ces demandes ne sont pas en retard : elles sont invisibles, et n’apparaissent dans aucun décompte. Ajoutez le décalage horaire — parti d’Europe, un message arrive ici la nuit, et quand on le lit, un concurrent plus proche a déjà répondu.',

    { h: 'Ce qui referme réellement l’écart' },
    { steps: [
      'Trouvez les canaux avant de compter. Listez toutes les voies par lesquelles une demande peut entrer dans l’entreprise, y compris celles que personne n’avoue. L’essentiel du gain se découvre là, avant tout outil.',
      'Accusez réception avec du contenu, pas avec un reçu. « Nous avons bien reçu votre message » ne remet aucun compteur à zéro, et tout le monde sait ce que ça veut dire. Une réponse portant une fourchette de prix, une étape suivante et une heure annoncée achète plusieurs jours de patience — la partie qu’une machine rédige bien.',
      'Envoyez la deuxième. L’analyse de Velocify sur environ 3,5 millions de demandes relève que la moitié n’a jamais eu de second contact, alors que 93 % de celles qui se transforment sont jointes au plus tard à la sixième tentative. Le correctif le moins cher qui existe, sans aucune technologie.',
      'Automatisez la nuit, pas le jugement. Un système accuse réception, classe par urgence et prépare le brouillon ; le matin, une personne décide de ce qui vaut la peine d’être pris. [Commencez par mesurer](/commencer-avec-ia-entreprise/) combien de demandes sont arrivées le mois dernier et combien ont eu une réponse le jour même.',
    ] },

    { h: 'Quand la vitesse est le mauvais chantier' },
    'S’arrêter là serait commode et malhonnête. Une réponse rapide ne répare ni un prix, ni une réputation, ni une offre dont personne ne veut : répondre plus vite ne fait qu’arriver plus vite au refus. Il existe aussi un mode d’échec absent des argumentaires : une demande traitée en quatre-vingt-dix secondes par un système qui met ensuite quatre jours à sortir le devis est pire qu’une réponse lente et franche. La vitesse en façade d’un processus lent fait la publicité du processus lent.',

    { note: 'Si cette perte n’est jamais mesurée, c’est qu’elle ne produit aucune preuve : rien n’arrive, rien n’est classé, rien ne manque. La correction prend une heure et n’a rien de flatteur — comptez les demandes du mois dernier par canal, celles qui ont eu une réponse le jour même, et multipliez l’écart par ce que vaut une demande transformée. Le résultat est le vôtre, pas un multiplicateur vieux de dix ans emprunté au secteur d’un autre. Et s’il sort petit, refermez le dossier.' },
  ],
  faq: [
    { q: 'En combien de temps faut-il répondre à une demande client ?', a: 'Les études publiées récompensent systématiquement la première heure, et de manière disproportionnée les cinq premières minutes. Mais la réponse honnête pour la plupart des petites entreprises est que l’écart à combler se situe entre « le jour même » et « jamais », pas entre cinq minutes et une heure. Viser cinq minutes suppose du personnel ou du logiciel ; obtenir que toute demande reçoive une réponse dans la journée ouvrée suppose surtout de corriger quels canaux sont surveillés. Le second est moins cher et récupère davantage.' },
    { q: 'Les statistiques connues sur le délai de réponse sont-elles fiables ?', a: 'En partie. Les travaux de la Harvard Business Review sur 1,25 million de demandes, les données d’appels d’InsideSales et le test de Drift sur 433 entreprises annoncent leur échantillon et leur méthode. En revanche, les affirmations très répandues selon lesquelles 78 % des acheteurs achèteraient au premier répondant, ou 35 à 50 % des ventes iraient au premier fournisseur, n’ont aucune source primaire identifiable et ne devraient pas être utilisées. L’essentiel du matériel crédible a par ailleurs plus de dix ans et a souvent été financé par des fournisseurs : à traiter comme une direction, pas comme un coefficient.' },
    { q: 'Comment calculer ce que me coûtent les réponses tardives ?', a: 'Trois chiffres, que vous détenez déjà. Comptez, sur un mois récent, les demandes restées plus de 24 heures sans réponse. Prenez la valeur moyenne d’une demande qui se transforme. Estimez honnêtement l’écart de taux de transformation entre celles traitées vite et les autres — cinq à dix points est une hypothèse de travail défendable. Multipliez les trois, puis appliquez votre marge brute. Si le résultat ne dépasse pas confortablement le coût du correctif, n’achetez pas le correctif.' },
    { q: 'Peut-on régler ça sans embaucher quelqu’un pour répondre ?', a: 'Le plus souvent oui, parce que le problème est rarement un manque de personnes pour répondre. Il vient de demandes qui arrivent sur des canaux sans propriétaire et en dehors des horaires. Ramener tous les canaux au même endroit, envoyer automatiquement un accusé de réception utile et trouver des brouillons prêts chaque matin couvre l’essentiel. Là où l’humain reste irremplaçable, c’est le jugement sur l’intérêt d’une affaire — et cette partie doit rester où elle est.' },
  ],
  related: [
    ['/ia-prestataires-nautiques-polynesie/', 'IA pour les prestataires nautiques — là où les réservations fuient'],
    ['/exemples-automatisation-pme/', '10 exemples d’automatisation en PME'],
    ['/commencer-avec-ia-entreprise/', 'Par où commencer avec l’IA dans votre entreprise'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'La demande client restée sans réponse : le coût réel, calculé',
    datePublished: '2026-08-02',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'facturation-en-retard-cout-reel',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/late-invoicing-real-cost/' },
  title: 'Facturation en retard : le coût réel pour une PME de Nouméa, chiffré',
  description: 'Depuis la loi du pays publiée au JONC le 19 juin 2026, le délai de paiement part de la date de facture, plus de la date du chantier. Le calcul complet : marche d’escalier de la fin de mois, chiffres IEOM, taux de découvert, et ce que ça coûte en francs sur un exercice.',
  keywords: 'délais de paiement Nouvelle-Calédonie, facturation en retard PME, loi du pays délais de paiement 2026, trésorerie PME Nouméa, DSO Nouvelle-Calédonie, automatiser la facturation entreprise, relance impayés Nouvelle-Calédonie',
  eyebrow: 'Journal',
  short: 'Journal · Trésorerie',
  h1: 'Sept jours de paperasse, trente-et-un jours de trésorerie. <span style="color:var(--grey-4);font-weight:300;">Le calcul, depuis juin 2026.</span>',
  cta: 'service-fr',
  published: '2026-08-01',
  body: [
    { lead: 'La date qui déclenche le compte à rebours du paiement en Kanaky (Nouvelle-Calédonie) n’est plus celle du chantier : c’est celle de votre facture. Le changement date de cette année, il est passé inaperçu hors des fédérations professionnelles, et il transforme un défaut d’organisation en perte sèche. Voici le calcul, avec les chiffres de l’IEOM.' },

    { h: 'Ce que la loi du pays a déplacé' },
    'Jusqu’à cette année, l’article Lp. 443-2 du code de commerce applicable localement fixait le délai maximal à trente jours suivant la réception des marchandises ou l’exécution de la prestation : le point de départ était le travail, pas le papier. Le Congrès a adopté le 26 mai 2026 un texte d’encadrement des pratiques commerciales, selon *Les Nouvelles calédoniennes*, promulgué le 12 juin et publié au Journal officiel de la Nouvelle-Calédonie le 19 juin. Le nouveau régime porte le délai à trente jours fin de mois suivant l’émission de la facture, selon la Fédération calédonienne du BTP.',
    'Lu vite, c’est un desserrement de contrainte pour celui qui paie. Lu de près, c’est un transfert de risque vers celui qui facture. Tant que le délai courait depuis la prestation, une facture tardive ne coûtait que le retard de l’encaissement : l’horloge tournait déjà. Elle ne tourne plus. Tant que la facture n’est pas partie, rien n’est exigible et aucune pénalité ne se déclenche. Le retard de facturation a cessé d’être une négligence administrative pour devenir une renonciation.',

    { h: 'La marche d’escalier de la fin de mois' },
    'Le mécanisme « trente jours fin de mois » n’est pas linéaire, et c’est là que se joue l’essentiel. Un chantier se termine le 26 juin. Si la facture part le 27, l’échéance tombe trente jours après le 30 juin : le 30 juillet. Si elle part le 3 juillet parce que le devis était resté dans le camion et qu’un week-end est passé par là, l’échéance devient trente jours après le 31 juillet : le 30 août.',
    'Sept jours de paperasse viennent d’acheter trente-et-un jours de découvert. Ce n’est pas une pénalité, c’est de l’arithmétique de calendrier, parfaitement légale des deux côtés : le client n’a rien fait de mal. Une facture émise le dernier jour du mois et la même facture émise le lendemain sont séparées par un mois entier de trésorerie. La seule règle de gestion qui compte ici tient en une phrase : rien ne doit franchir la fin du mois.',

    { h: 'Ce qui s’ajoute par-dessus, mesuré' },
    'À ce décalage volontaire s’ajoute celui que vous ne contrôlez pas. L’IEOM, dans son étude sur les délais de paiement en Nouvelle-Calédonie en 2024, mesure des délais clients moyens de **38,9 jours** de chiffre d’affaires et des délais fournisseurs de **44,9 jours**, tous deux au-dessus du plafond légal. Il chiffre à près de **10,1 milliards XPF** — environ 85 millions d’euros — la trésorerie que le seul respect strict de la loi aurait libérée sur 2024. Les secteurs les plus exposés qu’il identifie : construction, services aux entreprises, transports.',
    'La trajectoire va dans le bon sens : la précédente étude de l’IEOM, sur données 2019, relevait 47 jours de délais clients et 59 % d’entreprises réglant au-delà de trente jours. Restent huit ou neuf jours de retard moyen que personne n’automatise — ils relèvent d’un rapport de force avec un donneur d’ordre qui se finance sur ses fournisseurs.',

    { table: {
      minWidth: 640,
      head: ['Chantier terminé le 26 juin', 'Facture émise le 27 juin', 'Facture émise le 3 juillet'],
      rows: [
        ['Échéance légale (30 jours fin de mois)', '30 juillet', '30 août'],
        ['Encaissement au retard moyen constaté (IEOM)', 'vers le 8 août', 'vers le 8 septembre'],
        ['Jours de trésorerie perdus', '—', '31'],
        ['Coût de découvert, facture de 500 000 F', '—', 'environ 2 200 F'],
        ['Si la règle vaut pour toutes vos factures', '—', 'un mois de chiffre d’affaires dehors, en permanence'],
      ],
    }},

    { h: 'Le vrai coût n’est pas l’intérêt' },
    'Sur une facture isolée, l’intérêt est dérisoire. Le taux moyen des découverts aux entreprises calédoniennes s’établit à **5,26 %** au premier trimestre 2026 selon l’IEOM : un mois de découvert sur 500 000 F coûte à peu près 2 200 F. Personne ne fait faillite là-dessus, et prétendre le contraire serait malhonnête.',
    'Le coût est ailleurs, et il est structurel. Si le décalage vaut pour toute votre facturation, votre encours sort durablement d’un mois de chiffre d’affaires. Pour une entreprise qui facture 40 millions XPF par an, ce sont **3,3 millions XPF** — environ 28 000 euros — qui ne reviennent jamais dans le compte : ils changent de position dans le temps, une fois, définitivement. Les financer au taux de découvert coûte de l’ordre de **175 000 F par an**. C’est un plancher de trésorerie abaissé d’un cran, et ce cran décide de votre capacité à passer un mois creux.',

    { h: 'Le texte vous donne une arme, encore inachevée' },
    'La même loi du pays instaure une indemnité forfaitaire de recouvrement, due de plein droit par tout professionnel en retard ; son montant doit être fixé par arrêté du gouvernement et ne l’était pas à la publication du texte — à vérifier avant de l’inscrire dans vos conditions de vente. Les pénalités, elles, existaient déjà : plancher à trois fois le taux de l’intérêt légal, soit 8,25 % au second semestre 2026, et mention obligatoire dont l’omission expose, selon l’Autorité de la concurrence de la Nouvelle-Calédonie, à une amende administrative pouvant atteindre 5 millions XPF. La plupart des petites entreprises copient cette clause sans la lire et ne l’actionnent jamais — décision commerciale défendable. Mais une pénalité qu’on choisit de ne pas appliquer n’est pas une pénalité qu’on n’a pas le droit d’appliquer, et depuis juin la facture tardive vous met dans le second cas.',

    { h: 'Ce qui s’automatise, et ce qui ne s’automatise pas' },
    { steps: [
      'La date d’émission. Seul point de la chaîne entièrement sous votre contrôle, et celui qui pèse un mois. La plupart des retards ne viennent pas de la saisie mais de la recherche : le devis signé, les heures pointées, la photo du chantier. Rassembler ces pièces à la clôture du bon de travail, et non à la fin de la semaine, supprime la marche d’escalier sans rien changer à la relation client.',
      'La relance. Trois messages — sept jours avant l’échéance, le jour même, sept jours après — partis sans que personne n’ait à décider de les envoyer. Tout le monde connaît la séquence, presque personne ne la tient : elle demande de la constance, pas de l’intelligence.',
      'Ce qui ne s’automatise pas : le coup de fil au client qui ne paie pas parce qu’il n’a pas encaissé lui-même. Un système bien réglé sait seulement vous dire lequel appeler, et quand. [Mesurez d’abord](/commencer-avec-ia-entreprise/) le délai réel entre la fin d’un travail et le départ de sa facture.',
    ] },

    { note: 'Une entreprise se défait rarement sur ses factures impayées et souvent sur ses factures non émises. Le déplacement de juin 2026 rend la distinction coûteuse : l’horloge légale attend désormais votre paperasse. Le calcul tient en une ligne — les jours entre la fin du travail et l’émission de la facture, multipliés par ce que vaut une journée chez vous. À faire avant d’acheter quoi que ce soit.' },
  ],
  faq: [
    { q: 'Depuis quand le délai de paiement part-il de la date de facture en Nouvelle-Calédonie ?', a: 'Le texte a été adopté par le Congrès le 26 mai 2026, promulgué le 12 juin et publié au Journal officiel de la Nouvelle-Calédonie le 19 juin 2026. Il modifie le régime de l’article Lp. 443-2 du code de commerce applicable localement : le délai maximal passe à trente jours fin de mois suivant l’émission de la facture, là où il courait auparavant à compter de la réception des marchandises ou de l’exécution de la prestation. Vérifiez la rédaction exacte au JONC avant de modifier vos conditions générales de vente.' },
    { q: 'Concrètement, combien coûte une semaine de retard de facturation ?', a: 'Cela dépend entièrement de l’endroit où tombe la fin du mois. Une facture émise le 3 du mois plutôt que le 27 du mois précédent décale l’échéance d’un mois entier, à cause de la règle des trente jours fin de mois. Sur une facture de 500 000 F, le coût de découvert d’un mois est d’environ 2 200 F au taux moyen de 5,26 % relevé par l’IEOM au premier trimestre 2026. Le poste sérieux n’est pas cet intérêt mais le décalage permanent de l’encours si le retard est systématique : de l’ordre d’un mois de chiffre d’affaires sorti du compte.' },
    { q: 'Peut-on vraiment facturer des pénalités de retard à un client local ?', a: 'Juridiquement oui : le plancher est fixé à trois fois le taux de l’intérêt légal, soit 8,25 % au second semestre 2026, et la mention est obligatoire dans les conditions générales de vente. La loi du pays y ajoute une indemnité forfaitaire de recouvrement due de plein droit, dont le montant doit être fixé par arrêté du gouvernement. Commercialement, c’est un autre débat, et beaucoup d’entreprises choisissent de ne pas les appliquer. La différence utile est que la mention conserve le droit de le faire le jour où un dossier dérape.' },
    { q: 'Faut-il un logiciel de facturation pour corriger ça ?', a: 'Pas nécessairement un nouveau. La plupart des petites entreprises d’ici ont déjà de quoi éditer une facture ; ce qui manque, c’est le déclencheur automatique entre la clôture du travail et l’édition, et la séquence de relance qui suit. Ces deux briques se posent le plus souvent au-dessus de l’outil existant. Commencez par mesurer le délai réel d’émission sur vingt dossiers : si la moyenne est inférieure à deux jours, le problème est ailleurs et l’outil ne réglera rien.' },
  ],
  related: [
    ['/ia-btp-nouvelle-caledonie/', 'IA et BTP en Nouvelle-Calédonie — le secteur le plus exposé aux retards'],
    ['/exemples-automatisation-pme/', 'Exemples concrets d’automatisation pour une PME'],
    ['/prix-automatisation-ia-nouvelle-caledonie/', 'Prix de l’automatisation IA, fourchettes réelles en XPF'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Facturation en retard : le coût réel pour une PME de Nouméa, chiffré',
    datePublished: '2026-08-01',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'late-invoicing-real-cost',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/facturation-en-retard-cout-reel/' },
  title: 'Late Invoicing: The Real Cost for a Small Business, Measured',
  description: 'New Caledonia moved the payment clock from the day the job ends to the day the invoice is issued. Seven days of paperwork can now buy thirty-one days of overdraft. The arithmetic, with IEOM and Xero figures.',
  keywords: 'late invoicing cost small business, payment terms New Caledonia 2026, days sales outstanding Pacific, invoice automation small business, late payment New Zealand small business, cash flow invoicing delay',
  eyebrow: 'Journal',
  short: 'Journal · Cash flow',
  h1: 'Seven days of paperwork, thirty-one days of cash. <span style="color:var(--grey-4);font-weight:300;">A calendar rule most owners have not priced.</span>',
  cta: 'service',
  published: '2026-08-01',
  body: [
    { lead: 'In Kanaky (New Caledonia), the clock on getting paid no longer starts when the job finishes. It starts when the invoice goes out. The change landed this year, passed largely unnoticed outside trade federations, and it turns an ordinary administrative habit into a straight loss. The arithmetic fits on the back of a docket, and is worth doing wherever you trade.' },

    { h: 'What the law moved' },
    'Until this year, article Lp. 443-2 of the commercial code applied locally set the maximum payment term at thirty days from receipt of goods or completion of the service. The trigger was the work, not the paperwork. New Caledonia\'s Congress adopted a commercial practices bill on 26 May 2026, according to *Les Nouvelles calédoniennes*, promulgated on 12 June and published in the territory\'s official journal on 19 June. Under the new regime the term becomes thirty days end-of-month following the invoice date, per the Fédération calédonienne du BTP.',
    'Read quickly, that looks like relief for whoever pays. Read closely, it is a transfer of risk to whoever bills. While the term ran from the work itself, a late invoice cost only the delay in banking the money — the deadline was already running. It is not running now. Until the invoice leaves, nothing is due and no penalty can attach. Late invoicing has stopped being untidy admin and become a waiver.',

    { h: 'The end-of-month step' },
    'The thirty-days-end-of-month mechanism is not linear, and that is where the money sits. A job finishes on 26 June. Invoice it on the 27th and payment falls due thirty days after 30 June: 30 July. Invoice it on 3 July, because the signed quote was in the ute and a weekend intervened, and the due date becomes 30 August.',
    'Seven days of paperwork just bought thirty-one days of overdraft. That is not a penalty, it is calendar arithmetic, and it is lawful on both sides: the customer has done nothing wrong. An invoice issued on the last day of a month and the same invoice issued the next morning are a full month apart in cash terms. Which reduces the only operating rule that matters here to one line: nothing crosses a month end.',

    { h: 'What gets added on top' },
    'To that self-inflicted gap you add the one you do not control. The IEOM, in its study of payment terms in New Caledonia for 2024, measures average customer terms of **38.9 days** of turnover and supplier terms of **44.9 days** of purchases, both above the legal ceiling. It puts at roughly **10.1 billion XPF** — about 85 million euros — the working capital that strict compliance alone would have freed across 2024. The most exposed sectors it names are construction, business services and transport.',
    'The direction of travel is favourable: the previous IEOM study, on 2019 data, found 47 days of customer terms and 59 per cent of firms settling beyond thirty days. What remains is the eight or nine days of average overrun, which no automation removes — that is a balance of power with a client financing itself on its suppliers. New Zealand is a comparison rather than a consolation: Xero Small Business Insights puts Kiwi small firms at 24.1 days to be paid and 4.7 days late in its latest quarter, ahead of Australia, the UK and the US, and still costed late payment to them at NZ$827 million in 2023, up 81 per cent on 2021.',

    { table: {
      minWidth: 640,
      head: ['Job finished 26 June', 'Invoiced 27 June', 'Invoiced 3 July'],
      rows: [
        ['Legal due date (30 days end of month)', '30 July', '30 August'],
        ['Cash in, at the average overrun IEOM measures', 'around 8 August', 'around 8 September'],
        ['Days of cash lost', '—', '31'],
        ['Overdraft cost on a 500,000 XPF invoice', '—', 'about 2,200 XPF'],
        ['If the habit applies to every invoice', '—', 'a month of turnover permanently outside the account'],
      ],
    }},

    { h: 'The interest is the cheap part' },
    'On a single invoice the interest is trivial. The average overdraft rate for New Caledonian businesses stood at **5.26 per cent** in the first quarter of 2026 according to the IEOM. A month of overdraft on 500,000 XPF costs roughly 2,200 XPF. Nobody fails on that, and saying otherwise would be dishonest.',
    'The cost is structural instead. If the delay applies across your billing, your receivables sit permanently one month of turnover higher. For a firm invoicing 40 million XPF a year that is **3.3 million XPF**, near enough 28,000 euros, that never comes back into the account — it shifts position in time, once, for good. Financing it at the overdraft rate runs to about **175,000 XPF a year**, every year. It is a cash floor lowered by one notch, and that notch decides whether a quiet month is survivable.',

    { h: 'The law hands you a lever, still unfinished' },
    'The same act creates a flat-rate recovery indemnity, owed as of right by any business paying late; its amount is to be set by government order and had not been fixed when the text was published — worth checking before you write it into your terms. Penalties already existed: a floor of three times the legal interest rate, which puts them at 8.25 per cent for the second half of 2026, and a compulsory mention whose omission exposes you, according to New Caledonia\'s competition authority, to a fine of up to 1 million XPF for an individual and 5 million for a company. Most small firms copy that clause without reading it and never use it — a defensible commercial call. But choosing not to apply a penalty is not the same as having no penalty to apply, and since June the late invoice puts you in the second case.',

    { h: 'What automates, and what does not' },
    { steps: [
      'The issue date. The only link in the chain fully under your control, and the one worth a month. Most invoicing delay is not typing, it is looking: the signed quote, the hours logged, the photo of the site. Pulling those together when the job is closed off, rather than when the week is, removes the end-of-month step without touching the customer relationship.',
      'The follow-up. Three calibrated messages — seven days before the due date, on it, seven days after — sent without anyone having to decide to send them. Everyone knows this sequence and almost nobody sustains it: it asks for consistency, not intelligence.',
      'What does not automate: the call to a customer who has not paid because they have not been paid. A well-built system can only tell you which one to ring, and when. [Measure first](/how-to-start-with-ai/) the real gap between finishing a job and issuing its invoice, across twenty jobs.',
    ] },

    { note: 'A business is rarely undone by the invoices it cannot collect and often by the ones it never sent. The June 2026 change makes that distinction expensive: the legal clock now waits for your paperwork. The calculation fits on one line — days between finishing the work and issuing the invoice, multiplied by what a day is worth to you. Run it before buying anything.' },
  ],
  faq: [
    { q: 'When did New Caledonia move the payment clock to the invoice date?', a: 'The bill was adopted by Congress on 26 May 2026, promulgated on 12 June and published in the territory\'s official journal on 19 June 2026. It changes the regime under article Lp. 443-2 of the locally applicable commercial code: the maximum term becomes thirty days end-of-month following the invoice date, where it previously ran from receipt of goods or completion of the service. Check the exact wording in the official journal before amending your terms of sale.' },
    { q: 'What does a week of invoicing delay actually cost?', a: 'It depends entirely on where the month end falls. An invoice issued on the 3rd rather than the 27th of the previous month moves the due date by a full month, because of the thirty-days-end-of-month rule. On a 500,000 XPF invoice, a month of overdraft costs about 2,200 XPF at the 5.26 per cent average the IEOM recorded for the first quarter of 2026. The serious line is not that interest but the permanent shift in receivables if the delay is habitual: on the order of one month of turnover out of the account.' },
    { q: 'Does any of this apply outside New Caledonia?', a: 'The legal trigger is specific to New Caledonia, but the arithmetic is not. Anywhere terms are expressed end-of-month, the day you issue decides which month you get paid in. Xero measures New Zealand small firms at 24.1 days to be paid and 4.7 days late in its latest quarter, and priced late payment to Kiwi small businesses at NZ$827 million for 2023. The controllable part of that gap is still the issue date.' },
    { q: 'Do I need new invoicing software to fix this?', a: 'Not necessarily new software. Most small firms here already have something that produces an invoice; what is missing is the automatic trigger between closing the job and issuing the document, and the follow-up sequence after it. Both usually sit on top of the existing tool. Start by measuring the real issue delay across twenty jobs — if the average is under two days, the problem is elsewhere and no tool will fix it.' },
  ],
  related: [
    ['/ai-for-builders/', 'AI for builders and trades — where the hours actually go'],
    ['/workflow-automation-examples/', 'Workflow automation examples that hold up'],
    ['/ai-automation-small-business/', 'AI automation for small business — the practical view'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Late Invoicing: The Real Cost for a Small Business, Measured',
    datePublished: '2026-08-01',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'island-businesses-ai-advantage',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/petite-entreprise-avantage-ia/' },
  title: 'Why Island Businesses Are Better Positioned for AI Than They Think',
  description: 'MIT found that 95 per cent of enterprise AI pilots return nothing measurable. The reasons they fail — layered budgets, internal builds, nobody owning the workflow — are precisely what a six-person Pacific firm does not have. The case, with counted figures.',
  keywords: 'small business AI advantage, why AI pilots fail, AI adoption small firms Pacific, MIT GenAI divide study, AI automation New Caledonia small business, island business technology adoption',
  eyebrow: 'Journal',
  short: 'Journal · Scale',
  h1: 'Small, and far from everything. <span style="color:var(--grey-4);font-weight:300;">On this technology, both work in your favour.</span>',
  cta: 'service',
  published: '2026-07-31',
  body: [
    { lead: 'The sentence arrives early, usually with a shrug: this sort of thing is for big companies in big places. It is the most consistent assumption I meet, from Nouméa to Suva, and it has the causality backwards. The best-resourced organisations on the planet are failing at AI adoption at a rate that would be a scandal in any other capital programme — for reasons a six-person firm on an island does not have.' },

    { h: 'The failure rate nobody here caused' },
    'Start with a number that deserves to be better known. MIT\'s NANDA initiative published *The GenAI Divide: State of AI in Business 2025* in August 2025, built on 150 interviews with business leaders, a survey of 350 employees and 300 public deployments. Roughly **5 per cent** of enterprise AI pilots produce a measurable acceleration in revenue. The other **95 per cent** return nothing that reaches the accounts, against a spend the report places in the tens of billions of dollars.',
    'The authors are careful about the cause, and the answer is not the intuitive one. The models are not the problem. The failure is organisational — what the report calls a learning gap between generic tools and the way a company actually works. Pilots die in the distance between the demonstration and the workflow.',

    { h: 'Read the diagnosis again as a description of scale' },
    'Three findings are worth setting side by side. More than half of generative AI budgets went to sales and marketing tools, while the returns researchers could trace sat in back-office work. Solutions bought from specialised vendors succeeded around **67 per cent** of the time, roughly three times the rate of internal builds. And uptake of generic chatbots was near-universal while the tasks stayed trivial.',
    'Each of those is a symptom of size. Budgets flow to the department with the loudest voice at the table. Internal builds stall because the people who understand the process and the people who write the code are four floors and two quarters apart. Generic tools stay trivial because no one is accountable for pushing them into the real work. Now count how many of those conditions exist in a company where the person choosing the tool is the person doing the job.',

    { h: 'Ninety per cent of employees already did it themselves' },
    'The same report records something more interesting than the failure rate. Around 40 per cent of firms had bought official enterprise AI subscriptions; roughly **90 per cent of employees** were using personal AI tools for parts of their work anyway. The unofficial version delivered. The sanctioned one stalled in committee.',
    'That gap is a serious governance problem for a bank and a non-event for a plumbing firm in Koné. There is no shadow usage to reconcile, no procurement cycle measured in quarters. Whoever notices that quoting eats four hours can decide that afternoon to do it differently, and will feel the difference on Friday. That closeness is not a consolation prize for being small. On this technology it is the scarce ingredient, and it cannot be bought.',

    { h: 'What the region actually looks like, in counted businesses' },
    'The argument is not marginal, because here the small firm is not the exception — it is the population. Stats NZ counted **617,330 enterprises** in New Zealand at February 2025, and **74 per cent of them had no paid employees at all**. In Kanaky (New Caledonia), ISEE recorded **61,367 active enterprises** on 1 January 2025, down 2.2 per cent in twelve months — a real contraction, which makes recovered hours matter more rather than less.',
    'Wider still: the Asian Development Bank\'s Asia SME Monitor 2025 puts micro, small and medium enterprises at **99.8 per cent** of all firms across its 26 developing member economies, employing **67.6 per cent** of the workforce while producing **38.7 per cent** of output. About 72 per cent of them operate in traditional services — trade, accommodation, food. Two thirds of the workers against under two fifths of the output is roughly where administrative drag lives, and that drag is what this technology removes most reliably.',

    { table: {
      minWidth: 600,
      head: ['What kills the enterprise pilot', 'Does a six-person firm have it?'],
      rows: [
        ['Budget captured by the loudest department', 'No — one person holds the budget'],
        ['Gap between who knows the process and who builds', 'No — same person, same room'],
        ['Procurement cycle measured in quarters', 'No — decided over one afternoon'],
        ['Unofficial usage the company must reconcile', 'No — nothing to reconcile'],
        ['A supplier bench within reach', 'Yes, and this one is a real disadvantage'],
      ],
    }},

    { h: 'The column where distance still costs' },
    'Making this case without the other side of it would be worthless. Small and remote carries real penalties, and three are structural. There is no local bench: few suppliers within a plane ride who have done the work before, which makes a poor first choice slower to recover from. There is single-person risk: the owner deciding everything is an advantage until the week the owner is unwell. And there is billing friction, since most of these tools price in US dollars, with the exchange rate sitting quietly in the margin.',
    'None of those argue for waiting. They argue for keeping the first project small enough that a bad supplier costs a month instead of a year — which is precisely the discipline the 95 per cent never imposed on themselves.',

    { h: 'How to spend the advantage' },
    { steps: [
      'Pick the task by the hours it consumes, not by how modern it sounds. The traceable returns in the MIT data sat in back-office work — the least glamorous shelf in the building.',
      'Buy the specific before you build the general. Bought vendor solutions succeeded about three times as often as internal builds. Being small makes that easier to accept, not harder.',
      'Keep the loop inside one head, then write it down. Whoever does the task decides how it changes and reads the result — free to you, unavailable to almost every large company. Document it as though someone else will run it, because one day someone will.',
      'Fix the measurement before the tool: hours per week on the task, counted for two weeks, written down. Without that line you are guessing, and [a pilot becomes permanent](/ai-pilot/) without ever proving anything.',
    ] },

    { note: 'The evidence does not say AI is easy. It says the difficulty is organisational, and that the organisations struggling most are the ones with the most organisation. A firm where one person sees the whole process, decides in an afternoon and feels the result within the week is not behind — it holds the input money has failed to buy. What remains is choosing the task honestly, and measuring it.' },
  ],
  faq: [
    { q: 'Does the MIT study mean AI does not work?', a: 'It means something more specific. The researchers found that generic tools rarely survive contact with an entrenched workflow, and that the gap is organisational rather than technical. Where deployments were narrow, bought from specialists and aimed at back-office work, they did produce returns — that is the 5 per cent. The lesson is not to avoid the technology but to avoid the shape of project that failed.' },
    { q: 'We have no IT person. Is that a blocker?', a: 'On the evidence, less of one than assumed. Systems built internally succeeded at roughly a third the rate of solutions bought from specialised vendors, so an in-house engineering team is not what separates success from failure. What matters is that someone owns the process being changed and can tell whether it improved — and in a small business that person already exists.' },
    { q: 'Our business is trade or hospitality, not an office. Does any of this apply?', a: 'The ADB puts about 72 per cent of MSMEs across its member economies in traditional services — trade, accommodation, food. Those businesses still produce quotes, chase payments, answer enquiries, order stock and file paperwork, and that is exactly the routine cognitive work where returns have been documented. The trade itself stays where it is; the paperwork around it is what moves.' },
    { q: 'If small firms are so well positioned, why do so few in the Pacific use AI?', a: 'Because the constraint is distribution, not capability. No vendor is flying to Port Vila to demonstrate anything, there is no procurement department to route a proposal through, and the tools carry no instructions for a firm of six. That is a gap in who brings the technology to the work, not a gap in whether the work would benefit.' },
  ],
  related: [
    ['/ai-pilot/', 'AI Pilot — one working tool in a week, paid only if it works'],
    ['/how-to-start-with-ai/', 'How to start with AI — a sequence that works'],
    ['/melanesia/', 'AI automation across Melanesia'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Why Island Businesses Are Better Positioned for AI Than They Think',
    datePublished: '2026-07-31',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'petite-entreprise-avantage-ia',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/island-businesses-ai-advantage/' },
  title: 'Pourquoi la petite taille est un avantage face à l’IA — le cas des entreprises insulaires',
  description: 'Le MIT constate que 95 % des projets IA en grande entreprise ne rapportent rien de mesurable. Les causes qu’il identifie — budgets captés, développements internes, personne qui possède le processus — sont exactement ce qu’une entreprise de six personnes n’a pas.',
  keywords: 'avantage petite entreprise IA, pourquoi les projets IA échouent, adoption IA TPE PME Pacifique, IA petite entreprise Nouvelle-Calédonie, étude MIT IA entreprise, automatisation TPE insulaire',
  eyebrow: 'Journal',
  short: 'Journal · Taille',
  h1: 'Petites, et loin de tout. <span style="color:var(--grey-4);font-weight:300;">Sur cette technologie, les deux jouent pour vous.</span>',
  cta: 'service-fr',
  published: '2026-07-31',
  body: [
    { lead: 'La phrase tombe tôt, souvent avec un haussement d’épaules : tout ça, c’est pour les grandes boîtes des grands pays. C’est l’idée la plus constante que je rencontre, de Nouméa à Port-Vila, et elle prend le raisonnement à l’envers. Les organisations les mieux dotées de la planète échouent sur l’adoption de l’IA à un rythme qui ferait scandale dans n’importe quel autre programme d’investissement — pour des raisons qu’une entreprise de six personnes n’a pas.' },

    { h: 'Le taux d’échec dont personne ici n’est responsable' },
    'Commençons par un chiffre qui mériterait d’être connu. L’initiative NANDA du MIT a publié en août 2025 l’étude *The GenAI Divide: State of AI in Business 2025* : 150 entretiens de dirigeants, 350 salariés interrogés, 300 déploiements analysés. Environ **5 %** des projets pilotes d’IA en entreprise produisent une accélération mesurable du chiffre d’affaires. Les **95 %** restants ne rapportent rien qui arrive jusqu’à la comptabilité, face à des dépenses chiffrées en dizaines de milliards de dollars.',
    'Les auteurs sont prudents sur la cause, et la réponse n’est pas celle qu’on attend. Les modèles ne sont pas en cause. L’échec est organisationnel : le rapport parle d’un écart d’apprentissage entre un outil générique et la manière dont une entreprise travaille réellement. Un pilote meurt dans la distance qui sépare la démonstration du processus.',

    { h: 'Relisez le diagnostic comme une description de la taille' },
    'Trois constats gagnent à être posés côte à côte. Plus de la moitié des budgets d’IA générative partent vers des outils commerciaux et marketing, alors que les gains traçables se trouvaient dans l’administratif. Les solutions achetées à des fournisseurs spécialisés réussissent dans environ **67 %** des cas, près de trois fois le taux des développements internes. Et l’usage des assistants génériques est quasi universel pendant que les tâches confiées restent anodines.',
    'Chacun est un symptôme de taille. Les budgets vont au service qui parle le plus fort. Les développements internes calent parce que ceux qui connaissent le processus et ceux qui écrivent le code sont séparés par quatre étages et deux trimestres. Les outils génériques restent anodins parce que personne n’a la charge de les pousser dans le vrai travail. Comptez maintenant combien de ces conditions existent dans une entreprise où celui qui choisit l’outil est celui qui fait le travail.',

    { h: 'Neuf salariés sur dix s’en étaient déjà chargés seuls' },
    'Le même rapport relève plus intéressant que le taux d’échec. Environ 40 % des entreprises avaient souscrit des abonnements IA officiels ; près de **90 % des salariés** utilisaient de toute façon des outils personnels pour une partie de leur travail. La version non officielle produisait des résultats, la version validée s’enlisait en comité.',
    'Cet écart est un problème de gouvernance pour une banque, un non-événement pour un plombier de Koné. Pas d’usage parallèle à régulariser, pas de cycle d’achat en trimestres. Celui qui constate qu’un devis lui prend quatre heures peut décider l’après-midi même de s’y prendre autrement, et en verra l’effet vendredi. Cette proximité n’est pas un lot de consolation : c’est l’ingrédient rare, et il ne s’achète pas.',

    { h: 'Le tissu économique réel, en entreprises comptées' },
    'L’argument n’est pas marginal : ici, la petite entreprise n’est pas l’exception, elle est la population. Stats NZ recensait **617 330 entreprises** en Nouvelle-Zélande en février 2025, dont **74 % sans aucun salarié**. En Kanaky (Nouvelle-Calédonie), l’ISEE comptait **61 367 entreprises actives** au 1er janvier 2025, en baisse de 2,2 % en douze mois — une contraction réelle, qui rend les heures récupérées plus précieuses et non moins.',
    'Plus largement, l’Asia SME Monitor 2025 de la Banque asiatique de développement établit que les micro, petites et moyennes entreprises représentent **99,8 %** des entreprises de ses 26 économies membres en développement, **67,6 %** des emplois et **38,7 %** de la production. Environ 72 % d’entre elles relèvent des services traditionnels : commerce, hébergement, restauration. Deux tiers des actifs pour moins de deux cinquièmes de la production, c’est à peu près là que se loge le frottement administratif — et c’est ce que cette technologie enlève le plus sûrement.',

    { table: {
      minWidth: 600,
      head: ['Ce qui tue le projet en grande entreprise', 'Une entreprise de six personnes l’a-t-elle ?'],
      rows: [
        ['Budget capté par le service le plus bruyant', 'Non — une seule personne tient le budget'],
        ['Écart entre qui connaît le métier et qui construit', 'Non — même personne, même pièce'],
        ['Cycle d’achat qui se compte en trimestres', 'Non — décidé en une après-midi'],
        ['Usage parallèle des salariés à régulariser', 'Non — rien à régulariser'],
        ['Un vivier de prestataires à portée', 'Oui, et c’est un vrai désavantage'],
      ],
    }},

    { h: 'La colonne où l’éloignement coûte encore' },
    'Défendre cette position sans son revers n’aurait aucune valeur. Être petit et loin comporte des pénalités réelles, dont trois sont structurelles. Pas de vivier local : peu de prestataires à portée d’avion ayant déjà fait ce travail, donc un mauvais choix se rattrape plus lentement. Le risque de la personne seule : le dirigeant qui décide de tout est un avantage jusqu’à la semaine où il est malade. Et le frottement de facturation, ces outils étant tarifés en dollars, le taux de change installé discrètement dans la marge.',
    'Aucun ne plaide pour attendre, mais pour garder le premier chantier assez petit qu’un mauvais prestataire coûte un mois et non un an — la discipline que les 95 % ne se sont jamais imposée.',

    { h: 'Comment dépenser cet avantage' },
    { steps: [
      'Choisissez la tâche selon les heures qu’elle consomme, pas selon son air de modernité. Les gains traçables de l’étude se trouvaient dans l’administratif — le rayon le moins flatteur du magasin.',
      'Achetez le spécifique avant de construire le général : les solutions achetées à des spécialistes ont réussi environ trois fois plus souvent que les développements internes. La petite taille rend l’arbitrage plus facile à accepter.',
      'Gardez la boucle dans une seule tête, puis écrivez-la. Celui qui fait la tâche décide de sa transformation et en lit le résultat — gratuit chez vous, hors de portée de presque toutes les grandes entreprises. Documentez comme si quelqu’un d’autre devait reprendre, parce qu’un jour quelqu’un reprendra.',
      'Réglez la mesure avant l’outil : les heures par semaine sur la tâche, comptées quinze jours, écrites quelque part. Sans cette ligne, vous devinerez après coup — [c’est par là que commence une méthode qui tient](/commencer-avec-ia-entreprise/).',
    ] },

    { note: 'Les données ne disent pas que l’IA est facile. Elles disent que la difficulté est organisationnelle, et que les organisations qui peinent le plus sont celles qui ont le plus d’organisation. Une entreprise où une seule personne voit le processus, décide en une après-midi et en constate l’effet dans la semaine détient l’ingrédient que l’argent n’a pas su acheter. Reste à choisir la tâche, et à la mesurer.' },
  ],
  faq: [
    { q: 'L’étude du MIT signifie-t-elle que l’IA ne fonctionne pas ?', a: 'Elle dit quelque chose de plus précis. Les chercheurs constatent qu’un outil générique survit rarement au contact d’un processus installé, et que l’écart est organisationnel plutôt que technique. Là où les déploiements étaient étroits, achetés à des spécialistes et orientés vers l’administratif, ils ont produit des gains : ce sont les 5 %. La leçon n’est pas d’éviter la technologie, mais d’éviter la forme de projet qui a échoué.' },
    { q: 'Nous n’avons personne en informatique. Est-ce bloquant ?', a: 'Moins qu’on ne le croit, si l’on s’en tient aux données. Les systèmes développés en interne ont réussi environ trois fois moins souvent que les solutions achetées à des fournisseurs spécialisés : une équipe technique maison n’est donc pas ce qui sépare la réussite de l’échec. Ce qui compte, c’est que quelqu’un possède le processus modifié et sache dire s’il s’est amélioré — et dans une petite entreprise, cette personne existe déjà.' },
    { q: 'Nous sommes dans le commerce ou la restauration, pas dans un bureau. Est-ce que ça nous concerne ?', a: 'La Banque asiatique de développement situe environ 72 % des micro et petites entreprises de ses économies membres dans les services traditionnels : commerce, hébergement, restauration. Ces entreprises produisent quand même des devis, relancent des impayés, répondent à des demandes, passent des commandes et remplissent des formulaires. C’est exactement le travail cognitif routinier où les gains sont documentés. Le métier reste où il est ; c’est la paperasse autour qui bouge.' },
    { q: 'Si les petites structures sont si bien placées, pourquoi si peu d’entre elles s’y mettent ici ?', a: 'Parce que la contrainte porte sur la diffusion, pas sur la capacité. Aucun fournisseur ne prend l’avion pour Port-Vila afin de faire une démonstration, il n’existe pas de service achats pour orienter une proposition, et ces outils n’arrivent avec aucun mode d’emploi pour une entreprise de six personnes. C’est un manque dans la façon dont la technologie rejoint le travail, pas dans l’intérêt qu’elle aurait à le rejoindre.' },
  ],
  related: [
    ['/commencer-avec-ia-entreprise/', 'Par où commencer avec l’IA dans votre entreprise'],
    ['/automatiser-ou-embaucher/', 'Automatiser ou embaucher : le comparatif honnête'],
    ['/prix-automatisation-ia-nouvelle-caledonie/', 'Prix de l’automatisation IA, fourchettes réelles en XPF'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Pourquoi la petite taille est un avantage face à l’IA — le cas des entreprises insulaires',
    datePublished: '2026-07-31',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'automatiser-sans-attendre-la-fibre',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/automation-without-perfect-internet/' },
  title: 'Automatiser sans attendre la fibre parfaite : le calcul, en Nouvelle-Calédonie',
  description: 'Une automatisation d’entreprise échange une vingtaine de kilo-octets par opération — soit 750 fois moins qu’une minute de visioconférence. Chiffres OPT-NC, latence réelle vers Sydney, et les trois cas où le débit compte vraiment.',
  keywords: 'automatiser entreprise mauvaise connexion, fibre optique Nouvelle-Calédonie entreprise, débit nécessaire IA, OPT-NC fibre 2025, automatisation PME sans fibre, latence Nouméa Sydney',
  eyebrow: 'Journal',
  short: 'Journal · Connexion',
  h1: 'La fibre parfaite n’est pas une condition. <span style="color:var(--grey-4);font-weight:300;">Voici le calcul qui le montre.</span>',
  cta: 'service-fr',
  published: '2026-07-30',
  body: [
    { lead: 'Une phrase revient dans presque chaque premier rendez-vous, à Nouméa comme à Koné : on verra ça quand on aura une meilleure connexion. Elle est sincère et elle repose sur une erreur de mesure. Une automatisation d’entreprise ne consomme pas de la vidéo, elle consomme du texte — et l’écart entre les deux se compte en facteurs de mille.' },

    { h: 'Le poids réel d’une automatisation' },
    'Prenons la tâche la plus banale : un système qui rédige une relance de facture, l’envoie, et consigne ce qu’il a fait. Ce qui circule sur le réseau, c’est la demande adressée au modèle et sa réponse — disons 3 000 mots de contexte et 700 mots de réponse. En caractères, une vingtaine de kilo-octets aller-retour. Aucune vidéo, aucune image, aucun fichier joint.',
    'Mettez-le en face de ce que votre ligne encaisse déjà sans broncher. Une minute de visioconférence en haute définition transporte environ **15 mégaoctets**. Une seule minute d’appel vidéo transfère donc autant de données que **750 relances de facture**. Un film en 4K, quinze gigaoctets, en vaut sept cent cinquante mille. Un système qui traite deux cents opérations par jour consomme environ quatre mégaoctets quotidiens : le quart d’une minute de visio, étalé sur huit heures.',

    { h: 'Ce qui compte ici n’est pas le débit, c’est la latence' },
    'Reste le temps de réponse, la vraie particularité insulaire. Gondwana-1, le premier câble sous-marin calédonien, relie Nouméa à Sydney sur 2 080 kilomètres et a été mis en service en septembre 2008. La lumière dans une fibre parcourt environ 200 000 kilomètres par seconde : l’aller-retour jusqu’à Sydney coûte physiquement une vingtaine de millisecondes, une trentaine à une quarantaine en pratique. Vers un centre de données de la côte ouest américaine, comptez 150 à 200 millisecondes.',
    'Deux cents millisecondes sur une opération que personne ne regarde n’ont aucune conséquence. Un devis mis en forme en onze secondes plutôt qu’en neuf ne change la journée de personne. La latence ne devient gênante que lorsqu’un humain attend devant l’écran — et l’essentiel de ce qu’on automatise dans une PME se déroule précisément sans personne devant l’écran. C’est la propriété qu’il faut chercher : le travail asynchrone est indifférent à la géographie.',

    { h: 'L’état du réseau, en chiffres publiés' },
    'La discussion gagnerait à partir des chiffres plutôt que des impressions. Selon l’OPT-NC, **63 327 accès fibre** étaient créés à fin 2024, dont plus de 8 600 dans la seule année, pour un taux de raccordement de **81 %** sur le parc de lignes fixes. La fibre est disponible dans **20 des 33 communes** au premier trimestre 2025, et ces vingt communes représentent **97 %** des foyers et entreprises utilisant les services fixes. Côté mobile : 537 sites actifs en avril 2025, et une couverture 4G annoncée à **99 % de la population**.',
    'Autrement dit, l’entreprise qui attend la fibre l’a le plus souvent déjà, et celle qui ne l’a pas dispose d’une 4G qui suffit largement aux vingt kilo-octets décrits plus haut. Le pays a aussi cessé de tenir à un seul fil : selon Outremers360, Gondwana-2 — qui relie Nouméa aux Fidji — et le câble domestique Picot-2 ont été mis en service le **25 août 2022**, pour un coût final de 4,675 milliards de francs. Avant cette date, une seule rupture isolait le territoire. Ce n’est plus le cas.',

    { h: 'Le vrai risque n’est pas la lenteur, c’est la coupure' },
    'Il reste une objection sérieuse : le réseau tombe. Cela arrive, ici comme partout. Mais ce risque ne se traite pas en attendant un meilleur débit — il se traite à la conception, et cela ne coûte pas un franc de plus.',
    'Un système fragile exige d’être en ligne à l’instant précis où on l’utilise. Un système solide met le travail en file d’attente, réessaie de lui-même, et reprend là où il s’était arrêté quand la ligne revient. C’est un paramètre de configuration, pas un investissement. Nous montons les automatisations sur ce principe pour une raison simple : la question n’est pas si la connexion tombera, mais quand — et ce qui se passe pendant.',

    { table: {
      minWidth: 600,
      head: ['Ce que fait le système', 'Données échangées', 'La fibre change quoi'],
      rows: [
        ['Rédiger et envoyer une relance de facture', '~20 Ko par relance', 'Rien'],
        ['Mettre au propre un devis de quatre pages', '~60 Ko', 'Rien'],
        ['Trier et router 200 emails par jour', '~4 Mo par jour', 'Rien'],
        ['Transcrire une réunion d’une heure', '~30 Mo d’audio', 'Utile, pas indispensable'],
        ['Visioconférence avec un client d’Auckland', '1,5 Mbit/s en continu', 'Oui, réellement'],
        ['Modèle installé sur une machine du bureau', '0 après installation', 'Rien du tout'],
      ],
    }},

    { h: 'Les trois cas où l’objection est fondée' },
    'Il serait malhonnête de prétendre que le débit n’a jamais d’importance. Trois usages en dépendent vraiment. La visioconférence, qui réclame un flux continu. La synchronisation de gros fichiers — plans, photos de chantier, rushes vidéo. Et l’envoi d’audio ou d’images à un modèle distant : une heure de réunion à transcrire pèse une trentaine de mégaoctets, soit mille cinq cents fois une relance de facture.',
    'Il existe aussi une réponse qui supprime la question. Un modèle installé sur [une machine posée dans l’entreprise](/ia-locale-entreprise/) ne consomme aucune bande passante après son téléchargement : il travaille pendant la coupure et les documents ne sortent pas du bâtiment. Ce n’est pas la bonne réponse partout : la puissance locale reste inférieure à celle des grands modèles distants. C’est la bonne réponse quand la ligne est réellement mauvaise, ou les données réellement sensibles.',

    { h: 'Ce qu’il faut vérifier avant de se lancer' },
    { steps: [
      'Mesurez au lieu de deviner. Un test de débit à l’heure où votre équipe travaille, trois jours de suite. En dessous de 4 Mbit/s stables, certains usages deviennent inconfortables ; au-dessus, la bande passante n’est plus votre sujet.',
      'Listez les tâches candidates et notez, pour chacune, si un humain attend la réponse. Celles où personne n’attend sont insensibles au réseau. Commencez par celles-là, sans exception.',
      'Exigez la file d’attente. Toute automatisation doit pouvoir échouer, patienter et reprendre seule. Si un prestataire ne sait pas répondre à cette question, vous avez votre réponse.',
      'Isolez les données sensibles. Comptabilité, dossiers médicaux, pièces d’identité : ce qui ne doit pas sortir peut être traité sur place, quel que soit l’état du réseau.',
    ] },

    { note: 'Attendre la fibre parfaite pour automatiser, c’est attendre une piste d’atterrissage pour aller à vélo. Les chiffres de l’OPT-NC disent que le réseau est déjà là pour la grande majorité des entreprises du pays, et l’arithmétique dit que ces automatisations demandaient mille fois moins qu’on ne le croyait. Ce qui manque n’est presque jamais le débit. C’est le choix des trois tâches, et une conception qui survit à une coupure.' },
  ],
  faq: [
    { q: 'Quel débit minimum faut-il vraiment pour automatiser une PME ?', a: 'Pour des automatisations de texte — devis, relances, tri d’emails, réponses clients — quelques centaines de kilobits par seconde suffisent, et une 4G correcte fait l’affaire. Le seuil de 4 Mbit/s stables sert surtout au confort de l’équipe qui supervise. Le débit ne devient un critère de conception que pour la visioconférence, la synchronisation de gros fichiers et l’envoi d’audio ou d’images à un modèle distant.' },
    { q: 'Et si la connexion coupe pendant que le système travaille ?', a: 'Rien ne doit se perdre, à condition que cela ait été prévu. Une automatisation correctement construite place les opérations en file d’attente, réessaie automatiquement après une coupure et reprend où elle s’était interrompue. C’est une exigence à poser avant de signer, pas une option à ajouter ensuite — et elle ne se paie pas plus cher.' },
    { q: 'Est-ce que Kanaky (Nouvelle-Calédonie) est mal desservie en fibre ?', a: 'Les chiffres publiés par l’OPT-NC ne vont pas dans ce sens : 63 327 accès fibre créés à fin 2024, un taux de raccordement de 81 % sur les lignes fixes, et une disponibilité dans 20 des 33 communes au premier trimestre 2025 couvrant 97 % des foyers et entreprises raccordés au fixe. S’y ajoute la mise en service de Gondwana-2 vers les Fidji le 25 août 2022, qui supprime le point de rupture unique vers l’extérieur.' },
    { q: 'Vaut-il mieux faire tourner l’IA en local quand la ligne est mauvaise ?', a: 'C’est un arbitrage, pas une évidence. En local, vous gagnez l’indépendance au réseau et la maîtrise des données ; vous perdez en puissance de raisonnement face aux plus grands modèles distants, et vous prenez en charge une machine. Quand la ligne est mauvaise ou les données sensibles, l’arbitrage penche clairement vers le local ; sinon, une conception asynchrone suffit à rendre le réseau non bloquant.' },
  ],
  related: [
    ['/ia-locale-entreprise/', 'L’IA qui tourne chez vous, sans cloud'],
    ['/exemples-automatisation-pme/', '10 exemples d’automatisation en PME'],
    ['/combien-coute-automatisation-ia/', 'Combien coûte l’automatisation IA, les vrais chiffres'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Automatiser sans attendre la fibre parfaite : le calcul, en Nouvelle-Calédonie',
    datePublished: '2026-07-30',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'automation-without-perfect-internet',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/automatiser-sans-attendre-la-fibre/' },
  title: 'You Don\'t Need Perfect Internet to Automate a Business — The Arithmetic',
  description: 'A business automation moves about 20 kilobytes per operation — 750 times less than one minute of video calling. The bandwidth maths, real latency figures from the islands, and the three cases where the connection genuinely decides.',
  keywords: 'automate business slow internet, bandwidth needed for AI automation, island business connectivity, offline AI automation, New Caledonia fibre coverage, Pacific internet latency business',
  eyebrow: 'Journal',
  short: 'Journal · Connectivity',
  h1: 'Perfect internet is not a prerequisite. <span style="color:var(--grey-4);font-weight:300;">Here is the arithmetic.</span>',
  cta: 'service',
  published: '2026-07-30',
  body: [
    { lead: 'One sentence turns up in nearly every first conversation, whether the business is in Nouméa, Port Vila or a shed outside Whangārei: we will look at this once we have a better connection. It is offered in good faith, and it rests on a measurement error. A business automation does not move video, it moves text — and the gap between those two is a factor of a thousand.' },

    { h: 'What an automation actually weighs' },
    'Take the most ordinary task there is: a system that drafts a payment reminder, sends it, and records what it did. What crosses the network is the request sent to the model and the answer that comes back — say 3,000 words of context and 700 words of reply. In characters, roughly twenty kilobytes for the round trip. No video, no images, no attachments.',
    'Now set that against what your line already carries without complaint. One minute of high-definition video calling moves about **15 megabytes**. So a single minute on a video call shifts as much data as **750 payment reminders**. A 4K film, at fifteen gigabytes, is worth seven hundred and fifty thousand of them. A system handling two hundred operations a day consumes roughly four megabytes daily — a quarter of one minute of video, spread across eight hours.',

    { h: 'The island constraint is latency, not bandwidth' },
    'Response time is the genuinely island-specific question. Gondwana-1, the first submarine cable serving Kanaky (New Caledonia), runs 2,080 kilometres from Nouméa to Sydney and entered service in September 2008. Light in fibre travels about 200,000 kilometres per second, which puts the physical round trip to Sydney at roughly twenty milliseconds — thirty to forty in practice, once the equipment along the way is counted. To a data centre on the US west coast, budget 150 to 200 milliseconds.',
    'Two hundred milliseconds on an operation nobody is watching has no consequence whatsoever. A quote formatted in eleven seconds rather than nine changes nobody\'s day. Latency only bites when a human is waiting at a screen — and most of what gets automated in a small business happens with nobody at a screen at all. That is the property worth hunting for: asynchronous work is indifferent to geography.',

    { h: 'The state of the network, in published figures' },
    'It also helps to argue from figures rather than impressions. According to OPT-NC, the territory\'s operator, **63,327 fibre accesses** had been created by the end of 2024, more than 8,600 of them during that year alone, for a **81 per cent** connection rate across the fixed-line base. Fibre was available in **20 of 33 communes** in the first quarter of 2025, and those twenty account for **97 per cent** of the households and businesses using fixed services. On mobile: 537 active sites as of April 2025, with 4G coverage reported at **99 per cent of the population**.',
    'Which means the business waiting for fibre usually already has it, and the one that does not has 4G that comfortably clears the twenty-kilobyte bar described above. The region has also stopped hanging by a single thread. As reported by Outremers360, Gondwana-2 — linking Nouméa to Fiji — and the domestic Picot-2 cable entered service on **25 August 2022** at a final cost of 4.675 billion XPF. Before that date, one break cut the territory off. That is no longer true.',

    { h: 'The real risk is the outage, not the slowness' },
    'One serious objection remains: networks go down. They do here, as they do everywhere. But that risk is not managed by waiting for more bandwidth — it is managed at design time, and it costs nothing extra.',
    'A fragile system is one that insists on being online at the exact moment you use it. A sound system queues the work, retries by itself, and picks up where it stopped when the line comes back. That is a configuration decision, not a capital expense. We build automations that way for a plain reason: the question is never whether the connection will drop, only when — and what happens in the meantime.',

    { table: {
      minWidth: 600,
      head: ['What the system does', 'Data moved', 'What fibre changes'],
      rows: [
        ['Draft and send a payment reminder', '~20 KB per reminder', 'Nothing'],
        ['Turn notes into a four-page quote', '~60 KB', 'Nothing'],
        ['Sort and route 200 emails a day', '~4 MB per day', 'Nothing'],
        ['Transcribe a one-hour meeting', '~30 MB of audio', 'Helpful, not required'],
        ['Video call with a client in Auckland', '1.5 Mbps sustained', 'Yes, genuinely'],
        ['Model running on a machine in the office', '0 after install', 'Nothing at all'],
      ],
    }},

    { h: 'The three cases where the objection holds' },
    'It would be dishonest to claim bandwidth never matters. Three uses depend on it. Video calling, which needs a sustained stream and forgives jitter badly. Syncing large files — drawings, site photography, video rushes. And sending audio or images to a remote model: an hour of meeting audio to transcribe weighs about thirty megabytes, fifteen hundred times a payment reminder. If your project lives there, the line is a real constraint.',
    'There is also an answer that removes the question entirely. A model installed on [a machine sitting inside the business](/run-ai-locally-business/) uses no bandwidth at all once downloaded: it keeps working through the outage, and the documents never leave the building. It is not the right answer everywhere — the reasoning power available locally still trails the largest remote models. It is the right answer when the line is genuinely poor, or the data genuinely sensitive.',

    { h: 'What to check before starting' },
    { steps: [
      'Measure instead of guessing. Run a speed test at the hour your team actually works, three days running. Below a stable 4 Mbps some uses get uncomfortable; above it, bandwidth is no longer your problem.',
      'List the candidate tasks and mark, for each one, whether a human is waiting on the answer. The ones where nobody waits are insensitive to the network. Start there, without exception.',
      'Insist on the queue. Every automation must be able to fail, wait and resume unattended. A supplier who cannot answer that question has answered a different one about themselves.',
      'Separate the sensitive data. Accounts, medical records, identity documents: whatever must not leave can be processed on the premises, regardless of what the network is doing.',
    ] },

    { note: 'Waiting for perfect fibre before automating is waiting for a runway before riding a bicycle. OPT-NC\'s own figures say the network already reaches the large majority of businesses in the territory, and the arithmetic says these automations needed a thousand times less than assumed. What is missing is almost never bandwidth. It is the choice of the three tasks, and a design that survives an outage.' },
  ],
  faq: [
    { q: 'What connection speed does automating a small business actually require?', a: 'For text-based automations — quotes, payment chasing, email triage, customer replies — a few hundred kilobits per second is enough, and decent 4G will do. The stable 4 Mbps threshold is mostly about comfort for the people supervising. Bandwidth only becomes a design criterion for video calling, syncing large files, and sending audio or images to a remote model.' },
    { q: 'What happens if the connection drops mid-job?', a: 'Nothing should be lost, provided it was designed for. A properly built automation queues its operations, retries automatically after an outage, and resumes where it stopped. That is a requirement to set before signing rather than an extra to bolt on afterwards — and it does not cost more.' },
    { q: 'Is the Pacific genuinely badly served for connectivity?', a: 'Less than the reputation suggests, at least in Kanaky (New Caledonia). OPT-NC reports 63,327 fibre accesses created by the end of 2024, a 81 per cent connection rate on fixed lines, and availability in 20 of 33 communes in the first quarter of 2025, covering 97 per cent of fixed-service households and businesses. Add the Gondwana-2 cable to Fiji, in service since 25 August 2022, which removed the single point of failure to the outside world.' },
    { q: 'Should a business with a poor line run AI locally instead?', a: 'It is a trade-off, not an obvious call. Locally you gain independence from the network and control of your data; you lose reasoning power against the largest remote models, and you take on a machine to look after. Where the line is poor or the data sensitive, the trade-off tilts clearly toward local. Otherwise, an asynchronous design is enough to make the network non-blocking.' },
  ],
  related: [
    ['/local-ai-vs-cloud-ai/', 'Local AI vs cloud AI — an honest comparison'],
    ['/local-llm-hardware-requirements/', 'Local LLM hardware — what you actually need'],
    ['/ai-automation-small-business/', 'AI automation for small business: what to do first'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'You Don\'t Need Perfect Internet to Automate a Business — The Arithmetic',
    datePublished: '2026-07-30',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'actualite-ia-pme-pacifique-juillet-2026',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/ai-news-pacific-smes-july-2026/' },
  title: 'Actualité IA, juillet 2026 : ce que ça change pour une PME du Pacifique',
  description: 'Google publie une étude sur 15 millions d’interactions et ne trouve pas d’automatisation massive du travail. En parallèle, le SMG calédonien passe à 1 000 F de l’heure. Ce que ces deux chiffres imposent de conclure, et rien de plus.',
  keywords: 'actualité IA PME Pacifique, étude Google ATLAS IA travail, IA remplace les emplois, automatisation PME Nouvelle-Calédonie, SMG 2026 Nouvelle-Calédonie, IA petite entreprise Océanie',
  eyebrow: 'Journal',
  short: 'Journal · Actualité IA',
  h1: 'L’actualité IA de la semaine. <span style="color:var(--grey-4);font-weight:300;">Ce qu’elle autorise vraiment à conclure.</span>',
  cta: 'service-fr',
  published: '2026-07-29',
  body: [
    { lead: 'Deux nouvelles de la semaine se contredisent en apparence. Google annonce jusqu’à 205 milliards de dollars d’investissement dans ses infrastructures IA pour 2026 — et publie dans le même temps une étude qui dit ne trouver aucune preuve d’une automatisation massive du travail. Pour un gérant de Nouméa, de Port-Vila ou d’Auckland qui lit ça entre deux devis, la question n’est pas de savoir qui a raison. Elle est de savoir ce qui, dans ces chiffres, concerne son entreprise lundi prochain.' },

    { h: 'L’étude qu’on n’attendait pas de Google' },
    'Selon Ars Technica, qui l’a détaillée le 28 juillet, une équipe de Google Research a passé au crible 15 millions d’interactions anonymisées avec ses modèles, rapprochées des classifications officielles des métiers américains. Le travail s’appelle « AI & Economy ATLAS ». Sa conclusion, écrite par une entreprise qui aurait tout intérêt à dire le contraire : les chercheurs ne trouvent pas d’élément permettant de soutenir l’idée que l’IA serait sur le point de provoquer une automatisation et un déplacement massifs du travail de bureau.',
    'Les chiffres méritent d’être lus lentement. Sur l’ensemble des tâches recensées pour tous les métiers, **21 %** seulement atteignent un usage non négligeable de l’outil. Pour **29 % des métiers, aucune tâche** ne franchit ce seuil — pas une seule. Pour 30 % de plus, moins d’un quart des tâches. Et dans 3 % des métiers seulement, l’IA intervient sur au moins trois quarts du travail recensé : analystes qualité logicielle, spécialistes RH, gestionnaires documentaires. L’usage, écrivent les chercheurs, reste superficiel et massivement collaboratif.',

    { h: 'Le détail de l’étude qui nous regarde' },
    'Un chiffre nous concerne plus que les autres. Les métiers surreprésentés dans les usages sont ceux de la finance, du développement logiciel, de l’administration système. Les métiers sous-représentés : la vente, le transport, la restauration. C’est-à-dire, à peu de chose près, l’économie réelle de Kanaky (Nouvelle-Calédonie), du Vanuatu ou des Fidji.',
    'La lecture paresseuse serait d’en conclure que l’IA ne sert à rien pour ces métiers. C’est faux, et l’étude le démontre elle-même : elle relève des dizaines de milliers de conversations de mécaniciens automobiles testant des composants avec l’aide du modèle, photo à l’appui. La bonne lecture est autre. Ces métiers ne reçoivent rien par osmose. Un analyste financier tombe sur l’outil parce qu’il travaille déjà dans un navigateur ; un patron de société de transport à Nouméa, non. Ce qui manque n’est pas la capacité de la machine — c’est quelqu’un pour l’installer là où le travail se fait.',

    { h: 'Ce que vaut une heure ici, à partir du 1er août' },
    'Le deuxième chiffre de la semaine est local. Selon NC la 1ère, le gouvernement calédonien a acté mercredi la revalorisation du salaire minimum garanti : **169 014 F CFP brut** par mois au 1er août 2026, contre 167 602 F depuis juin 2025 — soit un taux horaire porté à **1 000 F**. Le minimum agricole passe à 143 662 F, 850 F de l’heure.',
    'Mille francs de l’heure est un plancher, hors charges patronales — et l’heure d’un dirigeant vaut plusieurs fois ce montant. Posez maintenant le calcul que l’étude rend crédible : les gains portent sur les tâches cognitives routinières et peu expertes — rédiger, reformuler, traduire, retrouver une information, mettre en forme. Additionnez-les dans une entreprise de six personnes — le devis remis au propre, la relance de facture, la réponse en anglais au client australien, le compte rendu de chantier. Six heures par semaine est une estimation basse. Sur quarante-cinq semaines : 270 heures, soit plus d’un quart de million de francs par an au seul taux plancher, et bien davantage si ce sont les heures du gérant.',

    { table: {
      minWidth: 560,
      head: ['Ce que dit l’étude', 'Ce que ça impose à une PME d’ici'],
      rows: [
        ['21 % des tâches seulement voient un usage réel', 'Ne budgétez pas une transformation. Ciblez trois tâches nommées.'],
        ['86 % des usages sont cognitifs, pas manuels', 'Le gain est au bureau, pas à l’atelier ni sur le chantier.'],
        ['L’outil sert surtout sur les tâches peu expertes', 'Votre savoir-faire n’est pas menacé. Votre paperasse, si.'],
        ['Vente, transport, restauration : usage marginal', 'Rien ne viendra à vous tout seul. Il faut l’installer.'],
      ],
    }},

    { h: 'Le capex de Google n’est pas votre problème. Sa facture, peut-être' },
    'Reste la première nouvelle. Toujours selon Ars Technica, Google a dépensé **44,9 milliards de dollars** sur son infrastructure IA au deuxième trimestre 2026, pour 39,1 milliards de flux de trésorerie d’exploitation. Résultat : le premier trimestre à flux de trésorerie disponible négatif de son histoire, −5,8 milliards, avec une enveloppe annuelle annoncée jusqu’à 205 milliards contre 91 en 2025.',
    'Une entreprise qui encaisse 119,8 milliards de dollars de revenus trimestriels absorbe cela sans trembler. La question, pour vous, est ailleurs : ces montants finiront par ressortir quelque part dans les prix. Faire reposer toute sa gestion sur une facture mensuelle libellée en devise étrangère, dont le tarif dépend du bon vouloir d’un fournisseur situé à l’autre bout du monde, est un pari — le même que celui des abonnements logiciels dont beaucoup, ici, ont vu le prix doubler en trois ans. C’est une des raisons pour lesquelles, quand le besoin le permet, nous montons des systèmes [qui tournent sur une machine posée dans l’entreprise](/ia-locale-entreprise/) plutôt que sur un compteur qui tourne ailleurs.',

    { h: 'Ce que ces chiffres autorisent à faire, et rien de plus' },
    'Une étude sur des usages américains ne décrit pas une PME de Koné ou de Luganville — inutile de prétendre le contraire. Mais elle corrige deux erreurs symétriques, coûteuses toutes les deux. La première consiste à croire qu’il faut agir dans l’urgence sous peine d’être balayé : les données disent l’inverse, l’adoption reste peu profonde partout. La seconde consiste à en déduire qu’il n’y a rien à faire : les données disent le contraire aussi, puisque là où l’outil est installé sur les bonnes tâches, il y reste.',
    'Entre les deux, une conduite mesurée : identifier trois tâches routinières qui vous coûtent des heures, en automatiser une, mesurer un mois, décider ensuite. C’est par là que commence [notre audit gratuit](/commencer-avec-ia-entreprise/), et c’est aussi ce qu’une entreprise peut faire seule, sans nous. Quant à [la part de nos recettes qui reste au pays](/engagement-local/), elle est publiée chiffre par chiffre, sans campagne autour.',

    { note: 'Rien dans l’actualité de cette semaine n’oblige une entreprise du Pacifique à se précipiter. Deux choses en ressortent pourtant, et elles pointent dans la même direction : les gains réels portent sur des tâches banales et identifiables, et personne ne viendra les installer à votre place. Trois tâches, mesurées pendant un mois — c’est tout ce que ces chiffres permettent de conclure, et c’est déjà beaucoup.' },
  ],
  faq: [
    { q: 'L’étude de Google veut-elle dire que l’IA est surestimée ?', a: 'Elle dit quelque chose de plus précis : à la date de sa publication, l’usage observé reste peu profond et largement collaboratif, et l’automatisation de bout en bout est limitée. Les chercheurs précisent eux-mêmes que cela peut changer avec de nouveaux modèles ou des robots plus capables. Ce qui est surestimé, ce n’est donc pas l’outil — c’est la vitesse à laquelle il remplacerait des métiers entiers sans que personne n’ait rien à faire.' },
    { q: 'Mon secteur apparaît comme peu concerné. Faut-il attendre ?', a: 'Attendre quoi, exactement ? La sous-représentation de la vente ou du transport dans ces données mesure des usages spontanés, pas un potentiel. Le travail administratif d’un transporteur — devis, lettres de voiture, relances, réponses clients — relève précisément des tâches cognitives routinières où l’étude constate des gains. La différence tient à qui installe le système, pas au secteur.' },
    { q: 'Faut-il craindre pour les emplois dans une petite structure ?', a: 'Dans une entreprise de six personnes, la question se pose rarement en ces termes : il n’y a pas de poste en trop, il y a des heures en trop sur des postes déjà pleins. Les données de Google vont dans ce sens, puisque les tâches confiées à la machine sont les moins expertes et rarement le cœur du métier. Nous n’avons jamais monté un système dont l’objet était de supprimer un poste, et [la comparaison mérite d’être posée franchement](/automatiser-ou-embaucher/).' },
    { q: 'Les prix de l’IA vont-ils augmenter ?', a: 'Personne ne le sait, et se fier à qui l’affirme serait imprudent. Ce qui est documenté, c’est l’ampleur des sommes engagées : jusqu’à 205 milliards de dollars pour Google en 2026, selon ses propres annonces rapportées par Ars Technica. Un investissement de cette taille cherche un retour. La parade raisonnable n’est pas de renoncer, c’est d’éviter de rendre son entreprise dépendante d’un fournisseur unique — et de garder les traitements les plus sensibles sur une machine dont vous êtes propriétaire.' },
  ],
  related: [
    ['/automatiser-ou-embaucher/', 'Automatiser ou embaucher : la grille de décision'],
    ['/exemples-automatisation-pme/', '10 exemples d’automatisation en PME'],
    ['/ia-locale-entreprise/', 'L’IA qui tourne chez vous'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'Actualité IA, juillet 2026 : ce que ça change pour une PME du Pacifique',
    datePublished: '2026-07-29',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

{
  slug: 'ai-news-pacific-smes-july-2026',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/actualite-ia-pme-pacifique-juillet-2026/' },
  title: 'AI News, July 2026: What It Actually Means for a Pacific Small Business',
  description: 'Google studies 15 million AI interactions and finds no evidence of mass workplace automation. The same week, New Caledonia sets its minimum wage at 1,000 XPF an hour. What these two numbers permit a small business to conclude — and nothing more.',
  keywords: 'AI news Pacific business, Google ATLAS study AI jobs, is AI replacing jobs 2026, AI adoption small business, New Caledonia minimum wage 2026, AI automation Oceania SME',
  eyebrow: 'Journal',
  short: 'Journal · AI news',
  h1: 'This week in AI. <span style="color:var(--grey-4);font-weight:300;">What the numbers actually support.</span>',
  cta: 'service',
  published: '2026-07-29',
  body: [
    { lead: 'Two stories landed this week and appear to point in opposite directions. Google confirmed it may spend up to US$205 billion on AI infrastructure in 2026 — and, the same week, published a study reporting that it can find no evidence of mass workplace automation. If you run a small business in Nouméa, Port Vila or Suva, the useful question is not which headline wins. It is which of these numbers, if any, touches your company next Monday.' },

    { h: 'The study nobody expected from Google' },
    'As Ars Technica detailed on 28 July, a team at Google Research analysed 15 million anonymised conversations with its models and mapped them against the official classification of US occupations. The project is called the AI & Economy ATLAS. Its conclusion, published by a company with every commercial reason to claim the opposite: the researchers found nothing to support the idea that AI is about to trigger mass automation and displacement of knowledge work.',
    'The figures deserve a slow read. Across every task catalogued for every occupation, only **21 per cent** see meaningful use of the tool. In **29 per cent of occupations, not a single task** crosses that threshold. In another 30 per cent, fewer than a quarter of tasks do. And in just 3 per cent of occupations does AI touch at least three quarters of the catalogued work — software quality analysts, HR specialists, document management staff. Usage, the researchers write, remains shallow and overwhelmingly collaborative.',

    { h: 'The detail that concerns this region' },
    'One finding matters here more than the rest. The occupations over-represented in the data are finance, software development and systems administration. The under-represented ones are sales, transport and food service — which is, near enough, the real economy of Kanaky (New Caledonia), Vanuatu and Fiji.',
    'The lazy reading would be that AI has nothing to offer those trades. The study itself refutes it: the researchers record tens of thousands of conversations from motor mechanics testing components with the model\'s help, photos attached. The better reading is different. These trades receive nothing by osmosis. A financial analyst stumbles onto the tool because the work already happens in a browser; the owner of a trucking firm in Nouméa does not. What is missing is not the machine\'s capability — it is someone to install it where the work is done.',

    { h: 'What an hour is worth here from 1 August' },
    'The second number of the week is local. As reported by NC la 1ère, the government of New Caledonia has approved the new guaranteed minimum wage: **169,014 XPF gross** per month from 1 August 2026, up from 167,602 since June 2025 — an hourly floor of **1,000 XPF**, a little under €8.40 at the currency\'s fixed peg to the euro. The agricultural minimum rises to 143,662 XPF, or 850 an hour.',
    'A thousand francs an hour is a floor, before employer contributions — and an owner\'s hour is worth several multiples of it. Now run the calculation the study makes credible: the documented gains sit on routine cognitive tasks that demand little expertise — drafting, rephrasing, translating, retrieving a piece of information, formatting. Add those up in a six-person firm: the quote typed up properly, the unpaid invoice chased, the reply written for a client in another language, the site report assembled. Six hours a week is a conservative estimate. Over forty-five working weeks that is 270 hours — more than a quarter of a million francs a year at the floor rate alone, and considerably more when the hours belong to the owner.',

    { table: {
      minWidth: 560,
      head: ['What the study says', 'What it implies for a small Pacific firm'],
      rows: [
        ['Only 21% of tasks see real use', 'Do not budget a transformation. Pick three named tasks.'],
        ['86% of observed use is cognitive, not manual', 'The gain sits in the office, not the workshop or the worksite.'],
        ['The tool serves mostly low-expertise tasks', 'Your trade is not under threat. Your paperwork is.'],
        ['Sales, transport, food service: marginal use', 'Nothing arrives on its own. Someone has to install it.'],
      ],
    }},

    { h: 'Google\'s capex is not your problem. Your future bill might be' },
    'Which leaves the first story. Again per Ars Technica, Google spent **US$44.9 billion** on AI infrastructure in the second quarter of 2026 against US$39.1 billion in operating cash flow — its first quarter of negative free cash flow on record, at −5.8 billion, with an annual envelope announced at up to 205 billion versus 91 in 2025.',
    'A company booking US$119.8 billion in quarterly revenue absorbs that without flinching. The question, for you, sits elsewhere: sums of that size eventually resurface in prices. Resting your whole operation on a monthly bill denominated in a foreign currency, set at the discretion of a supplier on the other side of the planet, is a bet — the same bet behind the software subscriptions many businesses in this region have watched double in three years. It is one reason why, when the job allows it, we build systems that [run on a machine inside the business](/run-ai-locally-business/) rather than on a meter running somewhere else.',

    { h: 'What these numbers justify doing, and nothing more' },
    'A study of American usage does not describe a small firm in Koné or Luganville, and pretending otherwise would be its own kind of spin. But it corrects two symmetrical mistakes, both expensive. The first is believing you must act urgently or be swept aside: the data says the opposite — adoption is shallow everywhere. The second is concluding there is nothing to do: the data says the opposite of that too, because wherever the tool is installed on the right tasks, it stays.',
    'Between the two sits a measured course: name three routine tasks that cost you hours, automate one, measure for a month, then decide. That is how [our free audit](/ai-audit/) begins, and it is also something a business can do alone, without us. As for [how much of our revenue stays in the region](/local-commitment/), the figures are published line by line.',

    { note: 'Nothing in this week\'s news obliges a Pacific business to hurry. Two things do emerge, and they point the same way: the real gains sit on ordinary, nameable tasks, and nobody is coming to install them for you. Three tasks, measured over one month — that is everything these numbers support, and it is already a great deal.' },
  ],
  faq: [
    { q: 'Does the Google study mean AI is overhyped?', a: 'It says something more precise: as of publication, observed usage remains shallow and largely collaborative, and end-to-end automation is rare. The researchers themselves note this could change with newer models or more capable robotics. What is overhyped is not the tool — it is the speed at which it was supposed to replace whole occupations with nobody having to lift a finger.' },
    { q: 'My industry barely appears in the data. Should I wait?', a: 'Wait for what, exactly? The under-representation of sales or transport in these figures measures spontaneous usage, not potential. The administrative side of a transport company — quotes, consignment notes, chasing payments, customer replies — is precisely the routine cognitive work where the study records gains. The difference lies in who installs the system, not in the industry.' },
    { q: 'Should a small team worry about jobs?', a: 'In a six-person company the question rarely takes that form: there is no surplus position, there are surplus hours on positions already full. Google\'s data points the same way, since the tasks handed to the machine are the least expert ones and rarely the core of anyone\'s trade. We have never built a system whose purpose was to remove a job, and [the comparison deserves to be made openly](/ai-vs-hiring/).' },
    { q: 'Will AI prices rise?', a: 'Nobody knows, and anyone claiming certainty should be read with caution. What is documented is the scale of the money committed: up to US$205 billion for Google in 2026, per its own announcements as reported by Ars Technica. Investment on that scale looks for a return. The reasonable defence is not to walk away from the tools — it is to avoid making your business dependent on a single supplier, and to keep the most sensitive workloads on a machine you own.' },
  ],
  related: [
    ['/ai-automation-small-business/', 'AI automation for small business: what to do first'],
    ['/run-ai-locally-business/', 'Run AI locally — your data stays in-house'],
    ['/marketplace/cold-outreach-machine/', 'The Cold Outreach Machine — bought once, yours'],
  ],
  extraGraph: [{
    '@type': 'Article',
    headline: 'AI News, July 2026: What It Actually Means for a Pacific Small Business',
    datePublished: '2026-07-29',
    author: { '@id': 'https://kanaky.xyz/#kevyn' },
    publisher: { '@id': 'https://kanaky.xyz/#organization' },
  }],
},

];
