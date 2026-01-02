export const metadata = {
  title: 'Privacy Policy - Blood Draw Timer',
  description: 'Privacy policy for Blood Draw Timer.',
}

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy <span className="text-red-600">Policy</span></h1>
      <div className="prose prose-red max-w-none">
        <p className="text-gray-600 mb-6">Last updated: January 2026</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">No Data Collection</h2>
        <p className="text-gray-600 mb-4">Blood Draw Timer is designed with privacy as a priority. We do not collect any personal or patient information. All timer functions run locally in your browser.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">HIPAA Compliance</h2>
        <p className="text-gray-600 mb-4">Since no patient data is collected, stored, or transmitted, this tool does not create any HIPAA compliance concerns for your facility.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
        <p className="text-gray-600 mb-4">We may use essential cookies to ensure the website functions properly. These cookies do not track personal information.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Analytics</h2>
        <p className="text-gray-600 mb-4">We may use anonymous analytics to understand how visitors use our site. No personally identifiable information is collected.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
        <p className="text-gray-600">If you have questions about this privacy policy, please contact us.</p>
      </div>
    </main>
  )
}
