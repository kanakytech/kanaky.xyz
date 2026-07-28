/* MÉLANÉSIE — le repositionnement du 28/07.
 *
 * Décision de Kevyn : le focus principal devient la Mélanésie —
 * Kanaky/Nouvelle-Calédonie, Fidji, Vanuatu, Îles Salomon,
 * Papouasie-Nouvelle-Guinée. Les autres marchés (NZ, AU, Réunion,
 * Tahiti) restent en ligne pour le référencement et la couverture,
 * mais ne sont plus le cœur.
 *
 * Le cadre n'est pas une invention marketing : le Melanesian Spearhead
 * Group (MSG, fondé 1986, secrétariat à Port-Vila) réunit exactement
 * ces cinq membres — PNG, Fidji, Vanuatu, Îles Salomon et la
 * Nouvelle-Calédonie représentée par le FLNKS. ~13 millions
 * d'habitants.
 *
 * Ton : factuel et respectueux. On décrit une organisation régionale
 * existante, on ne prend pas position politiquement. Vocabulaire kanak
 * juste (kanak invariable, aires coutumières).
 *
 * Prix : adaptés au pouvoir d'achat réel de chaque pays. PIB/hab 2026 —
 * NC ~34 000 USD · Fidji 6 800 · Vanuatu ~3 300 · PNG 2 632 · Salomon
 * ~2 200. Un tarif d'Auckland ferme ces marchés. */

