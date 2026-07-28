/* Engagement local — 10 % reversés.
 *
 * Décision Kevyn 28/07. Recherches faites avant écriture :
 *
 * Cadre fiscal NC (code des impôts, art. Lp 37-2 et Lp 136-3, source DSF) :
 * crédit d'impôt de 60 % du don pour les entreprises à l'IS ou à l'IR au
 * réel, MAIS plafonné à 0,5 % du chiffre d'affaires. À 10 % de dons, le
 * crédit couvre donc ~3 % du montant versé — le reste est un coût réel.
 * C'est précisément ce qui rend l'engagement crédible, et la page le dit.
 *
 * Règle de sécurité posée : 10 % de ce qui est ENCAISSÉ, jamais de ce qui
 * est facturé. Kevyn n'a pas la trésorerie pour honorer une promesse sur
 * un impayé.
 *
 * Aucune association n'est nommée comme bénéficiaire : on ne peut pas
 * annoncer publiquement qu'on reverse à un organisme sans son accord.
 * Le client choisit, parmi des organismes éligibles au mécénat en NC. */

export default [

{
  slug: 'engagement-local',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/local-commitment/' },
  title: '10 % reversés aux associations locales — l’engagement de Kanaky Tech',
  description: 'Kanaky Tech reverse 10 % de chaque paiement reçu à une association locale du territoire où le contrat est signé, choisie par le client. Le mécanisme, le cadre fiscal réel, et la transparence sur les montants versés.',
  keywords: 'entreprise engagée Nouvelle-Calédonie, mécénat local NC, don association calédonienne, entreprise responsable Pacifique',
  eyebrow: 'Engagement',
  short: 'Les 10 % reversés',
  h1: 'Dix pour cent, <span style="color:var(--grey-4);font-weight:300;">là où le contrat est signé.</span>',
  cta: 'service-fr',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/engagement-local/#commitment',
    name: 'Engagement local — 10 % reversés',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'Nouvelle-Calédonie' },
      { '@type': 'Country', name: 'Vanuatu' },
      { '@type': 'Country', name: 'Fidji' },
      { '@type': 'Country', name: 'Îles Salomon' },
      { '@type': 'Country', name: 'Papouasie-Nouvelle-Guinée' },
    ],
  }],
  body: [
    { lead: '**Sur chaque paiement que nous recevons, 10 % vont à une association du territoire où le contrat a été signé.** L’association est choisie par le client. Les montants versés sont publiés. Cette page explique le mécanisme exact, ce qu’il nous coûte réellement, et ce qu’il n’est pas.' },

    { h: 'Le mécanisme, précisément' },
    { steps: [
      '**Vous choisissez l’association** au moment de signer, parmi les organismes d’intérêt général du territoire. Si vous n’avez pas de préférence, nous proposons une liste et vous tranchez.',
      '**Vous payez la prestation**, au prix convenu. Le don ne s’ajoute pas à votre facture — il sort de notre part.',
      '**Nous reversons 10 % du montant encaissé**, dans le mois qui suit le paiement.',
      '**Le versement est publié** sur cette page : association, montant, date. Vérifiable.',
    ]},
    { note: '**Un détail qui compte : 10 % de ce que nous encaissons, pas de ce que nous facturons.** Une facture impayée ne déclenche aucun versement. C’est ce qui rend l’engagement tenable plutôt que déclaratif — nous ne promettons pas de l’argent que nous n’avons pas reçu.' },

    { h: 'Ce que ça nous coûte vraiment' },
    'Le mécénat d’entreprise ouvre droit, en Nouvelle-Calédonie, à un crédit d’impôt de 60 % du don — **mais plafonné à 0,5 % du chiffre d’affaires** (code des impôts, articles Lp 37-2 et Lp 136-3). Or nous reversons 10 %, soit vingt fois ce plafond.',
    { table: {
      minWidth: 580,
      head: ['Chiffre d’affaires', 'Don versé (10 %)', 'Crédit d’impôt', 'Coût réel pour nous'],
      rows: [
        ['600 000 F', '60 000 F', '1 800 F', '**58 200 F**'],
        ['1 200 000 F', '120 000 F', '3 600 F', '**116 400 F**'],
        ['1 800 000 F', '180 000 F', '5 400 F', '**174 600 F**'],
        ['3 600 000 F', '360 000 F', '10 800 F', '**349 200 F**'],
      ],
    }},
    '**Le crédit d’impôt couvre environ 3 % du montant versé.** Les 97 % restants sortent de notre marge, sans contrepartie fiscale.',
    'Nous le publions parce que c’est la seule façon de distinguer un engagement d’une optimisation. Un dispositif calibré sur le plafond fiscal aurait été à 0,5 % — pas à 10 %.',

    { h: 'Où va l’argent' },
    'Au territoire où le contrat est signé. Un client calédonien finance une association calédonienne ; un client de Port-Vila, une association vanuataise. La valeur reste là où elle est produite — c’est le principe, et c’est aussi la raison pour laquelle nous ne centralisons pas les dons vers une organisation unique.',
    'Les domaines que nous privilégions, sans être limitatifs : **environnement et protection du milieu marin, éducation et jeunesse, langues et patrimoine culturel, insertion**. Si votre association ne rentre dans aucune de ces cases mais compte pour vous, elle nous convient.',
    { note: '**Une condition pratique :** pour que le versement soit traçable et déductible, l’organisme doit être d’intérêt général et, en Nouvelle-Calédonie, avoir déposé ses statuts auprès du service compétent. Nous vérifions ce point avec vous avant de contractualiser — cela évite les mauvaises surprises des deux côtés.' },

    { h: 'Ce que ce n’est pas' },
    { list: [
      '**Ce n’est pas un supplément sur votre facture.** Le prix affiché est le prix payé. Les 10 % sortent de notre part, pas de la vôtre.',
      '**Ce n’est pas une opération de communication à durée limitée.** Il n’y a pas de date de fin, pas de compteur, pas d’urgence fabriquée.',
      '**Ce n’est pas un montage fiscal.** Les chiffres ci-dessus le montrent : le dispositif fiscal couvre 3 % du don. S’il s’agissait d’optimiser, nous donnerions vingt fois moins.',
      '**Ce n’est pas une caution morale.** Nous ne nous déclarons ni exemplaires ni vertueux. Nous prenons un pourcentage et nous le versons ; c’est un chiffre, il est vérifiable, et c’est tout ce que nous en disons.',
    ]},

    { h: 'Versements effectués' },
    'Cette section listera chaque versement — association, montant, date — dès le premier contrat concerné. Elle est vide aujourd’hui parce que le dispositif vient d’être mis en place, et nous préférons une page vide à un chiffre invérifiable.',
  ],
  faq: [
    { q: 'Le don s’ajoute-t-il au prix que je paie ?', a: 'Non. Le prix affiché est celui que vous payez. Les 10 % sont prélevés sur notre part, après encaissement. Votre facture est identique, que vous choisissiez une association ou non.' },
    { q: 'Puis-je choisir l’association ?', a: 'Oui, c’est le principe : vous choisissez au moment de signer. La seule condition est que l’organisme soit d’intérêt général et implanté sur le territoire où le contrat est signé. Si vous n’avez pas de préférence, nous vous proposons une liste et vous tranchez.' },
    { q: 'Comment savoir que le versement a bien eu lieu ?', a: 'Chaque versement est publié sur cette page — association, montant, date — et le reçu de don vous est transmis. Un engagement annoncé sans preuve ne vaut rien, et nous préférons une page vide au départ à un chiffre que personne ne peut vérifier.' },
    { q: 'Est-ce que ça vous coûte vraiment quelque chose ?', a: 'Oui. Le mécénat ouvre droit à un crédit d’impôt de 60 % du don en Nouvelle-Calédonie, mais plafonné à 0,5 % du chiffre d’affaires — alors que nous reversons 10 %. Le crédit couvre donc environ 3 % du montant versé ; le reste sort de notre marge. C’est précisément ce qui distingue un engagement d’un montage.' },
    { q: 'Et si je travaille avec vous depuis un territoire que vous ne couvrez pas ?', a: 'Le principe reste le même : 10 % vont à une association de votre territoire, choisie par vous. Nous vérifions simplement, avant de contractualiser, que l’organisme peut recevoir un don depuis la Nouvelle-Calédonie et émettre un reçu.' },
  ],
  related: [
    ['/prix-automatisation-ia-nouvelle-caledonie/', 'Nos tarifs reprise en Nouvelle-Calédonie'],
    ['/melanesie/', 'Nos marchés en Mélanésie'],
    ['/local-commitment/', 'This page in English'],
  ],
},

