import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Jämför Tilk med andra tjänster - Tilk',
  description: 'Se hur Tilk står sig mot Otter.ai, Fireflies, Fathom, PLAUD och Microsoft Teams för svenska möten.',
}

export default function ComparePage() {
  const features = [
    { name: 'Perfekt svenska transkribering', tilk: true, otter: false, fireflies: false, fathom: false, plaud: false, teams: 'Delvis' },
    { name: 'Apple Watch integration', tilk: true, otter: false, fireflies: false, fathom: false, plaud: false, teams: false },
    { name: '5 anpassningsbara mallar', tilk: true, otter: false, fireflies: false, fathom: true, plaud: false, teams: false },
    { name: 'Gratis plan', tilk: true, otter: true, fireflies: true, fathom: false, plaud: false, teams: true },
    { name: 'AI-sammanfattningar', tilk: true, otter: true, fireflies: true, fathom: true, plaud: true, teams: true },
    { name: 'Fungerar offline (inspelning)', tilk: 'Delvis', otter: false, fireflies: false, fathom: false, plaud: 'Delvis', teams: false }, // ← ÄNDRAD
    { name: 'Dedikerad mobil-app', tilk: true, otter: true, fireflies: true, fathom: true, plaud: true, teams: false },
    { name: 'Pris/månad (Basic)', tilk: '49 kr', otter: '~190 kr', fireflies: '~110 kr', fathom: '~280 kr', plaud: '~880 kr', teams: 'Inkluderat' }, // ← ÄNDRAD
    { name: 'GDPR-compliant (EU)', tilk: true, otter: true, fireflies: true, fathom: true, plaud: true, teams: true },
    ]

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-dark min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tilk vs Konkurrenterna
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Se hur Tilk står sig mot andra AI-transkriptionstjänster. Vi fokuserar på perfekt svenska och enkelhet.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full bg-darkCard border border-darkBorder rounded-card">
              <thead>
                <tr className="border-b border-darkBorder">
                  <th className="text-left p-4 md:p-6 text-gray-400 font-semibold">Funktion</th>
                  <th className="p-4 md:p-6 text-center">
                    <div className="font-bold text-lg md:text-xl text-primary">Tilk</div>
                  </th>
                  <th className="p-4 md:p-6 text-center">
                    <div className="font-semibold text-sm md:text-base text-gray-300">Otter.ai</div>
                  </th>
                  <th className="p-4 md:p-6 text-center">
                    <div className="font-semibold text-sm md:text-base text-gray-300">Fireflies</div>
                  </th>
                  <th className="p-4 md:p-6 text-center">
                    <div className="font-semibold text-sm md:text-base text-gray-300">Fathom</div>
                  </th>
                  <th className="p-4 md:p-6 text-center">
                    <div className="font-semibold text-sm md:text-base text-gray-300">PLAUD</div>
                  </th>
                  <th className="p-4 md:p-6 text-center">
                    <div className="font-semibold text-sm md:text-base text-gray-300">MS Teams</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={i} className={`border-b border-darkBorder ${i % 2 === 0 ? 'bg-dark/50' : ''}`}>
                    <td className="p-4 md:p-6 text-gray-300 text-sm md:text-base">{feature.name}</td>
                    <td className="p-4 md:p-6 text-center">
                      {typeof feature.tilk === 'boolean' ? (
                        feature.tilk ? (
                          <span className="text-primary text-xl md:text-2xl">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-white font-semibold text-sm md:text-base">{feature.tilk}</span>
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      {typeof feature.otter === 'boolean' ? (
                        feature.otter ? (
                          <span className="text-gray-400 text-xl md:text-2xl">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm md:text-base">{feature.otter}</span>
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      {typeof feature.fireflies === 'boolean' ? (
                        feature.fireflies ? (
                          <span className="text-gray-400 text-xl md:text-2xl">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm md:text-base">{feature.fireflies}</span>
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      {typeof feature.fathom === 'boolean' ? (
                        feature.fathom ? (
                          <span className="text-gray-400 text-xl md:text-2xl">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm md:text-base">{feature.fathom}</span>
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      {typeof feature.plaud === 'boolean' ? (
                        feature.plaud ? (
                          <span className="text-gray-400 text-xl md:text-2xl">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm md:text-base">{feature.plaud}</span>
                      )}
                    </td>
                    <td className="p-4 md:p-6 text-center">
                      {typeof feature.teams === 'boolean' ? (
                        feature.teams ? (
                          <span className="text-gray-400 text-xl md:text-2xl">✓</span>
                        ) : (
                          <span className="text-gray-600">—</span>
                        )
                      ) : (
                        <span className="text-gray-400 text-sm md:text-base">{feature.teams}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Differences */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-darkCard border border-primary/50 rounded-card p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Perfekt svenska</h3>
              <p className="text-gray-300 leading-relaxed">
                Tilk är byggt från grunden för svenska. Inga konstiga Google Translate-meningar eller missade idiom.
              </p>
            </div>
            <div className="bg-darkCard border border-primary/50 rounded-card p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Apple Watch</h3>
              <p className="text-gray-300 leading-relaxed">
                Spela in möten direkt från handleden. Perfekt för möten on-the-go där du inte har telefonen framme.
              </p>
            </div>
            <div className="bg-darkCard border border-primary/50 rounded-card p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Enkelt & Transparent</h3>
              <p className="text-gray-300 leading-relaxed">
                Tydliga priser i kronor, inga dolda avgifter, ingen komplicerad setup. Fungerar direkt.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
        <div className="bg-darkCard border border-darkBorder rounded-card p-6 text-center mb-6">
            <p className="text-gray-400 text-sm">
                <strong>Om priser:</strong> Priser för internationella tjänster är omräknade från USD till SEK (~11 kr/dollar) och avrundade. 
                Exakta priser kan variera beroende på valutakurs.
            </p>
            </div>

            <div className="bg-darkCard border border-darkBorder rounded-card p-6 text-center">
            <p className="text-gray-400 text-sm">
                <strong>Disclaimer:</strong> Informationen är baserad på publikt tillgängliga källor per december 2024. 
                Vi gör vårt bästa för att hålla informationen uppdaterad. För exakt pricing och features, 
                se respektive tjänsts officiella hemsida.
            </p>
        </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Redo att testa Tilk?</h2>
            <p className="text-gray-400 mb-8">
              Prova gratis i 60 minuter. Inget kreditkort krävs.
            </p>
            
              <a
              href="/"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition shadow-glow"
            >
              Få din första sammanfattning på 60 sekunder →
            </a>
          </div>
        </div>
      </main>
      <Footer lang="sv" />
    </>
  )
}