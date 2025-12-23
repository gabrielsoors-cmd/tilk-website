import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Användarvillkor - Tilk',
  description: 'Läs våra användarvillkor för Tilk-appen.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto prose prose-invert prose-primary">
          <h1 className="text-5xl font-bold mb-6">Användarvillkor för Tilk</h1>
          
          <p className="text-gray-400 text-lg mb-12"><strong>Senast uppdaterad: 22.12.2025</strong></p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Allmänt</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Dessa användarvillkor ("Villkor") reglerar din användning av Tilk-appen ("Tjänsten"), som tillhandahålls av Soors Ventures AB ("vi", "oss", "vår").
            </p>
            <p className="text-gray-300 font-bold">
              Genom att använda Tilk godkänner du dessa villkor.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Vad är Tilk?</h2>
            <p className="text-gray-300 mb-4">Tilk är en mobilapp som:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Spelar in möten och samtal</li>
              <li>Transkriberar ljud till text (via OpenAI Whisper)</li>
              <li>Sammanfattar möten med AI (via OpenAI GPT-4o-mini)</li>
              <li>Sparar dina inspelningar och sammanfattningar</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Ålderskrav</h2>
            <p className="text-gray-300">
              Du måste vara minst 13 år för att använda Tilk. Om du är under 18 år måste du ha tillstånd från vårdnadshavare.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Konto och prenumerationer</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">4.1 Prenumerationsplaner</h3>
            <p className="text-gray-300 mb-4">Tilk erbjuder följande planer:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Free:</strong> 60 minuter/månad (gratis)</li>
              <li><strong>Basic:</strong> 300 minuter/månad (49 kr/mån)</li>
              <li><strong>Pro:</strong> 1000 minuter/månad (149 kr/mån)</li>
              <li><strong>Enterprise:</strong> Anpassade paket (från 499 kr/mån)</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">4.2 Betalning</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Betalningar hanteras via Apple In-App Purchase</li>
              <li>Prenumerationer förnyas automatiskt månadsvis</li>
              <li>Du kan avbryta när som helst via App Store-inställningar</li>
              <li>Ingen återbetalning för delvis använda månader</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">4.3 Användningsgränser</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Inspelningstid räknas per kalendermånad</li>
              <li>Vid överskridande av gräns blockeras nya inspelningar</li>
              <li>Free-användare får 5 extra minuter (grace period)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Användning av tjänsten</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">5.1 Tillåten användning</h3>
            <p className="text-gray-300 mb-4">Du får använda Tilk för:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>✅ Spela in egna möten och samtal</li>
              <li>✅ Transkribera och sammanfatta dina inspelningar</li>
              <li>✅ Dela sammanfattningar med andra (på eget ansvar)</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">5.2 Förbjuden användning</h3>
            <p className="text-gray-300 mb-4">Du får INTE använda Tilk för att:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>❌ Spela in någon utan deras samtycke (olagligt i Sverige)</li>
              <li>❌ Dela inspelningar som bryter mot sekretess</li>
              <li>❌ Använda tjänsten för olagliga ändamål</li>
              <li>❌ Försöka kringgå användningsgränser</li>
              <li>❌ Dela ditt konto med andra</li>
              <li>❌ Reverse-engineera eller kopiera appen</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Ditt ansvar</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">6.1 Inspelningar</h3>
            <p className="text-gray-300 mb-4"><strong>DU är ansvarig för:</strong></p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Att få samtycke från alla som spelas in (enligt svensk lag)</li>
              <li>Innehållet i dina inspelningar</li>
              <li>Att följa sekretessregler (t.ex. på arbetsplatsen)</li>
              <li>Att inte bryta mot andras integritet</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">6.2 Legal compliance</h3>
            <p className="text-gray-300 mb-4">
              Tilk tar INGET juridiskt ansvar för hur du använder tjänsten. Det är DITT ansvar att följa:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Svensk lag om samtycke till inspelning</li>
              <li>GDPR och dataskyddslagar</li>
              <li>Arbetsplatsens policys</li>
              <li>Sekretessavtal</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Immateriella rättigheter</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">7.1 Vem äger vad?</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Du äger:</strong> Dina inspelningar, transkriptioner och sammanfattningar</li>
              <li><strong>Vi äger:</strong> Tilk-appen, koden, varumärket, designen</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">7.2 Licens</h3>
            <p className="text-gray-300">
              Vi ger dig en icke-exklusiv, icke-överlåtbar licens att använda Tilk enligt dessa villkor.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. AI-genererat innehåll</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">8.1 Precision</h3>
            <p className="text-gray-300 mb-4">AI-sammanfattningar genereras automatiskt och kan innehålla:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>❌ Felaktigheter</li>
              <li>❌ Missförstånd</li>
              <li>❌ Ofullständigheter</li>
            </ul>
            <p className="text-gray-300 mt-6 bg-darkCard border border-primary/30 p-4 rounded-lg">
              <strong>Du ansvarar för att kontrollera och verifiera alla AI-genererade sammanfattningar.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-8">8.2 Ingen garanti</h3>
            <p className="text-gray-300 mb-4">Vi garanterar INTE att:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Transkriptioner är 100% korrekta</li>
              <li>Sammanfattningar är kompletta</li>
              <li>Tjänsten fungerar felfritt</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Ansvarsbegränsning</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">9.1 Tjänsten tillhandahålls "AS IS"</h3>
            <p className="text-gray-300 mb-4">Tilk tillhandahålls utan garantier av något slag. Vi ansvarar INTE för:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>❌ Förlorad data</li>
              <li>❌ Felaktiga transkriptioner</li>
              <li>❌ Missade inspelningar</li>
              <li>❌ Dataläckage från tredje part (OpenAI, Apple)</li>
              <li>❌ Indirekt skada eller förlorad vinst</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">9.2 Maximal ersättning</h3>
            <p className="text-gray-300">
              Vårt maximala ansvar är begränsat till det belopp du betalat för tjänsten under de senaste 12 månaderna.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Uppsägning</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">10.1 Du kan avsluta</h3>
            <p className="text-gray-300 mb-4">Du kan när som helst:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Avsluta din prenumeration (via App Store)</li>
              <li>Radera ditt konto (via appen)</li>
              <li>Sluta använda tjänsten</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">10.2 Vi kan avsluta</h3>
            <p className="text-gray-300 mb-4">Vi förbehåller oss rätten att:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Stänga av eller radera konton som bryter mot dessa villkor</li>
              <li>Avsluta tjänsten helt (med 30 dagars varsel)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">11. Ändringar i villkoren</h2>
            <p className="text-gray-300 mb-4">
              Vi kan uppdatera dessa villkor när som helst. Vi meddelar dig om betydande ändringar via appen.
            </p>
            <p className="text-gray-300 font-bold">
              Fortsatt användning efter ändringar innebär att du godkänner de nya villkoren.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">12. Lagval</h2>
            <p className="text-gray-300">
              Dessa villkor regleras av svensk lag. Tvister ska avgöras av svensk domstol.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">13. Kontakt</h2>
            <p className="text-gray-300"><strong>E-post:</strong> contact@tilk.app</p>
            <p className="text-gray-300 mt-4"><strong>Soors Ventures AB</strong></p>
            <p className="text-gray-300">Snickarvägen 12, Älvdalen</p>
            <p className="text-gray-300">796 30</p>
            <p className="text-gray-300">Organisationsnummer: 559558-8772</p>
          </section>

          <div className="bg-primary/10 border border-primary p-6 rounded-lg mt-12">
            <p className="text-gray-300 text-center">
              <strong>Genom att använda Tilk godkänner du dessa användarvillkor.</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer lang="sv" />
    </>
  )
}