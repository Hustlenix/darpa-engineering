# DARPA Engineering Website — Incremental Development Plan

## Objective

Rebuild the current single-page website in genuine, reviewable increments into a premium modern industrial engineering presentation: professional, manufacturing-focused, technically credible, responsive, accessible and fast. Use the existing React/Vite stack where it remains useful. Avoid a one-shot replacement, unnecessary dependencies, excessive 3D and unsupported company claims.

## Working rules for every implementation phase

For **each** phase below, follow this loop before calling the phase complete:

1. **Inspect:** review the relevant current files, existing behavior and current Git diff; identify dependencies and content that must be preserved.
2. **Implement:** make only the changes in that phase, keeping the application runnable.
3. **Run:** start the application with `npm run dev` and inspect the changed experience in a browser. Run `npm run lint` and a production build; use an isolated output directory if preserving the existing ignored build output is necessary.
4. **Test:** exercise the phase-specific interactions, responsive states and nearby regressions. Check the browser console and network/build output.
5. **Fix:** resolve runtime, lint, build, layout and interaction errors before proceeding.
6. **Review:** compare the result with the phase goals; inspect the visual hierarchy, responsive states, browser console and interactions at desktop, tablet and mobile widths as relevant.
7. **Improve:** make the necessary refinements, then repeat the affected tests and review until the phase is ready to close.
8. **Commit:** inspect `git diff` and status, stage only the completed milestone's intended files, and create a meaningful commit after the work and checks are genuinely complete. Never create placeholder/fake commits or commit unfinished changes to simulate progress.

The read-only project audit, initial implementation follow-up and full visual redesign are recorded in `PROJECT_AUDIT.md`. The redesign preserves React/Vite, verified company information, the local image set, keyboard navigation and the email-draft enquiry flow. It replaces the page composition with an editorial cover, asymmetric capability features, large industry typography, a vertical manufacturing workflow and a closing contact section. Final lint/build/audit and responsive screenshot results are recorded in the latest audit addendum. No commit or push was made.

## Before Phase 1: protect the current project

- The project is already under Git on branch `main`, with six existing commits. The working tree was not clean at audit time: 25 tracked files were modified and 12 paths were untracked before these audit documents were added. Review the current diff with the owner before deciding what belongs in any baseline or milestone commit. Preserve all existing work; do not reset, clean, overwrite or stage the whole tree indiscriminately.
- The `origin` URL was changed with owner approval to credential-free HTTPS; no network operation was performed. That local URL change did not revoke any prior credential. Keep credentials out of URLs, source and logs, and handle any prior credential through the owner's security process before future remote operations.
- Confirm official company copy, image sources/usage rights, approved contact details, the intended public domain and whether a real form-delivery endpoint is available.
- Use only project/user-provided or company-approved facts. The initial safe content basis is: based in Hosur, Tamil Nadu, India; manufacturing/engineering company; sheet metal stampings; non-ferrous castings; industrial manufacturing; engineering and precision manufacturing. Treat existing metrics, certifications, customer names, testimonials, project examples, contact details, machinery/software lists and detailed process claims as unverified until explicitly confirmed.

## Animation strategy and section motion map

**Design intent:** motion should express precision, sequence, structure, material and machinery—using the restraint of industrial design and editorial web design. It must feel deliberately engineered, not like a collection of effects. Define a small, consistent set of timing, easing, distance and stagger tokens. The static page is the primary experience; animation progressively enhances it and never gates access to content or controls.

Before writing animation code, create and review a motion matrix for the chosen design. For every proposed motion, record its purpose, section, trigger, technique, duration/relationship to other motion, touch/keyboard equivalent, static/reduced-motion fallback and performance/cleanup considerations. Reject any effect without a clear communication or interaction purpose. Phase 2 establishes this strategy; motion is then added only as each relevant section is implemented, with Phase 10 reserved for coherence and refinement—not a site-wide animation dump.

