/* Page produit — AI Chief of Staff.
 *
 * Le deuxième produit vendable de Kanaky Tech, et le premier à ce niveau de
 * prix (1 490 USD contre 299,99 pour la machine de prospection).
 *
 * L'angle est délibérément différent de celui de la prospection. Là-bas on
 * vend un résultat mesurable : des mails partent, des réponses arrivent. Ici
 * le résultat n'est pas un chiffre, c'est la disparition d'une friction
 * quotidienne — ne plus réexpliquer son contexte à chaque session. Ça ne se
 * démontre pas par un tableau ; ça se démontre en montrant l'installation
 * elle-même, d'où l'animation de terminal au centre de la page.
 *
 * Le prix est assumé frontalement, très haut sur la page, avec ce qu'il
 * contient vraiment : la session de 90 minutes. Cacher 1 490 USD sous trois
 * paragraphes ferait perdre le lecteur qui n'a pas le budget — et surtout
 * insulterait celui qui l'a.
 *
 * Paire FR/EN : trois des cinq marchés mélanésiens sont francophones.
 */

const TERM_EN = `$ claude

> Read INSTALL.md and set this up for me.

  Reading INSTALL.md… done.
  Following install/INTERVIEW.md — nine questions.

  1 / 9   What do you want to call me?
  ❯ Atlas

  2 / 9   Your name, and what should I call you?
  ❯ Marie Dupont — Marie is fine

  3 / 9   In a sentence or two: what do you do?
  ❯ I run a two-person design studio. Proposals,
    invoicing, and chasing the follow-ups I forget.

  4 / 9   Language and register?
  ❯ English, direct

  …

  9 / 9   Anything I must never do without asking?
  ❯ Never email a client without my go-ahead

  ─────────────────────────────────────────────
  Applying.

  ✓ workspace          ~/Documents/Atlas
  ✓ working contract   CLAUDE.md
  ✓ memory             index seeded
  ✓ phone bridge       running (survives reboot)
  ✓ voice notes        large-v3-turbo, local
  ✓ morning brief      weekdays 07:00
  ✓ continuity kit     built · nightly 21:20

  Sending a test message to your phone…
  ✓ Delivered.

  Atlas is running. Talk to me here, or from Telegram.`;

const TERM_FR = `$ claude

> Lis INSTALL.md et installe-moi tout ça.

  Lecture de INSTALL.md… fait.
  Je suis install/INTERVIEW.md — neuf questions.

  1 / 9   Comment veux-tu m'appeler ?
  ❯ Atlas

  2 / 9   Ton nom, et comment je m'adresse à toi ?
  ❯ Marie Dupont — Marie suffit

  3 / 9   En deux phrases : tu fais quoi ?
  ❯ Je tiens un studio de design à deux. Devis,
    factures, et les relances que j'oublie.

  4 / 9   Langue et ton ?
  ❯ Français, direct

  …

  9 / 9   Ce que je ne dois jamais faire sans demander ?
  ❯ Jamais un mail client sans mon feu vert

  ─────────────────────────────────────────────
  Application.

  ✓ espace de travail  ~/Documents/Atlas
  ✓ contrat de travail CLAUDE.md
  ✓ mémoire            index initialisé
  ✓ pont téléphone     actif (résiste au reboot)
  ✓ vocaux             large-v3-turbo, en local
  ✓ brief du matin     en semaine, 7h00
  ✓ kit de continuité  construit · chaque soir 21h20

  Envoi d'un message de test sur ton téléphone…
  ✓ Reçu.

  Atlas tourne. Parle-moi ici, ou depuis Telegram.`;