export default [

{
  slug: 'melanesie',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/melanesia/' },
  title: 'Automatisation IA en Mélanésie — Kanaky, Fidji, Vanuatu, Salomon, PNG',
  description: 'Une agence d’automatisation IA pensée pour la Mélanésie : Nouvelle-Calédonie, Fidji, Vanuatu, Îles Salomon et Papouasie-Nouvelle-Guinée. Prix adaptés à chaque marché, systèmes qui fonctionnent malgré la connectivité, données qui restent chez vous.',
  keywords: 'automatisation IA Mélanésie, agence IA Pacifique, IA Nouvelle-Calédonie Vanuatu Fidji, transformation numérique Mélanésie, MSG numérique',
  eyebrow: 'Mélanésie',
  short: 'Mélanésie (pilier)',
  h1: 'L’automatisation IA, <span style="color:var(--grey-4);font-weight:300;">pensée pour la Mélanésie.</span>',
  cta: 'service-fr',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/melanesie/#service',
    name: 'Automatisation IA en Mélanésie',
    serviceType: 'AI automation and business process automation',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'Nouvelle-Calédonie' },
      { '@type': 'Country', name: 'Fidji' },
      { '@type': 'Country', name: 'Vanuatu' },
      { '@type': 'Country', name: 'Îles Salomon' },
      { '@type': 'Country', name: 'Papouasie-Nouvelle-Guinée' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://kanaky.xyz/melanesie/',
      availableLanguage: ['fr', 'en'],
    },
  }],
  body: [
    { lead: 'La Mélanésie compte environ treize millions d’habitants répartis sur cinq territoires, une organisation régionale qui les réunit depuis 1986, et presque aucune offre technologique qui la prenne au sérieux comme un ensemble. Les prestataires y voient soit des marchés trop petits, soit des extensions lointaines de l’Australie. Nous en venons.' },

    { map: true },
    { h: 'Une région, pas une collection de marchés lointains' },
    'Le **Melanesian Spearhead Group** réunit depuis 1986 la Papouasie-Nouvelle-Guinée, les Fidji, le Vanuatu, les Îles Salomon et la Nouvelle-Calédonie — représentée par le FLNKS. Son secrétariat siège à Port-Vila. C’est un cadre institutionnel réel, avec des accords commerciaux, pas une catégorie géographique commode.',
    'Ces territoires partagent des contraintes que les prestataires d’ailleurs traitent comme des exceptions : connectivité qui varie, saisons cycloniques au calendrier, distances entre îles, économies où le tourisme et les ressources pèsent lourd, et des tissus d’entreprises où chacun porte plusieurs métiers.',
    { note: 'Ces contraintes ne sont pas des handicaps à contourner. Ce sont des **spécifications**. Un système conçu pour continuer de fonctionner quand la liaison tombe est meilleur ici — et il se trouve qu’il est aussi meilleur ailleurs.' },

    { h: 'Les cinq marchés, sans enjoliver' },
    { table: {
      minWidth: 620,
      head: ['Territoire', 'Population', 'PIB / habitant', 'Ce que ça implique'],
      rows: [
        ['🇳🇨 Kanaky Nouvelle-Calédonie', '~270 000', '~34 000 USD', 'Notre base. **Tarif reprise** depuis la crise de 2024.'],
        ['🇵🇬 Papouasie-N.-Guinée', '~10,8 M', '~2 630 USD', 'Le géant. Économie à deux vitesses : ressources et banques solvables, reste très contraint.'],
        ['🇫🇯 Fidji', '~930 000', '~6 800 USD', 'Le plus avancé numériquement. Tourisme international solvable.'],
        ['🇻🇺 Vanuatu', '~320 000', '~3 300 USD', 'Petit marché, quasi zéro concurrence.'],
        ['🇸🇧 Îles Salomon', '~800 000', '~2 200 USD', 'Le plus contraint. Institutions et ONG plus que PME.'],
      ],
    }},
    'Autrement dit : **la Mélanésie n’est pas un marché homogène et nous ne prétendrons pas le contraire.** Le pouvoir d’achat varie d’un facteur quinze entre Nouméa et Honiara. C’est précisément pourquoi un tarif unique n’a aucun sens.',

    { h: 'Des prix par pays, pas un tarif d’Auckland' },
    'Nous appliquons une grille par territoire, calée sur le pouvoir d’achat réel. Un prix calibré sur la Nouvelle-Zélande ferme quatre de ces cinq marchés — et un marché fermé ne sert personne.',
    { list: [
      '**Nouvelle-Calédonie** — **tarif reprise**, réduit depuis la crise de 2024 : [le détail en XPF](/prix-automatisation-ia-nouvelle-caledonie/).',
      '**Vanuatu** — grille dédiée, à partir de 35 000 VUV le workflow : [voir la page](/automatisation-ia-vanuatu/).',
      '**Fidji, Îles Salomon, PNG** — grilles adaptées, cotées en monnaie locale : [Fidji](/ai-automation-fiji/) · [Salomon](/ai-automation-solomon-islands/) · [PNG](/ai-automation-papua-new-guinea/).',
    ]},
    'Et sur chaque paiement reçu, **10 % vont à une association du territoire concerné**, choisie par le client — [le détail ici](/engagement-local/).',
    'Le principe est simple et nous l’assumons : **le tarif suit le marché, la prestation ne change pas.** Même code, même documentation, même exigence. Facturer moins pour livrer moins en silence serait malhonnête.',

    { h: 'Ce que nous construisons ici, et pourquoi' },
    { cards: [
      { t: 'Des systèmes qui tiennent hors ligne', d: 'L’IA qui tourne sur votre propre machine continue de travailler quand la liaison tombe. Dans cette région, ce n’est pas un confort — c’est un critère de choix. [Comment ça marche](/ia-locale-entreprise/).' },
      { t: 'Vos données restent chez vous', d: 'Fichiers clients, dossiers, comptabilité : ils ne partent pas sur un serveur à douze mille kilomètres. Question de sécurité, et de souveraineté.' },
      { t: 'Le même fuseau horaire', d: 'Quand un système s’arrête un mardi matin, quelqu’un est réveillé. Un prestataire européen ou asiatique ajoute une journée à chaque échange.' },
      { t: 'Bilingue par défaut', d: 'Français et anglais selon le territoire, parce que la région l’est. Pas une traduction posée après coup.' },
    ]},

    { h: 'D’où nous parlons' },
    'Kanaky Tech est une entreprise calédonienne, immatriculée en Nouvelle-Calédonie, fondée par quelqu’un d’ici. Notre travail le plus visible n’est pas commercial : c’est le [dictionnaire des langues kanak](https://dictionnaire.kanaky.xyz), qui réunit neuf langues, près de vingt mille mots et des enregistrements de locuteurs natifs.',
    'Nous le mentionnons pour une raison précise. La question de savoir **où vivent les données d’une région — celles des entreprises, des institutions, des langues — et qui les contrôle** n’est pas une question d’infrastructure. C’est une question de pouvoir. Nous avons construit ce dictionnaire en le prenant au sérieux, et nous construisons les systèmes de nos clients de la même façon.',
    { note: 'Nous ne sommes pas présents physiquement dans les cinq territoires — nous travaillons depuis Nouméa et Auckland. Quand un prestataire installé sur place vous servirait mieux, nous le disons. Chaque page pays contient cette réserve, écrite noir sur blanc.' },
  ],
  faq: [
    { q: 'Qu’est-ce que la Mélanésie exactement ?', a: 'Une région du Pacifique regroupant la Papouasie-Nouvelle-Guinée, les Îles Salomon, le Vanuatu, les Fidji et la Nouvelle-Calédonie. Ces cinq territoires forment depuis 1986 le Melanesian Spearhead Group, une organisation régionale dotée d’accords commerciaux, dont le secrétariat siège à Port-Vila. Environ treize millions d’habitants au total.' },
    { q: 'Pourquoi des prix différents selon les pays ?', a: 'Parce que le pouvoir d’achat varie d’un facteur quinze entre la Nouvelle-Calédonie et les Îles Salomon. Un tarif unique calibré sur le marché le plus riche fermerait les quatre autres. La prestation, elle, ne change pas : même code, même documentation, même exigence.' },
    { q: 'Travaillez-vous en anglais ?', a: 'Oui. La Mélanésie est bilingue par nature — français en Nouvelle-Calédonie, anglais aux Fidji, en PNG et aux Salomon, les deux au Vanuatu. Nos pages et nos systèmes le sont aussi. Pour les langues locales, nous sommes prudents et nous le disons : les modèles actuels les traitent mal, et une relecture par des locuteurs reste nécessaire.' },
    { q: 'Êtes-vous présents dans tous ces pays ?', a: 'Non. Nous travaillons depuis Nouméa et Auckland, à distance, avec des déplacements possibles. Là où une présence physique régulière est déterminante pour vous, un prestataire local est le meilleur choix et nous le disons sur chaque page pays plutôt que de laisser croire le contraire.' },
  ],
  related: [
    ['/machine-prospection-commerciale/', 'La machine de prospection commerciale'],
    ['/melanesia/', 'This page in English'],
    ['/automatisation-ia-nouvelle-caledonie/', 'Nouvelle-Calédonie'],
    ['/automatisation-ia-vanuatu/', 'Vanuatu'],
    ['/ai-automation-fiji/', 'Fidji'],
  ],
},

