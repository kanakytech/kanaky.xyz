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
  published: '2026-07-31',
  body: [
    { lead: 'One long-form piece per working day, on what AI automation actually does for a business in this part of the world. Each one states a position, names its sources and shows its arithmetic. Every piece appears in French and in English — not a word-for-word translation, but the same substance written natively in each language. Most recent first.' },

    { list: [
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
