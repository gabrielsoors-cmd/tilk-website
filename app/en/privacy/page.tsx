import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Tilk',
  description: 'Read about how Tilk collects, uses and protects your personal data.',
}

export default function PrivacyPageEN() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 bg-dark min-h-screen">
        <div className="max-w-4xl mx-auto prose prose-invert prose-primary">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy for Tilk</h1>
          
          <p className="text-gray-400 text-lg mb-12"><strong>Last updated: December 22, 2025</strong></p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to Tilk ("we", "us", "our"). We value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, share and protect your information when you use the Tilk app.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">2. Data Controller</h2>
            <p className="text-gray-300 leading-relaxed mb-4"><strong>Soors Ventures AB</strong></p>
            <p className="text-gray-300">Organization number: 559558-8772</p>
            <p className="text-gray-300">Email: contact@tilk.app</p>
            <p className="text-gray-300">Address: Snickarvägen 12, Älvdalen, Sweden</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">3. What Information Do We Collect?</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">3.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Audio Recordings:</strong> When you record meetings or conversations via Tilk</li>
              <li><strong>Transcriptions:</strong> Text generated from your recordings</li>
              <li><strong>Summaries:</strong> AI-generated summaries of your meetings</li>
              <li><strong>User Settings:</strong> Your preferences for templates and settings</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">3.2 Automatically Collected Information</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Device Identifier:</strong> A unique ID for your device (used to link your recordings to the correct account)</li>
              <li><strong>Usage Statistics:</strong> Number of minutes recorded, number of recordings</li>
              <li><strong>Technical Information:</strong> App version, iOS version, device model</li>
            </ul>

            <h3 className="text-2xl font-bold mb-3 mt-8">3.3 Information We DO NOT Collect</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>No personally identifiable information (name, email) required to use Tilk</li>
              <li>No location data</li>
              <li>No contact lists or other information from your device</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">4. How Do We Use Your Information?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Transcribe</strong> your recordings to text</li>
              <li><strong>Summarize</strong> meetings using AI</li>
              <li><strong>Save</strong> your recordings and summaries</li>
              <li><strong>Manage</strong> your subscription plan and usage limits</li>
              <li><strong>Improve</strong> the app based on usage patterns (anonymized)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">5. Sharing Information with Third Parties</h2>
            
            <h3 className="text-2xl font-bold mb-3 mt-8">5.1 OpenAI (Whisper & GPT-4o-mini)</h3>
            <p className="text-gray-300"><strong>What is sent:</strong> Audio recordings (for transcription) and text (for summarization)</p>
            <p className="text-gray-300"><strong>Why:</strong> To enable AI transcription and summarization</p>
            <p className="text-gray-300"><strong>Storage:</strong> OpenAI does NOT store data from API calls according to their policy</p>
            <p className="text-gray-300 mb-4">
              <strong>More info:</strong>{' '}
              <a href="https://openai.com/enterprise-privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://openai.com/enterprise-privacy
              </a>
            </p>
            <p className="text-gray-300 bg-darkCard border border-primary/30 p-4 rounded-lg">
              <strong>IMPORTANT:</strong> Your recordings are sent to OpenAI's servers (USA) for processing. Data is encrypted during transmission. After transcription, the audio file is deleted - only the text is saved.
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-8">5.2 Supabase (Database Storage)</h3>
            <p className="text-gray-300"><strong>What is stored:</strong> Transcriptions, summaries, user settings</p>
            <p className="text-gray-300"><strong>Why:</strong> So you can access your recordings from different devices</p>
            <p className="text-gray-300"><strong>Security:</strong> Encrypted transmission and storage, data isolated per user</p>
            <p className="text-gray-300 mb-4">
              <strong>More info:</strong>{' '}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://supabase.com/privacy
              </a>
            </p>

            <h3 className="text-2xl font-bold mb-3 mt-8">5.3 Apple (In-App Purchase)</h3>
            <p className="text-gray-300"><strong>What is sent:</strong> Purchase information for subscriptions</p>
            <p className="text-gray-300"><strong>Why:</strong> To handle your payments</p>
            <p className="text-gray-300">
              <strong>More info:</strong>{' '}
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://www.apple.com/legal/privacy/
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">6. How Long Is Your Data Stored?</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Audio Recordings:</strong> Deleted IMMEDIATELY after transcription (not permanently stored)</li>
              <li><strong>Transcriptions and Summaries:</strong> Stored until you delete them or close your account</li>
              <li><strong>User Data:</strong> Stored as long as you have an active account</li>
              <li><strong>Backup Data:</strong> May remain for up to 30 days in backup systems</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">7. Your Rights (GDPR)</h2>
            <p className="text-gray-300 mb-4">You have the right to:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>✅ <strong>Access</strong> all data we have about you</li>
              <li>✅ <strong>Delete</strong> your recordings and summaries at any time</li>
              <li>✅ <strong>Export</strong> your data in machine-readable format</li>
              <li>✅ <strong>Close</strong> your account and have all data deleted</li>
              <li>✅ <strong>Object</strong> to processing of your personal data</li>
              <li>✅ <strong>Complain</strong> to supervisory authority</li>
            </ul>
            <p className="text-gray-300 mt-6">
              <strong>To exercise your rights:</strong> Contact us at contact@tilk.app
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">8. Data Security</h2>
            <p className="text-gray-300 mb-4">We protect your data through:</p>
            <ul className="list-none text-gray-300 space-y-2 ml-4">
              <li>🔒 <strong>Encryption:</strong> All data is encrypted during transmission (HTTPS/TLS)</li>
              <li>🔒 <strong>Access Control:</strong> Only you can see your recordings (RLS policies)</li>
              <li>🔒 <strong>Secure Servers:</strong> Supabase uses industry-standard security</li>
              <li>🔒 <strong>Regular Updates:</strong> We continuously update security protocols</li>
            </ul>
            <p className="text-gray-300 mt-6 bg-darkCard border border-primary/30 p-4 rounded-lg">
              <strong>IMPORTANT:</strong> No security is 100%. We cannot guarantee absolute security, but we do everything we can to protect your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">9. Children</h2>
            <p className="text-gray-300">
              Tilk is not intended for children under 13 years. We do not knowingly collect information from children. If you are a parent and believe your child has used Tilk, contact us at contact@tilk.app
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this privacy policy from time to time. We will notify you of significant changes via the app or email (if you have provided an email address).
            </p>
            <p className="text-gray-300"><strong>Last update:</strong> December 22, 2025</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">11. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about this privacy policy or how we handle your data:
            </p>
            <p className="text-gray-300"><strong>Support:</strong> contact@tilk.app</p>
            <p className="text-gray-300 mt-4"><strong>Postal Address:</strong></p>
            <p className="text-gray-300">Soors Ventures AB</p>
            <p className="text-gray-300">Snickarvägen 12, Älvdalen</p>
            <p className="text-gray-300">796 30, Sweden</p>
          </section>

          <div className="bg-primary/10 border border-primary p-6 rounded-lg mt-12">
            <p className="text-gray-300 text-center">
              <strong>By using Tilk, you agree to this privacy policy.</strong>
            </p>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </>
  )
}