export default [

{
  slug: 'ai-chief-of-staff',
  lang: 'en',
  alt: { lang: 'fr', url: 'https://kanaky.xyz/assistant-ia-personnel/' },
  title: 'AI Chief of Staff — an assistant that remembers, and reaches you anywhere',
  description: 'Most AI assistants forget you between sessions. This one does not. It remembers across sessions, answers on your phone by text or voice note, works on a schedule while you sleep, and rebuilds itself on a new machine in an hour. US$1,490, installed with you.',
  keywords: 'persistent AI assistant, AI chief of staff, Claude Code setup, AI assistant memory, Telegram AI assistant, personal AI automation, AI assistant New Zealand',
  eyebrow: 'Product',
  short: 'AI Chief of Staff',
  ogTitle: 'AI Chief of Staff — the assistant that stops forgetting you',
  h1: 'Stop introducing yourself <span style="color:var(--grey-4);font-weight:300;">to your own assistant.</span>',
  cta: 'service',
  extraGraph: [{
    '@type': 'Product',
    '@id': 'https://kanaky.xyz/ai-chief-of-staff/#product',
    name: 'AI Chief of Staff',
    image: ['https://kanaky.xyz/assets/og/ai-chief-of-staff.png'],
    url: 'https://kanaky.xyz/ai-chief-of-staff/',
    category: 'AI assistant configuration toolkit',
    description: 'A persistent operating layer for Claude Code: memory that survives sessions, a Telegram bridge with local voice transcription, scheduled autonomous agents, and a continuity kit that rebuilds the whole setup on a new machine. Runs entirely on the buyer’s own machine. Sold with a guided 90-minute setup session.',
    brand: { '@id': 'https://kanaky.xyz/#organization' },
    inLanguage: 'en',
    offers: {
      '@type': 'Offer',
      price: '1490.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://kanaky.xyz/ai-chief-of-staff/',
      seller: { '@id': 'https://kanaky.xyz/#organization' },
    },
  }],
  body: [
    { lead: '**Every session, you explain yourself again.** What the business does, who the client is, how you like things written, what you decided last week. The assistant is capable — and it meets you as a stranger every single time. This turns it into one that remembers, that you can reach from your phone, and that works while you sleep.' },

    { h: 'The install is a conversation' },
    'You hand it the folder and say one sentence. It asks nine questions — all with defaults you can accept by pressing enter — and configures everything from your answers.',
    { term: TERM_EN },
    { note: 'That is the whole installation. Twenty to forty minutes, most of it waiting on downloads. Every step is documented for manual setup too — nothing here is a black box, and you get the full source.' },

    { h: 'What changes, day to day' },
    { cards: [
      { t: 'It remembers', d: 'One file per fact, indexed and versioned. It stops re-asking what you told it last week, and it stops guessing at preferences you already stated.' },
      { t: 'It is in your pocket', d: 'A Telegram bot you own. Text it, send a voice note, send a photo of a document. It runs the work on your machine and answers on your phone.' },
      { t: 'It works while you sleep', d: 'Scheduled agents that brief you before you are up, wrap the day at eight, and review the week on Sunday.' },
      { t: 'You cannot lose it', d: 'A few megabytes, rebuilt nightly, that restores the whole setup on a new machine — memory, rules, bridge, agents.' },
    ]},

    { h: 'The voice notes are the part people keep' },
    'You are walking, driving, between two things. You hold the button and talk. Thirty seconds later the work is done on your machine and the answer is on your phone.',
    'Transcription runs **entirely on your machine** — no audio is uploaded anywhere. And it is tuned for how voice notes are really recorded: outdoors, one-handed, with traffic. The audio is cleaned before transcription, the language is pinned rather than guessed, and your own names and jargon are fed in as hints. That last part is what stops it turning a client’s name into nonsense.',

    { h: 'What it costs' },
    { table: {
      minWidth: 520,
      head: ['', 'Included'],
      rows: [
        ['**US$1,490**', 'The toolkit, full source, complete documentation'],
        ['**90-minute session**', 'We install it together on your machine, write **your** absolute rules, and build **your** first scheduled agent on a real task of yours'],
        ['**30 days**', 'Email follow-up on anything that comes out of that setup'],
        ['**Licence**', 'One business, unlimited machines, no expiry, no subscription'],
      ],
    }},
    'The install largely runs itself — that is not what the session is for. Three decisions determine whether this becomes part of your day or another thing you configured once and stopped opening: **what it should remember and what is noise, what it must never do without asking, and which recurring task is worth automating before the others.** That hour is the product.',

    { h: 'Built around your work instead' },
    'It ships opinionated, because a default has to choose something. When your work does not fit those defaults, it gets built around your work — quoted per project after a scoping call.',
    { list: [
      '**Your tools** — CRM, accounting, calendar, project tracker, internal APIs, your databases',
      '**Your workflows** — your real process, your approval gates, your formats and vocabulary',
      '**Your trade** — a memory structure and prompts shaped for what you actually do, not generic business assistance',
      '**Your team** — multiple users, shared memory, role separation',
      '**Other channels** — WhatsApp, Slack, SMS or email, alongside Telegram or instead of it',
    ]},
    { note: 'If what you need cannot be built well, you will be told that — rather than sold something adjacent to it.' },

    { h: 'Honest limits' },
    { list: [
      '**You need your own Claude Code subscription.** This configures it; it does not replace it.',
      '**One person, one bot.** Two people means two installs, or a custom build.',
      '**The Mac has to be awake** for scheduled work. A laptop is not a server — fine for a morning brief, wrong for anything critical.',
      '**Telegram sees your messages.** The voice transcription is local; the messages themselves are not. If that matters for your work, say so and we will use a different channel.',
      '**macOS today.** Everything works on Linux except the scheduled agents, which need `systemd` timers instead.',
    ]},
  ],
  faq: [
    { q: 'Is this a subscription?', a: 'No. You pay once and it is yours, with the source. Nothing expires and nothing phones home. You do need your own Claude Code subscription, which is separate and goes to Anthropic, not to us.' },
    { q: 'What if I already have Claude Code set up?', a: 'That is the normal case. This adds the layers on top — memory, phone access, scheduling, continuity. If you already have a working contract file, the installer stops and asks before touching it.' },
    { q: 'Where does my data go?', a: 'It stays on your machine. Memory is plain markdown files in your home directory. Voice transcription runs locally. The only thing leaving your machine is what you send through Telegram, and what Claude Code already sends as part of its normal operation.' },
    { q: 'What if I want to remove it?', a: 'One command. It stops the scheduled agents and removes what it installed — and it moves your memory and working contract aside rather than deleting them, so months of accumulated context are never lost to an uninstall.' },
    { q: 'Can I resell it to my clients?', a: 'Not under this licence — it covers one business, yours. Building client work with it is fine. If you want to deploy it for clients, ask about an agency licence.' },
  ],
  related: [
    ['/personal-ai-assistant/', 'What a personal AI assistant actually is'],
    ['/local-ai-vs-cloud-ai/', 'Local AI vs cloud AI — an honest comparison'],
    ['/ai-audit/', 'Book a free AI opportunity audit'],
    ['/assistant-ia-personnel/', 'Cette page en français'],
  ],
},

{
  slug: 'assistant-ia-personnel',
  lang: 'fr',
  alt: { lang: 'en', url: 'https://kanaky.xyz/ai-chief-of-staff/' },
  title: 'Assistant IA personnel — il se souvient, et vous le joignez de partout',
  description: 'La plupart des assistants IA vous oublient d’une session à l’autre. Celui-ci non. Il garde la mémoire, répond sur votre téléphone par texte ou par vocal, travaille pendant que vous dormez, et se reconstruit sur une machine neuve en une heure. 1 490 USD, installé avec vous.',
  keywords: 'assistant IA personnel, assistant IA mémoire, Claude Code configuration, assistant IA Telegram, automatisation IA indépendant, assistant IA Nouvelle-Calédonie, IA pour dirigeant',
  eyebrow: 'Produit',
  short: 'Assistant IA personnel',
  ogTitle: 'Assistant IA personnel — celui qui arrête de vous oublier',
  h1: 'Arrêtez de vous présenter <span style="color:var(--grey-4);font-weight:300;">à votre propre assistant.</span>',
  cta: 'service-fr',
  extraGraph: [{
    '@type': 'Product',
    '@id': 'https://kanaky.xyz/assistant-ia-personnel/#produit',
    name: 'Assistant IA personnel',
    image: ['https://kanaky.xyz/assets/og/ai-chief-of-staff.png'],
    url: 'https://kanaky.xyz/assistant-ia-personnel/',
    category: 'Configuration d’assistant IA',
    description: 'Une couche persistante pour Claude Code : une mémoire qui survit aux sessions, un pont Telegram avec transcription vocale locale, des agents planifiés autonomes, et un kit de continuité qui reconstruit toute l’installation sur une machine neuve. Tourne entièrement sur la machine de l’acheteur. Vendu avec une session d’installation guidée de 90 minutes.',
    brand: { '@id': 'https://kanaky.xyz/#organization' },
    inLanguage: 'fr',
    offers: {
      '@type': 'Offer',
      price: '1490.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://kanaky.xyz/assistant-ia-personnel/',
      seller: { '@id': 'https://kanaky.xyz/#organization' },
    },
  }],
  body: [
    { lead: '**À chaque session, vous réexpliquez tout.** Ce que fait la boîte, qui est le client, comment vous aimez que ce soit écrit, ce que vous aviez décidé la semaine dernière. L’assistant est capable — et il vous rencontre comme un inconnu, chaque fois. Ceci en fait un qui se souvient, que vous joignez depuis votre téléphone, et qui travaille pendant que vous dormez.' },

    { h: 'L’installation est une conversation' },
    'Vous lui donnez le dossier et vous dites une phrase. Il pose neuf questions — toutes avec une valeur par défaut qu’il suffit de valider — et configure tout à partir de vos réponses.',
    { term: TERM_FR },
    { note: 'C’est toute l’installation. Vingt à quarante minutes, dont l’essentiel à attendre des téléchargements. Chaque étape est aussi documentée pour une installation à la main — rien n’est une boîte noire, et le code source est fourni.' },

    { h: 'Ce que ça change, au quotidien' },
    { cards: [
      { t: 'Il se souvient', d: 'Un fait par fichier, indexé et versionné. Il arrête de redemander ce que vous lui avez dit la semaine dernière, et d’inventer des préférences que vous aviez déjà données.' },
      { t: 'Il est dans votre poche', d: 'Un bot Telegram qui vous appartient. Écrivez-lui, envoyez un vocal, envoyez la photo d’un document. Il exécute sur votre machine et répond sur votre téléphone.' },
      { t: 'Il travaille quand vous dormez', d: 'Des agents planifiés qui vous briefent avant votre réveil, font le point à vingt heures, et la revue de la semaine le dimanche.' },
      { t: 'Vous ne pouvez pas le perdre', d: 'Quelques mégaoctets, reconstruits chaque nuit, qui restaurent toute l’installation sur une machine neuve — mémoire, règles, pont, agents.' },
    ]},

    { h: 'Le vocal, c’est ce que les gens gardent' },
    'Vous marchez, vous conduisez, vous êtes entre deux rendez-vous. Vous appuyez et vous parlez. Trente secondes plus tard, le travail est fait sur votre machine et la réponse est sur votre téléphone.',
    'La transcription tourne **entièrement sur votre machine** — aucun son n’est envoyé nulle part. Et elle est réglée pour la façon dont un vocal est réellement enregistré : dehors, à une main, dans le bruit. Le son est nettoyé avant transcription, la langue est imposée plutôt que devinée, et vos noms propres et votre jargon sont fournis en indice. C’est ce dernier point qui évite qu’un nom de client devienne du charabia.',

    { h: 'Le prix' },
    { table: {
      minWidth: 520,
      head: ['', 'Compris'],
      rows: [
        ['**1 490 USD**', 'Le logiciel, le code source, toute la documentation'],
        ['**Session de 90 min**', 'On l’installe ensemble sur votre machine, on écrit **vos** règles absolues, on construit **votre** premier agent sur une vraie tâche à vous'],
        ['**30 jours**', 'Suivi par mail sur tout ce qui découle de cette installation'],
        ['**Licence**', 'Une entreprise, machines illimitées, sans expiration, sans abonnement'],
      ],
    }},
    'L’installation se fait quasiment seule — ce n’est pas à ça que sert la session. Trois décisions déterminent si ça devient une part de votre journée ou une chose de plus configurée une fois puis abandonnée : **ce qu’il doit retenir et ce qui est du bruit, ce qu’il ne doit jamais faire sans demander, et quelle tâche récurrente automatiser avant les autres.** Cette heure-là, c’est le produit.',

    { h: 'Ou construit autour de votre métier' },
    'Il arrive avec des partis pris, parce qu’un réglage par défaut doit bien choisir quelque chose. Quand votre travail n’entre pas dans ces cases, on le construit autour de votre travail — sur devis, après un appel de cadrage.',
    { list: [
      '**Vos outils** — CRM, comptabilité, agenda, gestion de projet, API internes, vos bases de données',
      '**Vos processus** — votre vraie façon de faire, vos étapes de validation, vos formats et votre vocabulaire',
      '**Votre métier** — une structure de mémoire et des consignes façonnées pour ce que vous faites vraiment',
      '**Votre équipe** — plusieurs utilisateurs, mémoire partagée, séparation des rôles',
      '**D’autres canaux** — WhatsApp, Slack, SMS ou mail, en plus de Telegram ou à la place',
    ]},
    { note: 'Si ce dont vous avez besoin ne peut pas être bien fait, on vous le dira — plutôt que de vous vendre quelque chose d’approchant.' },

    { h: 'Les limites, dites franchement' },
    { list: [
      '**Il vous faut votre propre abonnement Claude Code.** Ceci le configure, ça ne le remplace pas.',
      '**Une personne, un bot.** À deux, il faut deux installations, ou une version sur mesure.',
      '**Le Mac doit être allumé** pour le travail planifié. Un portable n’est pas un serveur — parfait pour un brief du matin, inadapté à ce qui est critique.',
      '**Telegram voit vos messages.** La transcription est locale, les messages ne le sont pas. Si c’est un problème pour votre activité, dites-le : on passera par un autre canal.',
      '**macOS aujourd’hui.** Tout fonctionne sous Linux sauf les agents planifiés, qui demandent des minuteries `systemd`.',
    ]},
  ],
  faq: [
    { q: 'C’est un abonnement ?', a: 'Non. Vous payez une fois, c’est à vous, avec le code source. Rien n’expire et rien ne téléphone à la maison. Il vous faut en revanche votre propre abonnement Claude Code, qui est séparé et va à Anthropic, pas à nous.' },
    { q: 'J’utilise déjà Claude Code, ça sert à quoi ?', a: 'C’est le cas normal. Ceci ajoute les couches par-dessus : mémoire, accès depuis le téléphone, planification, continuité. Si vous avez déjà un fichier de règles, l’installateur s’arrête et demande avant d’y toucher.' },
    { q: 'Où vont mes données ?', a: 'Elles restent sur votre machine. La mémoire, ce sont des fichiers markdown dans votre dossier personnel. La transcription vocale tourne en local. La seule chose qui sort, c’est ce que vous envoyez par Telegram, et ce que Claude Code envoie déjà dans son fonctionnement normal.' },
    { q: 'Et si je veux tout enlever ?', a: 'Une commande. Elle arrête les agents planifiés et retire ce qui a été installé — et elle met votre mémoire et vos règles de côté au lieu de les supprimer, pour que des mois de contexte accumulé ne partent jamais dans une désinstallation.' },
    { q: 'Je peux le revendre à mes clients ?', a: 'Pas sous cette licence, qui couvre une entreprise : la vôtre. Travailler pour vos clients avec, oui. Pour le déployer chez eux, demandez une licence agence.' },
  ],
  related: [
    ['/ia-locale-entreprise/', 'L’IA en local : vos données ne sortent pas'],
    ['/prix-automatisation-ia-nouvelle-caledonie/', 'Nos tarifs en Kanaky (Nouvelle-Calédonie)'],
    ['/machine-prospection-commerciale/', 'Notre autre produit : la machine de prospection'],
    ['/ai-chief-of-staff/', 'This page in English'],
  ],
},

];
