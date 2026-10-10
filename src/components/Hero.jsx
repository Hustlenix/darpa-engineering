import pressShopImage from '../assets/darpa-press-shop.webp'
import pressFloorSmall from '../assets/darpa-pressshop-wide-800.webp'
import pressFloorLarge from '../assets/darpa-pressshop-wide-1430.webp'

export default function Hero() {
  return (
    <section className="hero hero-cover" id="home" aria-labelledby="hero-heading">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--hero">DARPA ENGINEERING <span aria-hidden="true">/</span> HOSUR, INDIA</p>
          <h1 id="hero-heading">
            Metal parts.<br />
            <span>Made for<br />industry.</span>
          </h1>
          <p className="hero-capabilities">Stampings <span>•</span> Castings <span>•</span> Tooling</p>
          <p className="hero-intro">
            Sheet-metal stampings, non-ferrous castings and in-house tooling from
            DARPA Engineering’s base in Hosur, Tamil Nadu.
          </p>
          <a className="hero-enquiry" href="#contact">Discuss a requirement <span aria-hidden="true">→</span></a>
        </div>

        <figure className="hero-photo">
          <picture>
            <source media="(max-width: 760px)" srcSet={pressShopImage} type="image/webp" />
            <img
              src={pressFloorSmall}
              srcSet={`${pressFloorSmall} 800w, ${pressFloorLarge} 1430w`}
              sizes="(max-width: 760px) 100vw, 53vw"
              alt="Press shop floor at DARPA Engineering in Hosur"
              width="1430"
              height="1073"
              fetchPriority="high"
            />
          </picture>
          <figcaption>
            <span>Press shop</span>
            <span>Hosur · Tamil Nadu</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
