const features = [
  {
    icon: '⚡️',
    title: 'Smart Flow Optimization',
    description: 'Adaptive intelligence balances pressure and demand in real time to reduce energy consumption by up to 38%.',
    points: ['Dynamic sensor feedback loop', 'Predictive maintenance alerts', '24/7 remote monitoring dashboard']
  },
  {
    icon: '🌊',
    title: 'Self-Priming Hydraulics',
    description: 'Built-in vortex priming chamber delivers instant start performance even with fluctuating fluid levels.',
    points: ['Zero-cavitation impeller design', 'Corrosion-resistant housing', 'Rapid purge auto-cycle']
  },
  {
    icon: '🔒',
    title: 'Industrial-Grade Reliability',
    description: 'Aerospace alloys, IP68 sealing, and redundant pressure failsafes keep AquaPulse online in any environment.',
    points: ['Certified for -30°F to 140°F climates', 'Ingress protection with dual seals', 'Failover power module ready']
  }
];

const metrics = [
  { value: '38%', label: 'Energy Reduction', detail: 'Verified average savings across industrial deployments.' },
  { value: '99.97%', label: 'Uptime Guarantee', detail: 'Backed by proactive monitoring and auto-failover modules.' },
  { value: '12 hrs', label: 'Deployment Time', detail: 'Rapid-fit skid mounting with turnkey installation kits.' }
];

const industries = [
  {
    title: 'Precision Agriculture',
    description: 'Moisture-responsive irrigation with remote zoning for orchards, vineyards, and smart farms.'
  },
  {
    title: 'Smart Cities',
    description: 'On-demand water distribution for cooling towers, public works, and emergency reserves.'
  },
  {
    title: 'Hospitality',
    description: 'Silent pressure regulation guarantees premium guest comfort in luxury resorts and hotels.'
  },
  {
    title: 'Industrial Cooling',
    description: 'Closed-loop thermal systems pushing 480 GPM with precise delta-T management.'
  }
];

const testimonials = [
  {
    quote: 'AquaPulse cut our pumping energy by more than a third while delivering steadier pressure than any system we have ever run.',
    author: 'Lena Ortiz',
    role: 'Facilities Director, NorthRiver Logistics'
  },
  {
    quote: 'The predictive maintenance suite flagged a bearing issue days before failure. Zero downtime, zero guesswork.',
    author: 'Miles Tan',
    role: 'Operations Manager, Skyline Aquatics'
  },
  {
    quote: 'Our growers get gallon-by-gallon precision from anywhere. AquaPulse paid for itself in the first season.',
    author: 'Priya Sharma',
    role: 'CTO, TerraGrow Farms'
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <nav>
        <div className="logo">
          <span className="logo-icon">AQ</span>
          <span>AquaPulse Systems</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#platform">Platform</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Book a Demo</a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="section-label">Next-Generation Water Delivery</p>
          <h1>Smart Pumping That Powers Precision, Efficiency, and Resilience</h1>
          <p>
            AquaPulse combines AI-driven flow modulation with rugged hardware to deliver consistent pressure, clean data, and reliable uptime for mission-critical water systems.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">Schedule an Engineering Call</a>
            <a className="button-secondary" href="#platform">Explore the Platform</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="pump-shell">
            <div className="pump-core" />
          </div>
        </div>
      </section>

      <div className="badge-strip">
        <span>Trusted by over 180 industrial partners</span>
        <span>ISO 9901 &amp; IP68 certified</span>
        <span>24/7 Network Operations Center</span>
      </div>

      <section className="section" id="features">
        <div className="section-header">
          <p className="section-label">Core Advantages</p>
          <h2 className="section-title">Reinventing Hydraulic Intelligence</h2>
          <p className="section-subtitle">An integrated platform that senses, adapts, and delivers precise flow control across every demand scenario.</p>
        </div>
        <div className="card-grid">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <div className="icon-circle">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="platform">
        <div className="showcase">
          <div className="showcase-diagram">
            <p className="diagram-title">Integrated Control Stack</p>
            <p>
              The AquaPulse Nexus OS connects sensors, analytics, and remote operations into a single command console for engineering teams.
            </p>
            <div className="diagram-grid">
              <div className="diagram-card">
                <span>01 · Sensor Ring</span>
                <strong>High-Fidelity Intake</strong>
                <p>Hydrostatic pressure, vibration, and flow velocity sensors sample at 2000Hz for precise feedback.</p>
              </div>
              <div className="diagram-card">
                <span>02 · Intelligence</span>
                <strong>Nexus Core AI</strong>
                <p>Predictive algorithms adjust impeller speed to match real-time demand patterns and reduce waste.</p>
              </div>
              <div className="diagram-card">
                <span>03 · Remote Ops</span>
                <strong>Command Center</strong>
                <p>Encrypted cloud dashboards provide alerts, scenario simulations, and digital twins for every pump.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="section-header" style={{ textAlign: 'left', margin: 0 }}>
              <p className="section-label">Measured Impact</p>
              <h2 className="section-title">Operational Outcomes Your Team Can Prove</h2>
              <p className="section-subtitle">
                Deploy a pumping network that pays for itself with energy savings, uptime, and actionable intelligence.
              </p>
            </div>
            <div className="metrics">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <p>{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="section-header">
          <p className="section-label">Industry Ready</p>
          <h2 className="section-title">Configured for Every Water Mission</h2>
          <p className="section-subtitle">Modular, ruggedized systems engineered to match the demands of your application.</p>
        </div>
        <div className="industries">
          {industries.map((industry) => (
            <div key={industry.title} className="industry">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="stories">
        <div className="section-header">
          <p className="section-label">Customer Stories</p>
          <h2 className="section-title">Field-Proven Across Continents</h2>
          <p className="section-subtitle">Leading operators trust AquaPulse to keep their water systems online, efficient, and accountable.</p>
        </div>
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial">
              <p>{testimonial.quote}</p>
              <footer>
                {testimonial.author}
                <br />
                <small>{testimonial.role}</small>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="cta">
          <h2>Launch AquaPulse at Your Facility</h2>
          <p>
            Submit your specs for a tailored system blueprint within 48 hours. Our engineering team will design a deployment calibrated to your flow, pressure, and compliance requirements.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a className="button-primary" href="mailto:hello@aquapulse.io">Request a Blueprint</a>
            <a className="button-secondary" href="#">Download Product Sheet</a>
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} AquaPulse Systems. All rights reserved.</span>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
