'use client'

import { ArrowLeft, ArrowRight, Check, Leaf } from 'lucide-react'
import { PestIllustration } from '@/components/pest-illustration'
import { useEffect, type CSSProperties } from 'react'

const pests = [
  { id: 'listni-vashki', name: 'Листни въшки', type: 'Насекомо', description: 'Дребни зелени, черни или кафяви насекоми, които се събират на млади връхчета и под листата и смучат сок от растението.', identify: 'свити, залепнали листа и лепкав налеп.', active: 'от пролетта до есента.' },
  { id: 'goli-ohlyuvi', name: 'Голи охлюви', type: 'Мекотело', description: 'Охлюви без черупка, които нощем и след дъжд изяждат листа, цветя и млади разсади.', identify: 'неправилни дупки в листата и блестящи лигави следи.', active: 'влажно и топло време.' },
  { id: 'buksov-molets', name: 'Буксов молец', type: 'Насекомо', description: 'Пеперуда, чиито гъсеници изяждат листата на чимшира и могат да унищожат цял жив плет за кратко време.', identify: 'изсъхнали листа, паяжинки и зеленикави гъсеници с черни точки.', active: 'от пролетта до есента, с няколко поколения годишно.' },
  { id: 'kurtitsi', name: 'Къртици', type: 'Бозайник', description: 'Ровят подземни тунели и изхвърлят купчинки пръст, които развалят тревната площ.', identify: 'хълмчета пръст и подкопани корени на тревата.', active: 'през цялата година, най-забележими напролет и наесен.' },
  { id: 'beli-chervei', name: 'Бели червеи (ларви на майски бръмбар)', type: 'Насекомо', description: 'Дебели бели ларви в почвата, които изгризват корените на тревата.', identify: 'жълти или изсъхнали петна, от които тревата се вдига като килим.', active: 'късно лято и есен.' },
  { id: 'cherven-payak', name: 'Червен паяк', type: 'Акар', description: 'Микроскопични паякообразни, които смучат сок от листата, особено при суха и топла жега.', identify: 'ситни светли точици по листата, фина паяжина и бронзов цвят.', active: 'в горещо и сухо лято.' },
  { id: 'gradinski-mravki', name: 'Градински мравки', type: 'Насекомо', description: 'Изграждат мравуняци при корените и разнасят листните въшки, защото се хранят с техния лепкав сок.', identify: 'пътечки от мравки по стъблата и купчинки пръст.', active: 'от пролетта до есента.' },
  { id: 'minirasht-molets', name: 'Миниращ молец на конския кестен', type: 'Насекомо', description: 'Ларвите му ровят ходове във вътрешността на листата, които жълтеят и окапват още през лятото.', identify: 'кафяви петна и сухи листа на кестените в средата на лятото.', active: 'от пролетта до края на лятото.' },
]

export default function PestsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) elements.forEach((element) => element.classList.add('is-visible'))
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.1 })
    if (!reduced) elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <main className="pests-page">
    <header className="site-header"><div className="container nav-inner"><a className="brand" href="/"><span className="brand-mark"><Leaf /></span><span className="brand-name">Зелено<span>Вкъщи</span></span></a><nav className="main-nav" aria-label="Основна навигация"><a href="/#services">Услуги</a><a href="/#about">За нас</a><a href="/#projects">Проекти</a><a className="active" href="/vrediteli">Вредители</a><a href="/#contact">Контакти</a><a className="nav-cta" href="/#contact">Поискайте оглед <ArrowRight /></a></nav></div></header>
    <section className="pests-hero section-padding"><div className="container"><a className="back-link" href="/"><ArrowLeft /> Обратно към началото</a><p className="eyebrow">Възможни вредители</p><h1>Вредители в двора<br /><em>и градината.</em></h1><p className="pests-intro">Ранното разпознаване е първата стъпка към здрава градина. Научете как да забележите най-честите вредители и кога е време за професионална грижа.</p></div></section>
    <section className="pests-list section-padding"><div className="container"><div className="pests-grid">{pests.map((pest, index) => <article id={pest.id} className="pest-card" data-reveal key={pest.id} style={{ '--reveal-delay': `${(index % 3) * 0.15}s` } as CSSProperties}><div className="pest-card-image"><PestIllustration pestId={pest.id} name={pest.name} /><span>{pest.type}</span></div><div className="pest-card-body"><span className="pest-type">{pest.type}</span><h2>{pest.name}</h2><p>{pest.description}</p><p><strong>Как го разпознавате:</strong> {pest.identify}</p><p><strong>Кога е активен:</strong> {pest.active}</p></div></article>)}</div></div></section>
    <section className="pests-cta section-padding" data-reveal><div className="container pests-cta-card"><div><p className="eyebrow">Нужна е помощ?</p><h2>Не сте сигурни какъв е вредителят?</h2><p>Направете безплатен оглед и ще ви помогнем да изберете правилната грижа.</p></div><a className="button button-primary" href="/#contact">Свържете се с нас <ArrowRight /></a></div></section>
  </main>
}
