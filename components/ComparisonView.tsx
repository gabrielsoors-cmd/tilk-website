import Link from 'next/link'
import { rows, tools, sources, notes, CHECKED, WRITTEN, ageText, formatDate, Lang, Cell } from '@/lib/compare'

function Refs({ cell }: { cell: Cell }) {
  if (!cell.src) return null
  return (
    <sup className="ml-1 text-[10px] text-primary">
      {cell.src.map((n, i) => (
        <span key={n}>
          {i > 0 && ','}
          <a href={`#kalla-${n}`} className="underline">{n}</a>
        </span>
      ))}
    </sup>
  )
}

/** Renders text with inline [n] references as links */
function WithRefs({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g)
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[(\d+)\]$/)
        return m ? (
          <sup key={i} className="text-[10px]"><a href={`#kalla-${m[1]}`} className="text-primary underline">{m[1]}</a></sup>
        ) : (
          <span key={i}>{p}</span>
        )
      })}
    </>
  )
}

export default function ComparisonView({ lang }: { lang: Lang }) {
  const sv = lang === 'sv'
  const base = sv ? '' : '/en'
  const t = {
    h1: sv ? 'Tilk jämfört med andra mötestjänster' : 'Tilk compared with other meeting tools',
    intro: sv
      ? 'Varje uppgift nedan hör ihop med en källa. Vi visar när varje källa publicerats eller ändrats, hur gammal den är och när vi kontrollerade den. Det vi inte kunnat belägga står som ”Ej kontrollerat”.'
      : 'Every claim below is tied to a source. We show when each source was published or edited, how old it is and when we checked it. What we could not verify says “Not checked”.',
    written: sv ? 'Skriven av oss' : 'Written by us',
    checked: sv ? 'Källor kontrollerade' : 'Sources checked',
    scroll: sv ? 'Svep i sidled för att se alla tjänster.' : 'Swipe sideways to see all services.',
    feature: sv ? 'Egenskap' : 'Feature',
    srcH: sv ? 'Källor' : 'Sources',
    srcIntro: sv
      ? 'Åldern räknas från publicerings- eller ändringsdatumet på sidan till vår kontroll den'
      : 'Age is counted from the publication or edit date on the page to our check on',
    undated: sv ? 'Datum saknas på sidan' : 'No date on the page',
    vendor: sv
      ? 'Det mesta är leverantörernas egna uppgifter om sig själva och kan ha ändrats sedan vi kontrollerade. Att en funktion finns på en sida säger inget om hur bra den fungerar. Vi har inte mätt transkriptionskvaliteten för någon tjänst, Tilk inräknat, och vi gör inga påståenden om hur någon tjänst hanterar uppgifter.'
      : 'Most of this is each vendor’s own description of itself and may have changed since we checked. A feature being listed says nothing about how well it works. We have not measured transcription quality for any service, Tilk included, and make no claims about how any service handles data.',
    gaps: sv ? 'Där Tilk är sämre eller saknar något' : 'Where Tilk falls short',
    gapList: sv
      ? ['Tilk skriver inte ut vem som sa vad när du spelar in själv.', 'Appen finns bara för iPhone och Apple Watch.', 'Tilk har inga kopplingar till CRM- eller projektverktyg.']
      : ['Tilk does not label who said what when you record yourself.', 'The app is only available for iPhone and Apple Watch.', 'Tilk has no integrations with CRM or project tools.'],
    more: sv ? 'Läs mer: ' : 'Read more: ',
    blog: sv ? 'Från möte till färdig PDF på några minuter' : 'Why choose Tilk? (Swedish)',
    cta: sv ? 'Prova Tilk gratis i 60 minuter' : 'Try Tilk free for 60 minutes',
  }

  return (
    <>
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="font-genty text-3xl sm:text-5xl font-medium mb-4 text-gray-900">{t.h1}</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">{t.intro}</p>
        <p className="mt-4 text-sm text-gray-500">
          {t.written}: <strong>{formatDate(WRITTEN, lang)}</strong> · {t.checked}: <strong>{formatDate(CHECKED, lang)}</strong>
        </p>
      </div>

      <p className="text-xs text-gray-500 mb-2 sm:hidden">{t.scroll}</p>
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 mb-8">
        <table className="min-w-[1100px] w-full bg-white border border-gray-200 text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="sticky left-0 z-10 bg-white p-3 w-32 min-w-[8rem] text-gray-500 font-semibold">{t.feature}</th>
              {tools.map((tool, i) => (
                <th key={tool} className={`p-3 min-w-[9.5rem] font-semibold ${i === 0 ? 'text-primary bg-primary/5' : 'text-gray-700'}`}>{tool}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label.sv} className="border-b border-gray-100 align-top">
                <th className="sticky left-0 z-10 bg-white p-3 font-medium text-gray-900 text-xs sm:text-sm">{row.label[lang]}</th>
                {row.cells.map((cell, i) => (
                  <td key={i} className={`p-3 text-gray-700 text-xs sm:text-sm ${i === 0 ? 'bg-primary/5' : ''}`}>
                    {cell.text[lang]}
                    <Refs cell={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-2 text-sm text-gray-600 mb-10 list-disc pl-5">
        {notes.map((n) => (
          <li key={n.sv}><WithRefs text={n[lang]} /></li>
        ))}
        <li>{t.vendor}</li>
      </ul>

      <section className="mb-10 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6">
        <h2 className="font-genty text-xl sm:text-2xl font-medium mb-3 text-gray-900">{t.gaps}</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base">
          {t.gapList.map((g) => <li key={g}>{g}</li>)}
        </ul>
        <p className="mt-4 text-sm text-gray-600">
          {sv && <>{t.more}<Link href="/blog/varfor-valja-tilk-som-svenskt-foretag" className="text-primary underline">{t.blog}</Link></>}
        </p>
      </section>

      <section id="kallor" className="mb-12">
        <h2 className="font-genty text-xl sm:text-2xl font-medium mb-2 text-gray-900">{t.srcH}</h2>
        <p className="text-sm text-gray-600 mb-4">{t.srcIntro} {formatDate(CHECKED, lang)}.</p>
        <ol className="space-y-3">
          {sources.map((s) => {
            const age = ageText(s.date, lang)
            return (
              <li key={s.id} id={`kalla-${s.id}`} className="text-sm text-gray-700 scroll-mt-28">
                <span className="font-semibold text-gray-900">{s.id}.</span>{' '}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary underline break-words">{s.title}</a>
                <div className="text-xs text-gray-500">
                  {s.date ? `${formatDate(s.date, lang)} · ${age}` : (s.dateNote ? s.dateNote[lang] : t.undated)}
                  {s.date && s.dateNote ? ` · ${s.dateNote[lang]}` : ''}
                </div>
              </li>
            )
          })}
        </ol>
      </section>

      <div className="text-center">
        <a
          href="https://apps.apple.com/se/app/tilk/id6759267312"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition"
        >
          {t.cta} <span>→</span>
        </a>
      </div>
    </>
  )
}
