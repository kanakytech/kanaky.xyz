/* Le « gang » — les marchés du Pacifique que personne ne dessert sérieusement.
 *
 * Choix de Kevyn le 28/07 : après l'audit qui montre l'Australie hors de
 * portée à court terme, concentrer sur les marchés où être premier est
 * atteignable en semaines : Wallis, Kanaky (Nouvelle-Calédonie), Vanuatu, Fidji.
 *
 * Le Vanuatu est officiellement bilingue français/anglais (+ bislama) :
 * deux pages avec hreflang réciproque, pas une traduction molle.
 * Fidji est anglophone : une seule page.
 *
 * Contexte vérifié par recherche le 28/07 — croissance ~4% attendue au
 * Vanuatu 2025-26, French Week Port-Vila juillet 2026 avec la NC ;
 * Fidji = tourisme + MSME + écosystème fintech naissant Suva/Nadi/Lautoka. */

export default [

/* ══════════════ VANUATU ══════════════ */
{
  slug: 'automatisation-ia-vanuatu',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/automatisation-ia-vanuatu/#service',
    name: 'Automatisation IA au Vanuatu',
    serviceType: 'AI automation and business process automation',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: { '@type': 'Country', name: 'Vanuatu' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://kanaky.xyz/automatisation-ia-vanuatu/',
      availableLanguage: ['fr', 'en'],
    },
  }],
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/ai-automation-vanuatu/' },
  title: 'Automatisation IA au Vanuatu — guide pour les entreprises de Port-Vila',
  description: 'Automatiser son entreprise au Vanuatu : ce qui marche pour le tourisme, le commerce et les services à Port-Vila et Luganville, la contrainte de connectivité, les prix, et pourquoi un prestataire calédonien est le voisin logique.',
  keywords: 'automatisation IA Vanuatu, IA Port-Vila, agence IA Vanuatu, transformation numérique Vanuatu, automatiser entreprise Vanuatu',
  eyebrow: 'Vanuatu',
  short: 'Vanuatu (français)',
  h1: 'Automatiser son entreprise <span style="color:var(--grey-4);font-weight:300;">au Vanuatu.</span>',
  cta: 'service-fr',
  body: [
    { lead: 'Le Vanuatu est à une heure de vol de Nouméa, partage la moitié de sa langue de travail avec la Kanaky (Nouvelle-Calédonie), et n’a quasiment aucune offre sérieuse en automatisation. C’est un marché délaissé — ce qui est une difficulté quand on cherche un prestataire, et une opportunité quand on est celui qui décide de s’en occuper.' },

    { h: 'Ce qui compte vraiment ici : la connectivité et les distances' },
    'Avant de parler d’IA, il faut parler du terrain. Le pays est fait d’îles séparées par de vraies distances, la connectivité varie fortement d’un endroit à l’autre, et les épisodes cycloniques font partie du calendrier plutôt que de l’imprévu.',
    '**Conséquence pratique et non négociable : privilégiez ce qui continue de fonctionner quand la liaison tombe.** Un outil hébergé à l’autre bout du monde s’arrête avec la connexion. Un système qui traite vos documents et prépare vos réponses sur une machine posée dans votre bureau, non. C’est l’argument central de [l’IA en local](/ia-locale-entreprise/), et il vaut plus au Vanuatu qu’à peu près partout ailleurs.',

    { h: 'Ce qui s’automatise utilement au Vanuatu' },
    { list: [
      '**Le tourisme et l’hôtellerie** — pilier de l’économie. Demandes de réservation, groupes, coordination des transferts inter-îles : ce sont les gisements les plus rentables, et ceux qu’on perd le plus souvent par lenteur de réponse.',
      '**Le bilingue français / anglais**, plus le bislama à l’accueil. Traduire et adapter automatiquement la correspondance client est ici un usage à forte valeur, pas un gadget.',
      '**La coordination inter-îles** : les allers-retours administratifs entre Port-Vila, Luganville et les autres îles créent une charge de communication que l’automatisation absorbe bien.',
      '**L’administratif et les documents** : factures fournisseurs, bons, dossiers. Le gisement le plus sûr, et il ne dépend pas de la liaison si le système est local.',
      '**Les relances** commerciales et d’impayés, que presque personne ne tient à la main.',
    ]},

    { h: 'Le voisin logique' },
    'Nouméa est à une heure de vol. Même fuseau horaire à une heure près, monnaie et références administratives proches, et surtout : quand un système s’arrête un mardi matin, votre prestataire est réveillé. Un prestataire métropolitain ou asiatique travaille pendant que vous dormez — chaque aller-retour prend une journée de plus.',
    'Les liens économiques entre les deux territoires sont d’ailleurs actifs : une **French Week** réunissant institutions et secteur privé des deux côtés s’est tenue à Port-Vila en juillet 2026. Le corridor Nouméa–Port-Vila est une réalité commerciale, pas une idée.',

    { h: 'Nos prix pour le Vanuatu' },
    'Nous appliquons une **grille spécifique au Vanuatu**, nettement inférieure à nos tarifs néo-zélandais ou calédoniens. La raison est simple et nous préférons la dire que la cacher : un tarif calibré sur Auckland n’a aucun sens à Port-Vila, et un prix inaccessible ne sert personne — ni vous, ni nous.',
    { table: {
      minWidth: 540,
      head: ['Prestation', 'Tarif Vanuatu', 'À titre de comparaison'],
      rows: [
        ['Audit d’opportunités', 'Gratuit', 'Gratuit partout'],
        ['Un workflow automatisé', '**35 000 – 90 000 VUV**', '3 à 5× plus cher en NZ'],
        ['Pack complet (2-3 workflows)', '**150 000 – 220 000 VUV**', '—'],
        ['Accompagnement mensuel', '**6 000 – 18 000 VUV/mois**', '4 à 6× plus cher en NZ'],
        ['Système IA local sur votre matériel', 'sur devis, matériel au coût', '—'],
      ],
    }},
    'À titre indicatif, 100 000 VUV représentent environ 700 €. Les montants sont fixés en vatu pour que vous sachiez ce que vous payez, sans surprise de change.',
    { h3: 'Pourquoi cette grille, concrètement' },
    { list: [
      '**Le système est déjà construit.** Nous ne repartons pas de zéro pour chaque client : l’essentiel de notre travail au Vanuatu consiste à adapter et installer, pas à inventer. Ce coût moindre, nous le répercutons plutôt que de l’encaisser.',
      '**Un marché à construire vaut mieux qu’un marché fermé.** Nous préférons dix entreprises vanuataises qui travaillent avec nous à zéro qui trouvent nos prix hors de portée.',
      '**Le même travail, pas une version au rabais.** Le tarif change, la prestation non : même code, même documentation, même exigence. Ce serait malhonnête de facturer moins pour livrer moins sans le dire.',
    ]},
    { note: 'Ces prix valent pour les entreprises établies au Vanuatu. Une entreprise étrangère opérant depuis Port-Vila relève de nos tarifs habituels — la grille est faite pour l’économie locale, pas pour l’optimisation.' },

    { note: '**Le conseil le plus utile, même si vous ne faites jamais appel à nous :** observez une semaine où partent réellement vos heures avant d’engager quoi que ce soit. Dans des structures où chacun porte plusieurs métiers, c’est la seule façon de savoir ce qui mérite d’être automatisé. [La méthode est ici](/commencer-avec-ia-entreprise/), et elle est gratuite.' },
  ],
  faq: [
    { q: 'L’IA fonctionne-t-elle avec une connexion instable ?', a: 'Cela dépend entièrement du montage choisi. Un service en ligne s’arrête quand la liaison s’arrête. Un modèle installé sur une machine dans votre bureau continue de traiter vos documents et de préparer vos réponses. Au Vanuatu, ce n’est pas une préférence technique, c’est un critère de choix prioritaire.' },
    { q: 'Y a-t-il des prestataires au Vanuatu ?', a: 'Très peu de spécialistes en automatisation, ce qui est à double tranchant : peu de choix, mais aussi peu de pression commerciale pour vous vendre l’inutile. Soyez d’autant plus exigeant — demandez une estimation d’heures gagnées avant de signer, qui possède le code, et ce qui se passe si vous changez de prestataire.' },
    { q: 'Travaillez-vous en anglais et en français ?', a: 'Les deux, ce qui compte dans un pays où les entreprises passent d’une langue à l’autre selon l’interlocuteur. Les systèmes que nous construisons gèrent la correspondance bilingue ; pour le bislama, les modèles actuels sont beaucoup moins fiables et nous le disons plutôt que de le masquer — une relecture humaine reste nécessaire.' },
    { q: 'Faut-il venir sur place ?', a: 'Rarement pour un premier projet : l’audit et la mise en place se font à distance. Pour une installation de matériel local ou une formation d’équipe, un déplacement depuis Nouméa est simple — une heure de vol, ce qui est plus court que bien des trajets internes en Australie.' },
  ],
  related: [
    ['/ai-automation-vanuatu/', 'This page in English'],
    ['/ia-locale-entreprise/', 'L’IA en local'],
    ['/prix-automatisation-ia-nouvelle-caledonie/', 'Le détail des prix'],
    ['/commencer-avec-ia-entreprise/', 'Par où commencer'],
  ],
},

