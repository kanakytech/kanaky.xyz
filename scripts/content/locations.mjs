/* Location pages targeting real commercial queries.
 *
 * Search Console (28/07) shows the domain surfacing on:
 *   ai automation agency nz .......... 27 impressions
 *   ai automation agency auckland .... 21
 *   ai automation services nz ........ 12
 * all at position 18-35. The national page covers the first; nothing
 * covered "agency auckland" specifically — /ai-agents-auckland/ is
 * about agent development, which is a different search.
 *
 * Written to be genuinely about Auckland, not the national page with
 * the city swapped in. That distinction is the whole difference
 * between a useful page and a doorway. */

export default [

{
  slug: 'ai-automation-agency-auckland',
  title: 'AI Automation Agency in Auckland — Kanaky Tech',
  description: 'An AI automation agency working with Auckland businesses: what we automate, how engagements actually run, what it costs, and the questions worth asking any agency before you sign.',
  keywords: 'AI automation agency Auckland, automation agency Auckland, AI agency Auckland, AI consultant Auckland, business automation Auckland, AI services Auckland',
  eyebrow: 'Auckland',
  short: 'AI automation agency · Auckland',
  ogTitle: 'AI Automation Agency in Auckland — Kanaky Tech',
  h1: 'An AI automation agency <span style="color:var(--grey-4);font-weight:300;">working with Auckland businesses.</span>',
  cta: 'service',
  body: [
    { lead: 'We are based in Auckland and build automation for businesses here — removing the repetitive work that quietly consumes a week. This page covers what that actually involves, what it costs, and the questions worth asking any agency before you commit. Including the cases where you do not need an agency at all.' },

    { h: 'What Auckland businesses actually ask for' },
    'Auckland is a services economy with a very large base of small operators, and the requests cluster in predictable places:',
    { list: [
      '**Trades and contractors** — quoting after a full day on the tools, chasing invoices, compliance paperwork. See [AI for electricians](/ai-for-electricians/), [plumbers](/ai-for-plumbers/) and [builders](/ai-for-builders/).',
      '**Professional services** — accountants, lawyers and consultants with document-heavy work and confidentiality constraints that rule out consumer AI tools. See [private AI for law firms](/private-ai-for-law-firms/).',
      '**Marine** — Auckland has a dense marine industry with a hard seasonal cycle, where the constraint flips from capacity in summer to finding work in winter. See [AI for marine businesses](/ai-for-marine-businesses/).',
      '**Hospitality and venues** — booking friction, function enquiries, rosters. See [AI for hospitality](/ai-for-hospitality/).',
      '**Agencies** — creative and digital agencies wanting AI production capability delivered under their own brand.',
    ]},

    { h: 'How we work' },
    { steps: [
      '**A free audit first.** We look at how your business actually runs and identify where hours are lost. You get the findings whether or not you engage us — see [the AI audit](/ai-audit/).',
      '**One workflow to start.** Not a transformation programme. The single process with the most hours attached, built and running, with a measurable before and after.',
      '**A fixed price on a defined scope.** Agreed before anything is built. No open-ended hourly work.',
      '**You own what we build.** Code and systems are yours, and we document them so another developer can take over. An agency that makes itself impossible to leave has an incentive problem.',
      '**Then expand, or stop.** If the first project does not produce a measurable difference, that is worth knowing before spending more.',
    ]},

    { h: 'What it costs' },
    'Honest ranges rather than "contact us for pricing":',
    { table: {
      minWidth: 520,
      head: ['Engagement', 'Typical range'],
      rows: [
        ['AI opportunity audit', 'Free'],
        ['A single automated workflow', 'Low four figures'],
        ['A custom AI agent connected to your systems', 'Mid four figures'],
        ['Ongoing support and iteration', 'Monthly, scoped to what you need'],
        ['Software you run yourself', 'From US$299.99, bought once'],
      ],
    }},
    'The last line matters for smaller operators: if what you need is outbound prospecting, you can [buy the system outright](/marketplace/cold-outreach-machine/) and run it yourself rather than paying an agency to operate it. We would rather tell you that than sell you a retainer you do not need.',

    { h: 'Questions worth asking any AI agency' },
    'Ask us these, and ask anyone else you are considering. The answers are more revealing than a portfolio:',
    { list: [
      '**"What will this actually save, in hours?"** If they cannot answer in numbers before starting, they have not looked at your business properly.',
      '**"Who owns the code?"** You should. If the answer is complicated, understand why before signing.',
      '**"What happens if I want to leave?"** A documented handover should be a normal part of the engagement, not an awkward question.',
      '**"Where does my data go?"** Particularly if you hold client files, financial records or health information. If the answer is vague, that is the answer. See [AI and your business data](/ai-data-privacy-business/).',
      '**"What would you not automate?"** An agency that says everything is automatable is selling, not advising.',
      '**"Can I talk to a client you worked with?"** The only reference that means anything.',
    ]},

    { h: 'When you do not need an agency' },
    'Worth saying plainly, because it saves everyone time:',
    { list: [
      '**If off-the-shelf software already does it.** Plenty of scheduling, invoicing and CRM tools solve common problems without custom work. Paying for a bespoke version of something you can subscribe to is a poor trade.',
      '**If you have not identified where the hours go.** Track a week first — see [how to start with AI](/how-to-start-with-ai/). An engagement that begins without that is guesswork with an invoice attached.',
      '**If the task is genuinely occasional.** Automating something done twice a month rarely pays back.',
      '**If the work needs judgement.** That is a hiring question, not an automation one — see [automate or hire](/ai-vs-hiring/).',
    ]},

    { h: 'Why local matters here, and where it does not' },
    'Being in Auckland means same timezone, ability to sit in your office, and understanding the market — that a Kiwi tradie quotes differently from an American contractor, and that "she\'ll be right" is not a documentation strategy when a compliance auditor arrives.',
    'Where it matters less: the technical work itself is location-independent, and any agency claiming that local presence is essential for building software is overselling proximity. What local genuinely buys you is faster feedback, easier trust, and someone accountable in the same jurisdiction if something goes wrong.',
    { note: 'We work from Auckland and Nouméa, across New Zealand and the wider Pacific — including [New Caledonia](/ai-automation-new-caledonia/), Tahiti, Wallis and Futuna and Réunion, in French where that is the working language.' },
  ],
  faq: [
    { q: 'What does an AI automation agency in Auckland actually do?', a: 'It identifies the repetitive, rule-based work consuming your team\'s hours and builds systems that handle it — quoting, enquiry response, document processing, reporting, scheduling, follow-up. The work is part consulting (finding where the hours go) and part building (making the system and connecting it to what you already use).' },
    { q: 'How much does AI automation cost in New Zealand?', a: 'A single automated workflow typically lands in the low four figures; a custom AI agent connected to your systems, mid four figures. The audit is free. If your need is outbound prospecting specifically, software you buy once from US$299.99 and run yourself is usually the better value than an agency engagement.' },
    { q: 'How long does a first project take?', a: 'A well-scoped single workflow is usually days to a few weeks. The timeline is driven by how many existing systems it has to connect to, not by the AI part — integration is consistently the underestimated half.' },
    { q: 'Do you work with small businesses or only larger companies?', a: 'Mostly small businesses and sole operators, which is where the admin burden falls hardest because there is no support staff absorbing it. The economics often work better at small scale: one workflow returning ten hours a month is material to a two-person business in a way it is not to a large one.' },
    { q: 'Do you only work in Auckland?', a: 'Auckland and across New Zealand, plus New Caledonia and the wider Pacific. Most work happens remotely regardless of location; being in Auckland means we can sit in your office when that is genuinely more useful than a call.' },
  ],
  related: [
    ['/ai-automation-new-zealand/', 'AI automation across New Zealand'],
    ['/ai-agents-auckland/', 'AI agent development in Auckland'],
    ['/ai-audit/', 'Book a free AI opportunity audit'],
    ['/how-to-start-with-ai/', 'How to start with AI'],
  ],
},

];
