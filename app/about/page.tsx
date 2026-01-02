export const metadata = {
  title: 'About - Blood Draw Timer',
  description: 'Learn about Blood Draw Timer, a free tool for phlebotomists to track venipuncture timing.',
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About <span className="text-red-600">BloodDrawTimer</span></h1>
      <div className="prose prose-red max-w-none">
        <p className="text-lg text-gray-600 mb-6">
          Blood Draw Timer is a free tool designed specifically for phlebotomists and healthcare professionals who perform venipuncture procedures.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We aim to support healthcare professionals in maintaining best practices during blood collection. Proper timing ensures patient safety and accurate laboratory results.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Tourniquet timer with visual warnings</li>
          <li>Collection duration tracking</li>
          <li>Color-coded safety indicators</li>
          <li>Mobile-friendly for bedside use</li>
          <li>No registration required</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
        <p className="text-gray-600">
          This tool is for reference only. Always follow your facility&apos;s protocols and guidelines for blood collection procedures.
        </p>
      </div>
    </main>
  )
}
