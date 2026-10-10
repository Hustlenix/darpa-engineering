# DARPA Engineering website

A single-page company website built with React and Vite. It presents DARPA Engineering's manufacturing divisions, company information and a direct enquiry path.

## Local development

Install the locked dependencies and start the Vite development server:

```sh
npm ci
npm run dev
```

Available checks:

```sh
npm run lint
npm run build
npm run preview
```

## Page structure

- `src/components/Navbar.jsx` — desktop links and mobile navigation disclosure.
- `src/components/Hero.jsx` — full-bleed editorial cover and factory photograph.
- `src/components/Services.jsx` — stamping, non-ferrous casting and tooling.
- `src/components/About.jsx` and `Industries.jsx` — company and listed markets.
- `src/components/Process.jsx` — the six-stage manufacturing workflow.
- `src/components/Contact.jsx` — contact details and email-draft form.
- `src/index.css` — layout, typography, responsive rules and interaction states.

The desktop hero uses a local responsive copy of DARPA Engineering's `pressshop2` photo from <https://darpaengi.com/wp-content/uploads/2024/04/pressshop2.jpg>. On small screens it uses the square press-shop view from <https://darpaengi.com/wp-content/uploads/2024/04/cropped-Veritas_Press_Shop-scaled-1-1.jpg>.

The capability images are optimized local copies of first-party media:

- Press line: <https://darpaengi.com/wp-content/uploads/2026/04/1000428182-scaled.jpg>
- Furnace: <https://darpaengi.com/wp-content/uploads/2024/04/cast8-1.jpg>
- Stamped bracket: <https://darpaengi.com/wp-content/uploads/2024/05/Stamping_Bracket-Galvanized.png>

The reviewed company media did not provide a tooling/CNC-specific photograph, so that capability remains text-led. Company details and capability wording are based on the first-party pages at <https://darpaengi.com/>, <https://darpaengi.com/service/>, <https://darpaengi.com/about/>, and <https://darpaengi.com/stampings/>. Confirm changes to published company information with the business before adding new claims.

The contact form does not post to a server. It creates a draft addressed to the published company email in the visitor's email application; the visitor must review and send it.

## GitHub Pages

The project uses Vite's `/darpa-engineering/` base path and deploys from `.github/workflows/main.yml`.

- Repository: <https://github.com/darmigan2011-ops/darpa-engineering>
- Pages path: `/darpa-engineering/`
