import './App.css'

const steps = [
  {
    number: '01',
    title: 'Understand the asset',
    description:
      'Collect project details and supporting records before considering any digital representation.',
  },
  {
    number: '02',
    title: 'Define the rights',
    description:
      'Work out what participation could mean under the project documents and applicable law.',
  },
  {
    number: '03',
    title: 'Represent with care',
    description:
      'Where appropriate, use digital tools to record defined interests and coordinate documented processes.',
  },
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EnerFraction home">
          <img src="/enerfraction-logo.jpeg" alt="EnerFraction" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#challenge">The challenge</a>
          <a href="#approach">Our approach</a>
          <a className="nav-cta" href="#project">Project status</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> RENEWABLE ENERGY × DIGITAL FINANCE</p>
          <p className="challenge-edition">
            Santander X Challenge · University Challenge 2026
          </p>
          <h1>Backing the next chapter of clean energy.</h1>
          <p className="hero-intro">
            EnerFraction is exploring how digital representations of
            project-linked rights could connect renewable-energy infrastructure
            with more flexible participation.
          </p>
          <a className="primary-link" href="#approach">
            Discover the concept <span aria-hidden="true">↓</span>
          </a>
          <p className="hero-note">An early-stage concept. Not an investment offer.</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun" />
          <div className="land land-back" />
          <div className="land land-front" />
          <div className="panel panel-one" />
          <div className="panel panel-two" />
          <div className="wind wind-one"><i /><b /><em /></div>
          <div className="wind wind-two"><i /><b /><em /></div>
          <span className="art-label">A more connected energy future</span>
        </div>
      </section>

      <section className="challenge section-wrap" id="challenge">
        <div className="section-heading">
          <p className="eyebrow">WHY THIS MATTERS</p>
          <h2>Clean energy needs more than sunlight and wind.</h2>
        </div>
        <div className="challenge-copy">
          <p>
            Building renewable infrastructure takes significant capital, time,
            and careful coordination. The organizations developing and managing
            these assets can face barriers to financing, while opportunities to
            participate may be out of reach for many potential investors.
          </p>
          <p>
            Long-term agreements and complex funding structures can make it
            harder to bring different sources of capital together. EnerFraction
            starts from a simple question: could clearer digital records and
            carefully structured fractional participation help widen the
            conversation?
          </p>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-wrap approach-inner">
          <div className="section-heading">
            <p className="eyebrow">THE ENERFRACTION CONCEPT</p>
            <h2>Connect the project, the rights, and the record.</h2>
            <p className="section-lede">
              Explore a responsible path from real-world energy assets to
              transparent digital participation—always grounded in the project’s
              legal structure.
            </p>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <p className="approach-footnote">
            Smart contracts could support documented processes such as
            subscriptions or distribution calculations. They cannot verify a
            physical asset or replace the legal agreements behind it.
          </p>
        </div>
      </section>

      <section className="principles section-wrap">
        <div>
          <p className="eyebrow">BUILT ON CLARITY</p>
          <h2>Innovation should make the details easier to understand.</h2>
        </div>
        <div className="principle-list">
          <p><span>↗</span> Rights defined before tokens</p>
          <p><span>↗</span> Real-world information verified off-chain</p>
          <p><span>↗</span> Compliance shaped around each jurisdiction</p>
          <p><span>↗</span> Sustainability at the center of the conversation</p>
        </div>
      </section>

      <section className="project-status" id="project">
        <div className="status-mark" aria-hidden="true">E</div>
        <p className="eyebrow">WHERE WE ARE</p>
        <h2>A vision in development.</h2>
        <p>
          EnerFraction is currently a project concept and landing-page
          prototype—not a live platform or active investment opportunity.
        </p>
        <a href="https://github.com/Yeris003/EnerFraction">
          Explore the project repository <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <img src="/enerfraction-logo.jpeg" alt="EnerFraction" />
        <p>
          EnerFraction is an early-stage concept. Nothing on this page is
          investment, legal, tax, or financial advice, or an offer to buy or
          sell a financial product. Tokenization does not automatically confer
          ownership, income, liquidity, or investor protection.
        </p>
        <span>Exploring a more connected clean-energy future.</span>
      </footer>
    </main>
  )
}

export default App