| Site area | Intended motion language | Guardrails |
| --- | --- | --- |
| Global navigation | A short directional underline/indicator; a transform-based mobile drawer transition; a restrained scroll-progress line. | Preserve native anchor behavior and immediate access. No full-screen/page transition for this one-page site; no persistent pulsing. |
| Hero | One choreographed masked or clip-path reveal for the headline, a stagger between title/copy/actions, and a measured image reveal with optional slight parallax. A subtle spring/magnetic response may be used for the primary CTA on fine pointers. | The H1 and CTA remain visible if motion is disabled or fails. No random floating objects, continuously animated scene, decorative HUD or 3D required for the message. |
| Company story | Editorial text enters in deliberate reading groups; a small approved diagram or SVG guide line may draw to connect structure or sequence. | Keep paragraphs readable at rest; do not hide every element until it scrolls into view. Diagram motion must not imply an unverified process. |
| Manufacturing capabilities | A confirmed process illustration can use SVG path/line drawing to clarify sequence; capability-card borders or imagery can respond directionally to pointer/focus with a small transform. | Draw only processes the company confirms. Keep all details available without hover; no repeated scan/pulse effect on every card. |
| Products/services | A restrained image-mask/crop reveal on entry and a short directional border or image shift for focus/hover. | Avoid flipping cards, layout-shifting effects and motion that obscures product/service information. |
| Industries/applications | If approved imagery and use cases exist, use a small stagger or clip-path image reveal as the section enters. | If content is not verified, do not add illustrative motion that could imply an actual customer, market or application. No blanket fade on every card. |
| Interactive feature | Spring-based selection/indicator movement, an animated process/progress line, and clear state transitions for selected, reset and error states. | Keyboard and touch receive equally clear feedback; never rely on pointer position, color or movement alone. |
| Contact and footer | Visible focus/border response on controls and concise confirmation/error transitions; a small back-to-top interaction if useful. | Submission status reflects a real result. No attention-seeking pulse, blocking overlay or animated delay before form use. |

**Available techniques (choose only when the motion map justifies them):** scroll-driven reveals; clip-path image and masked-type reveals; staggered text; subtle parallax; spring-based or magnetic interaction; directional and pointer-aware hover; animated borders; SVG path/line drawing; process-line and geometric transitions; shallow layered depth; restrained scale/translate; scroll progress; image movement or displacement when it clarifies material/process; and concise micro-interactions. Page transitions are unnecessary for the current one-page site and should be reconsidered only if real routes are introduced. This is a design vocabulary, not a checklist.

### Animation implementation and performance rules

- Use CSS for simple hover, focus, underline and border transitions. Use the existing Framer Motion dependency selectively for coordinated component/state animation and scroll-triggered sequences. Avoid copy-pasting the same reveal preset everywhere.
- GSAP is already listed but unused. Use it only if a specific, complex timeline or scroll-driven sequence cannot be implemented cleanly with CSS or Framer Motion; otherwise remove it during the dependency review rather than adding another animation layer.
- Keep Lenis only if real usability testing shows smooth scrolling is beneficial. Native scrolling is the baseline; smooth scrolling must not interfere with anchors, touch, focus, browser controls or reduced-motion preferences.
- Use Three.js/R3F only for a meaningful, user-controlled 3D view of a real engineering object/process when that view improves understanding. Provide an optimized static image/diagram fallback; do not ship a continuous decorative render loop.
- Prefer `transform` and `opacity`; use `clip-path` and SVG drawing selectively and profile them on normal mobile hardware. Avoid repeated layout reads/writes, expensive filters, forced synchronous layout and continuous animation frames without a visible need.
- Register pointer-driven behavior only for appropriate fine-pointer devices. Provide equivalent focus/touch states, throttle or batch pointer updates where needed, and clean up event listeners, observers, timers and animation frames on unmount.
- Honor `prefers-reduced-motion` in CSS and JavaScript (including Framer Motion). Reduced-motion mode should show final content immediately, disable parallax/smooth scroll/nonessential movement and retain clear state changes.
- Do not begin sections in `opacity: 0` in a way that leaves them hidden when animation code is unavailable. Progressive enhancement means the page remains complete, readable and usable with advanced motion disabled.

