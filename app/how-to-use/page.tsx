export const metadata = {
  title: 'How to Use - Blood Draw Timer',
  description: 'Learn how to use Blood Draw Timer to track tourniquet time and collection duration.',
}

export default function HowToUsePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">How to <span className="text-red-600">Use</span></h1>
      <div className="space-y-8">
        <section className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Apply Tourniquet</h2>
          <p className="text-gray-600">When you apply the tourniquet to the patient&apos;s arm, click &quot;Start Tourniquet&quot; to begin timing.</p>
        </section>
        <section className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Monitor the Timer</h2>
          <p className="text-gray-600">Watch the color-coded indicator. Green means safe, yellow is caution, orange is warning, and red means you should release immediately.</p>
        </section>
        <section className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Track Collection</h2>
          <p className="text-gray-600">Use the collection timer to track the total procedure duration for quality assurance documentation.</p>
        </section>
        <section className="bg-white rounded-xl p-6 shadow-sm border border-red-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Release & Reset</h2>
          <p className="text-gray-600">Click &quot;Release Tourniquet&quot; when done, and &quot;Reset All Timers&quot; to prepare for the next patient.</p>
        </section>
        <section className="bg-red-50 rounded-xl p-6 border border-red-100">
          <h2 className="text-xl font-bold text-red-700 mb-2">Important</h2>
          <p className="text-red-600">The 1-minute tourniquet limit is a general guideline. Always follow your facility&apos;s specific protocols.</p>
        </section>
      </div>
    </main>
  )
}
