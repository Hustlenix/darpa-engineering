export default function RobotWelding() {
  return (
    <section className="robot-welding" data-reveal aria-labelledby="robot-welding-heading">
      <div className="robot-welding-copy">
        <p className="eyebrow">01 / Robot welding</p>
        <h4 id="robot-welding-heading">A programmed weld for complicated parts.</h4>
        <p>
          DARPA describes robot welding with special welding programs and weld attachments for parts that require proper weld penetration and torque performance.
        </p>

        <dl className="robot-welding-facts">
          <div>
            <dt>Robot</dt>
            <dd>Panasonic</dd>
          </div>
          <div>
            <dt>Weld support</dt>
            <dd>Special programs · weld attachments</dd>
          </div>
          <div>
            <dt>Joint requirements</dt>
            <dd>Penetration · torque performance</dd>
          </div>
        </dl>

        <p className="official-source-note">
          <a href="https://darpaengi.com/service/" rel="noreferrer" target="_blank">Service page</a> ·{' '}
          <a href="https://darpaengi.com/about/" rel="noreferrer" target="_blank">About / infrastructure</a>
        </p>
      </div>

      <figure className="robot-welding-figure">
        <svg aria-labelledby="robot-welding-visual-title robot-welding-visual-description" className="robot-welding-illustration" role="img" viewBox="0 0 720 430">
          <title id="robot-welding-visual-title">Illustrative robotic welding cell</title>
          <desc id="robot-welding-visual-description">An original line illustration of a robot arm, weld attachment, fixture and formed part. It is not a photograph or a diagram of a specific Panasonic model.</desc>
          <defs>
            <pattern height="24" id="weld-grid" patternUnits="userSpaceOnUse" width="24">
              <path d="M24 0H0V24" fill="none" stroke="#cbd2d4" strokeWidth=".55" />
            </pattern>
            <linearGradient id="weld-metal" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#e3e8e6" />
              <stop offset=".55" stopColor="#9aa7ac" />
              <stop offset="1" stopColor="#62727a" />
            </linearGradient>
          </defs>
          <rect fill="url(#weld-grid)" height="430" width="720" />

          <path d="M54 352H671" fill="none" stroke="#849197" strokeWidth="1.5" />
          <path d="M92 359H615" fill="none" stroke="#c3cbcc" strokeDasharray="5 8" strokeWidth="1" />

          <g className="weld-fixture">
            <polygon fill="#7e8c92" points="414,310 582,310 615,329 447,329" />
            <path d="M447 329h168v22H447Z" fill="#66757c" />
            <path d="M478 351v20m108-20v20" stroke="#56666e" strokeWidth="5" />
            <path d="M467 307v-28h93v28" fill="#b4bec0" stroke="#68777e" strokeWidth="2" />
            <path d="M467 279h93" stroke="#f7f8f6" strokeWidth="3" />
            <path d="M494 278v-20h39v20" fill="#d4dbd9" stroke="#68777e" strokeWidth="2" />
            <path d="M513 258v-21h34v13h-16v9" fill="none" stroke="#54646c" strokeWidth="5" />
          </g>

          <g className="weld-robot">
            <path d="M166 349h112v16H166Z" fill="#64747b" />
            <path d="M192 349v-24h59v24" fill="#8e9ba0" />
            <path d="M221 325V259" stroke="url(#weld-metal)" strokeWidth="34" strokeLinecap="round" />
            <circle cx="221" cy="259" r="28" fill="#d6dcda" stroke="#68777e" strokeWidth="4" />
            <path d="m222 257 90-91" stroke="url(#weld-metal)" strokeWidth="33" strokeLinecap="round" />
            <circle cx="312" cy="166" r="25" fill="#c7cfce" stroke="#68777e" strokeWidth="4" />
            <path d="m313 167 83 38" stroke="url(#weld-metal)" strokeWidth="27" strokeLinecap="round" />
            <circle cx="396" cy="205" r="20" fill="#d7dddb" stroke="#68777e" strokeWidth="4" />
            <path d="m399 207 46 53" stroke="#66767d" strokeWidth="16" strokeLinecap="round" />
            <path d="m439 255 22 25-9 7-23-24Z" fill="#344651" />
            <path d="M447 282l15 10" stroke="#079fc3" strokeWidth="2" />
            <path className="robot-weld-path" d="m459 294 9 6m-13-1 8 7m-15-7 8 7" fill="none" stroke="#079fc3" strokeLinecap="round" strokeWidth="1.5" />
          </g>

          <g className="weld-callouts">
            <path d="M221 230V108h121" fill="none" stroke="#086783" strokeWidth="1.4" />
            <circle cx="221" cy="230" fill="#086783" r="3" />
            <text x="349" y="112">PANASONIC ROBOT</text>
            <path d="M447 275h123v-82h51" fill="none" stroke="#086783" strokeWidth="1.4" />
            <circle cx="447" cy="275" fill="#086783" r="3" />
            <text x="577" y="188">WELD ATTACHMENT</text>
            <path d="M508 278v-38h-44" fill="none" stroke="#086783" strokeWidth="1.4" />
            <circle cx="508" cy="278" fill="#086783" r="3" />
            <text textAnchor="end" x="458" y="236">PART FIXTURE</text>
          </g>

          <text className="weld-illustration-meta" x="55" y="405">ROBOT WELDING / ILLUSTRATIVE CELL</text>
          <text className="weld-illustration-meta" textAnchor="end" x="664" y="405">NOT A FACTORY PHOTOGRAPH</text>
        </svg>
        <figcaption>Engineering illustration · no machine model or production cell layout implied</figcaption>
      </figure>
    </section>
  )
}
