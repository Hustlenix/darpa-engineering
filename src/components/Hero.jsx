import pressFloorSmall from '../assets/darpa-pressshop-wide-800.webp'
import pressFloorLarge from '../assets/darpa-pressshop-wide-1430.webp'

export default function Hero() {
  return (
    <section
      className="hero hero-cover"
      id="home"
      aria-labelledby="hero-heading"
    >
      <div className="wrap hero-topline">
        <span>THE TRUE ENGINEERING</span>
        <span>HOSUR, TAMIL NADU · EST. 2011</span>
      </div>
      <div className="wrap hero-heading-row">
        <h1 id="hero-heading">
          Built around
          <br />
          the <span>part.</span>
        </h1>
        <div className="hero-summary">
          <p>
            Sheet-metal stampings. Non-ferrous castings. The tooling that makes
            them possible.
          </p>
          <p className="hero-summary-note">
            Manufacturing and in-house tool design, from our shop floor in
            Hosur.
          </p>
          <a className="button button--primary" href="#capabilities">
            Explore our capabilities <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="wrap hero-factory">
        <figure className="hero-photo">
          <img
            src={pressFloorLarge}
            srcSet={`${pressFloorSmall} 800w, ${pressFloorLarge} 1430w`}
            sizes="(max-width: 760px) calc(100vw - 40px), 80vw"
            alt="The press shop at DARPA Engineering in Hosur, with rows of manufacturing equipment"
            width="1430"
            height="1073"
            fetchPriority="high"
          />
          <figcaption>
            <span>Inside the press shop</span>
            <span>Hosur, India</span>
          </figcaption>
        </figure>
        <a className="hero-contact-card" href="#contact">
          <span className="eyebrow">Have a component in mind?</span>
          <strong>
            Let’s talk
            <br />
            through it.
          </strong>
          <span className="hero-card-arrow" aria-hidden="true">
            ↗
          </span>
          <span className="hero-card-foot">
            Drawings, samples & manufacturing enquiries
          </span>
        </a>
      </div>
      <div className="wrap hero-bottomline">
        <span>Stampings / Castings / Tooling</span>
        <a href="#products">
          A closer look at our parts <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