## Phases

### PHASE 1 — Project architecture and foundation

**Work:** Review the dirty working tree and agree how it will be preserved; settle the single-page information architecture; define section ownership, reusable layout/UI primitives, content-data boundaries and asset conventions. Keep Vite + React. Decide whether JS remains the lowest-risk choice or a limited TypeScript adoption has a specific payoff; no wholesale rewrite is assumed. Resolve the duplicate Pages workflow only after checking the current deployment settings. Establish clean global layout and base-aware asset paths without replacing unrelated user changes.

**Exit checks and milestone:** The app still starts and builds; navigation targets are mapped to real sections; the agreed structure is documented; tracked/untracked user work is preserved; a meaningful architecture/foundation commit is made only after review.

### PHASE 2 — Design system and visual language

**Work:** Define the industrial color palette, type scale, content widths, spacing rhythm, grid, surfaces, borders, buttons, form controls, icon treatment, image ratios and motion tokens. Reduce the current all-over dark neon/HUD effect in favor of controlled technical accents, strong typography and clear contrast. Decide which existing tokens/logo assets can be retained and where authentic industrial photography is needed. Produce and review the animation strategy/motion matrix above before any production animation is implemented; assign a purpose, trigger, technique and fallback for each planned motion.

**Exit checks and milestone:** Test representative headings, paragraphs, buttons, cards and fields against light/dark surfaces and zoom/reflow; review contrast for small text; verify tokens render consistently on desktop and mobile; review the section motion map and its fallbacks; commit the completed design foundation and motion strategy.

### PHASE 3 — Navigation and global layout

**Work:** Build the site header, desktop navigation, mobile drawer, skip link, page container, section spacing and footer. Make all section links point to the actual section start. Use semantic navigation and native controls; provide focus management, menu state, Escape dismissal and a visible focus treatment. Introduce only the mapped navigation underline, drawer transition and scroll-progress treatment. Include only approved address/contact/footer content.

**Exit checks and milestone:** Test all links with mouse and keyboard, mobile open/close flows, focus order, Escape and header overlap at narrow widths; confirm no duplicate controls or IDs; commit the verified global layout.

### PHASE 4 — Premium hero section

**Work:** Create an editorial, high-impact first screen with one semantic H1, concise value proposition, clear primary/secondary next steps and a genuine manufacturing/engineering visual. Use approved local imagery where available, provide an optimized non-WebGL fallback, and keep the layout useful when images or motion fail. Add only the hero motions mapped in Phase 2: a purposeful masked headline/stagger, image reveal and optional restrained parallax or fine-pointer CTA spring. Do not use invented metrics as visual proof or add decorative 3D.

**Exit checks and milestone:** Confirm the H1 and purpose are immediately clear, CTAs work, imagery is correctly described, the page loads without waiting for an artificial timer or 3D scene, and the hero fits common desktop/mobile viewports; commit the hero.

### PHASE 5 — DARPA Engineering company story

**Work:** Explain what the company does, where it is based and its engineering/manufacturing focus using approved facts and concise, specific language. Add history, values, people, facility or process detail only when sourced and approved. Replace generic “future/innovation” filler with a credible company narrative. If the motion map calls for it, use restrained editorial text grouping or a small approved SVG diagram/line reveal; content must remain visible and readable at rest.

**Exit checks and milestone:** Every factual statement has an approved source; content reads clearly without animation; heading hierarchy and reading order make sense; review mobile presentation and commit the story section.

### PHASE 6 — Manufacturing capabilities