{
  slug: 'melanesia',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/melanesie/' },
  title: 'AI Automation Across Melanesia — Kanaky, Fiji, Vanuatu, Solomon Islands, PNG',
  description: 'An AI automation agency built for Melanesia: New Caledonia, Fiji, Vanuatu, Solomon Islands and Papua New Guinea. Pricing set per market, systems that keep working when connectivity does not, and data that stays with you.',
  keywords: 'AI automation Melanesia, Pacific AI agency, automation Fiji Vanuatu PNG Solomon, Melanesian Spearhead Group digital, business automation Pacific islands',
  eyebrow: 'Melanesia',
  short: 'Melanesia (pillar)',
  h1: 'AI automation, <span style="color:var(--grey-4);font-weight:300;">built for Melanesia.</span>',
  cta: 'service',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/melanesia/#service',
    name: 'AI Automation Across Melanesia',
    serviceType: 'AI automation and business process automation',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'New Caledonia' },
      { '@type': 'Country', name: 'Fiji' },
      { '@type': 'Country', name: 'Vanuatu' },
      { '@type': 'Country', name: 'Solomon Islands' },
      { '@type': 'Country', name: 'Papua New Guinea' },
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://kanaky.xyz/melanesia/',
      availableLanguage: ['en', 'fr'],
    },
  }],
  body: [
    { lead: 'Melanesia is about thirteen million people across five territories, with a regional organisation binding them since 1986, and almost no technology provider treating it seriously as a whole. Providers elsewhere see either markets too small to bother with, or distant extensions of Australia. We are from here.' },

    { map: true },
    { h: 'A region, not a scattering of remote markets' },
    'The **Melanesian Spearhead Group** has brought together Papua New Guinea, Fiji, Vanuatu, Solomon Islands and New Caledonia — represented by the FLNKS — since 1986. Its secretariat sits in Port Vila. It is a real institutional framework with trade agreements, not a convenient geographic label.',
    'These territories share constraints that outside providers treat as edge cases: uneven connectivity, cyclone seasons that are scheduled rather than surprising, distance between islands, economies weighted toward tourism and resources, and business communities where everyone wears several hats.',
    { note: 'Those constraints are not handicaps to work around. They are **specifications**. A system designed to keep working when the link drops is better here — and it turns out to be better everywhere else too.' },

    { h: 'The five markets, without dressing them up' },
    { table: {
      minWidth: 620,
      head: ['Territory', 'Population', 'GDP per capita', 'What that means'],
      rows: [
        ['🇳🇨 Kanaky New Caledonia', '~270,000', '~USD 34,000', 'Our base. **Recovery rate** since the 2024 crisis.'],
        ['🇵🇬 Papua New Guinea', '~10.8M', '~USD 2,630', 'The giant. Two-speed economy: resources and banking solvent, the rest heavily constrained.'],
        ['🇫🇯 Fiji', '~930,000', '~USD 6,800', 'The most digitally advanced. International tourism can pay.'],
        ['🇻🇺 Vanuatu', '~320,000', '~USD 3,300', 'Small market, almost no competition.'],
        ['🇸🇧 Solomon Islands', '~800,000', '~USD 2,200', 'The most constrained. Institutions and NGOs more than SMEs.'],
      ],
    }},
    'Put plainly: **Melanesia is not one homogeneous market and we will not pretend otherwise.** Purchasing power varies by a factor of fifteen between Nouméa and Honiara. That is exactly why a single price list makes no sense.',

    { h: 'Per-country pricing, not an Auckland rate card' },
    'We price per territory, against real purchasing power. A rate calibrated on New Zealand closes four of these five markets — and a closed market serves nobody.',
    { list: [
      '**New Caledonia** — **recovery rate**, reduced since the 2024 crisis: [detail in XPF](/prix-automatisation-ia-nouvelle-caledonie/).',
      '**Vanuatu** — dedicated list, workflows from VUV 35,000: [see the page](/ai-automation-vanuatu/).',
      '**Fiji, Solomon Islands, PNG** — adapted lists, quoted in local currency: [Fiji](/ai-automation-fiji/) · [Solomon Islands](/ai-automation-solomon-islands/) · [PNG](/ai-automation-papua-new-guinea/).',
    ]},
    'And on every payment received, **10% goes to an association in that territory**, chosen by the client — [details here](/local-commitment/).',
    'The principle is simple and we state it: **the rate follows the market, the work does not change.** Same code, same documentation, same standard. Charging less to quietly deliver less would be dishonest.',

    { h: 'What we build here, and why' },
    { cards: [
      { t: 'Systems that hold offline', d: 'AI running on your own machine keeps working when the link drops. In this region that is not a convenience — it is a selection criterion. [How it works](/run-ai-locally-business/).' },
      { t: 'Your data stays put', d: 'Client files, records, accounts: they do not travel to a server twelve thousand kilometres away. A security question, and a sovereignty one.' },
      { t: 'The same working day', d: 'When a system stops on a Tuesday morning, someone is awake. A European or Asian provider adds a day to every exchange.' },
      { t: 'Bilingual by default', d: 'French and English depending on the territory, because the region is. Not translation bolted on afterwards.' },
    ]},

    { h: 'Where we speak from' },
    'Kanaky Tech is a New Caledonian company, registered in New Caledonia, founded by someone from here. Our most visible work is not commercial: it is the [Kanak languages dictionary](https://dictionnaire.kanaky.xyz), bringing together nine languages, nearly twenty thousand words and native-speaker recordings.',
    'We mention it for a specific reason. The question of **where a region\'s data lives — its businesses, its institutions, its languages — and who controls it** is not an infrastructure question. It is a question about power. We built that dictionary taking it seriously, and we build our clients\' systems the same way.',
    { note: 'We are not physically present in all five territories — we work from Nouméa and Auckland. Where a locally-based provider would serve you better, we say so. Every country page carries that caveat in writing.' },
  ],
  faq: [
    { q: 'What exactly is Melanesia?', a: 'A Pacific region comprising Papua New Guinea, Solomon Islands, Vanuatu, Fiji and New Caledonia. Since 1986 those five have formed the Melanesian Spearhead Group, a regional organisation with trade agreements and a secretariat in Port Vila. Around thirteen million people in total.' },
    { q: 'Why different prices in different countries?', a: 'Because purchasing power varies by a factor of fifteen between New Caledonia and Solomon Islands. A single rate calibrated on the wealthiest market would close the other four. The delivery does not change: same code, same documentation, same standard.' },
    { q: 'Do you work in French as well as English?', a: 'Yes. Melanesia is bilingual by nature — French in New Caledonia, English in Fiji, PNG and Solomon Islands, both in Vanuatu. Our pages and systems follow. For local languages we are cautious and say so: current models handle them poorly, and review by fluent speakers remains necessary.' },
    { q: 'Are you present in all these countries?', a: 'No. We work remotely from Nouméa and Auckland, with travel where it helps. Where regular on-site presence is decisive for you, a local provider is the better choice — and we say so on each country page rather than implying otherwise.' },
  ],
  related: [
    ['/melanesie/', 'Cette page en français'],
    ['/ai-automation-papua-new-guinea/', 'Papua New Guinea'],
    ['/ai-automation-solomon-islands/', 'Solomon Islands'],
    ['/ai-automation-fiji/', 'Fiji'],
  ],
},

