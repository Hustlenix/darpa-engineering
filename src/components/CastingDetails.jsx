import { useState } from 'react'

const routes = [
  {
    id: 'gravity',
    label: 'Gravity die',
    aluminium: 'A356-T6',
    copper: ['C642 · Silicon aluminium bronze', 'C955 · Nickel aluminium bronze', 'C956 · Aluminium silicon bronze'],
  },
  {
    id: 'shell',
    label: 'Shell / sand',
    aluminium: 'A356-T6 · LM25',
    copper: ['C642 · Silicon aluminium bronze', 'C844 · Red brass', 'C865 · Manganese bronze', 'C955 · Nickel aluminium bronze', 'C956 · Aluminium silicon bronze'],
  },
]

const castingStages = [
  { title: 'Melt', detail: '200 kg/hr induction · electric furnace' },
  { title: 'Alloy', detail: 'Spectrometer check · 2-year melt-chemistry traceability' },
  { title: 'Cast', detail: 'Gravity die · shell / sand' },
  { title: 'Machine', detail: '2 auto drill & tap machines' },
  { title: 'Finish', detail: '150 kg shot blast · Silver · Tin · Nickel plating' },
]

export default function CastingDetails() {
  const [activeRoute, setActiveRoute] = useState(routes[0])

  function handleTabKeyDown(event, index) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return

    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const nextRoute = routes[(index + direction + routes.length) % routes.length]
    setActiveRoute(nextRoute)
    document.getElementById(`casting-${nextRoute.id}-tab`)?.focus()
  }

  return (
    <div className="casting-detail-panel" data-reveal>
      <div className="casting-detail-heading">
        <div>
          <p className="eyebrow">02 / Casting capability</p>
          <h4>Alloy, route and melt control.</h4>
        </div>
        <p>Non-ferrous parts move through gravity die or shell / sand casting, with chemistry checked in-house.</p>
      </div>

      <dl className="casting-facts" aria-label="Casting capability figures">
        <div>
          <dt>Induction furnace</dt>
          <dd>200 kg / hr</dd>
        </div>
        <div>
          <dt>Electric furnace</dt>
          <dd>180 kg capacity</dd>
        </div>
        <div>
          <dt>Product weight</dt>
          <dd>20 g — 5 kg</dd>
        </div>
      </dl>

      <div className="casting-process-overview" data-reveal>
        <div className="casting-process-overview-heading">
          <p className="eyebrow">Foundry equipment / process markers</p>
          <p>Equipment and operations listed by DARPA Engineering; the route and alloy depend on the part.</p>
        </div>
        <ol className="casting-process-flow" aria-label="Casting capabilities from melt to finishing">
          {castingStages.map((stage, index) => (
            <li key={stage.title}>
              <span className="casting-process-number">0{index + 1}</span>
              <h5>{stage.title}</h5>
              <p>{stage.detail}</p>
            </li>
          ))}
        </ol>
        <p className="casting-equipment-dimensions">
          Foundry equipment listings also include an auto gravity-casting machine (450 × 450) and a shell-core shooting machine (600 × 450); the source does not state units for these dimensions.
        </p>
      </div>

      <div className="casting-route-detail">
        <div className="casting-route-tabs" role="tablist" aria-label="Casting methods">
          {routes.map((route, index) => (
            <button
              aria-controls="casting-route-panel"
              aria-selected={activeRoute.id === route.id}
              className="casting-route-tab"
              id={`casting-${route.id}-tab`}
              key={route.id}
              onClick={() => setActiveRoute(route)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              role="tab"
              tabIndex={activeRoute.id === route.id ? 0 : -1}
              type="button"
            >
              {route.label}
            </button>
          ))}
        </div>

        <div
          aria-labelledby={`casting-${activeRoute.id}-tab`}
          className="casting-route-panel"
          id="casting-route-panel"
          role="tabpanel"
          tabIndex="0"
        >
          <p className="eyebrow">Material schedule / {activeRoute.label}</p>
          <dl className="casting-alloys">
            <div>
              <dt>Aluminium alloys</dt>
              <dd>{activeRoute.aluminium}</dd>
            </div>
            <div>
              <dt>Copper alloys</dt>
              <dd>{activeRoute.copper.map((alloy) => <span key={alloy}>{alloy}</span>)}</dd>
            </div>
          </dl>
          <p className="casting-plating"><span>Plating options</span> Silver · Tin · Nickel</p>
        </div>
      </div>

      <div className="casting-verification">
        <p className="eyebrow">Melt chemistry / traceability</p>
        <p>An in-house spectrometer checks melt composition; chemistry records are retained for two years.</p>
      </div>

      <p className="official-source-note">
        <a href="https://darpaengi.com/service/" rel="noreferrer" target="_blank">Service listing</a> ·{' '}
        <a href="https://darpaengi.com/about/" rel="noreferrer" target="_blank">About / infrastructure</a>
      </p>
      <p className="casting-rating-note">
        The Service page lists a 180 kg electric-furnace capacity; the About infrastructure table separately lists 160 kg of melt per hour. The official pages use different wording and figures.
      </p>
    </div>
  )
}
