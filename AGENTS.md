# AGENTS.md

# Adaptive Guardrails

Scan every entry below before starting any task. No exceptions.

This is a living correction log. When the user corrects you, or when a wrong assumption causes a bug, append a new entry immediately.

Entries are permanent: never delete them, only supersede them.

---

## Entry format

N. [ACTIVATION] Directive -- reason.

- N = sequential number. Never reuse a number.
- ACTIVATION:
  - ALWAYS → applies globally
  - NEVER → hard prohibition
  - WHEN:surface → applies only to a specific area

Examples:

- WHEN:astro
- WHEN:components
- WHEN:content
- WHEN:tailwind
- WHEN:seo
- WHEN:forms
- WHEN:images
- WHEN:git

---

## Resolving contradictions

When two entries clash, apply these rules in order:

1. **Supersession**

   An entry ending with:

   `(supersedes #N)`

   disables entry N. Keep superseded entries visible.

2. **Specificity**

   Specific rules beat generic rules.

3. **Recency**

   The entry with the higher number wins.

---

## Project Context

This is the official website for **Anchor Service**, a nautical company based in Bari.

The website must position the company primarily as a specialist in:

- rigging and standing rigging
- maintenance of sailing boats
- ropes, halyards and deck equipment
- sail assistance
- yacht delivery and transfers
- technical consultancy for boat owners

The main commercial objective is to generate qualified contacts through:

- phone calls
- WhatsApp
- contact forms
- inspection requests

The website must communicate:

- technical competence
- safety
- reliability
- solidity
- local presence
- real experience in the sailing sector

This is a content-driven, SEO-oriented website. It is not a dashboard or a web application.

---

## Technology Stack

Use the following stack unless the existing project clearly uses a different established pattern:

- Astro
- TypeScript
- Tailwind CSS
- Astro Content Collections when content is repeated or structured
- Astro Image or the native Astro image pipeline
- minimal client-side JavaScript
- server endpoints only when necessary
- Vercel as the preferred deployment target
- Resend for transactional contact emails
- Cloudflare Turnstile for form anti-spam protection

Do not introduce React, Vue, Svelte or another UI framework unless a feature genuinely requires client-side state or complex interaction.

---

## Expected Information Architecture

The preferred website structure is:

- `/` — Home
- `/servizi` — Services overview
- `/servizi/rigging` — Main rigging service detail page

The company/team content and contact/inspection request content should live on the homepage instead of separate `/chi-siamo` and `/contatti` routes.

Optional content sections or future routes:

- `/lavori` — Completed work and case studies
- `/servizi/[slug]` — Individual service landing pages
- `/lavori/[slug]` — Individual project or intervention pages
- `/privacy-policy`
- `/cookie-policy`

Do not create unnecessary pages. Every route must have a clear user or SEO purpose.

---

## Project Inspection Rules

Before editing code:

- inspect the current folder structure
- inspect `astro.config.*`
- inspect `package.json`
- inspect existing layouts
- inspect existing components
- inspect content collections and schemas
- inspect Tailwind configuration and design tokens
- inspect existing route conventions
- inspect existing SEO utilities
- inspect reusable form and CTA components
- avoid assumptions

Prefer consistency with the existing codebase over personal preferences.

---

## Core Project Rules

1. [ALWAYS] Use TypeScript for scripts, utilities, content schemas and component logic.
2. [ALWAYS] Prefer static rendering for public pages.
3. [ALWAYS] Ship the smallest possible amount of client-side JavaScript.
4. [NEVER] Add `client:*` directives without a concrete interaction requirement.
5. [WHEN:astro] Prefer `.astro` components for static and mostly presentational UI.
6. [WHEN:astro] Use framework components only when native Astro and lightweight JavaScript are insufficient.
7. [WHEN:components] Reuse existing components before creating new ones.
8. [WHEN:components] Keep components focused and avoid oversized page components.
9. [WHEN:components] Extract repeated UI patterns such as service cards, CTAs, section headers and contact blocks.
10. [WHEN:components] Avoid premature abstraction for one-off decorative elements.
11. [WHEN:layouts] Keep shared metadata, header, footer and global structure inside reusable layouts.
12. [WHEN:content] Keep repeated editorial content separate from page layout code.
13. [WHEN:content] Use Content Collections for services, projects, case studies or other repeatable content types.
14. [WHEN:content] Define and validate collection schemas.
15. [WHEN:content] Never duplicate the same business information across multiple files without a single source of truth.
16. [WHEN:tailwind] Reuse project design tokens and established utility patterns.
17. [WHEN:tailwind] Avoid arbitrary values when a reusable token or consistent scale is appropriate.
18. [WHEN:tailwind] Do not add a component library unless explicitly requested.
19. [NEVER] Use Bootstrap, Angular Material, PrimeNG or dashboard-oriented UI libraries for this website.
20. [ALWAYS] Preserve semantic HTML and progressive enhancement.

