import { useState } from 'react'
import mountingBracket from '../assets/darpa-product-mounting-bracket.webp'

const stages = [
  {
    id: 'blank',
    label: 'Blank',
    description: 'A flat sheet-metal blank is prepared for forming.',
  },
  {
    id: 'forming',
    label: 'Forming',
    description: 'A matched tool forms the sheet into a three-dimensional profile.',
  },
  {
    id: 'part',
    label: 'Part',
    description: 'The official product gallery labels the finished component as NFS_0074 · Mounting Bracket.',
  },
]

function FormingIllustration({ stage }) {
  if (stage === 'part') {
    return (
      <img
        alt="NFS_0074 mounting bracket product shown in DARPA Engineering's official media"
        className="forming-product-image"
        decoding="async"
        loading="lazy"
        src={mountingBracket}
      />
    )
  }

  return (
    <svg aria-labelledby="forming-title forming-description" className={`forming-drawing forming-drawing--${stage}`} role="img" viewBox="0 0 440 210">
      <title id="forming-title">Illustrative sheet-metal stamping sequence</title>
      <desc id="forming-description">A simple engineering illustration changes from a flat sheet blank to a formed bracket profile.</desc>
      <defs>
        <linearGradient id="sheet-metal" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f8faf9" />
          <stop offset="1" stopColor="#b9c3c6" />
        </linearGradient>
      </defs>
      {stage === 'blank' ? (
        <g className="forming-blank">
          <path d="M76 84 289 84 365 124 152 124Z" fill="url(#sheet-metal)" stroke="#687983" strokeWidth="2" />
          <path d="M152 124v19l213-1v-18" fill="#a8b4b8" stroke="#687983" strokeWidth="2" />
          <path d="M97 98h206" fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="2" />
        </g>
      ) : (
        <g className="forming-profile">
          <path d="M83 138h85V73h84v65h100v22H230V96h-40v64H83Z" fill="url(#sheet-metal)" stroke="#687983" strokeLinejoin="round" strokeWidth="3" />
          <path d="M168 74h84" fill="none" stroke="#fff" strokeOpacity=".8" strokeWidth="3" />
          <path d="M85 171h266" fill="none" stroke="#aab5b9" strokeDasharray="5 7" strokeWidth="1" />
        </g>
      )}
    </svg>
  )
}

export default function StampingSequence() {
  const [activeStage, setActiveStage] = useState(stages[0])

  function handlePointerMove(event) {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty('--forming-tilt-x', `${(vertical * -2).toFixed(2)}deg`)
    event.currentTarget.style.setProperty('--forming-tilt-y', `${(horizontal * 2.5).toFixed(2)}deg`)
  }

  function resetPointerTilt(event) {
    event.currentTarget.style.setProperty('--forming-tilt-x', '0deg')
    event.currentTarget.style.setProperty('--forming-tilt-y', '0deg')
  }

  return (
    <div className="stamping-sequence" data-reveal>
      <div className="stamping-sequence-heading">
        <p className="eyebrow">A part takes shape</p>
        <h4>Sheet → form → component.</h4>
      </div>

      <figure
        className={`forming-figure forming-figure--${activeStage.id}`}
        onPointerLeave={resetPointerTilt}
        onPointerMove={handlePointerMove}
      >
        <FormingIllustration stage={activeStage.id} />
        <figcaption>{activeStage.id === 'part' ? 'NFS_0074 · Mounting Bracket · official product media' : 'Illustrative process sequence · no dimensions shown'}</figcaption>
      </figure>

      <ol className="forming-stage-list" aria-label="Explore the stamping sequence">
        {stages.map((stage, index) => (
          <li key={stage.id}>
            <button
              aria-pressed={activeStage.id === stage.id}
              className="forming-stage-button"
              onClick={() => setActiveStage(stage)}
              type="button"
            >
              <span className="forming-stage-number">0{index + 1}</span>
              <span>{stage.label}</span>
              <span className="forming-stage-indicator" aria-hidden="true">{activeStage.id === stage.id ? '●' : '○'}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className="forming-stage-description" aria-live="polite">{activeStage.description}</p>
    </div>
  )
}
