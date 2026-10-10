import stampingPressSmall from '../assets/darpa-stamping-press-800.webp'
import stampingPressLarge from '../assets/darpa-stamping-press-1600.webp'
import stampingPressTiny from '../assets/darpa-stamping-press-400.webp'
import castingFurnaceSmall from '../assets/darpa-casting-furnace-640.webp'
import castingFurnaceLarge from '../assets/darpa-casting-furnace-1086.webp'
import castingFurnaceTiny from '../assets/darpa-casting-furnace-400.webp'
import stampedBracketSmall from '../assets/darpa-stamped-bracket-240.webp'
import stampedBracketLarge from '../assets/darpa-stamped-bracket-413.webp'
import hpsPressSmall from '../assets/darpa-hps-press-line-800.webp'
import hpsPressLarge from '../assets/darpa-hps-press-line-1400.webp'
import pressCellSmall from '../assets/darpa-press-cell-800.webp'
import pressCellLarge from '../assets/darpa-press-cell-1400.webp'
import springSeatImage from '../assets/darpa-product-spring-seat.webp'
import topContactImage from '../assets/darpa-product-top-contact.webp'
import CastingDetails from './CastingDetails'
import ProductLibrary from './ProductLibrary'
import RobotWelding from './RobotWelding'
import StampingSequence from './StampingSequence'
import ToolingDie from './ToolingDie'

