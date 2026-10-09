import { useState } from 'react'
import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Compass,
  ExternalLink,
  Leaf,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  Wind,
  X,
  Zap,
} from 'lucide-react'

const projects = [
  { id: 'EF-042', name: 'Sol de Sonora', kind: 'Solar', location: 'Sonora, Mexico', capacity: '18.4 MW', output: '31,200 MWh', yield: '8.2%', funded: 72, raised: '$1.44M', target: '$2.00M', min: '$250', term: '5 years', stage: 'Open', accent: 'sunset', icon: Sun, description: 'A utility-scale solar array bringing new generation capacity to the Sonoran desert.' },
  { id: 'EF-038', name: 'North Sea Array', kind: 'Wind', location: 'Esbjerg, Denmark', capacity: '24.0 MW', output: '58,600 MWh', yield: '7.6%', funded: 86, raised: '$2.15M', target: '$2.50M', min: '$500', term: '7 years', stage: 'Closing soon', accent: 'sea', icon: Wind, description: 'A coastal wind project connecting local clean power to the regional grid.' },
  { id: 'EF-051', name: 'Mesa Battery', kind: 'Storage', location: 'Arizona, United States', capacity: '12.5 MWh', output: '9,800 MWh', yield: '9.1%', funded: 38, raised: '$760K', target: '$2.00M', min: '$250', term: '4 years', stage: 'Open', accent: 'citrus', icon: BatteryCharging, description: 'Grid-scale storage designed to shift renewable energy into peak-demand hours.' },
  { id: 'EF-027', name: 'Cedar Ridge Solar', kind: 'Solar', location: 'Andalusia, Spain', capacity: '9.2 MW', output: '16,400 MWh', yield: '7.8%', funded: 100, raised: '$1.20M', target: '$1.20M', min: '$300', term: '6 years', stage: 'Fully funded', accent: 'olive', icon: Sun, description: 'A community-linked solar installation in one of Spain’s high-irradiance regions.' },
  { id: 'EF-046', name: 'Highland Wind', kind: 'Wind', location: 'Galway, Ireland', capacity: '16.8 MW', output: '42,100 MWh', yield: '8.0%', funded: 54, raised: '$1.08M', target: '$2.00M', min: '$400', term: '6 years', stage: 'Open', accent: 'cloud', icon: Wind, description: 'Onshore wind assets supporting a regional transition to lower-carbon power.' },
  { id: 'EF-033', name: 'Valley Reserve', kind: 'Storage', location: 'Valencia, Spain', capacity: '8.0 MWh', output: '7,200 MWh', yield: '8.7%', funded: 63, raised: '$945K', target: '$1.50M', min: '$250', term: '3 years', stage: 'Open', accent: 'peach', icon: BatteryCharging, description: 'A flexible storage project balancing solar generation and evening demand.' },
]

const activity = [
  { title: 'Distribution received', project: 'Sol de Sonora · Q2 2025', date: 'Jun 28, 2025', amount: '+$124.80', type: 'in' },
  { title: 'Allocation confirmed', project: 'North Sea Array · 40 units', date: 'Jun 14, 2025', amount: '−$2,000.00', type: 'out' },
  { title: 'Distribution received', project: 'Cedar Ridge Solar · Q2 2025', date: 'Jun 02, 2025', amount: '+$86.40', type: 'in' },
  { title: 'Allocation confirmed', project: 'Sol de Sonora · 25 units', date: 'May 21, 2025', amount: '−$1,250.00', type: 'out' },
]

const navigation = [
  { id: 'Overview', icon: LayoutDashboard },
  { id: 'Marketplace', icon: Compass },
  { id: 'Portfolio', icon: Leaf },
  { id: 'Activity', icon: Clock3 },
]

