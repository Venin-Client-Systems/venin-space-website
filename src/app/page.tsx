export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Venin Client Systems
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Professional software solutions for Australian businesses
        </p>
        <div className="space-y-4">
          <a
            href="/excisemate"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            ExciseMate - Distillery Compliance Software
          </a>
        </div>
      </div>
    </main>
  )
}