{
  slug: 'ai-automation-vanuatu',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/ai-automation-vanuatu/#service',
    name: 'AI Automation in Vanuatu',
    serviceType: 'AI automation and business process automation',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: { '@type': 'Country', name: 'Vanuatu' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://kanaky.xyz/ai-automation-vanuatu/',
      availableLanguage: ['fr', 'en'],
    },
  }],
  alt: { lang: 'fr', url: 'https://kanaky.xyz/automatisation-ia-vanuatu/' },
  title: 'AI Automation in Vanuatu — A Practical Guide for Port Vila Businesses',
  description: 'Automating a business in Vanuatu: what works for tourism, retail and services in Port Vila and Luganville, why connectivity decides the setup, realistic pricing, and why a New Caledonian provider is the logical neighbour.',
  keywords: 'AI automation Vanuatu, business automation Port Vila, AI Vanuatu, digital transformation Vanuatu, automation Luganville',
  eyebrow: 'Vanuatu',
  short: 'Vanuatu (English)',
  h1: 'AI automation <span style="color:var(--grey-4);font-weight:300;">in Vanuatu.</span>',
  cta: 'service',
  body: [
    { lead: 'Vanuatu is an hour\'s flight from Nouméa, works in both English and French, and has almost no serious automation offering. That is a problem when you are looking for a provider — and an opportunity for whoever decides to take the market seriously.' },

    { h: 'Connectivity and distance decide the design' },
    'Before discussing AI, the ground reality matters. The country spans islands separated by real distances, connectivity varies sharply by location, and cyclone season is a scheduled event rather than a surprise.',
    '**The non-negotiable consequence: favour what keeps working when the link drops.** A tool hosted on the other side of the world stops when your connection does. A system processing your documents and drafting your replies on a machine in your own office does not. That is the core argument for [running AI locally](/run-ai-locally-business/), and it carries more weight in Vanuatu than almost anywhere.',

    { h: 'What actually pays back here' },
    { list: [
      '**Tourism and hospitality** — the pillar of the economy. Booking enquiries, group requests and inter-island transfer coordination are the most valuable and the most frequently lost to slow replies.',
      '**Bilingual correspondence.** English and French, plus Bislama at reception. Automated translation and adaptation of client correspondence is high-value here, not a gimmick.',
      '**Inter-island coordination** — the administrative back-and-forth between Port Vila, Luganville and the outer islands creates a communication load automation absorbs well.',
      '**Document handling** — supplier invoices, dockets, files. The most reliable gain anywhere, and independent of connectivity when the system runs locally.',
      '**Follow-ups**, commercial and on unpaid invoices, which almost nobody sustains by hand.',
    ]},

    { h: 'The logical neighbour' },
    'Nouméa is an hour away by air, within an hour of your timezone, with close administrative and commercial ties. When a system stops on a Tuesday morning, your provider is awake. A European or Asian provider works while you sleep, which adds a day to every exchange.',
    'The corridor is commercially real, not theoretical: a **French Week** bringing together institutions and the private sector from both territories was held in Port Vila in July 2026.',

    { h: 'Our Vanuatu pricing' },
    'We run a **separate price list for Vanuatu**, well below our New Zealand and Kanaky (New Caledonia) rates. The reason is straightforward and we would rather state it than hide it: a price calibrated on Auckland makes no sense in Port Vila, and a rate nobody can afford serves neither of us.',
    { table: {
      minWidth: 540,
      head: ['Engagement', 'Vanuatu rate', 'For comparison'],
      rows: [
        ['Opportunity audit', 'Free', 'Free everywhere'],
        ['A single automated workflow', '**VUV 35,000 – 90,000**', '3–5× higher in NZ'],
        ['Full pack (2–3 workflows)', '**VUV 150,000 – 220,000**', '—'],
        ['Ongoing support', '**VUV 6,000 – 18,000/month**', '4–6× higher in NZ'],
        ['Local AI system on your hardware', 'Quoted, hardware at cost', '—'],
      ],
    }},
    'As a rough guide, VUV 100,000 is around EUR 700. We quote in vatu so you know exactly what you are paying, with no exchange-rate surprises.',
    { h3: 'Why this price list exists' },
    { list: [
      '**The system is already built.** We are not starting from scratch for each client — most of our work in Vanuatu is adapting and installing rather than inventing. We pass that lower cost on instead of pocketing it.',
      '**A market being built beats a market priced shut.** We would rather have ten Vanuatu businesses working with us than none who found the price out of reach.',
      '**Same work, not a stripped-down version.** The rate changes; the delivery does not. Same code, same documentation, same standard. Charging less to quietly deliver less would be dishonest.',
    ]},
    { note: 'These rates apply to businesses established in Vanuatu. A foreign company operating through Port Vila falls under our standard rates — this list exists for the local economy, not for structuring.' },

    { note: '**The most useful advice, even if you never work with us:** spend a week observing where your hours actually go before committing to anything. In small teams where everyone wears several hats, it is the only way to know what deserves automating. [The method is here](/how-to-start-with-ai/), and it costs nothing.' },
  ],
  faq: [
    { q: 'Does AI work with unreliable connectivity?', a: 'It depends entirely on the setup. A cloud service stops when your link stops. A model installed on a machine in your office keeps processing documents and drafting replies regardless. In Vanuatu this is not a technical preference — it should be your first selection criterion.' },
    { q: 'Are there automation providers in Vanuatu?', a: 'Very few specialists, which cuts both ways: less choice, but also less commercial pressure to sell you things you do not need. Be correspondingly demanding — ask for an estimate of hours saved before signing, who owns the code, and what happens if you change provider.' },
    { q: 'Do you work in English and French?', a: 'Both, which matters in a country where businesses switch language depending on who they are talking to. The systems we build handle bilingual correspondence. For Bislama, current models are considerably less reliable and we say so rather than hiding it — human review remains necessary.' },
    { q: 'Do you need to travel to Vanuatu?', a: 'Rarely for a first project — audits and setup are done remotely. For local hardware installation or team training, travel from Nouméa is straightforward: an hour\'s flight, shorter than many domestic trips within Australia.' },
  ],
  related: [
    ['/automatisation-ia-vanuatu/', 'Cette page en français'],
    ['/run-ai-locally-business/', 'Running AI locally'],
    ['/ai-automation-fiji/', 'AI automation in Fiji'],
    ['/how-to-start-with-ai/', 'How to start with AI'],
  ],
},

