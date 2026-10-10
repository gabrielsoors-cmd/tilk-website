import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  path: 'enterprise',
  lang: 'sv',
  title: 'Enterprise - Tilk',
  description: 'Skräddarsydda lösningar för företag. Custom templates, organization management och dedikerad support.',
})

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="pt-28 pb-14 px-4 sm:pt-32 sm:pb-20 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Left: Text */}
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-5 sm:mb-6">
                  För företag
                </div>
                <h1 className="font-genty text-3xl sm:text-5xl md:text-6xl font-medium mb-5 sm:mb-6 leading-tight text-gray-900">
                  Skala era möten.<br />Spara 10+ timmar/vecka.
                </h1>
                <p className="text-base sm:text-xl text-gray-600 mb-7 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  Custom templates, organization management och dedikerad support. Allt ni behöver för att göra era möten mer produktiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href="mailto:enterprise@tilk.app"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition hover:shadow-lg hover:shadow-primary/30"
                  >
                    Boka demo →
                  </a>
                  <a
                    href="mailto:enterprise@tilk.app"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/10 transition"
                  >
                    Få offert
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative max-w-[260px] sm:max-w-sm lg:max-w-none mx-auto mt-4 lg:mt-0">
                <Image
                  src="/images/tilk-enterprise-mote-tva-personer.png"
                  alt="Två kollegor i ett företagsmöte som dokumenteras av Tilk"
                  width={1122}
                  height={1402}
                  className="rounded-3xl shadow-xl shadow-primary/10 w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-genty text-2xl sm:text-4xl md:text-5xl font-medium text-center mb-10 sm:mb-16 text-gray-900">
              Allt i Pro-planen, plus
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-background border border-gray-200 rounded-card p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Custom Templates</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4">
                  Här är det bara fantasin som sätter gränserna, men några förslag är:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Möte med beslutspunkter och ansvariga</li>
                  <li>• Sälj-samtal med nästa steg och uppföljning</li>
                  <li>• Projektmöte med budget och tidsplan</li>
                  <li>• Brainstorming med prioriterade idéer</li>
                  <li>• Problemlösning med åtgärdsplan</li>
                </ul>
              </div>

              <div className="bg-background border border-gray-200 rounded-card p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Organization Management</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4">
                  Hantera teamet centralt:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Lägg till/ta bort användare</li>
                  <li>• Dela sammanfattningar inom teamet</li>
                  <li>• Rollbaserad åtkomst (admin/user)</li>
                  <li>• Central fakturering för hela teamet</li>
                </ul>
              </div>

              <div className="bg-background border border-gray-200 rounded-card p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Dedikerad Support</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4">
                  Premium support för ert team:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Prioriterad email-support</li>
                  <li>• Dedikerad kontaktperson</li>
                  <li>• Onboarding-hjälp för teamet</li>
                  <li>• SLA: Svar inom 4 timmar</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Case with Image */}
        <section className="py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
              {/* Image */}
              <div className="max-w-[300px] sm:max-w-sm lg:max-w-none mx-auto order-2 lg:order-1">
                <Image
                  src="/images/tilk-smartwatch-antecknare.png"
                  alt="Tilk på Apple Watch under ett möte on-the-go"
                  width={1376}
                  height={768}
                  className="rounded-3xl shadow-xl shadow-primary/10 w-full h-auto"
                />
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="font-genty text-2xl sm:text-4xl md:text-5xl font-medium mb-5 sm:mb-6 text-gray-900">
                  Perfekt för konsult- och tech-företag
                </h2>
                <p className="text-base sm:text-xl text-gray-600 mb-7 sm:mb-8">
                  Spara tid på administration och fokusera på det som betyder något. Automatisera mötesanteckningar, beslutspunkter och uppföljning.
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg">
                      <strong>Konsultbolag:</strong> Fakturera exakt tid med automatiska sammanfattningar av kundmöten
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg">
                      <strong>Tech-företag:</strong> Dokumentera sprints, retrospectives och stakeholder meetings effektivt
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg">
                      <strong>Alla branscher:</strong> GDPR-compliant och säker datahantering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-genty text-2xl sm:text-4xl md:text-5xl font-medium mb-5 sm:mb-6 text-gray-900">
              Från 499 kr/månad
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10">
              Prissättning baserad på antal användare, minuter och typ av custom template. Kontakta oss för en skräddarsydd offert som passar er organisation.
            </p>
            <a
              href="mailto:enterprise@tilk.app"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:bg-primary/90 transition hover:shadow-lg hover:shadow-primary/30"
            >
              Kontakta oss →
            </a>
            <p className="text-gray-500 mt-6">
              Svarstid: Inom 24 timmar
            </p>
          </div>
        </section>

        {/* Final Contact */}
        <section className="py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-genty text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-gray-900">
              Har du frågor?
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-6">
              Vårt Enterprise-team hjälper dig hitta rätt lösning.
            </p>
            <a
              href="mailto:enterprise@tilk.app"
              className="text-primary text-lg sm:text-xl font-semibold hover:underline"
            >
              enterprise@tilk.app
            </a>
          </div>
        </section>
      </main>
      <Footer lang="sv" />
    </>
  )
}
