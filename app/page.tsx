'use client'

import { FormEvent, useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Camera,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react'

const projects = [
  {
    title: 'Двор на къща',
    tag: 'Цялостно озеленяване',
    description: 'Нова тревна площ, сезонни цветя и естествена каменна пътека за уютен семеен двор.',
    details: 'Подготвихме терена, подобрихме почвата и обособихме нова тревна площ с устойчиви растения. Добавихме естествена каменна пътека и сезонни акценти, за да стане дворът по-уютен и лесен за поддръжка.',
    work: ['Почистване и подготовка на терена', 'Полагане и оформяне на тревна площ', 'Засаждане на сезонни цветя и храсти'],
    image: '/images/project-house-garden.png',
  },
  {
    title: 'Вътрешен двор на блок',
    tag: 'Поддръжка и освежаване',
    description: 'Подрязване на храсти, оформяне на зелени зони и повече цвят в общото пространство.',
    details: 'Освежихме общия вътрешен двор и го превърнахме в по-подредено и приветливо място за живущите. Оформихме зелените зони, почистихме растителността и добавихме сезонен цвят.',
    work: ['Подрязване и оформяне на храсти', 'Почистване на общите зелени площи', 'Сезонно засаждане и освежаване'],
    image: '/images/project-courtyard.jpg',
  },
  {
    title: 'Офис пространство',
    tag: 'Зелена среда',
    description: 'Подбрани растения и свежи композиции, които носят спокойствие и характер на офиса.',
    details: 'Подбрахме непретенциозни растения според светлината и ритъма на офиса. Създадохме зелени композиции за рецепцията и работните зони, които подобряват усещането за пространство без да пречат на ежедневната работа.',
    work: ['Оглед на помещенията и светлината', 'Подбор и аранжиране на растения', 'План за регулярна грижа'],
    image: '/images/project-office.jpg',
  },
  {
    title: 'Градина за отдих',
    tag: 'Сезонна грижа',
    description: 'Редовна грижа за тревата, растенията и малките детайли, които правят градината жива.',
    details: 'Създадохме сезонен план за поддръжка на градина за отдих. Следим тревата, декоративните растения и малките детайли, за да изглежда пространството добре през всеки сезон.',
    work: ['Косене и подхранване на тревата', 'Грижа за декоративни растения', 'Сезонно почистване и оформяне'],
    image: '/images/project-relax-garden.jpg',
  },
]

const services = [
  ['Поддръжка на дворове', 'Косене, подрязване, почистване и сезонна грижа за всяко зелено пространство.'],
  ['Озеленяване', 'Проектиране и изграждане на хармонични градини, съобразени с мястото и вас.'],
  ['Грижа за растенията', 'Засаждане, торене и професионални съвети за здрави и красиви растения.'],
]

const pestHighlights = [
  ['Листни въшки', 'Дребни насекоми, които смучат сок от младите листа и връхчета.', 'listni-vashki'],
  ['Голи охлюви', 'Нощни вредители, които оставят дупки по листата и лигави следи.', 'goli-ohlyuvi'],
  ['Буксов молец', 'Гъсеници, които могат бързо да обезлистят чимшировия жив плет.', 'buksov-molets'],
]

const pestImage = 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=85'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null)

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px' },
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="ЗеленоВкъщи начало">
            <span className="brand-mark" aria-hidden="true"><Leaf /></span><span className="brand-name">Зелено<span>Вкъщи</span></span>
          </a>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Затвори менюто' : 'Отвори менюто'} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Основна навигация">
            <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>За нас</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Проекти</a>
            <a href="/vrediteli" onClick={() => setMenuOpen(false)}>Вредители</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Контакти</a>
            <a className="nav-phone" href="tel:+359888123456" onClick={() => setMenuOpen(false)}><Phone aria-hidden="true" /> +359 888 123 456</a>
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Поискайте оглед <ArrowRight aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles aria-hidden="true" /> Природа, създадена с грижа</p>
            <h1>Вашето зелено<br /><em>място за живот.</em></h1>
            <p className="hero-text">Поддържаме, проектираме и създаваме пространства, в които природата се чувства у дома — а вие се чувствате добре.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Започнете проект <ArrowRight aria-hidden="true" /></a>
              <a className="text-link" href="#projects">Вижте нашата работа <ChevronDown aria-hidden="true" /></a>
            </div>
            <div className="hero-note"><span className="avatar-stack"><i /><i /><i /></span><span>Доверие ��т над <strong>120 клиента</strong></span></div>
            <div className="hero-stats" aria-label="Нашият опит">
              <div><strong>10+</strong><span>години опит</span></div>
              <div><strong>200+</strong><span>обекта</span></div>
              <div><strong>100%</strong><span>грижа</span></div>
            </div>

          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85" alt="Слънчева зелена градина с декоративни треви" /></div>
            <div className="floating-card"><span className="floating-icon"><Leaf aria-hidden="true" /></span><span><strong>Живи пространства</strong><small>Естествено. Красиво. Ваше.</small></span></div>
            <span className="sun-stamp">100%<small>естествена<br />грижа</small></span>
          </div>
        </div>
      </section>

      <section className="service-area" aria-label="Райони на обслужване" data-reveal>
        <div className="container service-area-inner">
          <div>
            <p className="service-area-label">Райони на обслужване</p>
            <h2>Зелени услуги<br />близо до вас.</h2>
            <p className="service-area-text">Работим в София и околността. Всяко посещение се потвърждава предварително според адреса и случая.</p>
          </div>
          <div className="area-pills" aria-label="Обслужвани райони">
            {['София', 'Бояна', 'Драгалевци', 'Симеоново', 'Витоша'].map(area => <span key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section id="services" className="services section-padding" data-reveal>
        <div className="container">
          <div className="section-heading"><div><p className="eyebrow">Какво правим</p><h2>Зеленото е<br /><em>нашата стихия.</em></h2></div><p>От първата идея до последното листо — ние се грижим вашето пространство да изглежда и да се усеща прекрасно.</p></div>
          <div className="service-grid">{services.map(([title, text], index) => <article data-reveal className={index === 1 ? 'service-card service-card-featured' : 'service-card'} key={title}><span className="service-number">0{index + 1}</span><span className="service-icon"><Leaf aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p><a href={`/uslugi/${index === 0 ? 'poddrushka-na-dvorove' : index === 1 ? 'ozelenyavane' : 'grizha-za-rasteniyata'}`}>Научете повече <ArrowRight aria-hidden="true" /></a></article>)}</div>
        </div>
      </section>

      <section id="about" className="about section-padding" data-reveal>
        <div className="container about-grid"><div className="about-image"><img src="https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=85" alt="Ръце, които се грижат за зелено растение" /><span className="about-badge">От 2016<br /><small>с любов към земята</small></span></div><div className="about-copy"><p className="eyebrow">За ЗеленоВкъщи</p><h2>Вярваме, че всеки ден е по-добър с малко <em>повече зелено.</em></h2><p>ЗеленоВкъщи е малък екип от хора, които обичат земята и вярват в простата красота на добре поддържаното пространство.</p><p>Работим внимателно, слушаме идеите ви и оставяме след себе си градини, които растат заедно с вас.</p><ul>{['Личен подход към всеки проект', 'Грижа с внимание към всеки детайл', 'Устойчиви решения и местни растения'].map(item => <li key={item}><Check aria-hidden="true" /> {item}</li>)}</ul></div></div>
      </section>

      <section id="projects" className="projects section-padding" data-reveal><div className="container"><div className="section-heading"><div><p className="eyebrow">Нашите проекти</p><h2>Малко вдъхновение<br /><em>от нашата работа.</em></h2></div><p>Всяко пространство разказва своя история. Ето няколко от любимите ни.</p></div><div className="project-grid">{projects.map(project => <button type="button" data-reveal className="project-card" key={project.title} onClick={() => setSelectedProject(project)}><div className="project-image"><img src={project.image} alt={project.title} /><span>{project.tag}</span></div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><span className="project-open">Вижте проекта <ArrowRight aria-hidden="true" /></span></div></button>)}</div></div></section>

      <section id="pests" className="pests section-padding" data-reveal><div className="container"><div className="section-heading"><div><p className="eyebrow">Вредители</p><h2>Кой тормози<br /><em>вашия двор?</em></h2></div><p>Ранното разпознаване спестява растения и пари. Ето някои от най-честите вредители.</p></div><div className="pest-highlight-grid">{pestHighlights.map(([title, text, slug]) => <a className="pest-highlight-card" data-reveal href={`/vrediteli#${slug}`} key={slug}><div className="pest-highlight-image"><div className="pest-placeholder" role="img" aria-label={`Място за снимка на ${title}`}>Място за снимка<br /><small>{title}</small></div><span>Снимка ще бъде добавена</span></div><div className="pest-highlight-content"><h3>{title}</h3><p>{text}</p><span className="project-open">Научете повече <ArrowRight aria-hidden="true" /></span></div></a>)}</div><a className="button button-primary pests-button" href="/vrediteli">Всички вредители <ArrowRight aria-hidden="true" /></a></div></section>

      {selectedProject && <div className="project-modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}><button type="button" className="project-modal-close" aria-label="Затвори проекта" onClick={() => setSelectedProject(null)}><X aria-hidden="true" /></button><div className="project-modal-image"><img src={selectedProject.image} alt={selectedProject.title} /></div><div className="project-modal-content"><p className="eyebrow">Пример от нашата работа</p><span className="project-modal-tag">{selectedProject.tag}</span><h2 id="project-modal-title">{selectedProject.title}</h2><p className="project-modal-description">{selectedProject.details}</p><h3>Какво извършихме</h3><ul>{selectedProject.work.map(item => <li key={item}><Check aria-hidden="true" /> {item}</li>)}</ul><p className="project-modal-note">Снимките в тази секция са примерни. Тук ще добавим реални снимки от вашите обекти.</p></div></article></div>}

      <section id="contact" className="contact section-padding" data-reveal><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">Нека поговорим</p><h2>Готови ли сте за<br /><em>по-зелено утре?</em></h2><p>Разкажете ни за вашето пространство. Ще се свържем с вас, за да обсъдим най-доброто решение.</p><div className="contact-details"><a href="tel:+359888123456"><span><Phone aria-hidden="true" /></span><div><small>Обадете се</small><strong>+359 888 123 456</strong></div></a><a href="mailto:hello@zelenovkashti.bg"><span><Mail aria-hidden="true" /></span><div><small>Пишете ни</small><strong>hello@zelenovkashti.bg</strong></div></a><div><span><MapPin aria-hidden="true" /></span><div><small>Работим в</small><strong>София и околността</strong></div></div></div></div><form className="contact-form" onSubmit={handleSubmit}>{sent ? <div className="success-message"><span><Check aria-hidden="true" /></span><h3>Благодарим ви!</h3><p>Получихме вашето съобщение и ще се свържем с вас съвсем скоро.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Изпрати ново съобщение</button></div> : <><div className="form-row"><label>Вашето име<input required name="name" placeholder="Име и фамилия" /></label><label>Телефон<input required name="phone" type="tel" placeholder="+359 ..." /></label></div><label>Имейл адрес<input required name="email" type="email" placeholder="you@example.com" /></label><label>Как можем да помогнем?<textarea required name="message" rows={4} placeholder="Разкажете ни за вашия проект..."></textarea></label><button className="button button-light" type="submit">Изпрати запитване <ArrowRight aria-hidden="true" /></button></>}</form></div></section>

      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark"><Leaf aria-hidden="true" /></span><span>Зелено<span>Вкъщи</span></span></a><p>Създаваме зелени места за по-добър живот.</p><a className="instagram" href="#contact" aria-label="Instagram"><Camera aria-hidden="true" /></a><small>© 2024 ЗеленоВкъщи</small></div></footer>
    </main>
  )
}
