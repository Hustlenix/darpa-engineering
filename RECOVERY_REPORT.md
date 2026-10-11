# DARPA Engineering redesign — October 11, 2026

## Scope and contribution

The owner requested implementation of a clearer and more distinctive company website. Codex implemented this change. No independent human code contribution or coding hours are claimed for this session. This work does not establish Stardance eligibility, and no recertification was submitted.

Starting commit: `63209df4fd5eeea0ce501b0816e8df9ac298ec0b`.
Recovery branch: `stardance-recertification`.

## Visitor experience

- Warm off-white, charcoal, sage and restrained rust-orange accents, using system fonts.
- Factory photography leads the page; generic promotional copy is reduced.
- Stamping, casting and tooling are selected through keyboard-accessible tabs. Existing stamping, casting and tooling interactions are retained.
- Selected products have their own navigation target and gallery.
- Company information is shorter and does not feature an unverified current certification badge or export percentage.
- Mobile-menu Escape restores focus to its toggle, and switching to desktop closes the mobile disclosure.
- Enquiry fields reject whitespace-only names/messages. Successful preparation opens an email draft, displays truthful status, and offers a copy/view fallback. There is no delivery backend.
- Tooling deselection clears hover/focus preview state so the visible explanation matches deselection.

## Content basis

Company source: https://darpaengi.com/about/
Capabilities: https://darpaengi.com/service/
Product gallery: https://darpaengi.com/stampings/
Contact information: https://darpaengi.com/contact/

Media is reused from the existing repository. No AI factory photographs, customers, testimonials or production statistics were added. The casting detail retains its note about the different electric-furnace figures and units on the company pages. Current technical figures and permission to reuse company media should be confirmed by the company before publication as its official website.

## Validation

- Locked dependency installation succeeded and reported zero known vulnerabilities at the time of installation.
- Oxlint and production build passed.
- Browser checks passed for all three divisions at 320, 375, 768, 1024 and 1440 CSS pixels, with no horizontal overflow.
- Mobile-menu Escape closed the disclosure and returned focus to the toggle.
- Division tabs supported arrow keys, Home and End. Casting tabs and stamping stage selection worked.
- Tooling selection and deselection worked.
- Whitespace-only enquiries were rejected; correcting the fields allowed draft preparation with trimmed content and no delivery claim.
- Fragment targets resolved, the page had one H1, and no browser page errors were observed.

## Remaining limits

No real email was sent. These checks do not establish full WCAG conformance, real-device behavior, current company certification, official media-use permission or Stardance acceptance. GitHub publication status must be verified separately; local build success is not deployment evidence.
