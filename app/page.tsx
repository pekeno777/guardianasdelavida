'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  HeartHandshake,
  Menu,
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
            <button className="play-link" onClick={() => setVideoOpen(true)}><span className="play-icon"><Play size={14} fill="currentColor" /></span> Ver nuestro documental</button>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustración abstracta de cuidado y comunidad" role="img">
          <div className="art-sun" />
          <div className="art-ring ring-back" />
          <div className="art-ring ring-front" />
          <div className="art-label label-top">cuidar<br /><strong>también</strong></div>
          <div className="art-label label-bottom">es<br /><strong>acompañar</strong></div>
          <div className="art-flower flower-a">✳</div><div className="art-flower flower-b">✦</div>
        </div>
        <div className="scroll-note"><span className="scroll-line" /> Desliza para descubrir</div>
      </section>

      <section id="proyecto" className="story-section section-pad">
        <div className="section-kicker">01 / El punto de partida</div>
        <div className="story-grid">
          <div><h2>¿Qué pasa cuando una iniciativa importante <span>no tiene suficiente visibilidad?</span></h2></div>
          <div className="story-text"><p>En nuestra institución existen proyectos que realizan actividades importantes para el bienestar de las estudiantes, pero que no siempre son conocidos por toda la comunidad.</p><p>Por eso, decidimos trabajar en una estrategia de comunicación que le diera mayor visibilidad a <strong>Guardianas de la Vida.</strong></p></div>
        </div>
        <div className="values-row"><div><b>01</b><span>cuidar</span></div><div><b>02</b><span>escuchar</span></div><div><b>03</b><span>acompañar</span></div></div>
      </section>

      <section id="estrategias" className="initiative-section section-pad">
        <div className="section-kicker light">02 / La iniciativa</div>
        <div className="initiative-heading"><h2>Una red que<br /><i>se hace visible.</i></h2><p>Guardianas de la Vida busca promover el cuidado de la vida y el bienestar de la comunidad educativa mediante actividades de sensibilización, acompañamiento y reflexión.</p></div>
        <div className="strategy-cards"><article><span>01</span><Sparkles /><h3>Sensibilizar</h3><p>Abrir conversaciones que nos acerquen y nos permitan mirar al otro con empatía.</p></article><article><span>02</span><HeartHandshake /><h3>Acompañar</h3><p>Construir espacios seguros donde cada voz pueda ser escuchada.</p></article><article><span>03</span><ArrowUpRight /><h3>Comunicar</h3><p>Llevar el mensaje de cuidado más lejos, a través de historias que conectan.</p></article></div>
      </section>

      <section id="evidencias" className="evidence-section section-pad">
        <div className="section-kicker">03 / Campaña 360</div>
        <div className="evidence-heading"><h2>Comunicar<br /><span>también es cuidar.</span></h2><p>Creamos una estrategia de comunicación integral utilizando herramientas digitales, contenido audiovisual y material gráfico para llegar a más estudiantes y fortalecer el mensaje de cuidado y apoyo.</p></div>
        <div className="evidence-grid"><div className="evidence-card card-purple"><div className="card-number">01</div><h3>Contenido<br /><em>digital</em></h3><span className="card-arrow">↗</span></div><div className="evidence-card card-yellow"><div className="card-number">02</div><h3>Material<br /><em>gráfico</em></h3><span className="card-arrow">↗</span></div><div className="evidence-card card-pink"><div className="card-number">03</div><h3>Voces que<br /><em>inspiran</em></h3><span className="card-arrow">↗</span></div></div>
      </section>

      <section id="documental" className="documentary section-pad"><div className="doc-scribble">MIRA<br />Y ESCUCHA</div><div><div className="section-kicker light">04 / Nuestro documental</div><h2>Historias que<br /><i>dejan huella.</i></h2><p>Este documental muestra el proceso, las actividades y voces de quienes hacen parte de Guardianas de la Vida.</p><button className="documentary-button" onClick={() => setVideoOpen(true)}><span><Play size={16} fill="currentColor" /></span> Ver documental</button></div><div className="doc-sticker">PLAY<br /><small>▶</small></div></section>

      <footer className="site-footer section-pad"><div className="footer-brand"><span className="brand-mark"><HeartHandshake size={18} /></span><strong>Guardianas<br />de la Vida</strong></div><div><p>Proyecto SENA · Campaña 360</p><p className="muted">Una iniciativa para cuidar nuestra comunidad.</p></div><div className="footer-team"><p>Integrantes</p><span>{team.join(' · ')}</span></div><span className="footer-year">2024 ↗</span></footer>

      {videoOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Documental Guardianas de la Vida" onClick={() => setVideoOpen(false)}><div className="video-modal" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setVideoOpen(false)} aria-label="Cerrar documental"><X /></button><div className="video-placeholder"><Play size={35} fill="currentColor" /><p>El documental de Guardianas de la Vida</p><small>Contenido audiovisual próximamente</small></div></div></div>}
    </main>
  )
}
