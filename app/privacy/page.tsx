import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Integritetspolicy - Tilk',
  description: 'Läs om hur Tilk samlar in, använder och skyddar dina personuppgifter.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto prose prose-invert prose-primary">
          <h1 className="text-5xl font-bold mb-6">Integritetspolicy för Tilk</h1>
          
          <p className="text-gray-400 text-lg mb-12"><strong>Senast uppdaterad: 22.12.2025</strong></p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Introduktion</h2>
            <p className="text-gray-300 leading-relaxed">
              Välkommen till Tilk ("vi", "oss", "vår"). Vi värnar om din integritet och är engagerade i att skydda dina personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder, delar och skyddar din information när du använder Tilk-appen.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Ansvarig för personuppgifter</h2>
            <p className="text-gray-300 leading-relaxed mb-4"><strong>Soors Ventures AB</strong></p>
            <p className="text-gray-300">Organisationsnummer: 559558-8772</p>
            <p className="text-gray-300">E-post: contact@tilk.app</p>
            <p className="text-gray-300">Adress: Snickarvägen 12, Älvdalen</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Vilken information samlar vi in?</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">3.1 Information du ger oss</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Ljudinspelningar:</strong> När du spelar in möten eller samtal via Tilk</li>
              <li><strong>Transkriptioner:</strong> Text som genereras från dina inspelningar</li>
              <li><strong>Sammanfattningar:</strong> AI-genererade sammanfattningar av dina möten</li>
              <li><strong>Användarinställningar:</strong> Dina preferenser för mallar och inställningar</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">3.2 Automatiskt insamlad information</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Enhetsidentifierare:</strong> En unik ID för din enhet (används för att koppla dina inspelningar till rätt konto)</li>
              <li><strong>Användningsstatistik:</strong> Antal minuter inspelat, antal inspelningar</li>
              <li><strong>Teknisk information:</strong> App-version, iOS-version, enhetsmodell</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">3.3 Information vi INTE samlar in</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Ingen personlig identifierbar information (namn, e-post) krävs för att använda Tilk</li>
              <li>Inga lokaliseringsdata</li>
              <li>Inga kontaktlistor eller annan information från din enhet</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Hur använder vi din information?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">Vi använder din information för att:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Transkribera</strong> dina inspelningar till text</li>
              <li><strong>Sammanfatta</strong> möten med hjälp av AI</li>
              <li><strong>Spara</strong> dina inspelningar och sammanfattningar</li>
              <li><strong>Hantera</strong> din prenumerationsplan och användningsgränser</li>
              <li><strong>Förbättra</strong> appen baserat på användningsmönster (anonymiserat)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Delning av information med tredje part</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">5.1 OpenAI (Whisper & GPT-4o-mini)</h3>
            <p className="text-gray-300"><strong>Vad skickas:</strong> Ljudinspelningar (för transkribering) och text (för sammanfattning)</p>
            <p className="text-gray-300"><strong>Varför:</strong> För att möjliggöra AI-transkribering och sammanfattning</p>
            <p className="text-gray-300"><strong>Lagring:</strong> OpenAI sparar INTE data från API-anrop enligt deras policy</p>
            <p className="text-gray-300 mb-4">
              <strong>Mer info:</strong>{' '}
              <a href="https://openai.com/enterprise-privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://openai.com/enterprise-privacy
              </a>
            </p>
            <p className="text-gray-300 bg-darkCard border border-primary/30 p-4 rounded-lg">
              <strong>VIKTIGT:</strong> Dina inspelningar skickas till OpenAI's servrar (USA) för bearbetning. Data är krypterad under överföring. Efter transkribering raderas ljudfilen - endast texten sparas.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-8">5.2 Supabase (Databaslagring)</h3>
            <p className="text-gray-300"><strong>Vad lagras:</strong> Transkriptioner, sammanfattningar, användarinställningar</p>
            <p className="text-gray-300"><strong>Varför:</strong> För att du ska kunna komma åt dina inspelningar från olika enheter</p>
            <p className="text-gray-300"><strong>Säkerhet:</strong> Krypterad överföring och lagring, data isolerad per användare</p>
            <p className="text-gray-300 mb-4">
              <strong>Mer info:</strong>{' '}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://supabase.com/privacy
              </a>
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-8">5.3 Apple (In-App Purchase)</h3>
            <p className="text-gray-300"><strong>Vad skickas:</strong> Köpinformation för prenumerationer</p>
            <p className="text-gray-300"><strong>Varför:</strong> För att hantera dina betalningar</p>
            <p className="text-gray-300">
              <strong>Mer info:</strong>{' '}
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.apple.com/legal/privacy/
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Hur länge sparas din data?</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Ljudinspelningar:</strong> Raderas OMEDELBART efter transkribering (sparas inte permanent)</li>
              <li><strong>Transkriptioner och sammanfattningar:</strong> Sparas tills du raderar dem eller avslutar ditt konto</li>
              <li><strong>Användardata:</strong> Sparas så länge du har ett aktivt konto</li>
              <li><strong>Backup-data:</strong> Kan finnas kvar i upp till 30 dagar i backup-system</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Dina rättigheter (GDPR)</h2>
            <p className="text-gray-300 mb-4">Du har rätt att:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>✅ <strong>Få tillgång</strong> till all data vi har om dig</li>
              <li>✅ <strong>Radera</strong> dina inspelningar och sammanfattningar när som helst</li>
              <li>✅ <strong>Exportera</strong> din data i maskinläsbart format</li>
              <li>✅ <strong>Avsluta</strong> ditt konto och få all data raderad</li>
              <li>✅ <strong>Invända</strong> mot behandling av dina personuppgifter</li>
              <li>✅ <strong>Klaga</strong> hos tillsynsmyndighet (Integritetsskyddsmyndigheten)</li>
            </ul>
            <p className="text-gray-300 mt-6">
              <strong>För att utöva dina rättigheter:</strong> Kontakta oss på contact@tilk.app
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. Datasäkerhet</h2>
            <p className="text-gray-300 mb-4">Vi skyddar din data genom:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>🔒 <strong>Kryptering:</strong> All data krypteras under överföring (HTTPS/TLS)</li>
              <li>🔒 <strong>Åtkomstkontroll:</strong> Endast du kan se dina inspelningar (RLS policies)</li>
              <li>🔒 <strong>Säkra servrar:</strong> Supabase använder branschstandard säkerhet</li>
              <li>🔒 <strong>Regelbundna uppdateringar:</strong> Vi uppdaterar säkerhetsprotokoll kontinuerligt</li>
            </ul>
            <p className="text-gray-300 mt-6 bg-darkCard border border-primary/30 p-4 rounded-lg">
              <strong>VIKTIGT:</strong> Ingen säkerhet är 100%. Vi kan inte garantera absolut säkerhet, men vi gör allt vi kan för att skydda din data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Barn</h2>
            <p className="text-gray-300">
              Tilk är inte avsedd för barn under 13 år. Vi samlar inte medvetet in information från barn. Om du är förälder och tror att ditt barn har använt Tilk, kontakta oss på contact@tilk.app
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Ändringar i denna policy</h2>
            <p className="text-gray-300 mb-4">
              Vi kan uppdatera denna integritetspolicy från tid till annan. Vi meddelar dig om betydande ändringar via appen eller e-post (om du har angett en e-postadress).
            </p>
            <p className="text-gray-300"><strong>Senaste uppdatering:</strong> 22.12.2025</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">11. Kontakta oss</h2>
            <p className="text-gray-300 mb-4">
              Om du har frågor om denna integritetspolicy eller hur vi hanterar din data:
            </p>
            <p className="text-gray-300"><strong>Support:</strong> contact@tilk.app</p>
            <p className="text-gray-300 mt-4"><strong>Postadress:</strong></p>
            <p className="text-gray-300">Soors Ventures AB</p>
            <p className="text-gray-300">Snickarvägen 12, Älvdalen</p>
            <p className="text-gray-300">796 30</p>
          </section>

          <div className="bg-primary/10 border border-primary p-6 rounded-lg mt-12">
            <p className="text-gray-300 text-center">
              <strong>Genom att använda Tilk godkänner du denna integritetspolicy.</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer lang="sv" />
    </>
  )
}