{
  slug: 'local-commitment',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/engagement-local/' },
  title: 'Ten Percent to Local Associations — Kanaky Tech’s Commitment',
  description: 'Kanaky Tech gives 10% of every payment received to a local association in the territory where the contract was signed, chosen by the client. The mechanism, what it actually costs us, and the published record.',
  keywords: 'socially committed business Pacific, local giving New Caledonia, business donation Melanesia, responsible AI agency Pacific',
  eyebrow: 'Commitment',
  short: 'The 10% commitment',
  h1: 'Ten percent, <span style="color:var(--grey-4);font-weight:300;">where the contract is signed.</span>',
  cta: 'service',
  extraGraph: [{
    '@type': 'Service',
    '@id': 'https://kanaky.xyz/local-commitment/#commitment',
    name: 'Local commitment — 10% given back',
    provider: { '@id': 'https://kanaky.xyz/#organization' },
    areaServed: [
      { '@type': 'Country', name: 'New Caledonia' },
      { '@type': 'Country', name: 'Vanuatu' },
      { '@type': 'Country', name: 'Fiji' },
      { '@type': 'Country', name: 'Solomon Islands' },
      { '@type': 'Country', name: 'Papua New Guinea' },
    ],
  }],
  body: [
    { lead: '**On every payment we receive, 10% goes to an association in the territory where the contract was signed.** The client chooses which one. Amounts are published. This page sets out the exact mechanism, what it genuinely costs us, and what it is not.' },

    { h: 'How it works, precisely' },
    { steps: [
      '**You choose the association** when signing, from public-interest organisations in your territory. If you have no preference, we suggest a list and you decide.',
      '**You pay the agreed price.** The donation is not added to your invoice — it comes out of our share.',
      '**We give 10% of the amount received**, within the month following payment.',
      '**The payment is published** on this page: association, amount, date. Verifiable.',
    ]},
    { note: '**One detail that matters: 10% of what we receive, not of what we invoice.** An unpaid invoice triggers no donation. That is what makes this sustainable rather than declarative — we do not promise money we have not been paid.' },

    { h: 'What it actually costs us' },
    'Corporate giving in New Caledonia earns a tax credit of 60% of the donation — **but capped at 0.5% of turnover** (tax code, articles Lp 37-2 and Lp 136-3). We give 10%, which is twenty times that ceiling.',
    { table: {
      minWidth: 580,
      head: ['Turnover', 'Given (10%)', 'Tax credit', 'Real cost to us'],
      rows: [
        ['XPF 600,000', 'XPF 60,000', 'XPF 1,800', '**XPF 58,200**'],
        ['XPF 1,200,000', 'XPF 120,000', 'XPF 3,600', '**XPF 116,400**'],
        ['XPF 1,800,000', 'XPF 180,000', 'XPF 5,400', '**XPF 174,600**'],
        ['XPF 3,600,000', 'XPF 360,000', 'XPF 10,800', '**XPF 349,200**'],
      ],
    }},
    '**The tax credit covers roughly 3% of what is given.** The other 97% comes out of our margin, with no fiscal offset.',
    'We publish this because it is the only way to tell a commitment from an optimisation. A scheme designed around the tax ceiling would sit at 0.5% — not at 10%.',

    { h: 'Where the money goes' },
    'To the territory where the contract is signed. A New Caledonian client funds a New Caledonian association; a Port Vila client funds a Vanuatu one. Value stays where it is produced — which is also why we do not pool donations into a single organisation.',
    'The areas we lean toward, without excluding others: **environment and marine protection, education and youth, language and cultural heritage, employment pathways**. If your association fits none of these but matters to you, it works for us.',
    { note: '**A practical condition:** for the payment to be traceable and receipted, the organisation must be of public interest and — in New Caledonia — have filed its statutes with the relevant service. We check this with you before contracting, which avoids unpleasant surprises on both sides.' },

    { h: 'What this is not' },
    { list: [
      '**Not a surcharge on your invoice.** The advertised price is the price paid. The 10% comes from our share, not yours.',
      '**Not a time-limited campaign.** No end date, no counter, no manufactured urgency.',
      '**Not a tax arrangement.** The figures above show it: the tax scheme covers 3% of the donation. If the point were optimisation, we would give twenty times less.',
      '**Not a claim to virtue.** We are not declaring ourselves exemplary. We take a percentage and we pay it out; it is a number, it is checkable, and that is all we say about it.',
    ]},

    { h: 'Payments made' },
    'This section will list every payment — association, amount, date — from the first relevant contract. It is empty today because the scheme has just been set up, and we would rather show an empty page than an unverifiable figure.',
  ],
  faq: [
    { q: 'Does the donation get added to my price?', a: 'No. The advertised price is what you pay. The 10% is taken from our share after payment is received. Your invoice is the same whether or not you choose an association.' },
    { q: 'Can I choose the association?', a: 'Yes — that is the point. You choose when signing. The only condition is that the organisation be of public interest and based in the territory where the contract is signed. If you have no preference, we suggest a list and you decide.' },
    { q: 'How do I know the payment was made?', a: 'Every payment is published on this page — association, amount, date — and the donation receipt is passed to you. A commitment announced without proof is worth nothing, which is why we would rather start with an empty page than an unverifiable number.' },
    { q: 'Does this actually cost you anything?', a: 'Yes. Corporate giving in New Caledonia earns a 60% tax credit, but capped at 0.5% of turnover, while we give 10%. The credit therefore covers about 3% of what is given; the rest comes out of our margin. That gap is precisely what separates a commitment from an arrangement.' },
    { q: 'What if I am in a territory you do not list?', a: 'The principle holds: 10% goes to an association in your territory, chosen by you. We simply check before contracting that the organisation can receive a donation from New Caledonia and issue a receipt.' },
  ],
  related: [
    ['/engagement-local/', 'Cette page en français'],
    ['/melanesia/', 'Our Melanesian markets'],
    ['/ai-audit/', 'Book a free AI audit'],
  ],
},

];