**Work:** Present confirmed manufacturing capabilities, beginning with sheet metal stampings, non-ferrous castings and industrial/precision manufacturing. Explain the process in plain language only to the level supported by company-approved information. Do not add machine tonnage, materials, tolerances, certifications, inspection methods or production volumes without confirmation. Add the mapped process-line/SVG drawing or directional capability hover/focus response only when it accurately represents approved content.

**Exit checks and milestone:** Capability labels and descriptions are accurate and distinguishable; cards/details work with keyboard and touch; no hover-only information is required; verify section navigation and commit the capabilities milestone.

### PHASE 7 — Products/services

**Work:** Give products and services a buyer-oriented structure based on the real offer. If no product catalog or approved product detail exists, keep this as a concise service/capability explanation rather than inventing product families, specifications or lead times. Add clear enquiry actions. Introduce only mapped, short image-mask/crop or directional border interactions; keep every detail available without hover.

**Exit checks and milestone:** Each item is approved and has a meaningful next step; content does not repeat the capability section verbatim; validate links and responsive card/list behavior; commit the products/services work.

### PHASE 8 — Industries and applications

**Work:** Add only approved industries, customer use cases or applications. Existing draft references to automotive, power, electrical and other sectors are not proof of current customer or market work; confirm them before publishing. If confirmation is not available, keep the section focused on verified manufacturing applications or defer specific sector claims. Use the planned image/stagger reveal only for approved images and use cases; do not use animation to imply unsupported work.

**Exit checks and milestone:** No customer, market, application or end-use statement is inferred from a stock photo or an old draft; keyboard and mobile reading order remain clear; commit the verified industries/applications section.

### PHASE 9 — Interactive website feature

**Work:** Implement one useful, lightweight feature, preferably a keyboard-accessible capability selector/enquiry helper that helps visitors identify a relevant verified manufacturing area and carry that selection into the enquiry form. Use the mapped spring/indicator/process-line motion to explain state changes, with equivalent touch and focus feedback. Avoid quote calculators, capacity estimators or “live performance” dashboards unless their data and logic are supplied. Do not claim an enquiry has been delivered until a real endpoint confirms it.

**Exit checks and milestone:** Test empty, selected, changed and reset states; keyboard operation and narrow-screen behavior; form handoff; and any failure state. Add automated component coverage only where it provides meaningful value without unnecessary dependencies; commit the working feature.

### PHASE 10 — Animations and micro-interactions

**Work:** Integrate and refine the motion introduced progressively in Phases 3–9 against the approved Phase 2 motion matrix. Remove effects that do not communicate engineering precision, movement, structure, material, machinery or a useful interaction. Prefer CSS for simple transitions and Framer Motion for purposeful component/state choreography; use GSAP or Three.js/R3F only when their specific value is demonstrated. Fix animation-frame/event-listener cleanup. Do not use excessive glow, floating objects, constant pulsing, gradients, glassmorphism, blanket fades or motion on every element.

**Exit checks and milestone:** Every animation maps to a documented purpose and section; content and controls remain usable with motion disabled; test touch/focus/reduced-motion behavior, cleanup on unmount, scroll performance and CPU/GPU load on a normal laptop and mobile device. Remove unnecessary continuous loops and fix any jank before committing the coherent motion system.

### PHASE 11 — Responsive/mobile experience

**Work:** Refine the experience from mobile outward across header, hero, type, section spacing, cards, photography, forms, footer and touch targets. Replace duplicated injected/global breakpoints with a deliberate, maintainable responsive system. Ensure no fixed overlay blocks content and no horizontal overflow is hidden instead of corrected.

**Exit checks and milestone:** Review representative small-phone, large-phone, tablet and desktop widths; test portrait/landscape, zoom, menu and form; fix clipping and awkward wraps; commit responsive refinements.

### PHASE 12 — Accessibility

