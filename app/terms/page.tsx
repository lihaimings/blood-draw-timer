export const metadata = {
  title: 'Terms of Service - Blood Draw Timer',
  description: 'Terms of service for Blood Draw Timer.',
}

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of <span className="text-red-600">Service</span></h1>
      <div className="prose prose-red max-w-none">
        <p className="text-gray-600 mb-6">Last updated: January 2026</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
        <p className="text-gray-600 mb-4">By using Blood Draw Timer, you agree to these terms of service.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Medical Disclaimer</h2>
        <p className="text-gray-600 mb-4">This tool is provided for reference purposes only. It is not a substitute for professional medical training or your facility&apos;s protocols. Always follow established guidelines and procedures for blood collection.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Service</h2>
        <p className="text-gray-600 mb-4">Blood Draw Timer is provided free of charge for healthcare professionals. You may use the tool to assist with timing during venipuncture procedures.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">We are not liable for any outcomes resulting from the use of this tool. Healthcare professionals are responsible for following proper procedures and protocols.</p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
        <p className="text-gray-600">We may update these terms at any time. Continued use of the service constitutes acceptance of any changes.</p>
      </div>
    </main>
  )
}