---

## Content Rules

1. [ALWAYS] Write content for boat owners, shipyards and marinas, not for developers.
2. [ALWAYS] Keep language concrete, professional and understandable.
3. [ALWAYS] Make rigging the primary service in hierarchy, navigation and messaging.
4. [ALWAYS] Use the broader maintenance services as supporting offers.
5. [NEVER] Invent certifications, years of experience, partnerships, guarantees, service areas or technical capabilities.
6. [NEVER] use unsupported claims such as “the best”, “number one” or “100% safe”.
7. [WHEN:content] Prefer real operational language over generic nautical marketing language.
8. [WHEN:content] Avoid decorative filler text and excessive slogans.
9. [WHEN:content] Keep calls to action explicit, for example:
   - Request an inspection
   - Call now
   - Write on WhatsApp
   - Request information
10. [WHEN:content] Do not publish prices unless the user explicitly confirms fixed pricing.
11. [WHEN:content] Mention Bari and the actual operating area only when confirmed.
12. [WHEN:content] Use Italian as the default website language unless multilingual support is explicitly requested.

---

## Design Rules

1. [ALWAYS] The visual identity must feel robust, safe, technical and nautical.
2. [ALWAYS] Prioritize mobile readability and fast access to contact actions.
3. [ALWAYS] Use generous spacing, strong hierarchy and high-contrast typography.
4. [NEVER] Make the website look like a tourism, beach club or generic yacht-charter website.
5. [NEVER] overload pages with waves, anchors, helms, gulls or decorative nautical clichés.
6. [WHEN:design] Prefer dark navy, white or warm off-white, steel grey and restrained sand or brass accents.
7. [WHEN:design] Use rounded or softly shaped elements when consistent with the Anchor Service brand.
8. [WHEN:design] Avoid excessively sharp, aggressive or futuristic visual language.
9. [WHEN:design] Keep primary CTAs visually prominent.
10. [WHEN:mobile] Keep phone and WhatsApp actions easy to reach.
11. [WHEN:mobile] Avoid large fixed overlays that hide page content.
12. [WHEN:mobile] Do not rely on hover for essential information or actions.

## Color Palette

Use only the approved Anchor Service palette below unless the user explicitly changes it.

All colors must be defined in a single shared configuration source, such as the Tailwind theme/config or a dedicated design tokens file imported by the styling system. Do not hard-code palette colors across components or pages.

```text
Navy deep        #0B1F33
Steel blue       #1F4E5F
Warm off-white   #F7F4EE
White            #FFFFFF
Steel grey       #64717C
Light grey       #E3E7EA
Brass            #FFB800
WhatsApp green   #25D366
Text navy        #10202D
```

Usage guidance:

- Navy deep: header, footer, hero backgrounds, strong title areas.
- Steel blue: technical sections, links, hover states and supporting emphasis.
- Warm off-white: page backgrounds and softer content sections.
- White: forms, clean content blocks and high-contrast surfaces.
- Steel grey: secondary text, borders and microcopy.
- Light grey: separators, subtle borders and form fields.
- Brass: primary accents, selected CTA details and restrained highlights.
- WhatsApp green: WhatsApp actions only.
- Text navy: main text on light backgrounds.

## Radius Token

Use a single approved radius value for every rounded UI element:

```text
Anchor radius 20px
```

All border radius values must come from the shared design token/config. Do not use multiple radius scales, arbitrary radius values or one-off rounded utilities unless the user explicitly changes the design system.

---

## Image Rules

1. [ALWAYS] Prefer authentic photographs of the company, technicians, boats and completed work.
2. [WHEN:images] Use descriptive filenames and meaningful alt text.
3. [WHEN:images] Do not keyword-stuff alt attributes.
4. [WHEN:images] Set width and height to prevent layout shift.
5. [WHEN:images] Use responsive image sizes.
6. [WHEN:images] Prefer optimized WebP or AVIF output where supported.
7. [WHEN:images] Lazy-load below-the-fold images.
8. [WHEN:images] Do not lazy-load the main above-the-fold hero image when it harms Largest Contentful Paint.
9. [WHEN:images] Avoid using large unoptimized background images for essential content.
10. [NEVER] Present stock imagery as if it documented a real Anchor Service intervention.

---

## SEO Skill

For every public page:

