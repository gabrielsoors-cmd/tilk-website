export type Lang = 'sv' | 'en'
type L = { sv: string; en: string }
const l = (sv: string, en: string): L => ({ sv, en })

export const CHECKED = '2026-11-13'
export const WRITTEN = '2026-11-13'

export interface Source {
  id: number
  title: string
  url: string
  /** Publication/last-edit date shown on the page itself (ISO), if any */
  date?: string
  /** Free-text note about the date, e.g. relative "updated 21 days ago" */
  dateNote?: L
}

export const sources: Source[] = [
  { id: 1, title: 'Tilk – tilk.app och prissida', url: 'https://www.tilk.app/pricing', dateNote: l('Vår egen sida, aktuell vid skrivandet', 'Our own page, current at time of writing') },
  { id: 2, title: 'Granola – Multi-language support', url: 'https://docs.granola.ai/help-center/customising-granola/multi-language' },
  { id: 3, title: 'Granola – How transcription works', url: 'https://docs.granola.ai/help-center/taking-notes/transcription' },
  { id: 4, title: 'Granola – prisblogg', url: 'https://www.granola.ai/blog', date: '2026-02-12', dateNote: l('Prisinlägg publicerat 12 feb 2026', 'Pricing post published 12 Feb 2026') },
  { id: 5, title: 'Fireflies – Supported languages', url: 'https://guide.fireflies.ai/articles/2973706448-learn-about-fireflies-supported-languages' },
  { id: 6, title: 'Fireflies – Mobile app', url: 'https://guide.fireflies.ai/articles/8937818258-learn-about-fireflies-mobile-app', dateNote: l('Anger "uppdaterad för 21 dagar sedan" (ca 23 okt 2026)', 'States "updated 21 days ago" (approx. 23 Oct 2026)') },
  { id: 7, title: 'Fireflies – Pricing (hjälpartikel)', url: 'https://guide.fireflies.ai/', dateNote: l('Anger "uppdaterad för 1 månad sedan"', 'States "updated 1 month ago"') },
  { id: 8, title: 'Otter – Pricing', url: 'https://otter.ai/pricing' },
  { id: 9, title: 'TechCrunch – Otter.ai can now follow conversations across 30 languages', url: 'https://techcrunch.com/2026/11/09/otter-ai-can-now-follow-conversations-across-30-languages/', date: '2026-11-09' },
  { id: 10, title: 'Fathom – What languages does Fathom support?', url: 'https://help.fathom.video/en/articles/296192', date: '2025-05-20' },
  { id: 11, title: 'Fathom – Using the Fathom iOS mobile app', url: 'https://help.fathom.video/en/articles/13926529', date: '2026-10-01' },
  { id: 12, title: 'Fathom – Pricing', url: 'https://fathom.ai/pricing' },
  { id: 13, title: 'Superhuman – Superhuman acquires Fathom', url: 'https://blog.superhuman.com/superhuman-acquires-fathom/', date: '2026-09-14' },
  { id: 14, title: 'Klang – AI note taker', url: 'https://klang.ai/ai-note-taker' },
  { id: 15, title: 'Notetaker.se', url: 'https://notetaker.se' },
  { id: 16, title: 'Microsoft – Meeting transcription and captions in Teams', url: 'https://learn.microsoft.com/microsoftteams/meeting-transcription-captions', date: '2026-07-09' },
]

export interface Cell {
  text: L
  src?: number[]
}
const c = (sv: string, en: string, src?: number[]): Cell => ({ text: l(sv, en), src })

export const tools = ['Tilk', 'Granola', 'Fireflies', 'Otter', 'Fathom', 'Klang', 'Notetaker.se', 'Microsoft Teams'] as const

export interface Row {
  label: L
  cells: Cell[]
}

