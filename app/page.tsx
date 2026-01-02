import ToolComponent from '@/components/tool/ToolComponent'

export const metadata = {
  title: 'Blood Draw Timer - Phlebotomy Timing Tool',
  description: 'Free online blood draw timer for phlebotomists. Track tourniquet time, collection duration, and ensure safe venipuncture procedures.',
}

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Blood Draw <span className="text-red-600">Timer</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Track tourniquet time and collection duration for safe, accurate blood draws.
        </p>
      </div>
      <ToolComponent />
      <section className="mt-16 prose prose-red max-w-none">
        <h2 className="text-2xl font-bold text-gray-900">Why Timing Matters</h2>
        <p className="text-gray-600">
          Proper timing during blood collection is crucial for patient safety and accurate test results. Prolonged tourniquet application can cause hemoconcentration, affecting lab values.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mt-8">Best Practices</h2>
        <p className="text-gray-600">
          The tourniquet should ideally be released within 1 minute of application. This timer helps you track both tourniquet time and total procedure duration for quality assurance.
        </p>
      </section>
    </main>
  )
}
