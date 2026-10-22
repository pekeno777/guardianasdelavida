'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  HeartHandshake,
  Menu,
  Megaphone,
  Play,
  Sparkles,
  X,
} from 'lucide-react'

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyecto', label: 'Proyecto' },
  { id: 'estrategias', label: 'Estrategias' },
  { id: 'evidencias', label: 'Evidencias' },
]

const team = ['Valery Arzusa', 'Camila Bolaño', 'Valery Colpas', 'Maria Jose Jacome', 'Gehisy Rivera']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Guardianas de la Vida, inicio">
          <span className="brand-mark"><HeartHandshake size={18} strokeWidth={2.5} /></span>
          <span><strong>GUARDIANAS</strong><small>DE LA VIDA</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navegación principal">
          {sections.map((section) => <a key={section.id} href={`#${section.id}`} onClick={() => setMenuOpen(false)}>{section.label}</a>)}
          <a className="nav-cta" href="#documental" onClick={() => setMenuOpen(false)}>Ver documental <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="inicio" className="hero section-pad">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Campaña 360 · SENA</p>
          <h1>Tu próxima gran <em>curiosidad</em> empieza aquí.</h1>
          <p className="hero-lede">Una iniciativa para cuidar, escuchar y acompañar a nuestra comunidad educativa.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#proyecto">Conoce el proyecto <ArrowDown size={17} /></a>
          </div>
        </div>
        <div className="hero-art hero-photo" aria-label="Tres estudiantes abrazadas y unidas en el patio escolar" role="img">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7XyAE18StPLHGHHcPAoRXVQrdlGLcK.png" alt="Tres estudiantes abrazadas de espaldas, unidas frente a un jardín" />
          <div className="photo-badge"><HeartHandshake /> <span>Cuidarnos<br /><strong>es estar juntas</strong></span></div>
        </div>
      </section>

      <section id="proyecto" className="story-section section-pad">
        <div className="story-grid-new">
          <div className="story-left">
            <h2>¿Qué pasa cuando una iniciativa importante <span>no tiene suficiente visibilidad?</span></h2>
            <div className="story-text">
              <p>En nuestra institución existen proyectos que realizan actividades importantes para el bienestar de las estudiantes, pero que no siempre son conocidos por toda la comunidad.</p>
              <p>Por eso, decidimos trabajar en una estrategia de comunicación que le diera mayor visibilidad a <strong>Guardianas de la Vida.</strong></p>
            </div>
          </div>
          <div className="story-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80"
              alt="Estudiantes compartiendo y apoyándose mutuamente"
              className="story-side-img"
            />
          </div>
        </div>
      </section>

      <section id="estrategias" className="initiative-section section-pad">
        <div className="initiative-heading">
          <div><h2>Guardianas de<br /><i>la vida</i></h2></div>
          <p>Guardianas de la Vida busca promover el cuidado de la vida y el bienestar de la comunidad educativa mediante actividades de sensibilización, acompañamiento y reflexión.</p>
          <img className="initiative-emblem" src="/guardianas-emblema.png" alt="Escudo con una flor sostenido por dos manos, símbolo de protección y crecimiento" />
        </div>
        <div className="strategy-cards">
          <article><div className="card-top"><span>01</span><Sparkles /></div><div className="strategy-image image-sensibilizar"><Sparkles /></div><h3>Cuidar</h3><p>Proteger nuestro bienestar</p></article>
          <article><div className="card-top"><span>02</span><HeartHandshake /></div><div className="strategy-image image-acompanar"><HeartHandshake /></div><h3>Escuchar</h3><p>Dar espacio a cada voz</p></article>
          <article><div className="card-top"><span>03</span><Megaphone /></div><div className="strategy-image image-comunicar"><Megaphone /></div><h3>Acompañar</h3><p>Estar presentes siempre</p></article>
        </div>
      </section>

      <section id="campana" className="evidence-section section-pad">
        <div className="section-kicker">03 / Campaña 360</div>
        <div className="evidence-heading"><h2>Comunicar<br /><span>también es cuidar.</span></h2><p>Creamos una estrategia de comunicación integral utilizando herramientas digitales, contenido audiovisual y material gráfico para llegar a más estudiantes y fortalecer el mensaje de cuidado y apoyo.</p></div>
      </section>

      {/* ── SECCIÓN: EVIDENCIAS ── */}
      <section id="evidencias" className="gallery-section section-pad">
        <div className="section-kicker gallery-kicker">Evidencias del proyecto</div>
        <div className="gallery-heading">
          <h2>Fotografías y<br /><span>recursos del proyecto.</span></h2>
          <p>Aquí puedes encontrar las fotografías y demás recursos de nuestro proyecto. Accede a nuestra carpeta compartida con todo el registro y material generado.</p>
        </div>
        <div className="gallery-cta-wrap">
          <a
            href="https://drive.google.com/drive/folders/1YvuTwSMRK4G-D1Poefhe6M-pSXI0gFkQ"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-drive-btn"
          >
            <span className="gallery-drive-icon">
              <ArrowUpRight size={18} />
            </span>
            Entrar a la carpeta de evidencias
          </a>
        </div>
      </section>

      <section id="documental" className="documentary section-pad">
        <div className="documentary-info">
          <div className="section-kicker light">04 / Nuestro documental</div>
          <h2>Historias que<br /><i>dejan huella.</i></h2>
          <p>Este documental muestra el proceso, las actividades y voces de quienes hacen parte de Guardianas de la Vida.</p>
          <div className="documentary-actions">
            <button className="documentary-button" onClick={() => setVideoOpen(true)}>
              <span><Play size={16} fill="currentColor" /></span> Ver en pantalla completa
            </button>
            <a
              href="https://drive.google.com/file/d/15YLeN3aSmZThyXBUHWOTWIXspsIY-hFm/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="documentary-drive-link"
            >
              Abrir en Drive <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="documentary-player-wrap">
          <iframe
            src="https://drive.google.com/file/d/15YLeN3aSmZThyXBUHWOTWIXspsIY-hFm/preview"
            className="documentary-iframe"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Documental Guardianas de la Vida"
          />
        </div>
      </section>

      <footer className="site-footer section-pad"><div className="footer-brand"><span className="brand-mark"><HeartHandshake size={18} /></span><strong>Guardianas<br />de la Vida</strong></div><div><p>Proyecto SENA · Campaña 360</p><p className="muted">Una iniciativa para cuidar nuestra comunidad.</p></div><div className="footer-team"><p>Integrantes</p><span>{team.join(' · ')}</span></div></footer>

      {videoOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Documental Guardianas de la Vida" onClick={() => setVideoOpen(false)}>
          <div className="video-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setVideoOpen(false)} aria-label="Cerrar documental"><X /></button>
            <div className="video-player-wrap">
              <iframe
                src="https://drive.google.com/file/d/15YLeN3aSmZThyXBUHWOTWIXspsIY-hFm/preview"
                className="video-iframe"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Documental Guardianas de la Vida"
              />
            </div>
            <div className="video-modal-footer">
              <div className="video-modal-title">
                <strong>Documental · Guardianas de la Vida</strong>
                <small>Campaña 360 · SENA</small>
              </div>
              <a
                href="https://drive.google.com/file/d/15YLeN3aSmZThyXBUHWOTWIXspsIY-hFm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-drive-btn"
              >
                Abrir en Google Drive <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