export default function Services() {
  return (
    <section className="section capabilities" id="capabilities" aria-labelledby="capabilities-heading">
      <div className="wrap">
        <div className="section-heading section-heading--split" data-reveal>
          <div>
            <p className="eyebrow">Manufacturing capabilities</p>
            <h2 id="capabilities-heading">Three divisions.<br />Clear scope.</h2>
          </div>
          <p>
            Core work spans sheet-metal stamping, non-ferrous casting and the tooling
            used for those processes.
          </p>
        </div>

        <div className="capability-list">
          <article className="capability-feature capability-feature--stamping" data-reveal>
            <div className="capability-copy">
              <p className="eyebrow">01 / Stampings</p>
              <h3>Stampings</h3>
              <p>Sheet-metal stampings and in-house tool design for industrial parts.</p>
              <a href="#contact">Discuss stamping needs <span aria-hidden="true">→</span></a>
            </div>

            <div className="capability-evidence">
              <figure className="capability-photo capability-photo--press">
                <img
                  src={stampingPressTiny}
                  srcSet={`${stampingPressTiny} 400w, ${stampingPressSmall} 800w, ${stampingPressLarge} 1600w`}
                  sizes="(max-width: 760px) calc(100vw - 160px), 42vw"
                  width="1600"
                  height="739"
                  alt="Row of mechanical presses on DARPA Engineering's manufacturing floor"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Press line · Hosur</figcaption>
              </figure>
              <figure className="capability-photo capability-photo--part">
                <img
                  src={stampedBracketSmall}
                  srcSet={`${stampedBracketSmall} 240w, ${stampedBracketLarge} 413w`}
                  sizes="(max-width: 760px) 112px, 12vw"
                  width="413"
                  height="652"
                  alt="Two stamped galvanized metal brackets shown side by side"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Stamped bracket</figcaption>
              </figure>
            </div>
          </article>

          <div className="stamping-extension">
            <div className="stamping-spec-sheet" data-reveal>
              <div className="stamping-spec-heading">
                <div>
                  <p className="eyebrow">01 / Stamping capability</p>
                  <h4>From coil to formed part.</h4>
                </div>
                <p>Design, engineering development, manufacture and supply, with in-house designers for complicated stampings.</p>
              </div>

              <dl className="stamping-spec-list">
                <div>
                  <dt>Press range</dt>
                  <dd>10T — 250T</dd>
                  <p>In-house mechanical, hydraulic and pneumatic presses</p>
                </div>
                <div>
                  <dt>Materials</dt>
                  <dd>Steel · stainless steel · copper · brass · bronze · aluminium</dd>
                  <p>Steel grades: CR · HR · HSLA</p>
                </div>
                <div>
                  <dt>Engineering</dt>
                  <dd>SolidWorks · AutoCAD</dd>
                  <p>Critical surface and solid-model design</p>
                </div>
                <div>
                  <dt>Robot welding</dt>
                  <dd>Panasonic robot</dd>
                  <p>Special welding programs and weld attachments for complicated parts, penetration and torque performance</p>
                </div>
                <div>
                  <dt>Feed + shearing</dt>
                  <dd>Up to 1 t coil feed</dd>
                  <p>Shearing listed up to 12 mm × 2500 mm</p>
                </div>
              </dl>

              <details className="stamping-machine-schedule" data-reveal>
                <summary>Press and fabrication equipment schedule</summary>
                <dl className="stamping-machine-rows">
                  <div>
                    <dt>Mechanical presses</dt>
                    <dd>45T · 70T · 80T · 120T with die cushion</dd>
                  </div>
                  <div>
                    <dt>Hydraulic press</dt>
                    <dd>150T</dd>
                  </div>
                  <div>
                    <dt>Pneumatic power presses</dt>
                    <dd>45T × 4 · 63T × 2 · 110T · 160T · 250T</dd>
                  </div>
                  <div>
                    <dt>Welding equipment</dt>
                    <dd>2 welding machines · Panasonic robot welding</dd>
                  </div>
                </dl>
                <p className="stamping-schedule-note">
                  Capacity/type information follows the About infrastructure table; pneumatic unit totals for 110T and 160T are omitted because official pages differ.
                </p>
              </details>

              <p className="official-source-note">
                Details from DARPA Engineering’s <a href="https://darpaengi.com/service/" rel="noreferrer" target="_blank">Service</a> and{' '}
                <a href="https://darpaengi.com/about/" rel="noreferrer" target="_blank">About / infrastructure</a> pages.
              </p>
            </div>

            <RobotWelding />

            <div className="stamping-gallery" aria-label="Stamping equipment and components">
              <figure className="stamping-gallery-press" data-reveal>
                <img
                  alt="HPS press line shown in DARPA Engineering's official company media"
                  decoding="async"
                  height="646"
                  loading="lazy"
                  sizes="(max-width: 760px) calc(100vw - 40px), 58vw"
                  src={hpsPressSmall}
                  srcSet={`${hpsPressSmall} 800w, ${hpsPressLarge} 1400w`}
                  width="1400"
                />
                <figcaption><span>HPS press line</span><span>DARPA Engineering · factory floor</span></figcaption>
              </figure>
              <figure className="stamping-gallery-product" data-reveal>
                <img
                  alt="Spring seat component NFS 0058 shown in DARPA Engineering's official media"
                  decoding="async"
                  loading="lazy"
                  src={springSeatImage}
                />
                <figcaption>Spring seat · NFS_0058</figcaption>
              </figure>
              <figure className="stamping-gallery-product" data-reveal>
                <img
                  alt="Top contact component NFS 0068 shown in DARPA Engineering's official media"
                  decoding="async"
                  loading="lazy"
                  src={topContactImage}
                />
                <figcaption>Top contact · NFS_0068</figcaption>
              </figure>
              <figure className="stamping-gallery-floor" data-reveal>
                <img
                  alt="Several press machines on DARPA Engineering's shop floor in an official 2026 company photograph"
                  decoding="async"
                  height="1050"
                  loading="lazy"
                  sizes="(max-width: 760px) calc(100vw - 40px), 100vw"
                  src={pressCellSmall}
                  srcSet={`${pressCellSmall} 800w, ${pressCellLarge} 1400w`}
                  width="1400"
                />
                <figcaption><span>Press shop floor</span><span>Official company media · 2026</span></figcaption>
              </figure>
            </div>

            <ProductLibrary />
            <StampingSequence />
          </div>

          <article className="capability-feature capability-feature--casting" data-reveal>
            <figure className="capability-photo capability-photo--casting">
              <img
                src={castingFurnaceTiny}
                srcSet={`${castingFurnaceTiny} 400w, ${castingFurnaceSmall} 640w, ${castingFurnaceLarge} 1086w`}
                sizes="(max-width: 760px) calc(100vw - 40px), 40vw"
                width="1086"
                height="815"
                alt="Casting furnace at DARPA Engineering's Hosur facility"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Furnace · Casting division</figcaption>
            </figure>

            <div className="capability-copy">
              <p className="eyebrow">02 / Castings</p>
              <h3>Non-ferrous castings</h3>
              <p>Castings in aluminium, copper, brass and bronze. Share the alloy and component requirements to discuss suitability.</p>
              <a href="#contact">Discuss a casting <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <CastingDetails />

          <article className="capability-tooling" data-reveal>
            <div className="capability-tooling-title">
              <span className="capability-number">03</span>
              <h3>Tooling</h3>
            </div>
            <div className="capability-tooling-copy">
              <p>In-house design and manufacture of tools for stamping and non-ferrous casting.</p>
              <a href="#contact">Discuss tooling <span aria-hidden="true">→</span></a>
            </div>
          </article>

          <ToolingDie />
        </div>
      </div>
    </section>
  )
}
