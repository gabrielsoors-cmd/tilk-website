import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - Tilk',
  description: 'Read our terms of service for the Tilk app.',
}

export default function TermsPageEN() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto prose prose-invert prose-primary">
          <h1 className="text-5xl font-bold mb-6">Terms of Service for Tilk</h1>
          
          <p className="text-gray-400 text-lg mb-12"><strong>Last updated: December 22, 2025</strong></p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. General</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These terms of service ("Terms") govern your use of the Tilk app ("Service"), provided by Soors Ventures AB ("we", "us", "our").
            </p>
            <p className="text-gray-300 font-bold">
              By using Tilk, you agree to these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. What is Tilk?</h2>
            <p className="text-gray-300 mb-4">Tilk is a mobile app that:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Records meetings and conversations</li>
              <li>Transcribes audio to text (via OpenAI Whisper)</li>
              <li>Summarizes meetings with AI (via OpenAI GPT-4o-mini)</li>
              <li>Saves your recordings and summaries</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. Age Requirement</h2>
            <p className="text-gray-300">
              You must be at least 13 years old to use Tilk. If you are under 18, you must have permission from a guardian.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. Account and Subscriptions</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">4.1 Subscription Plans</h3>
            <p className="text-gray-300 mb-4">Tilk offers the following plans:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Free:</strong> 60 minutes/month (free)</li>
              <li><strong>Basic:</strong> 300 minutes/month (49 kr/month)</li>
              <li><strong>Pro:</strong> 1000 minutes/month (149 kr/month)</li>
              <li><strong>Enterprise:</strong> Custom packages (from 499 kr/month)</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">4.2 Payment</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Payments are handled via Apple In-App Purchase</li>
              <li>Subscriptions renew automatically monthly</li>
              <li>You can cancel anytime via App Store settings</li>
              <li>No refunds for partially used months</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">4.3 Usage Limits</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Recording time is counted per calendar month</li>
              <li>When exceeding limits, new recordings are blocked</li>
              <li>Free users get 5 extra minutes (grace period)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Use of Service</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">5.1 Permitted Use</h3>
            <p className="text-gray-300 mb-4">You may use Tilk to:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>✅ Record your own meetings and conversations</li>
              <li>✅ Transcribe and summarize your recordings</li>
              <li>✅ Share summaries with others (at your own risk)</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">5.2 Prohibited Use</h3>
            <p className="text-gray-300 mb-4">You may NOT use Tilk to:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>❌ Record anyone without their consent (illegal in Sweden)</li>
              <li>❌ Share recordings that violate confidentiality</li>
              <li>❌ Use the service for illegal purposes</li>
              <li>❌ Attempt to bypass usage limits</li>
              <li>❌ Share your account with others</li>
              <li>❌ Reverse-engineer or copy the app</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. Your Responsibility</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">6.1 Recordings</h3>
            <p className="text-gray-300 mb-4"><strong>YOU are responsible for:</strong></p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Obtaining consent from everyone being recorded (according to Swedish law)</li>
              <li>The content of your recordings</li>
              <li>Following confidentiality rules (e.g., at work)</li>
              <li>Not violating others' privacy</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">6.2 Legal Compliance</h3>
            <p className="text-gray-300 mb-4">
              Tilk takes NO legal responsibility for how you use the service. It is YOUR responsibility to follow:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Swedish law on consent to recording</li>
              <li>GDPR and data protection laws</li>
              <li>Workplace policies</li>
              <li>Confidentiality agreements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Intellectual Property Rights</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">7.1 Who Owns What?</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>You own:</strong> Your recordings, transcriptions and summaries</li>
              <li><strong>We own:</strong> The Tilk app, code, trademark, design</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">7.2 License</h3>
            <p className="text-gray-300">
              We grant you a non-exclusive, non-transferable license to use Tilk according to these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. AI-Generated Content</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">8.1 Accuracy</h3>
            <p className="text-gray-300 mb-4">AI summaries are generated automatically and may contain:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>❌ Inaccuracies</li>
              <li>❌ Misunderstandings</li>
              <li>❌ Incompleteness</li>
            </ul>
            <p className="text-gray-300 mt-6 bg-darkCard border border-primary/30 p-4 rounded-lg">
              <strong>You are responsible for checking and verifying all AI-generated summaries.</strong>
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-8">8.2 No Guarantee</h3>
            <p className="text-gray-300 mb-4">We do NOT guarantee that:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Transcriptions are 100% accurate</li>
              <li>Summaries are complete</li>
              <li>The service works without errors</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Limitation of Liability</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">9.1 Service Provided "AS IS"</h3>
            <p className="text-gray-300 mb-4">Tilk is provided without warranties of any kind. We are NOT responsible for:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>❌ Lost data</li>
              <li>❌ Incorrect transcriptions</li>
              <li>❌ Missed recordings</li>
              <li>❌ Data leaks from third parties (OpenAI, Apple)</li>
              <li>❌ Indirect damage or lost profits</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">9.2 Maximum Compensation</h3>
            <p className="text-gray-300">
              Our maximum liability is limited to the amount you paid for the service during the last 12 months.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Termination</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">10.1 You Can Terminate</h3>
            <p className="text-gray-300 mb-4">You can at any time:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Cancel your subscription (via App Store)</li>
              <li>Delete your account (via the app)</li>
              <li>Stop using the service</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">10.2 We Can Terminate</h3>
            <p className="text-gray-300 mb-4">We reserve the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Suspend or delete accounts that violate these terms</li>
              <li>Terminate the service entirely (with 30 days notice)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We may update these terms at any time. We will notify you of significant changes via the app.
            </p>
            <p className="text-gray-300 font-bold">
              Continued use after changes means you accept the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">12. Governing Law</h2>
            <p className="text-gray-300">
              These terms are governed by Swedish law. Disputes shall be resolved by Swedish courts.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">13. Contact</h2>
            <p className="text-gray-300"><strong>Email:</strong> contact@tilk.app</p>
            <p className="text-gray-300 mt-4"><strong>Soors Ventures AB</strong></p>
            <p className="text-gray-300">Snickarvägen 12, Älvdalen</p>
            <p className="text-gray-300">796 30, Sweden</p>
            <p className="text-gray-300">Organization number: 559558-8772</p>
          </section>

          <div className="bg-primary/10 border border-primary p-6 rounded-lg mt-12">
            <p className="text-gray-300 text-center">
              <strong>By using Tilk, you agree to these terms of service.</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  )
}