**Work:** Complete semantic landmarks/headings, skip navigation, link/button semantics, visible focus, form labels/instructions/errors/status, menu keyboard behavior, contrast, image alternatives, reduced motion and non-color interaction cues. Target WCAG 2.2 AA practices and verify with manual keyboard review plus an accessibility scan where tooling is available.

**Exit checks and milestone:** No keyboard trap or inaccessible action remains; form states are announced and associated; focus order, zoom/reflow and contrast issues found during testing are fixed; commit the accessibility changes.

### PHASE 13 — SEO

**Work:** Write accurate page title/description, canonical URL, Open Graph/social preview data, favicon and sharing image. Add robots/sitemap only where deployment and domain configuration support them. Use structured data only for verified organization details; remove unverified claims from metadata.

**Exit checks and milestone:** Inspect built HTML and metadata, verify canonical and asset URLs at the actual GitHub Pages path/domain, validate social image references and page headings; commit SEO work.

### PHASE 14 — Performance optimization

**Work:** Measure the built site; reduce JavaScript and render work; remove unused dependencies/components once references are verified; avoid shipping 3D when a static visual is more effective. Optimize approved images into appropriate local formats/sizes, lazy-load below-fold media, reduce font families/weights and improve layout stability. Set an evidence-based bundle and Core Web Vitals budget.

**Exit checks and milestone:** Compare before/after build sizes and browser measurements; confirm the hero/LCP image is prioritized, below-fold images do not block first render, external requests are intentional, and animations do not keep unnecessary render loops alive; commit only measured improvements.

### PHASE 15 — Testing and debugging

**Work:** Establish the smallest useful test setup for the project’s real risks. Cover navigation, capability interaction, form validation/submission state and failure handling as appropriate; retain lint/build checks and run browser smoke tests for the whole page. Check console errors, broken image/font requests, duplicate IDs, anchor destinations, deployment paths and reduced motion.

**Exit checks and milestone:** A clean production build and lint run; tests that exercise actual behaviors rather than mirror implementation; browser checks at agreed viewports and a recorded list of any remaining owner-dependent content; commit the verified testing/debugging improvements.

### PHASE 16 — Final visual polish

**Work:** Review the full journey and tune copy, hierarchy, typography, image crops, whitespace, section transitions, footer details and interaction states. Use authentic assets and remove remaining template placeholders, stale counters, dead links and decorative noise. Recheck the complete page after all responsive/accessibility/performance changes.

**Exit checks and milestone:** Conduct a final desktop/tablet/mobile visual review, keyboard walk-through and content-fact pass; fix regressions and obtain owner approval of public-facing copy/assets; commit the finished visual milestone.

### PHASE 17 — GitHub preparation and deployment

**Work:** Secure the Git remote (no embedded token), review the final diff and history, keep a single Pages workflow, validate Node/install/build settings, confirm repository Pages permissions, branch/base path/domain and custom-domain DNS if applicable. Produce a clean build and test the deployed project URL, favicon, images, fonts, metadata and links. Keep secrets in GitHub Actions secrets only if a workflow actually requires them.

**Exit checks and milestone:** Confirm that no secret or unapproved claim is in the repository, the workflow deploys the intended build once, the published site works under its real base URL, and a rollback point is documented. Push/deploy only when the repository owner authorizes it; record the real deployment result in a truthful commit/release note.

## Definition of done

- The site presents DARPA Engineering as a premium, practical industrial engineering/manufacturing company, not a generic 3D technology demo.
- All public claims, imagery, contact information and customer/project examples are approved and accurate; no unsupported metric, certification, award, customer, revenue, production figure, headcount or technical specification has been introduced.
- Core navigation and enquiry interactions work with keyboard, touch and pointer; the form never reports delivery without a real confirmed submission path.
- The production build is deployable at the confirmed GitHub Pages URL/domain; assets resolve using the configured base path.
- Lint/build and agreed behavior/accessibility/responsive/performance checks pass, and the development history contains only meaningful commits for completed work.
