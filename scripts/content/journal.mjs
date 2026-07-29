/* Journal — un article de fond par jour.
 *
 * Un objet par publication, ajouté en tête de tableau (le plus récent
 * d'abord). Règle de fond : une position, des faits datés, des sources
 * nommées dans le texte. Si un paragraphe pouvait être publié n'importe
 * quel autre jour de l'année, il n'a rien à faire dans un journal. */

export default [

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