/* ══════════════ FIDJI ══════════════ */
{
  slug: 'ai-automation-fiji',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/ai-automation-fiji/#service',
    name: 'AI Automation in Fiji',
    serviceType: 'AI automation and business process automation',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: { '@type': 'Country', name: 'Fiji' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://kanaky.xyz/ai-automation-fiji/',
      availableLanguage: ['fr', 'en'],
    },
  }],
  title: 'AI Automation in Fiji — A Practical Guide for Suva and Nadi Businesses',
  description: 'Automating a business in Fiji: what works for tourism operators, MSMEs and services across Suva, Nadi and Lautoka, how it fits a growing digital economy, realistic pricing, and the questions to ask any provider.',
  keywords: 'AI automation Fiji, business automation Suva, AI Nadi, digital transformation Fiji, automation MSME Fiji, AI agency Fiji',
  eyebrow: 'Fiji',
  short: 'AI automation · Fiji',
  h1: 'AI automation <span style="color:var(--grey-4);font-weight:300;">for Fijian businesses.</span>',
  cta: 'service',
  body: [
    { lead: 'Fiji has the most developed digital ecosystem in the region — a real startup scene across Suva, Nadi and Lautoka, an active fintech layer, and institutional support for MSMEs. That changes what automation should look like here: less about introducing the idea, more about doing it properly.' },

    { h: 'Where the hours actually go' },
    'Fiji\'s economy runs on tourism, agriculture and services, with MSMEs spanning farmers and agri-processors through to tourism operators and digital businesses. The bottlenecks repeat:',
    { list: [
      '**Tourism operators** — booking enquiries, group and event requests, transfer coordination, and the follow-up that decides whether an enquiry becomes a booking. Response speed converts here more reliably than price.',
      '**Agri-processing and supply chains** — order handling, supplier documents, inventory reconciliation.',
      '**Professional services** in Suva — document extraction, client correspondence, and the reporting that eats junior hours.',
      '**Retail and distribution** — invoice processing, stock, supplier chasing.',
      '**Anyone with a debtor problem** — automated, escalating payment reminders recover money that otherwise gets written off, and remove the reluctance that stops people chasing at all.',
    ]},

    { h: 'What is different about Fiji' },
    'Two things, and both should shape your choices.',
    '**The digital base is stronger.** Fintech and payments infrastructure are more developed than elsewhere in the region, which means automation can plug into systems that actually exist rather than being built around their absence.',
    '**Fiji is a regional hub.** Businesses here frequently operate across several Pacific countries, which creates coordination and multi-currency admin that automation handles well — and that generic offshore providers consistently underestimate.',

    { h: 'Pricing, and the trap to avoid' },
    { table: {
      minWidth: 480,
      head: ['Engagement', 'Range'],
      rows: [
        ['Opportunity audit', 'Free'],
        ['A single automated workflow', 'Low four figures'],
        ['A custom AI agent connected to your systems', 'Mid four figures'],
        ['Ongoing support', 'Monthly, scoped'],
        ['Software you buy once and run yourself', 'From US$499'],
      ],
    }},
    '**The trap:** offshore providers quoting very low prices for template work that does not connect to anything you use. The integration — making it talk to your booking system, your accounting, your existing tools — is where the real work and the real value sit. A cheap system that automates nothing you actually do is the most expensive option available.',

    { h: 'Questions worth asking any provider' },
    { steps: [
      '**"How many hours will this save?"** No number before starting means nobody looked at your business.',
      '**"Who owns the code?"** You should. If the answer is complicated, understand why first.',
      '**"What happens if I leave?"** A documented handover should be normal.',
      '**"Where does customer data go?"** Especially in tourism, where you hold traveller personal data. A vague answer is the answer — see [AI and your business data](/ai-data-privacy-business/).',
      '**"What would you not automate?"** A provider claiming everything is automatable is selling, not advising.',
    ]},

    { h: 'Where we fit, and where we do not' },
    'We work from Auckland and Nouméa — close timezones, Pacific context, and the habit of building for places where connectivity is not guaranteed. What we do not have is a Suva office, and if regular in-person presence matters to you, a Fiji-based provider is genuinely the better choice. We would rather say that here than after you have signed.',
    'Where we are worth talking to: systems that run on your own infrastructure so customer data stays put, multi-country coordination, and outbound sales — including [software you buy once](/marketplace/cold-outreach-machine/) and run yourself instead of paying a retainer.',
  ],
  faq: [
    { q: 'What does AI automation cost in Fiji?', a: 'A first automated workflow typically lands in the low four figures, with a free audit before it. Be careful comparing against very low offshore quotes: those usually cover a template that does not integrate with your booking system or accounting, which is precisely where the value is.' },
    { q: 'Is it worth it for a small tourism operator?', a: 'Often yes, and enquiry response is usually the place to start — group and event requests are the most valuable bookings and the most frequently lost to slow replies. One workflow, measured before and after, tells you within a month whether to go further.' },
    { q: 'Do you have an office in Fiji?', a: 'No. We work from Auckland and Nouméa, remotely. If regular on-site presence is important to you, a Fiji-based provider is the better fit and we will say so. If your priorities are data staying on your own infrastructure, multi-country coordination, or systems that work when connectivity does not, those are our strengths.' },
    { q: 'Can automation handle multi-currency operations?', a: 'Yes, and it is one of the clearer wins for Fijian businesses trading across the region — reconciling payments, invoices and reporting across currencies is repetitive, rule-based and error-prone by hand. It is exactly the shape of work automation handles well.' },
  ],
  related: [
    ['/ai-automation-vanuatu/', 'AI automation in Vanuatu'],
    ['/ai-automation-new-zealand/', 'AI automation in New Zealand'],
    ['/how-to-start-with-ai/', 'How to start with AI'],
    ['/ai-data-privacy-business/', 'AI and your business data'],
  ],
},

];