1. define a unique page title
2. define a unique meta description
3. define a canonical URL
4. define Open Graph metadata
5. use one clear `h1`
6. keep heading order logical
7. use semantic internal links
8. verify indexability
9. include the page in the sitemap when appropriate
10. avoid duplicate or thin pages

Additional rules:

- Use local SEO naturally for confirmed locations and services.
- Create dedicated service pages only when they contain genuinely useful, distinct content.
- Add structured data only when it accurately matches visible page content.
- Prefer `LocalBusiness` or a more specific supported subtype when business data is confirmed.
- Keep NAP information consistent: company name, address and phone number.
- Never fabricate reviews or review schema.
- Never add FAQ schema for questions that are not visibly present on the page.

---

## Accessibility Skill

Mandatory checklist:

1. use semantic landmarks
2. include a working skip link
3. preserve visible keyboard focus
4. ensure full keyboard navigation
5. label every form field
6. associate validation errors with fields
7. do not use placeholder text as the only label
8. ensure sufficient contrast
9. respect `prefers-reduced-motion`
10. provide meaningful alternative text
11. keep tap targets usable on mobile
12. use buttons for actions and links for navigation
13. ensure dialogs and mobile navigation manage focus correctly

Do not use ARIA to replace correct native HTML semantics.

---

## Performance Skill

Before completing a page or feature, verify:

- no unnecessary client-side hydration
- no oversized JavaScript dependencies
- no unoptimized images
- no render-blocking third-party scripts without justification
- no unnecessary font weights
- no layout shift caused by missing media dimensions
- no autoplay video unless explicitly required
- no heavy animation library for simple transitions

Prefer:

- system fonts or self-hosted optimized fonts
- CSS transitions
- Intersection Observer for lightweight reveal effects
- static generation
- deferred analytics

Use GSAP only when the required animation cannot be achieved cleanly with CSS or lightweight native JavaScript.

---

## Forms Skill

For contact and inspection request forms:

1. validate on both client and server when a server endpoint exists
2. keep the form usable without complex client-side state
3. include explicit labels
4. provide clear success and error feedback
5. protect against spam
6. sanitize and validate all submitted data
7. do not expose secrets in public environment variables
8. do not log sensitive contact data unnecessarily
9. limit uploaded file type and size when attachments are enabled
10. do not claim that an email was sent unless the provider confirms success

Preferred fields for an inspection request:

- name
- phone
- email
- boat type
- boat length
- marina or port
- requested service
- problem description
- optional photographs

Keep optional fields clearly marked.

---

## Environment Variables

1. [NEVER] Commit secrets or API keys.
2. [ALWAYS] Document required variables in `.env.example`.
3. [ALWAYS] Keep server-only variables out of client bundles.
4. [WHEN:cloudflare] Use bindings or platform environment variables according to the existing deployment adapter.
5. [WHEN:resend] Keep the API key server-side.
6. [WHEN:turnstile] Treat the site key as public and the secret key as server-only.

Potential variables:

```env
PUBLIC_SITE_URL=
PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
CONTACT_TO_EMAIL=
```

Do not create variables that are not used.

---

## Testing and Validation

Before marking a task complete:

1. run the existing formatter
2. run the existing linter
3. run Astro checks or TypeScript checks
4. run the production build
5. inspect generated routes
6. verify mobile and desktop layouts
7. verify keyboard navigation
8. verify internal links
9. verify form states when affected
10. verify that no secrets or personal data were added

Use the commands already defined in `package.json`. Do not invent replacement scripts when valid project scripts exist.

---

## Task Workflow Skill

Before implementing any task:

1. analyze the impacted files
2. analyze architecture and content impact
3. explain the implementation strategy
4. explain the expected result
5. wait for confirmation
6. only then generate or modify code

Exception:

- When the user explicitly asks for immediate implementation, proceed after the analysis without requesting another confirmation.
- For very small, low-risk corrections, make the change directly and report it clearly.

## Project Agents

Specialized project agents and reviewer checklists must live in the `agents/` folder.

Use a dedicated agent file when a recurring specialist perspective is useful, such as design review, SEO review, accessibility review, content review, forms review or deployment review.

Each project agent should define:

- purpose
- when to use it
- responsibilities
- checks to perform
- constraints
- expected output

---

## Dependency Skill

Before adding a dependency:

1. verify the feature cannot be implemented cleanly with Astro, CSS or native browser APIs
2. inspect existing dependencies for an equivalent solution
3. prefer actively maintained packages
4. evaluate bundle and runtime impact
5. explain why the dependency is required
6. avoid packages used only for trivial formatting or basic UI behavior

Never replace an established package without explicit reason and approval.

---

## Git Skill

Triggers:

- ok committa
- committa
- facciamo commit
- commit branch
- committa il branch

