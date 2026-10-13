'use client'

type PestIllustrationProps = {
  pestId: string
  name: string
  compact?: boolean
}

const stroke = 'currentColor'

export function PestIllustration({ pestId, name, compact = false }: PestIllustrationProps) {
  const common = { viewBox: '0 0 320 190', role: 'img' as const, 'aria-label': `Илюстрация на ${name}`, className: `pest-illustration pest-illustration-${pestId} ${compact ? 'is-compact' : ''}` }
  const base = <><path className="pest-ground" d="M34 158c45-17 85 9 126-2 44-12 76-8 126 2" /><circle className="pest-glow" cx="160" cy="92" r="62" /></>

  switch (pestId) {
    case 'listni-vashki': return <svg {...common}>{base}<g className="pest-wiggle"><ellipse cx="158" cy="101" rx="23" ry="34" /><path d="M144 76L122 52M174 76l24-26M143 83l-24-12M177 84l27-11M143 121l-25 22M177 121l25 21M151 68l-8-21M168 68l11-22" /></g><circle cx="151" cy="94" r="3" fill="white" /><circle cx="166" cy="94" r="3" fill="white" /></svg>
    case 'goli-ohlyuvi': return <svg {...common}>{base}<g className="pest-crawl"><path d="M70 136c26-27 42-25 64-18 26 8 48 8 73-2 27-11 48-4 60 20H70Z" /><path d="M119 113c-4-31 12-46 36-39 22 6 25 33 6 46" /><path d="M148 80l-8-25M164 82l11-26" /><circle cx="140" cy="54" r="4" fill="white" /><circle cx="175" cy="56" r="4" fill="white" /></g></svg>
    case 'buksov-molets': return <svg {...common}>{base}<g className="pest-flap"><path d="M160 103C126 74 92 61 72 76c9 37 35 55 80 43M160 103c34-29 68-42 88-27-9 37-35 55-80 43" /><path d="M160 83v57M143 103h34" /></g><circle cx="160" cy="77" r="8" /></svg>
    case 'kurtitsi': return <svg {...common}>{base}<path d="M73 157c21-26 46-30 73-16 27-14 52-10 81 16" className="pest-hill" /><g className="pest-pop"><path d="M128 146c-9-27-4-48 15-56 19 8 24 29 15 56" /><path d="M143 111l-24-11M144 110l-4-20M151 110l18-19" /><ellipse cx="145" cy="92" rx="9" ry="6" fill="white" /></g></svg>
    case 'beli-chervei': return <svg {...common}><g className="pest-curl"><path d="M82 126c31-45 71-43 78-12 7 28 38 31 77-12" /><path d="M88 131c34-41 66-37 73-10 8 30 43 30 77-10" /></g><circle className="pest-dot" cx="110" cy="107" r="5" /><circle className="pest-dot" cx="210" cy="110" r="5" /></svg>
    case 'cherven-payak': return <svg {...common}><g className="pest-sway"><circle cx="160" cy="98" r="24" /><path d="M143 83l-27-24M151 79l-12-31M177 83l28-24M169 79l12-31M142 111l-31 19M151 116l-17 27M178 111l31 19M169 116l17 27" /></g><g className="pest-specks"><circle cx="75" cy="68" r="3"/><circle cx="246" cy="80" r="3"/><circle cx="92" cy="124" r="3"/><circle cx="231" cy="133" r="3"/></g></svg>
    case 'gradinski-mravki': return <svg {...common}><g className="pest-march"><g transform="translate(65 112)"><ellipse cx="0" cy="0" rx="8" ry="5"/><path d="M-5-3l-12-12M0-4l-2-15M5-3l13-12M-5 3l-12 12M0 4l-2 15M5 3l13 12"/></g><g transform="translate(137 112)"><ellipse cx="0" cy="0" rx="8" ry="5"/><path d="M-5-3l-12-12M0-4l-2-15M5-3l13-12M-5 3l-12 12M0 4l-2 15M5 3l13 12"/></g><g transform="translate(209 112)"><ellipse cx="0" cy="0" rx="8" ry="5"/><path d="M-5-3l-12-12M0-4l-2-15M5-3l13-12M-5 3l-12 12M0 4l-2 15M5 3l13 12"/></g></g></svg>
    case 'minirasht-molets': return <svg {...common}><g className="pest-trace"><path d="M88 146c15-65 71-98 143-68-5 44-31 70-76 79-23 5-46 2-67-11Z" /><path d="M113 130c26-24 54-37 86-40M124 139c25-18 50-27 76-30M135 113c20-15 39-22 59-24" /></g><path d="M88 146l-17 18" /></svg>
    default: return <svg {...common}>{base}<circle cx="160" cy="96" r="28" /></svg>
  }
}
