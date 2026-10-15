import './HomePage.css'

const services = [
  {
    number: '01',
    title: 'Desarrollo web',
    description:
      'Sitios y aplicaciones rápidas, intuitivas y preparadas para crecer junto a tu negocio.',
    icon: '↗',
  },
  {
    number: '02',
    title: 'Automatización',
    description:
      'Conectamos tus herramientas y simplificamos tareas para que tu equipo se enfoque en lo importante.',
    icon: '⟳',
  },
  {
    number: '03',
    title: 'Estrategia digital',
    description:
      'Convertimos tus objetivos en un plan tecnológico claro, medible y hecho a tu medida.',
    icon: '✳',
  },
]

function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="omggsolutions, inicio">
          <span className="brand-mark" aria-hidden="true">
            o.
          </span>
          <span>
            omgg<span className="brand-light">solutions</span>
          </span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href="#contacto">
          Hablemos <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            TECNOLOGÍA CON PROPÓSITO
          </p>
          <h1>
            Ideas brillantes.
            <br />
            <span>Soluciones</span> que
            <br />
            mueven tu negocio.
          </h1>
          <p className="hero-description">
            Diseñamos experiencias digitales y tecnología a la medida para
            transformar tus retos en nuevas oportunidades.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">
              Hagamos que pase <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#servicios">
              Explora lo que hacemos <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note">
            <div className="avatar-stack" aria-hidden="true">
              <span>O</span>
              <span>M</span>
              <span>G</span>
            </div>
            <p>
              Un equipo cercano.
              <br />
              Resultados que se notan.
            </p>
          </div>
        </div>

        <div className="hero-art" aria-label="Panel de soluciones digitales">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✦</div>
          <div className="dashboard-card">
            <div className="dashboard-top">
              <div className="dashboard-brand">
                <span className="mini-mark">o.</span>
                <span>Tu negocio, en movimiento</span>
              </div>
              <span className="dashboard-menu">•••</span>
            </div>
            <div className="dashboard-body">
              <p className="dashboard-label">PANORAMA GENERAL</p>
              <div className="dashboard-heading">
                <div>
                  <p className="dashboard-title">Todo conectado.</p>
                  <p className="dashboard-subtitle">Una mejor forma de avanzar.</p>
                </div>
                <span className="dashboard-arrow">↗</span>
              </div>
              <div className="chart">
                <div className="chart-grid">
                  <span />
                  <span />
                  <span />
                </div>
                <svg
                  className="chart-line"
                  viewBox="0 0 440 130"
                  role="presentation"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c5f469" stopOpacity=".32" />
                      <stop offset="100%" stopColor="#c5f469" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 105 C35 98 40 74 78 81 S125 98 156 68 S210 86 242 53 S294 71 325 38 S375 57 403 21 S428 30 440 8 V130 H0 Z"
                    fill="url(#chart-fill)"
                  />
                  <path
                    d="M0 105 C35 98 40 74 78 81 S125 98 156 68 S210 86 242 53 S294 71 325 38 S375 57 403 21 S428 30 440 8"
                    fill="none"
                    stroke="#c5f469"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                  <circle cx="403" cy="21" r="5" fill="#c5f469" />
                </svg>
              </div>
              <div className="dashboard-footer">
                <span>Progreso constante</span>
                <span className="progress-pill">+ crecimiento</span>
              </div>
            </div>
          </div>
          <div className="floating-card floating-top">
            <span className="floating-icon">✦</span>
            <span>Ideas que conectan</span>
          </div>
          <div className="floating-card floating-bottom">
            <span className="floating-check">✓</span>
            <span>
              <strong>Menos fricción</strong>
              <small>Más tiempo para crecer</small>
            </span>
          </div>
          <span className="art-caption">ESTRATEGIA + TECNOLOGÍA</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Nuestro enfoque">
        <p>TECNOLOGÍA QUE TRABAJA PARA TI</p>
        <div className="trust-items">
          <span>Hecho a tu medida</span>
          <span>Simple por diseño</span>
          <span>Listo para crecer</span>
        </div>
      </section>

      <section className="services section-shell" id="servicios">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LO QUE HACEMOS</p>
            <h2>
              El siguiente paso
              <br />
              empieza <span>aquí.</span>
            </h2>
          </div>
          <p className="section-intro">
            Combinamos creatividad, estrategia y tecnología para crear
            herramientas que hacen una diferencia real en el día a día.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-icon" aria-hidden="true">
                  {service.icon}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contacto" aria-label={`Conoce más: ${service.title}`}>
                Conoce más <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="nosotros">
        <div className="about-inner">
          <div className="about-visual">
            <span className="about-orbit orbit-large" />
            <span className="about-orbit orbit-small" />
            <span className="about-star">✳</span>
            <div className="about-stamp">
              <span>GENTE +</span>
              <strong>IDEAS</strong>
              <span>+ TECNOLOGÍA</span>
            </div>
            <span className="about-coordinate">25° 41&apos; N / 100° 18&apos; W</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">SOMOS omggsolutions</p>
            <h2>
              La tecnología
              <br />
              debe sentirse
              <br />
              <span>como un sí.</span>
            </h2>
            <p>
              Creemos que las mejores soluciones no son las más complicadas,
              sino las que hacen que todo fluya mejor. Escuchamos, proponemos y
              construimos contigo, de principio a fin.
            </p>
            <a className="text-link about-link" href="#contacto">
              Así podemos ayudarte <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contact section-shell" id="contacto">
        <div className="contact-content">
          <p className="eyebrow">¿QUÉ SIGUE?</p>
          <h2>
            Tu próxima gran
            <br />
            idea <span>empieza aquí.</span>
          </h2>
          <p>
            Cuéntanos qué quieres lograr. Nos encantará pensar contigo en el
            siguiente paso.
          </p>
          <a className="button button-primary" href="mailto:hola@omggsolutions.com">
            Escríbenos <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-decoration" aria-hidden="true">
          <span className="contact-ring ring-one" />
          <span className="contact-ring ring-two" />
          <span className="contact-cross">✳</span>
          <span className="contact-dot" />
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">
            o.
          </span>
          <span>
            omgg<span className="brand-light">solutions</span>
          </span>
        </a>
        <p>Ideas que conectan. Soluciones que impulsan.</p>
        <span className="copyright">© {new Date().getFullYear()} omggsolutions</span>
      </footer>
    </main>
  )
}

export default HomePage