Commit workflow:

1. inspect `git status`
2. inspect the changed files
3. never commit unrelated files automatically
4. propose an appropriate conventional commit type
5. propose a concise commit message
6. show the message and included files
7. ask whether unrelated files should be included when present
8. commit only after explicit confirmation
9. never push automatically

Preferred types:

- `feat`
- `fix`
- `refactor`
- `content`
- `style`
- `seo`
- `perf`
- `chore`
- `wip`

Commit format:

```text
<type>: <description>
```

Push triggers:

- pusha
- fai push
- pushalo
- committa e pusha

Even when push is requested, inspect the branch and remote before pushing.

---

## Self-maintenance

[ALWAYS]

If the user declares a permanent workflow or project preference, update `AGENTS.md` before acknowledging it.

Before completing a task evaluate:

- did the user redirect the approach?
- did a bug reveal a wrong assumption?
- did a standing preference emerge?
- did the same correction occur more than once?
- should a new permanent guardrail be added?

Append new rules to the Correction Log. Never rewrite historical entries to hide mistakes.

---

## Correction Log

1. [ALWAYS] Anchor Service must be positioned primarily around rigging, while broader nautical maintenance remains a supporting offer.

2. [ALWAYS] The visual language must communicate robustness and safety without becoming sharp, aggressive or overly industrial.

3. [ALWAYS] Before implementing substantial tasks, first explain the implementation approach.

4. [WHEN:git] The user wants controlled commits with explicit review before committing or pushing.

5. [ALWAYS] Use Vercel as the preferred deployment target for this project instead of Cloudflare Pages.

6. [ALWAYS] Keep “Chi siamo” and “Contatti” as homepage sections instead of standalone pages.

7. [ALWAYS] Use only the approved Anchor Service color palette and define colors in one shared configuration source so they can be changed from a single place.

8. [ALWAYS] Store specialized project agents and recurring reviewer checklists in the `agents/` folder.

9. [WHEN:seo] Use the installed `seo` Codex skill for explicit SEO audits or technical SEO reviews, and adapt findings through `agents/anchor-seo-reviewer.md` so they respect Anchor Service positioning and confirmed business facts.

10. [ALWAYS] Use a single 20px radius token for every rounded UI element across the Anchor Service website.

11. [WHEN:design] When the user provides a visual reference for a section, match the reference composition closely before simplifying: preserve layout rhythm, density, visual hierarchy and content/image balance while adapting colors to the Anchor Service palette.

12. [ALWAYS] Use #FFB800 as the Anchor Service brass/accent color instead of the previous muted brass value.

13. [WHEN:components] Service cards must not show service index numbers, and reveal-card typography must stay compact enough to avoid clipped text in narrow 16:9 cards.

14. [ALWAYS] Service detail pages must live under `/servizi/[slug]` and use one shared detail-page component so every service has the same structure and visual treatment.

15. [WHEN:design] When changing the background color of the section after the homepage services block, update the services section background too so the transition area does not reveal the old color.

16. [WHEN:design] For screenshot-driven section redesigns, match the provided mockup density and proportions first: avoid making cards taller, typography heavier, row separators stronger, or highlight borders weaker than the reference unless explicitly requested.

17. [WHEN:design] In pricing sections with a recommended badge protruding above a card, reserve enough vertical gap after the section description so the badge does not visually attach to the heading area.

18. [ALWAYS] Route website changes through both the Anchor design reviewer and the Anchor SEO reviewer before completion.

19. [WHEN:components] Keep typography in service cards visually restrained: use regular, medium or semibold weights for card content and reserve heavier emphasis for the main section hierarchy.

20. [WHEN:images] When replacing service-card images, preserve the established card layout, dimensions, grid and responsive behavior; adapt photographs to the existing image frames with cropping and object positioning, never adapt the layout to the source image proportions.

21. [WHEN:images] The featured rigging image must use an explicit compact desktop frame height; never use percentage height against an auto-sized grid row because square or portrait source images can expand the entire services block.

22. [WHEN:design] The homepage “Compravendita e noleggio” service must use a compact horizontal trust-strip layout with a nautical icon, concise copy and a navy CTA; do not use a large split image card for this block.

23. [WHEN:design] In the homepage “Compravendita e noleggio” strip, constrain and center the icon-copy-CTA group so the flexible text column does not create an oversized empty gap before the button.

24. [WHEN:navigation] The primary navbar order is Servizi, Esperienze, Chi siamo, Contatti, followed by the “Richiedi controllo” CTA; Servizi, Chi siamo, Contatti and the CTA link to homepage sections, while Esperienze links to the standalone `/esperienze` route.