export const rows: Row[] = [
  {
    label: l('Svenska i transkriberingen', 'Swedish transcription'),
    cells: [
      c('Ja', 'Yes', [1]),
      c('Ja på dator. Inte bland mobilappens 17 språk', 'Yes on desktop. Not among the mobile app’s 17 languages', [2]),
      c('Ja (svenska finns i språklistan)', 'Yes (Swedish is in the language list)', [5]),
      c('Inte än. Svenska ”kommer snart” enligt TechCrunch', 'Not yet. Swedish “coming soon” per TechCrunch', [8, 9]),
      c('Ja (en av 38 språk)', 'Yes (one of 38 languages)', [10]),
      c('19 språk, men sidan namnger dem inte', '19 languages, but the page does not name them', [14]),
      c('Ja, svenskt fokus (leverantörens uppgift)', 'Yes, Swedish focus (vendor’s claim)', [15]),
      c('Ja (svenska (Sverige) i listan)', 'Yes (Swedish (Sweden) in the list)', [16]),
    ],
  },
  {
    label: l('Möten i rummet med mobilen', 'In-room meetings on a phone'),
    cells: [
      c('Ja, iPhone och Apple Watch (klockan är ännu inte testad på enhet)', 'Yes, iPhone and Apple Watch (the watch is not yet tested on a device)', [1]),
      c('Ja, iPhone och Android', 'Yes, iPhone and Android', [3]),
      c('Ja, iOS och Android', 'Yes, iOS and Android', [6]),
      c('Mobilapp finns. Sidan nämner inte uttryckligen möten i rummet', 'Mobile app exists. The page does not explicitly mention in-room meetings', [8]),
      c('Ja, iOS-app', 'Yes, iOS app', [11]),
      c('Ja, via mobilappen', 'Yes, via the mobile app', [14]),
      c('Nämns (fysiska möten)', 'Mentioned (physical meetings)', [15]),
      c('Gäller möten i Teams', 'Applies to Teams meetings', [16]),
    ],
  },
  {
    label: l('Talarmärkning (vem sa vad)', 'Speaker labels (who said what)'),
    cells: [
      c('Nej, inte i dag när du spelar in själv', 'No, not today when you record yourself', [1]),
      c('Ja: namn i digitala möten på dator, igenkänning av olika talare i möten i rummet på mobil', 'Yes: names in digital meetings on desktop, different speakers recognised in in-person meetings on mobile', [3]),
      c('Ej kontrollerat', 'Not checked'),
      c('Ja, ingår i gratisnivån', 'Yes, included in the free plan', [8]),
      c('Ej kontrollerat', 'Not checked'),
      c('Talare separeras, namn/etiketter i Pro', 'Speakers separated, names/labels in Pro', [14]),
      c('Ja, med tidsstämplar', 'Yes, with timestamps', [15]),
      c('Ej kontrollerat', 'Not checked'),
    ],
  },
  {
    label: l('Gratisnivå', 'Free tier'),
    cells: [
      c('60 minuter totalt', '60 minutes in total', [1]),
      c('Ja (Basic, 30 dagars historik)', 'Yes (Basic, 30-day history)', [4]),
      c('Ja', 'Yes', [7]),
      c('Ja (300 min/mån)', 'Yes (300 min/month)', [8]),
      c('Ja', 'Yes', [12]),
      c('Ja (30 dagars historik)', 'Yes (30-day history)', [14]),
      c('Ja (5 möten/mån, 1 användare)', 'Yes (5 meetings/month, 1 user)', [15]),
      c('Ej tillämpligt', 'Not applicable', [16]),
    ],
  },
  {
    label: l('Pris, betald nivå (originalvaluta, ingen omräkning)', 'Paid price (original currency, no conversion)'),
    cells: [
      c('Basic 49 kr/mån, Pro 149 kr/mån, Enterprise från 499 kr/mån', 'Basic 49 SEK/mo, Pro 149 SEK/mo, Enterprise from 499 SEK/mo', [1]),
      c('Business $14/användare/mån, Enterprise $35', 'Business $14/user/mo, Enterprise $35', [4]),
      c('Pro $18/mån ($10 vid årsbetalning), Business $29 ($19)', 'Pro $18/mo ($10 billed annually), Business $29 ($19)', [7]),
      c('Pro $16,99/mån (listpris), Business $30 (listpris). Erbjudanden förekommer', 'Pro $16.99/mo (list), Business $30 (list). Offers occur', [8]),
      c('Premium $20/mån ($16 vid årsbetalning)', 'Premium $20/mo ($16 billed annually)', [12]),
      c('Pro €16/mån (€14 vid årsbetalning), Business €30 (€25)', 'Pro €16/mo (€14 billed annually), Business €30 (€25)', [14]),
      c('Pro 299 kr/mån', 'Pro 299 SEK/mo', [15]),
      c('Ingår i Microsoft-licens. Licensvillkor ej kontrollerade', 'Part of Microsoft licensing. Licence terms not checked', [16]),
    ],
  },
]

export interface Gap {
  sv: string
  en: string
}
export const notes: L[] = [
  l('Ägarskifte: Superhuman meddelade den 14 september 2026 att de förvärvat Fathom. Sidan säger inte om Fathom fortsätter som egen tjänst [13].', 'Ownership: Superhuman announced on 14 September 2026 that it acquired Fathom. The page does not say whether Fathom continues as a standalone product [13].'),
  l('Valuta: priserna anges som leverantören visar dem. Vi har inte räknat om till kronor, och Granolas och Fireflies sidor anger inte valuta utöver tecknet $.', 'Currency: prices are shown as the vendor lists them. We have not converted to SEK, and Granola’s and Fireflies’ pages show no currency beyond the $ sign.'),
  l('Otter: priser och språk står på prissidan [8], medan Otters hjälpartikel om språk (odaterad) fortfarande säger att bara engelska stöds. Vi har utgått från den nyare prissidan och TechCrunch [9].', 'Otter: prices and languages are on the pricing page [8], while Otter’s undated help article on languages still says only English is supported. We went with the newer pricing page and TechCrunch [9].'),
  l('Ej med: tl;dv (svenska nämns inte bland de 24 språk som listas på startsidan, men sidan säger över 100) och PLAUD (hårdvarubaserad, 112+ språk utan namngivna språk). Vi kunde inte belägga svenska för dem.', 'Not included: tl;dv (Swedish is not among the 24 languages named on its home page, which claims 100+) and PLAUD (hardware-based, 112+ languages without named languages). We could not confirm Swedish for them.'),
]

function daysBetween(a: string, b: string) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86400000)
}

export function ageText(date: string | undefined, lang: Lang): string | null {
  if (!date) return null
  const d = daysBetween(date, CHECKED)
  if (d < 60) return lang === 'sv' ? `${d} dagar gammal` : `${d} days old`
  if (d < 730) {
    const m = Math.round(d / 30.4)
    return lang === 'sv' ? `${m} månader gammal` : `${m} months old`
  }
  const y = (d / 365.25).toFixed(1).replace('.0', '')
  return lang === 'sv' ? `${y.replace('.', ',')} år gammal` : `${y} years old`
}

export function formatDate(iso: string, lang: Lang) {
  return new Date(iso + 'T12:00:00Z').toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}
