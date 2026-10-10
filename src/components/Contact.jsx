import { useState } from 'react'

const contactEmail = 'baskar@darpaengi.com'
const contactPhone = '+91-979-000-9817'
const usContactPhone = '+001-510-403-1789'

export default function Contact() {
  const [status, setStatus] = useState('')

  function prepareEmail(event) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const company = form.get('company') || 'Not provided'
    const message = form.get('message')
    const subject = `Manufacturing enquiry from ${name}`
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      '',
      'Enquiry:',
      message,
    ].join('\n')

    setStatus('Your email app should open with a draft. Review it and send it there; this website does not send the message.')
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section contact contact--closing" id="contact" aria-labelledby="contact-heading">
      <div className="wrap">
        <div className="contact-heading" data-reveal>
          <div>
            <p className="eyebrow eyebrow--light">Contact · DARPA Engineering</p>
            <h2 id="contact-heading">LET'S BUILD<br /><span>WHAT'S NEXT.</span></h2>
          </div>
          <p className="contact-lead">Talk with the team about a part, drawing, material or production requirement.</p>
        </div>

        <div className="contact-layout">
          <address className="contact-details" data-reveal>
            <div>
              <h3>Visit</h3>
              <p>DARPA Engineering<br />42-A3, SIPCOT Industrial Complex<br />SIPCOT-1, Hosur-635126<br />Tamil Nadu, India</p>
            </div>
            <div className="contact-details-us">
              <h3>United States</h3>
              <p>DARPA Engineering LLC<br />150 E B St Lbby #1810 SMB#28702<br />Casper, WY 82601, USA</p>
              <a href="tel:+0015104031789">{usContactPhone}</a>
            </div>
            <div>
              <h3>Email</h3>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
            <div>
              <h3>Call</h3>
              <a href="tel:+919790009817">{contactPhone}</a>
            </div>
          </address>

          <form className="contact-form" onSubmit={prepareEmail} aria-describedby="form-note" data-reveal>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Work email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-company">Company <span>(optional)</span></label>
              <input id="contact-company" name="company" type="text" autoComplete="organization" />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Part or requirement</label>
              <textarea id="contact-message" name="message" rows="5" required />
            </div>
            <p className="form-note" id="form-note">Submitting opens a draft in your email app. Nothing is sent automatically.</p>
            <button className="button button--primary" type="submit">Prepare email <span aria-hidden="true">→</span></button>
            <p className="form-status" role="status" aria-live="polite">{status}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
