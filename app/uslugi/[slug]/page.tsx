import { ArrowLeft, ArrowRight, Check, Leaf, Phone, ShieldCheck, Sprout } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const services = {
  'poddrushka-na-dvorove': {
    title: 'Поддръжка на дворове',
    intro: 'Редовна, внимателна грижа за двор, който винаги изглежда подреден, свеж и готов за времето навън.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85',
    activities: ['Косене и оформяне на тревни площи', 'Подрязване на храсти, жив плет и декоративни дървета', 'Почистване на листа, клони и сезонни отпадъци', 'Аериране, торене и подготовка на двора за сезона'],
    problems: 'Без редовна поддръжка тревата се сбива, храстите губят форма, а натрупаните листа задържат влага и създават условия за гъбични заболявания.',
    pests: 'Следим за тревни червеи, листни въшки и акари. При нужда препоръчваме щадящ подход и подходящ момент за третиране.',
  },
  ozelenyavane: {
    title: 'Озеленяване',
    intro: 'Създаваме зелени пространства с характер — от първата идея и избора на растения до засаждането и финалните детайли.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=85',
    activities: ['Концепция и разпределение на зелените зони', 'Подбор на растения според светлина, почва и климат', 'Засаждане на треви, храсти, цветя и малки дървета', 'Изграждане на декоративни елементи и сезонни композиции'],
    problems: 'Неподходящите растения, лошият дренаж и прекомерното засенчване често водят до слаб растеж, пожълтяване и празни участъци.',
    pests: 'Избираме устойчиви видове и планираме пространството така, че въздухът и светлината да ограничат появата на вредители.',
  },
  'grizha-za-rasteniyata': {
    title: 'Грижа за растенията',
    intro: 'Помагаме на растенията да растат здрави — у дома, в офиса или в градината, с грижа според техните нужди.',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=85',
    activities: ['Поливане и изготвяне на сезонен режим', 'Пресаждане, подхранване и смяна на почва', 'Санитарна резитба и оформяне на растенията', 'Наблюдение на състоянието и практични съвети за дома'],
    problems: 'Пожълтели листа, увяхване, забавен растеж и плесен най-често са сигнал за неправилно поливане, неподходяща светлина или изтощена почва.',
    pests: 'Разпознаваме ранните признаци на щитоносни въшки, трипси и акари и насочваме към безопасни решения за конкретното растение.',
  },
} as const

type ServiceSlug = keyof typeof services

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services[slug as ServiceSlug]
  if (!service) notFound()

  return (
    <main className="service-detail-page">
      <header className="site-header">
        <div className="container nav-inner">
          <Link className="brand" href="/" aria-label="ЗеленоВкъщи начало"><span className="brand-mark"><Leaf aria-hidden="true" /></span><span>Зелено<span>Вкъщи</span></span></Link>
          <nav className="main-nav service-nav" aria-label="Навигация на страницата"><Link href="/#services">Услуги</Link><Link href="/#about">За нас</Link><Link href="/#projects">Проекти</Link><Link className="nav-cta" href="/#contact">Свържете се <ArrowRight aria-hidden="true" /></Link></nav>
        </div>
      </header>

      <section className="service-detail-hero"><div className="container service-detail-grid"><div><Link className="back-link" href="/#services"><ArrowLeft aria-hidden="true" /> Всички услуги</Link><p className="eyebrow"><Sprout aria-hidden="true" /> Услуга от ЗеленоВкъщи</p><h1>{service.title}</h1><p className="service-detail-intro">{service.intro}</p><Link className="button button-primary" href="/#contact">Поискайте консултация <ArrowRight aria-hidden="true" /></Link></div><div className="service-detail-image"><img src={service.image} alt={service.title} /></div></div></section>

      <section className="service-detail-content section-padding"><div className="container service-content-grid"><div><p className="eyebrow">Какво включва</p><h2>Грижа, която се вижда<br /><em>във всеки детайл.</em></h2><div className="service-activity-list">{service.activities.map((activity) => <div key={activity}><span><Check aria-hidden="true" /></span><p>{activity}</p></div>)}</div></div><aside className="service-advice"><ShieldCheck aria-hidden="true" /><h3>На какво обръщаме внимание?</h3><p>{service.problems}</p><p>{service.pests}</p></aside></div></section>

      <section className="service-detail-cta"><div className="container"><p className="eyebrow">Имате въпрос?</p><h2>Нека поговорим за<br /><em>вашето зелено място.</em></h2><Link className="button button-light" href="/#contact">Свържете се с нас <Phone aria-hidden="true" /></Link></div></section>
      <footer className="footer"><div className="container footer-inner"><Link className="brand" href="/"><span className="brand-mark"><Leaf aria-hidden="true" /></span><span>Зелено<span>Вкъщи</span></span></Link><p>Създаваме зелени места за по-добър живот.</p><small>© 2024 ЗеленоВкъщи</small></div></footer>
    </main>
  )
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => ({ title: services[slug as ServiceSlug]?.title ? `${services[slug as ServiceSlug].title} | ЗеленоВкъщи` : 'Услуга | ЗеленоВкъщи', description: services[slug as ServiceSlug]?.intro }))
}
