export const metadata = {
  title: 'FAQ - Blood Draw Timer',
  description: 'Frequently asked questions about Blood Draw Timer and phlebotomy timing.',
}

const faqs = [
  { q: 'Why is tourniquet time important?', a: 'Prolonged tourniquet application (>1 minute) can cause hemoconcentration, which affects the accuracy of certain lab tests like potassium, protein, and cell counts.' },
  { q: 'What is the recommended tourniquet time?', a: 'Most guidelines recommend releasing the tourniquet within 1 minute of application. Some tests may require even shorter times.' },
  { q: 'Can I use this on my phone?', a: 'Yes! The timer is fully responsive and works great on smartphones and tablets, perfect for bedside use.' },
  { q: 'Is this tool HIPAA compliant?', a: 'Yes. This tool runs entirely in your browser and does not collect, store, or transmit any patient data.' },
  { q: 'What do the colors mean?', a: 'Green (0-30s) is safe, Yellow (30-45s) is caution, Orange (45-60s) is warning, and Red (60s+) means release immediately.' },
  { q: 'Should I always follow the 1-minute rule?', a: 'The 1-minute guideline is standard, but always follow your facility\'s specific protocols as they may vary based on the tests being performed.' },
  { q: 'Is this tool free?', a: 'Yes, Blood Draw Timer is completely free to use with no limitations or registration required.' },
]

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked <span className="text-red-600">Questions</span></h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
            <h2 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h2>
            <p className="text-gray-600">{faq.a}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