function App() {
  const [view, setView] = useState('Overview')
  const [filter, setFilter] = useState('All assets')
  const [selectedProject, setSelectedProject] = useState(null)
  const [connected, setConnected] = useState(false)
  const [range, setRange] = useState('6M')
  const [toast, setToast] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredProjects = filter === 'All assets' ? projects : projects.filter((project) => project.kind === filter)

  function notify(message) {
    setToast(message)
    window.setTimeout(() => setToast(''), 3200)
  }

  function changeView(nextView) {
    setView(nextView)
    setMobileMenuOpen(false)
  }

  function toggleWallet() {
    const nextConnected = !connected
    setConnected(nextConnected)
    notify(nextConnected ? 'Demo wallet connected. No blockchain is attached.' : 'Demo wallet disconnected.')
  }

  function openProject(project) {
    setSelectedProject(project)
  }

  function projectGrid(items) {
    return (
      <div className="project-grid">
        {items.map((project) => <ProjectCard key={project.id} project={project} onOpen={() => openProject(project)} />)}
      </div>
    )
  }

  return (
    <div className="app-frame">
      <aside className={`sidebar ${mobileMenuOpen ? 'sidebar-open' : ''}`}>
        <a className="brand" href="#overview" onClick={(event) => { event.preventDefault(); changeView('Overview') }} aria-label="EnerFraction home">
          <span className="brand-mark"><Zap size={17} strokeWidth={2.5} /></span>
          <span>ener<span className="brand-light">fraction</span><sup>®</sup></span>
        </a>
        <div className="workspace-label">INVESTOR WORKSPACE</div>
        <nav className="side-nav" aria-label="Main navigation">
          {navigation.map(({ id, icon: Icon }) => (
            <button className={`nav-link ${view === id ? 'active' : ''}`} key={id} onClick={() => changeView(id)}>
              <Icon size={18} strokeWidth={1.8} /><span>{id}</span>{id === 'Activity' && <span className="nav-count">2</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-spacer" />
        <div className="sidebar-note">
          <div className="note-icon"><ShieldCheck size={17} /></div>
          <strong>Built for clarity</strong>
          <p>Project information and illustrative figures, in one place.</p>
          <button onClick={() => notify('Project evidence and verification details are coming soon.')}>How it works <ArrowRight size={13} /></button>
        </div>
        <div className="profile-row">
          <div className="avatar">AM</div>
          <div className="profile-copy"><strong>Alex Morgan</strong><span>Individual investor</span></div>
          <button className="icon-button profile-menu" aria-label="Profile options" onClick={() => notify('Profile settings are not enabled in this demo.')}><MoreHorizontal size={19} /></button>
        </div>
      </aside>

      {mobileMenuOpen && <button className="mobile-scrim" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} />}

      <main className="main-shell">
        <header className="topbar">
          <button className="icon-button mobile-menu-button" aria-label="Open navigation" onClick={() => setMobileMenuOpen((open) => !open)}><Menu size={20} /></button>
          <div className="breadcrumbs"><span>Workspace</span><span className="crumb-slash">/</span><strong>{view}</strong></div>
          <div className="topbar-actions">
            <span className="demo-status"><i /> DEMO ENVIRONMENT</span>
            <button className="icon-button notification-button" aria-label="Notifications" onClick={() => notify('You’re all caught up.')}><Bell size={18} /><i /></button>
            <button className={`wallet-button ${connected ? 'wallet-connected' : ''}`} onClick={toggleWallet}>
              <span className="wallet-dot" />{connected ? '0x72…fA10' : 'Connect wallet'}<ChevronDown size={15} />
            </button>
          </div>
        </header>

        <div className="page-content">
          {view === 'Overview' && <Overview onNavigate={changeView} onOpenProject={openProject} range={range} setRange={setRange} />}
          {view === 'Marketplace' && (
            <section className="page-section enter-view">
              <PageHeading eyebrow="THE MARKETPLACE" title="Find your next allocation" description="Explore renewable infrastructure opportunities from a single view." />
              <div className="market-toolbar">
                <div className="filter-pills" role="group" aria-label="Filter projects by asset type">
                  {['All assets', 'Solar', 'Wind', 'Storage'].map((item) => <button key={item} className={`filter-pill ${filter === item ? 'selected' : ''}`} onClick={() => setFilter(item)}>{item}</button>)}
                </div>
                <button className="subtle-button" onClick={() => notify('All figures shown are illustrative demo data.')}><SlidersHorizontal size={15} /> Filters</button>
              </div>
              <div className="market-results"><span>{filteredProjects.length} opportunities</span><span>Indicative terms · Demo data</span></div>
              {projectGrid(filteredProjects)}
            </section>
          )}
          {view === 'Portfolio' && <Portfolio onOpenProject={openProject} />}
          {view === 'Activity' && <Activity />}
        </div>
        <footer className="page-footer"><span>© 2025 EnerFraction</span><span><i /> Prototype only · Not an offer to invest</span><button onClick={() => notify('Help center is not enabled in this demo.')}>Help & feedback <ExternalLink size={12} /></button></footer>
      </main>

      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} onPreview={() => notify('Preview only. No investment or transaction has been created.')} />}
      {toast && <div className="toast" role="status"><Check size={16} />{toast}<button aria-label="Dismiss notification" onClick={() => setToast('')}><X size={15} /></button></div>}
    </div>
  )
}

function PageHeading({ eyebrow, title, description, action }) {
  return (
    <div className="page-heading">
      <div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{description}</p></div>
      {action}
    </div>
  )
}

function Overview({ onNavigate, onOpenProject, range, setRange }) {
  return (
    <section className="page-section enter-view">
      <PageHeading eyebrow="MONDAY, JULY 14, 2025" title="Energy, owned together." description="Your renewable portfolio, at a glance." action={<button className="round-action" aria-label="Search projects" onClick={() => onNavigate('Marketplace')}><Search size={17} /></button>} />
      <div className="demo-banner"><div className="banner-icon"><CircleHelp size={17} /></div><span><strong>Demo workspace.</strong> All projects, balances and performance figures are illustrative.</span><button onClick={() => onNavigate('Marketplace')}>Explore projects <ArrowRight size={14} /></button></div>

      <div className="metric-grid">
        <Metric label="Portfolio value" value="$28,450" detail={<><ArrowUpRight size={14} /> 4.8% <span>illustrative change</span></>} tone="green" />
        <Metric label="Annual yield estimate" value="8.2%" detail={<><span>Across 4 demo allocations</span></>} tone="orange" />
        <Metric label="Clean energy backed" value="42.8 MWh" detail={<><Zap size={14} /> Equivalent annual output</>} tone="blue" />
        <Metric label="Active allocations" value="04" detail={<><span>Across 3 technologies</span></>} tone="neutral" />
      </div>

      <div className="insight-grid">
        <section className="panel performance-panel">
          <div className="panel-header"><div><div className="panel-kicker">PORTFOLIO OVERVIEW</div><h2>Value over time</h2></div><button className="text-link" onClick={() => onNavigate('Portfolio')}>View portfolio <ArrowRight size={14} /></button></div>
          <div className="chart-summary"><strong>$28,450</strong><span className="chart-change"><ArrowUpRight size={14} /> 4.8%</span><span className="chart-caption">illustrative portfolio value</span></div>
          <div className="line-chart-wrap"><LineChart /></div>
          <div className="chart-axis"><span>Jan 2025</span><span>Mar 2025</span><span>May 2025</span><span>Jul 2025</span></div>
          <div className="chart-range" role="group" aria-label="Chart range">{['1M', '6M', 'YTD', '1Y'].map((item) => <button className={range === item ? 'current' : ''} key={item} onClick={() => setRange(item)}>{item}</button>)}</div>
        </section>
        <section className="panel allocation-panel">
          <div className="panel-header"><div><div className="panel-kicker">PORTFOLIO MIX</div><h2>By technology</h2></div><button className="icon-button" aria-label="More allocation options"><MoreHorizontal size={19} /></button></div>
          <div className="donut-wrap"><div className="donut-chart"><div><strong>4</strong><span>projects</span></div></div></div>
          <div className="allocation-legend">
            <Legend color="green" label="Solar" value="52%" />
            <Legend color="orange" label="Wind" value="31%" />
            <Legend color="blue" label="Storage" value="17%" />
          </div>
          <button className="outline-wide" onClick={() => onNavigate('Portfolio')}>See portfolio details <ArrowRight size={14} /></button>
        </section>
      </div>

      <section className="section-block featured-block">
        <div className="section-heading"><div><div className="panel-kicker">CURATED FOR YOU</div><h2>Projects to explore</h2></div><button className="text-link" onClick={() => onNavigate('Marketplace')}>View marketplace <ArrowRight size={14} /></button></div>
        <div className="featured-grid">{[projects[0], projects[1], projects[2]].map((project) => <ProjectCard compact key={project.id} project={project} onOpen={() => onOpenProject(project)} />)}</div>
      </section>
      <div className="bottom-note"><ShieldCheck size={16} /><span>Explore asset details, project milestones and illustrative terms before forming an investment view.</span><button onClick={() => onNavigate('Marketplace')}>Browse all <ArrowRight size={13} /></button></div>
    </section>
  )
}

function Metric({ label, value, detail, tone }) {
  return <article className={`metric-card metric-${tone}`}><span>{label}</span><strong>{value}</strong><small>{detail}</small></article>
}

function Legend({ color, label, value }) {
  return <div className="legend-row"><span className={`legend-dot ${color}`} /><span>{label}</span><strong>{value}</strong></div>
}

function LineChart() {
  return (
    <svg className="line-chart" viewBox="0 0 680 190" role="img" aria-label="Illustrative portfolio value line trending upward from January to July">
      <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#7f9f72" stopOpacity=".23" /><stop offset="100%" stopColor="#7f9f72" stopOpacity="0" /></linearGradient></defs>
      {[24, 66, 108, 150].map((y) => <line key={y} x1="0" x2="680" y1={y} y2={y} className="grid-line" />)}
      <path d="M0 154 C38 151 42 126 82 133 S128 144 164 119 S211 111 245 121 S296 96 327 103 S376 112 408 82 S458 91 491 69 S542 74 574 54 S624 57 680 24 L680 180 L0 180 Z" className="chart-area" />
      <path d="M0 154 C38 151 42 126 82 133 S128 144 164 119 S211 111 245 121 S296 96 327 103 S376 112 408 82 S458 91 491 69 S542 74 574 54 S624 57 680 24" className="chart-line" />
      <circle cx="680" cy="24" r="5" className="chart-end" />
    </svg>
  )
}

function ProjectCard({ project, onOpen, compact = false }) {
  const Icon = project.icon
  return (
    <article className={`project-card ${compact ? 'project-compact' : ''}`}>
      <button className={`project-art art-${project.accent}`} onClick={onOpen} aria-label={`View ${project.name}`}>
        <div className="art-topline"><span>{project.kind.toUpperCase()}</span><span className={project.stage === 'Closing soon' ? 'stage-warn' : ''}>{project.stage === 'Open' ? 'OPEN' : project.stage.toUpperCase()}</span></div>
        <div className={`art-illustration illustration-${project.kind.toLowerCase()}`}><span className="sun-disc" /><span className="landscape-line" /><span className="energy-glyph"><Icon size={29} strokeWidth={1.35} /></span></div>
        <span className="art-id">{project.id}</span>
      </button>
      <div className="project-card-body">
        <div className="project-title-line"><div><h3>{project.name}</h3><span className="project-location">{project.location}</span></div><button className="icon-button card-more" aria-label={`Open ${project.name} details`} onClick={onOpen}><ArrowUpRight size={17} /></button></div>
        <div className="project-stats"><div><span>Est. annual yield</span><strong>{project.yield}<i>†</i></strong></div><div><span>Capacity</span><strong>{project.capacity}</strong></div></div>
        <div className="funding-label"><span>Funding progress</span><strong>{project.funded}%</strong></div>
        <div className="progress-track"><span style={{ width: `${project.funded}%` }} /></div>
        <div className="funding-amount"><span>{project.raised} raised</span><span>of {project.target}</span></div>
        {!compact && <button className="card-action" onClick={onOpen}>View opportunity <ArrowRight size={14} /></button>}
      </div>
    </article>
  )
}

function Portfolio({ onOpenProject }) {
  const owned = [projects[0], projects[1], projects[3], projects[4]]
  return (
    <section className="page-section enter-view">
      <PageHeading eyebrow="YOUR HOLDINGS" title="Portfolio" description="A transparent view of your illustrative renewable allocations." action={<button className="subtle-button" onClick={() => window.print()}><ArrowDownLeft size={15} /> Export</button>} />
      <div className="portfolio-total"><div><span>Total portfolio value</span><strong>$28,450</strong><small><ArrowUpRight size={14} /> 4.8% illustrative change since inception</small></div><div className="portfolio-total-side"><span>Annual energy backed</span><strong>42.8 MWh</strong></div><div className="portfolio-total-side"><span>Estimated annual yield</span><strong>8.2%</strong></div></div>
      <div className="table-toolbar"><div><div className="panel-kicker">ALLOCATIONS</div><h2>Projects you support <span>4</span></h2></div><button className="subtle-button" onClick={() => onOpenProject(projects[0])}><SlidersHorizontal size={15} /> Sort & filter</button></div>
      <div className="holdings-list">
        {owned.map((project, index) => <button className="holding-row" key={project.id} onClick={() => onOpenProject(project)}><span className={`holding-art art-${project.accent}`}><project.icon size={21} /></span><span className="holding-project"><strong>{project.name}</strong><small>{project.kind} · {project.location}</small></span><span className="holding-units"><small>YOUR ALLOCATION</small><strong>{index === 1 ? '40 units' : index === 2 ? '18 units' : '25 units'}</strong></span><span className="holding-value"><small>VALUE</small><strong>{index === 0 ? '$8,450' : index === 1 ? '$7,200' : index === 2 ? '$6,800' : '$6,000'}</strong></span><span className="holding-yield"><small>EST. YIELD</small><strong>{project.yield}</strong></span><ArrowUpRight className="holding-arrow" size={17} /></button>)}
      </div>
      <p className="table-disclaimer">Illustrative holdings and estimated figures for product demonstration only. No ownership is recorded.</p>
    </section>
  )
}

function Activity() {
  return (
    <section className="page-section enter-view">
      <PageHeading eyebrow="PORTFOLIO RECORD" title="Activity" description="Illustrative distributions and allocation events in one timeline." action={<button className="subtle-button" onClick={() => window.print()}><ArrowDownLeft size={15} /> Export</button>} />
      <div className="activity-summary"><div><span>Events this quarter</span><strong>06</strong></div><div><span>Illustrative distributions</span><strong>$384.60</strong></div><div><span>Last update</span><strong>Jun 28, 2025</strong></div></div>
      <div className="activity-panel"><div className="activity-panel-head"><div><div className="panel-kicker">RECENT EVENTS</div><h2>All activity</h2></div><button className="subtle-button" onClick={() => window.print()}><SlidersHorizontal size={15} /> Filter</button></div>
        {activity.map((item, index) => <div className="activity-row" key={`${item.title}-${index}`}><span className={`activity-icon ${item.type}`}>{item.type === 'in' ? <ArrowDownLeft size={17} /> : <ArrowUpRight size={17} />}</span><span className="activity-description"><strong>{item.title}</strong><small>{item.project}</small></span><span className="activity-date">{item.date}</span><strong className={`activity-amount ${item.type}`}>{item.amount}</strong><span className="activity-status"><i /> Recorded</span></div>)}
      </div>
      <div className="activity-footnote"><CircleHelp size={16} /><span>Events above are sample records for the demo. No transaction has been sent to a blockchain.</span></div>
    </section>
  )
}

function ProjectDetail({ project, onClose }) {
  const Icon = project.icon
  const [showPreview, setShowPreview] = useState(false)
  const [amount, setAmount] = useState('')

  const minimum = Number(project.min.replace(/[$,]/g, ''))
  const targetText = project.target.replace(/[$,]/g, '')
  const target = parseFloat(targetText) * (
    targetText.endsWith('M') ? 1000000 :
    targetText.endsWith('K') ? 1000 : 1
  )

  const contribution = Number(amount)
  const validAmount =
    amount.trim() !== '' &&
    Number.isFinite(contribution) &&
    contribution >= minimum &&
    contribution <= target

  const percentage = validAmount
    ? (contribution / target) * 100
    : 0
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <aside className="detail-drawer" role="dialog" aria-modal="true" aria-labelledby="detail-title">
        <div className="drawer-header"><span className="panel-kicker">OPPORTUNITY DETAILS</span><button className="icon-button" aria-label="Close project details" onClick={onClose}><X size={20} /></button></div>
        <div className={`drawer-art art-${project.accent}`}><div className="art-topline"><span>{project.kind.toUpperCase()}</span><span>{project.id}</span></div><div className={`art-illustration illustration-${project.kind.toLowerCase()}`}><span className="sun-disc" /><span className="landscape-line" /><span className="energy-glyph"><Icon size={35} strokeWidth={1.2} /></span></div></div>
        <div className="drawer-content"><span className="drawer-location">{project.location} <span>·</span> {project.stage}</span><h2 id="detail-title">{project.name}</h2><p className="drawer-description">{project.description}</p>
          <div className="drawer-yield"><div><span>Indicative annual yield</span><strong>{project.yield}<sup>†</sup></strong></div><div><span>Minimum allocation</span><strong>{project.min}</strong></div></div>
          <div className="drawer-funding"><div className="funding-label"><span>Funding progress</span><strong>{project.funded}%</strong></div><div className="progress-track"><span style={{ width: `${project.funded}%` }} /></div><div className="funding-amount"><span>{project.raised} raised</span><span>Target {project.target}</span></div></div>
          <div className="detail-facts"><div><span>Installed capacity</span><strong>{project.capacity}</strong></div><div><span>Est. annual generation</span><strong>{project.output}</strong></div><div><span>Illustrative term</span><strong>{project.term}</strong></div><div><span>Project ID</span><strong>{project.id}</strong></div></div>
          <div className="verification-note"><ShieldCheck size={17} /><span>Project verification and supporting documents are not connected in this prototype.</span></div>
<button
  className="primary-wide"
  onClick={() => setShowPreview((open) => !open)}
  aria-expanded={showPreview}
>
  {showPreview ? 'Cerrar simulación' : 'Simular aportación'}
  <ArrowRight size={16} />
</button>

{showPreview && (
  <section
    aria-label="Simulación de aportación"
    style={{
      marginTop: 20,
      padding: 20,
      border: '1px solid #dce3d5',
      borderRadius: 8,
      background: '#f5f7f0',
    }}
  >
    <h3>Tu aportación a {project.name}</h3>

    <label htmlFor={`amount-${project.id}`}>
      Monto de ejemplo en dólares estadounidenses (USD)
    </label>

    <input
      id={`amount-${project.id}`}
      type="number"
      min={minimum}
      max={target}
      step="0.01"
      value={amount}
      onChange={(event) => setAmount(event.target.value)}
      placeholder={`Mínimo: ${project.min}`}
      style={{
        display: 'block',
        width: '100%',
        boxSizing: 'border-box',
        marginTop: 10,
        padding: 12,
        fontSize: 16,
      }}
    />

    <div aria-live="polite">
      {amount !== '' && !validAmount && (
        <p>
          Introduce un monto entre {project.min} y {project.target} USD.
        </p>
      )}

      {validAmount && (
        <>
          <p>
            Aportación simulada:{' '}
            <strong>
              {contribution.toLocaleString('es-MX', {
                style: 'currency',
                currency: 'USD',
              })} USD
            </strong>
          </p>

          <p>
            Porcentaje respecto a la meta de financiamiento:{' '}
            <strong>
              {percentage.toLocaleString('es-MX', {
                maximumFractionDigits: 4,
              })}%
            </strong>
          </p>

          <small>
            Este cálculo compara tu monto con la meta del proyecto.
            No registra derechos ni envía una transacción.
          </small>
        </>
      )}
    </div>
  </section>
)}
          <p className="legal-note">† Illustrative figures only. Not an offer, forecast, or guarantee of return. No investment or transaction is created by this demo.</p>
        </div>
      </aside>
    </div>
  )
}

export default App
