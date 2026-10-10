export default function About() {
  return (
    <section className="section company" id="company" aria-labelledby="company-heading">
      <div className="wrap company-layout">
        <div data-reveal>
          <p className="eyebrow eyebrow--light">About DARPA Engineering</p>
          <h2 id="company-heading">Manufacturing work, rooted in Hosur.</h2>
        </div>
        <div className="company-copy" data-reveal>
          <p>
            DARPA Engineering is based in the SIPCOT Industrial Complex in Hosur,
            Tamil Nadu, with separate stamping, casting and tooling divisions.
          </p>
          <p>
            With tooling alongside part manufacture, buyers can discuss a component
            and its related tooling with the same manufacturer.
          </p>
          <p>
            Started in 2011, DARPA Engineering also provides warehousing for international
            clients. More than 80% of products are exported to the USA and Germany.
          </p>
          <p>
            Product development and manufacturing follow Six Sigma principles, with
            customer requirements and shorter lead times in view.
          </p>
          <p>
            DARPA Engineering describes excellence as a mindset across every action
            and department, with quality in every process and on-time delivery.
          </p>
          <a className="text-link text-link--light" href="#contact">Talk through a requirement <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div className="wrap company-at-glance" data-reveal>
        <div className="company-at-glance-heading">
          <p className="eyebrow eyebrow--light">Company at a glance</p>
          <h3>Built around capable teams and dependable work.</h3>
        </div>
        <dl className="company-facts">
          <div>
            <dt>Established</dt>
            <dd>2011</dd>
            <p>Started in Hosur, Tamil Nadu</p>
          </div>
          <div>
            <dt>Export share</dt>
            <dd>&gt;80%</dd>
            <p>Products exported to USA and Germany</p>
          </div>
          <div>
            <dt>Certification</dt>
            <dd>ISO</dd>
            <p>9001:2015</p>
          </div>
          <div>
            <dt>Core divisions</dt>
            <dd>03</dd>
            <p>Stampings · castings · tooling</p>
          </div>
        </dl>

        <div className="company-quality-commitments">
          <p className="eyebrow eyebrow--light">Quality commitments</p>
          <ul>
            <li>Customer satisfaction</li>
            <li>Quality in every process</li>
            <li>Continuous improvement</li>
            <li>Employee training</li>
            <li>Safe working environment</li>
            <li>Delivery on time</li>
            <li>Commitment to customers</li>
          </ul>
        </div>
        <p className="company-quality-note">
          Quality policy: employee training to enhance skills, reduce manufacturing cost and customer complaints, while maintaining quality systems.
        </p>
        <p className="company-client-note">International manufacturing clients · exports to USA and Germany</p>
        <p className="official-source-note official-source-note--light">
          <a href="https://darpaengi.com/" rel="noreferrer" target="_blank">Company philosophy · DARPA Engineering Home</a> ·{' '}
          <a href="https://darpaengi.com/about/" rel="noreferrer" target="_blank">Company details and quality objectives</a>
        </p>
      </div>

      <ol className="wrap production-sequence" aria-label="Engineering to delivery" data-reveal>
        <li><span className="production-step-number">01</span><span className="production-step-title">Engineering</span></li>
        <li><span className="production-step-number">02</span><span className="production-step-title">Manufacturing</span></li>
        <li><span className="production-step-number">03</span><span className="production-step-title">Quality</span></li>
        <li><span className="production-step-number">04</span><span className="production-step-title">Delivery</span></li>
      </ol>
    </section>
  )
}
