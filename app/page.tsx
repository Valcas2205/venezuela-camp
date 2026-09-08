'use client'

import { useState } from 'react'

const assets = {
  hero: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6499%202.JPG-LOuo1XR26mn94dudzTkRttnJ2i2aLE.jpeg',
  group: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6647%202.PNG-solOiG8IYiwKyirNW0JGRqWOyZhzZu.png',
  action: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4977.JPG-O2JYdGzbM4zlTzR5HiE4mV0Du0mcz8.jpeg',
  training: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5583.JPG-oPSA6xpJZJvX7ieGgauwI0PefEYm6j.jpeg',
  afa: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AZUL3-AFA-INTERNACIONAL-F6CyzCFMMlPDVbfycN99TW6FH0wsHp.png',
  tm: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TMX03-EAooAO1aeAIX89uIBy2tHqAKWeljAY.png',
  texture: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondo%202-iokGDaKxDtliDCZDVVE58lQZuWqEZE.png',
}

const faqs = [
  ['¿Qué incluye la experiencia?', 'Una semana de entrenamiento, actividades de equipo, acompañamiento profesional, kit oficial y una experiencia internacional inolvidable.'],
  ['¿Quiénes pueden participar?', 'Niños y jóvenes apasionados por el fútbol, con grupos organizados por edad y nivel de experiencia.'],
  ['¿Dónde se realiza?', 'En instalaciones deportivas seleccionadas en Venezuela, con espacios ideales para entrenar, competir y compartir.'],
  ['¿Cómo puedo reservar un cupo?', 'Escríbenos por WhatsApp. Nuestro equipo te enviará disponibilidad, fechas y el proceso de inscripción.'],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Camp Experience Venezuela">
          <img src={assets.afa} alt="AFA Internacional" />
          <span className="brand-divider" />
          <span className="brand-type">CAMP<br /><strong>EXPERIENCE</strong></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>☰</button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>La experiencia</a>
          <a href="#programa" onClick={() => setMenuOpen(false)}>Programa</a>
          <a href="#galeria" onClick={() => setMenuOpen(false)}>Galería</a>
          <a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Reserva tu cupo <Arrow /></a>
        </nav>
      </header>

      <section id="inicio" className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(7, 26, 52, .93) 0%, rgba(7, 31, 67, .7) 43%, rgba(7, 20, 40, .12) 100%), url(${assets.hero})` }}>
        <div className="hero-content wrap">
          <p className="eyebrow light">Venezuela · Fútbol · Experiencias</p>
          <h1>El fútbol que<br /><em>te transforma.</em></h1>
          <p className="hero-copy">Una experiencia de alto nivel para vivir, entrenar y crecer dentro y fuera de la cancha.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contacto">Quiero vivirlo <Arrow /></a><a className="text-link" href="#experiencia">Conoce el camp <span>↓</span></a></div>
        </div>
        <div className="hero-bottom wrap"><span>TMXPERIENCE × AFA INTERNACIONAL</span><span className="scroll-label">DESLIZA PARA EXPLORAR ↓</span></div>
      </section>

      <section className="intro wrap" id="experiencia">
        <div className="section-kicker">01 / LA EXPERIENCIA</div>
        <div className="intro-grid"><h2>No es solo<br /><span>un camp.</span></h2><div><p className="lead">Es el lugar donde la pasión se convierte en recuerdos, disciplina y nuevas amistades.</p><p>Camp Experience Vzla une la metodología de la Asociación del Fútbol Argentino con la energía única de nuestro país. Entrena como un profesional, comparte como un equipo y vuelve a casa con una historia que contar.</p><a className="dark-link" href="#programa">Descubre la experiencia <Arrow /></a></div></div>
      </section>

      <section className="feature-band" id="programa">
        <div className="wrap feature-grid"><div className="feature-photo" style={{ backgroundImage: `url(${assets.group})` }} /><div className="feature-copy"><div className="section-kicker light">02 / LO QUE VAS A VIVIR</div><h2>Una semana.<br /><span>Una nueva versión de ti.</span></h2><div className="feature-list"><article><b>01</b><div><h3>Entrenamiento AFA</h3><p>Sesiones con metodología internacional, lideradas por coaches especializados.</p></div></article><article><b>02</b><div><h3>Competencia y juego</h3><p>Desafíos que despiertan tu mejor versión y hacen equipo de verdad.</p></div></article><article><b>03</b><div><h3>Momentos que quedan</h3><p>Actividades, amigos y experiencias que van mucho más allá de la cancha.</p></div></article></div></div></div>
      </section>

      <section className="stats wrap"><div><strong>+500</strong><span>jugadores<br />impactados</span></div><div><strong>100%</strong><span>pasión<br />por el fútbol</span></div><div><strong>1</strong><span>experiencia<br />inolvidable</span></div></section>

      <section className="split-section wrap"><div className="split-copy"><div className="section-kicker">03 / RESPALDO INTERNACIONAL</div><h2>El estándar<br /><span>que inspira.</span></h2><p>La experiencia cuenta con el respaldo de AFA Internacional, una de las instituciones futbolísticas más reconocidas del mundo. La pasión argentina llega a Venezuela para formar, motivar y conectar.</p><a className="dark-link" href="#contacto">Quiero recibir información <Arrow /></a></div><div className="logo-card"><img src={assets.afa} alt="AFA Internacional" /><span>METODOLOGÍA OFICIAL</span></div></section>

      <section className="gallery" id="galeria"><div className="gallery-heading wrap"><div><div className="section-kicker light">04 / DENTRO DEL CAMP</div><h2>La energía<br /><em>se vive.</em></h2></div><p>Entrenamiento, emoción y fútbol real. Mira lo que pasa cuando todos juegan por algo más.</p></div><div className="gallery-grid"><div className="gallery-tall" style={{ backgroundImage: `url(${assets.action})` }} /><div className="gallery-wide" style={{ backgroundImage: `url(${assets.training})` }} /><div className="gallery-square" style={{ backgroundImage: `url(${assets.group})` }} /></div></section>

      <section className="faq-section wrap"><div className="section-kicker">05 / PREGUNTAS FRECUENTES</div><div className="faq-grid"><h2>Todo lo que<br /><span>quieres saber.</span></h2><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? 'faq-item active' : 'faq-item'} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><b>{openFaq === index ? '−' : '+'}</b></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

      <section className="contact-cta" id="contacto" style={{ backgroundImage: `linear-gradient(90deg, rgba(7, 25, 50, .92), rgba(12, 50, 102, .72)), url(${assets.texture})` }}><div className="wrap cta-inner"><img src={assets.tm} alt="TMXperience" /><div><p className="eyebrow light">Cupos limitados · Próxima edición</p><h2>Tu próxima gran<br /><em>historia empieza aquí.</em></h2><a className="button button-primary" href="https://wa.me/584120000000" target="_blank" rel="noreferrer">Reserva tu cupo <Arrow /></a></div></div></section>

      <footer className="site-footer"><div className="wrap footer-top"><div><a className="footer-brand" href="#inicio">CAMP<span>EXPERIENCE</span></a><p>Fútbol que transforma.<br />Experiencias que quedan.</p></div><div className="footer-links"><div><b>Explora</b><a href="#experiencia">La experiencia</a><a href="#programa">Programa</a><a href="#galeria">Galería</a></div><div><b>Conecta</b><a href="#contacto">WhatsApp</a><a href="#contacto">Instagram</a><a href="#contacto">Contacto</a></div></div></div><div className="wrap footer-bottom"><span>© 2025 Camp Experience Vzla</span><span>Una experiencia TMX × AFA Internacional</span></div></footer>
    </main>
  )
}
