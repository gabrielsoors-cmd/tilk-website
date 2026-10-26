import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  path: 'enterprise',
  lang: 'en',
  title: 'Enterprise - Tilk',
  description: 'Custom solutions for companies. Custom templates, organization management and dedicated support.',
})

export default function EnterprisePageEN() {
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
                  For companies
                </div>
                <h1 className="font-genty text-3xl sm:text-5xl md:text-6xl font-medium mb-5 sm:mb-6 leading-tight text-gray-900">
                  Scale your meetings.<br />Save 10+ hours/week.
                </h1>
                <p className="text-base sm:text-xl text-gray-600 mb-7 sm:mb-8 max-w-xl mx-auto lg:mx-0">
                  Custom templates, organization management and dedicated support. Everything you need to make your meetings more productive.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <a
                    href="mailto:enterprise@tilk.app"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition hover:shadow-lg hover:shadow-primary/30"
                  >
                    Book demo →
                  </a>
                  <a
                    href="mailto:enterprise@tilk.app"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/10 transition"
                  >
                    Get quote
                  </a>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative max-w-[260px] sm:max-w-sm lg:max-w-none mx-auto mt-4 lg:mt-0">
                <Image
                  src="/images/tilk-enterprise-mote-tva-personer.png"
                  alt="Two colleagues in a business meeting documented by Tilk"
                  width={1122}
                  height={1402}
                  sizes="(max-width: 1024px) 100vw, 560px"
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
              Everything in Pro plan, plus
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
                  The only limit is your imagination, but here are some examples:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Meeting with decisions and responsible parties</li>
                  <li>• Sales call with next steps and follow-up</li>
                  <li>• Project meeting with budget and timeline</li>
                  <li>• Brainstorming with prioritized ideas</li>
                  <li>• Problem-solving with action plan</li>
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
                  Manage your team centrally:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Add/remove users</li>
                  <li>• Share summaries within team</li>
                  <li>• Role-based access (admin/user)</li>
                  <li>• Centralized billing for entire team</li>
                </ul>
              </div>

              <div className="bg-background border border-gray-200 rounded-card p-6 sm:p-8 hover:border-primary/40 hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">Dedicated Support</h3>
                <p className="text-gray-600 text-base sm:text-lg mb-4">
                  Premium support for your team:
                </p>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Priority email support</li>
                  <li>• Dedicated contact person</li>
                  <li>• Onboarding help for team</li>
                  <li>• SLA: Response within 4 hours</li>
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
                  alt="Tilk on Apple Watch during an on-the-go meeting"
                  width={1376}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="rounded-3xl shadow-xl shadow-primary/10 w-full h-auto"
                />
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="font-genty text-2xl sm:text-4xl md:text-5xl font-medium mb-5 sm:mb-6 text-gray-900">
                  Perfect for consulting and tech companies
                </h2>
                <p className="text-base sm:text-xl text-gray-600 mb-7 sm:mb-8">
                  Save time on administration and focus on what matters. Automate meeting notes, decision points and follow-ups.
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg">
                      <strong>Consulting firms:</strong> Bill exact time with automatic summaries of client meetings
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg">
                      <strong>Tech companies:</strong> Document sprints, retrospectives and stakeholder meetings efficiently
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg">
                      <strong>All industries:</strong> GDPR-compliant and secure data handling
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
              From 499 kr/month
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10">
              Pricing based on number of users and minutes. Contact us for a custom quote that fits your organization.
            </p>
            <a
              href="mailto:enterprise@tilk.app"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full text-lg sm:text-xl font-semibold hover:bg-primary/90 transition hover:shadow-lg hover:shadow-primary/30"
            >
              Contact us →
            </a>
            <p className="text-gray-500 mt-6">
              Response time: Within 24 hours
            </p>
          </div>
        </section>

        {/* Final Contact */}
        <section className="py-14 sm:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-genty text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-gray-900">
              Have questions?
            </h2>
            <p className="text-base sm:text-xl text-gray-600 mb-6">
              Our Enterprise team will help you find the right solution.
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
      <Footer lang="en" />
    </>
  )
}
