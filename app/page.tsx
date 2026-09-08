'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, Play, Sparkles, X } from 'lucide-react'

const media = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6499%202.JPG-LOuo1XR26mn94dudzTkRttnJ2i2aLE.jpeg',
  group: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6647%202.PNG-solOiG8IYiwKyirNW0JGRqWOyZhzZu.png',
  action: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4977.JPG-O2JYdGzbM4zlTzR5HiE4mV0Du0mcz8.jpeg',
  training: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5583.JPG-oPSA6xpJZJvX7ieGgauwI0PefEYm6j.jpeg',
  afa: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AZUL3-AFA-INTERNACIONAL-F6CyzCFMMlPDVbfycN99TW6FH0wsHp.png',
  tm: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TMX03-EAooAO1aeAIX89uIBy2tHqAKWeljAY.png',
  texture: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondo%202-iokGDaKxDtliDCZDVVE58lQZuWqEZE.png',
}

const faqs = [
  ['¿Qué incluye la experiencia?', 'Entrenamientos con metodología AFA Internacional, actividades de equipo, acompañamiento profesional, kit oficial y una experiencia inolvidable.'],
  ['¿Quiénes pueden participar?', 'Niños y jóvenes apasionados por el fútbol, organizados por edades y niveles para que cada jugador tenga el reto correcto.'],
  ['¿Cómo reservo un cupo?', 'Escríbenos por WhatsApp o Instagram. Te enviaremos las fechas, disponibilidad y todo lo que necesitas para inscribirte.'],
]

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="header">
        <a className="header-brand" href="#inicio" aria-label="Camp Experience Vzla">
          <img src={media.afa} alt="AFA Internacional" />
          <span className="header-rule" />
          <img className="tm-logo" src={media.tm} alt="TMXperience" />
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Navegación principal">
          <a href="#experiencia" onClick={closeMenu}>La experiencia</a>
          <a href="#programa" onClick={closeMenu}>Programa</a>
          <a href="#contenido" onClick={closeMenu}>Contenido</a>
          <a className="nav-button" href="#contacto" onClick={closeMenu}>Inscríbete <ArrowUpRight /></a>
        </nav>
      </header>

      <section id="inicio" className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 20, 42, .96), rgba(3, 20, 42, .64) 48%, rgba(3, 20, 42, .15)), url(${media.hero})` }}>
        <div className="hero-noise" />
        <div className="hero-content frame">
          <div className="hero-kicker"><Sparkles /> Venezuela · AFA Internacional</div>
          <h1>Entrena<br /><span>como los</span><br />campeones.</h1>
          <p>La primera experiencia de fútbol en Venezuela con metodología oficial AFA Internacional.</p>
          <div className="hero-actions"><a className="button orange" href="#contacto">Quiero estar ahí <ArrowUpRight /></a><a className="hero-link" href="#experiencia">Conoce el camp <span>↓</span></a></div>
        </div>
        <div className="hero-side-note">TMXPERIENCE<br /><span>×</span> AFA INTERNACIONAL</div>
        <div className="hero-scroll">SCROLL TO PLAY <span>↓</span></div>
        <div className="hero-stars" aria-hidden="true">✦<br />✦</div>
      </section>

      <div className="ticker" aria-hidden="true"><span>FÚTBOL · AMISTAD · DISCIPLINA · EXPERIENCIA · FÚTBOL · AMISTAD · DISCIPLINA · EXPERIENCIA ·</span></div>

      <section id="experiencia" className="experience frame section-space">
        <div className="section-label">01 / LA EXPERIENCIA</div>
        <div className="experience-grid"><div><h2>Más que un<br /><i>entrenamiento.</i></h2></div><div className="experience-copy"><p className="big-copy">Un lugar para descubrir de qué estás hecho.</p><p>Camp Experience Vzla conecta la pasión del fútbol con una metodología internacional, en un ambiente diseñado para aprender, competir, compartir y crecer.</p><a className="under-link" href="#programa">Descubre la experiencia <ArrowUpRight /></a></div></div>
        <div className="experience-collage"><div className="collage-image main" style={{ backgroundImage: `url(${media.group})` }} /><div className="collage-card"><span>UNA SEMANA</span><strong>que se<br />queda contigo.</strong><div className="mini-line" /></div><div className="collage-image small" style={{ backgroundImage: `url(${media.action})` }} /></div>
      </section>

      <section id="programa" className="program-section"><div className="program-inner frame"><div className="program-photo" style={{ backgroundImage: `url(${media.training})` }}><span className="photo-tag">REAL FOOTBALL / 01</span></div><div className="program-copy"><div className="section-label blue">02 / LO QUE VAS A VIVIR</div><h2>Juega.<br /><i>Aprende.</i><br />Conecta.</h2><p>Cada día está diseñado para que salgas de la cancha siendo un jugador y una persona más completa.</p><div className="program-list"><div><b>01</b><span><strong>Metodología AFA</strong> Entrenamientos con visión internacional.</span></div><div><b>02</b><span><strong>Competencia real</strong> Retos para despertar tu mejor versión.</span></div><div><b>03</b><span><strong>Equipo para siempre</strong> Amigos, valores y momentos que permanecen.</span></div></div></div></div></section>

      <section className="proof frame"><div className="proof-number">+500</div><div><span>JUGADORES</span><strong>ya vivieron<br />la experiencia.</strong></div><div className="proof-divider" /><div className="proof-number">100%</div><div><span>ENERGÍA</span><strong>en cada<br />entrenamiento.</strong></div></section>

      <section id="contenido" className="video-section"><div className="frame"><div className="video-heading"><div><div className="section-label blue">03 / CONTENIDO REAL</div><h2>Esto no se<br /><i>cuenta.</i><br />Se vive.</h2></div><p>Momentos reales. Jugadores reales. La energía de Camp Experience en movimiento.</p></div><a className="video-card" href="https://www.instagram.com/campexperienceve/" target="_blank" rel="noreferrer" aria-label="Ver videos de Camp Experience en Instagram"><div className="video-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 35%, rgba(3,20,42,.85)), url(${media.group})` }} /><div className="play-button"><Play fill="currentColor" /></div><div className="video-caption"><span>PLAY THE EXPERIENCE</span><strong>Camp Experience<br />en acción <ArrowUpRight /></strong></div><div className="video-social"><span className="social-mark">IG</span> @campexperienceve</div></a></div></section>

      <section className="logos-section frame"><div className="section-label">04 / RESPALDO INTERNACIONAL</div><div className="logos-grid"><div><h2>El estándar<br /><i>que inspira.</i></h2><p>La pasión argentina llega a Venezuela con el respaldo de una de las instituciones futbolísticas más reconocidas del mundo.</p><a className="under-link" href="#contacto">Recibe información <ArrowUpRight /></a></div><div className="logo-lockup"><img src={media.afa} alt="AFA Internacional" /><span>METODOLOGÍA OFICIAL</span></div><div className="logo-lockup light-card"><img src={media.tm} alt="TMXperience" /><span>EXPERIENCIA VENEZUELA</span></div></div></section>

      <section className="faq-section frame"><div className="section-label">05 / PREGUNTAS FRECUENTES</div><div className="faq-grid"><h2>Todo lo que<br /><i>quieres saber.</i></h2><div className="faq-list">{faqs.map(([q, a], index) => <div className={openFaq === index ? 'faq-item active' : 'faq-item'} key={q}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{q}</span><ChevronDown /></button>{openFaq === index && <p>{a}</p>}</div>)}</div></div></section>

      <section id="contacto" className="contact" style={{ backgroundImage: `linear-gradient(105deg, rgba(3,20,42,.96), rgba(12,59,118,.78)), url(${media.texture})` }}><div className="frame contact-inner"><img src={media.afa} alt="AFA Internacional" /><div><div className="hero-kicker">Cupos limitados · Próxima edición</div><h2>Tu historia<br /><i>empieza aquí.</i></h2><a className="button orange" href="https://wa.me/584120000000" target="_blank" rel="noreferrer">Reserva tu cupo <ArrowUpRight /></a></div></div></section>

      <footer className="footer"><div className="frame footer-top"><div><a className="footer-name" href="#inicio">CAMP<span>EXPERIENCE</span></a><p>Fútbol que transforma.<br />Experiencias que quedan.</p></div><div className="footer-nav"><div><b>Explora</b><a href="#experiencia">La experiencia</a><a href="#programa">Programa</a><a href="#contenido">Contenido</a></div><div><b>Conecta</b><a href="https://www.instagram.com/campexperienceve/" target="_blank" rel="noreferrer">Instagram</a><a href="#contacto">WhatsApp</a><a href="#contacto">Contacto</a></div></div></div><div className="frame footer-bottom"><span>© 2025 Camp Experience Vzla</span><span>TMX × AFA Internacional</span></div></footer>
    </main>
  )
}