{
  slug: 'ai-automation-papua-new-guinea',
  title: 'AI Automation in Papua New Guinea — A Practical Guide for Port Moresby Business',
  description: 'Automating a business in Papua New Guinea: what works for resources, logistics, retail and services, the two-speed economy, connectivity constraints, realistic pricing in kina, and when a local provider serves you better.',
  keywords: 'AI automation Papua New Guinea, business automation Port Moresby, AI PNG, digital transformation Papua New Guinea, automation Lae',
  eyebrow: 'Papua New Guinea',
  short: 'Papua New Guinea',
  h1: 'AI automation <span style="color:var(--grey-4);font-weight:300;">in Papua New Guinea.</span>',
  cta: 'service',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/ai-automation-papua-new-guinea/#service',
    name: 'AI Automation in Papua New Guinea',
    serviceType: 'AI automation and business process automation',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: { '@type': 'Country', name: 'Papua New Guinea' },
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: 'https://kanaky.xyz/ai-automation-papua-new-guinea/', availableLanguage: ['en'] },
  }],
  body: [
    { lead: 'Papua New Guinea is the giant of Melanesia — around 10.8 million people and a GDP near USD 34 billion — and also its most uneven economy. Understanding that unevenness is the whole difference between automation that pays back and money spent on the wrong thing.' },

    { h: 'A two-speed economy, and it matters' },
    'PNG runs on two tracks that barely touch. Resources, banking, telecoms and logistics operate at international standards with budgets to match. Alongside them sits a very large informal and subsistence economy, with GDP per capita around USD 2,630 and infrastructure that varies enormously outside the main centres.',
    '**Practical consequence:** generic advice about "PNG businesses" is useless. A mining services contractor in Port Moresby and a retailer in Lae have almost nothing in common in what they can spend or what they need. We price and scope accordingly rather than quoting one rate card.',

    { h: 'Where automation pays back here' },
    { list: [
      '**Logistics and supply chain** — the country\'s defining operational challenge. Documentation, customs paperwork, shipment tracking and supplier coordination across difficult geography generate enormous repetitive admin.',
      '**Resources sector contractors** — compliance documentation, reporting, safety records, and the invoicing that follows. High volume, rules-based, and currently consuming skilled hours.',
      '**Banking and professional services** in Port Moresby — document extraction, client correspondence, reporting.',
      '**Retail and distribution** — invoice processing, stock reconciliation, supplier chasing.',
      '**NGOs and development programmes** — reporting obligations to funders are heavy, repetitive and deadline-driven. This is a genuine and often overlooked need.',
    ]},

    { h: 'Connectivity decides the design' },
    'Outside Port Moresby and Lae, connectivity is unreliable enough that it should shape your architecture rather than be treated as a risk to manage. A system that stops when the link stops is a system that stops often.',
    '**This is where we are genuinely useful:** we build AI that runs on your own hardware, processing documents and drafting output locally, syncing when a connection is available. Not because it is fashionable, but because it is the only design that survives here. [How local AI works](/run-ai-locally-business/).',

    { h: 'Pricing' },
    'We quote in kina, against a rate list adapted to PNG rather than an Auckland one. Two bands, because the economy has two:',
    { table: {
      minWidth: 560,
      head: ['Engagement', 'SME / NGO rate', 'Corporate & resources'],
      rows: [
        ['Opportunity audit', 'Free', 'Free'],
        ['A single automated workflow', 'From ~USD 400 equivalent', 'Quoted on scope'],
        ['Local AI system on your hardware', 'Quoted, hardware at cost', 'Quoted'],
        ['Ongoing support', 'From ~USD 60/month equivalent', 'Quoted'],
      ],
    }},
    'The SME and NGO band exists for the same reason as our Vanuatu list: a price calibrated on international corporates would close the market entirely. Same work, same standard, different rate.',

    { h: 'Where a local provider serves you better' },
    'Honestly: if you need regular on-site presence, staff training in person, or someone who can reach your site when something physical breaks, a PNG-based provider is the right choice. We work remotely from Nouméa and Auckland — same working day, but not the same street.',
    'We are worth talking to when your priorities are systems that survive poor connectivity, data that stays on your own infrastructure, or coordination across several Melanesian countries — [which is what we are built for](/melanesia/).',
  ],
  faq: [
    { q: 'Is AI automation realistic in PNG given connectivity?', a: 'Yes, with the right design. A cloud-only tool stops whenever the connection does, which outside the main centres is often. A system running on your own hardware — processing documents and drafting output locally, syncing when a link is available — works regardless. In PNG this is not a preference, it is the deciding architectural choice.' },
    { q: 'What does it cost?', a: 'We run two bands. For SMEs and NGOs, a first workflow starts around USD 400 equivalent, quoted in kina. For corporates and the resources sector, we quote on scope. The lower band exists because a single international rate would close the market — the work delivered is identical.' },
    { q: 'Do you work with NGOs and development programmes?', a: 'Yes, and reporting is usually the fastest win. Funder reporting obligations are heavy, repetitive and deadline-driven, and they consume time that should go to programme delivery. Assembling reports from data you already collect is exactly the shape of work automation handles well.' },
    { q: 'Do you have an office in Port Moresby?', a: 'No. We work remotely from Nouméa and Auckland — the same working day, with travel where it makes sense. If regular on-site presence matters to you, a PNG-based provider is the better fit and we would rather say that now than after you have signed.' },
  ],
  related: [
    ['/melanesia/', 'AI automation across Melanesia'],
    ['/ai-automation-solomon-islands/', 'Solomon Islands'],
    ['/run-ai-locally-business/', 'Running AI locally'],
    ['/ai-for-nonprofits/', 'AI for non-profits'],
  ],
},

{
  slug: 'ai-automation-solomon-islands',
  title: 'AI Automation in Solomon Islands — A Practical Guide for Honiara',
  description: 'Automating work in Solomon Islands: what is realistic given connectivity and budgets, why institutions and NGOs benefit first, offline-capable systems, honest pricing, and where a local provider is the better choice.',
  keywords: 'AI automation Solomon Islands, automation Honiara, AI Solomon Islands business, digital transformation Solomon Islands, NGO automation Pacific',
  eyebrow: 'Solomon Islands',
  short: 'Solomon Islands',
  h1: 'AI automation <span style="color:var(--grey-4);font-weight:300;">in Solomon Islands.</span>',
  cta: 'service',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/ai-automation-solomon-islands/#service',
    name: 'AI Automation in Solomon Islands',
    serviceType: 'AI automation and business process automation',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: { '@type': 'Country', name: 'Solomon Islands' },
    availableChannel: { '@type': 'ServiceChannel', serviceUrl: 'https://kanaky.xyz/ai-automation-solomon-islands/', availableLanguage: ['en'] },
  }],
  body: [
    { lead: 'Solomon Islands is the most constrained market in Melanesia, and pretending otherwise would waste your time. GDP per capita sits near USD 2,200, connectivity is uneven, and the businesses able to spend on custom software are few. That shapes what is worth doing — and there genuinely is something worth doing.' },

    { h: 'Who benefits first here' },
    'Not the small retailer. Realistically, the organisations where automation pays back in Solomon Islands are those with heavy administrative obligations and external funding:',
    { list: [
      '**NGOs and development programmes** — funder reporting is relentless, repetitive, deadline-driven, and it consumes hours that should go to the work itself. This is the clearest win in the country, by some distance.',
      '**Government and institutions** — document handling, correspondence, record-keeping and the reporting that comes with donor-funded programmes.',
      '**Logistics and shipping** — inter-island coordination generates constant documentation.',
      '**Tourism operators** with international clients — enquiry response and booking coordination, where speed converts.',
      '**Professional services** in Honiara — the small number of firms handling document-heavy work.',
    ]},

    { h: 'Offline is not optional' },
    'This is the single most important design point. Connectivity in Solomon Islands is unreliable enough that any system depending on a constant link will fail regularly and be abandoned.',
    '**What works: AI running entirely on a machine in your own office.** Documents processed locally, reports drafted locally, nothing waiting on a connection. It syncs when a link is available and keeps working when it is not. [How that works in practice](/run-ai-locally-business/).',
    { note: 'A provider who does not raise connectivity as the first design question, before discussing features, has not worked in this environment. Ask it of anyone you consider — including us.' },

    { h: 'Pricing, honestly' },
    'We apply our lowest Melanesian rate here, and we are direct about why: at USD 2,200 per capita, any other price closes the market completely.',
    { table: {
      minWidth: 520,
      head: ['Engagement', 'Rate'],
      rows: [
        ['Opportunity audit', 'Free'],
        ['A single automated workflow', 'From ~USD 350 equivalent'],
        ['NGO reporting system', 'Quoted — often the highest-value first project'],
        ['Local AI system on your hardware', 'Quoted, hardware at cost'],
        ['Ongoing support', 'From ~USD 50/month equivalent'],
      ],
    }},
    'Quoted in Solomon Islands dollars so you know exactly what you are paying. The rate is lower; the work is not — same code, same documentation, same standard.',

    { h: 'When not to spend anything' },
    'Worth saying plainly, because in a constrained market a bad purchase costs more:',
    { list: [
      '**If the task happens occasionally.** Automating something done twice a month will not pay back anywhere, least of all here.',
      '**If off-the-shelf software already does it.** A bespoke version of something you can subscribe to is a poor trade.',
      '**If you have not looked at where your hours actually go.** [Do that first](/how-to-start-with-ai/) — it costs nothing and it decides everything else.',
      '**If your constraint is people rather than process.** That is a hiring or training question, not an automation one.',
    ]},

    { h: 'Where a local provider is better' },
    'If you need someone physically present — training staff, fixing hardware, sitting in your office — a Solomon Islands or regional provider on the ground beats us. We work remotely from Nouméa and Auckland.',
    'Where we are worth a conversation: offline-capable systems, funder reporting, and data that stays on your own machines. [That is what we build across Melanesia](/melanesia/).',
  ],
  faq: [
    { q: 'Is automation realistic in Solomon Islands?', a: 'For organisations with heavy administrative obligations — NGOs, institutions, logistics operators — yes, provided the system is designed to work offline. For a small retailer, usually not: the volume is too low to pay back. We would rather tell you that than sell you something.' },
    { q: 'What is the highest-value first project?', a: 'Funder reporting, for any organisation running donor-funded programmes. It is heavy, repetitive, deadline-driven, and it consumes hours that should go to delivery. Assembling reports from data you already collect is exactly what these systems do well.' },
    { q: 'What does it cost?', a: 'A first workflow starts around USD 350 equivalent, quoted in Solomon Islands dollars, with a free audit first. This is our lowest Melanesian rate, set deliberately: at local purchasing power, anything higher closes the market entirely.' },
    { q: 'Will it work with our internet?', a: 'If it is built to run locally, yes — that is the point. A system processing documents on a machine in your office does not wait on a connection; it syncs when one is available. Any provider not raising this as the first question has not worked here.' },
  ],
  related: [
    ['/melanesia/', 'AI automation across Melanesia'],
    ['/ai-for-nonprofits/', 'AI for non-profits'],
    ['/run-ai-locally-business/', 'Running AI locally'],
    ['/ai-automation-papua-new-guinea/', 'Papua New Guinea'],
  ],
},

];
