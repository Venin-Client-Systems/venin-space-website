import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4 max-w-lg">
        <h1 className="text-3xl font-light text-gray-900 mb-2">
          Venin Client Systems
        </h1>
        <p className="text-gray-500 text-lg mb-12">
          Building software for Australian businesses
        </p>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
            Our Products
          </p>
          <Link
            href="https://excisemate.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            ExciseMate
          </Link>
          <span className="text-gray-300 mx-2">—</span>
          <span className="text-gray-400 text-sm">excisemate.com.au</span>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <a
            href="mailto:investors@venin.space"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            investors@venin.space
          </a>
        </div>
      </div>
    </div>
  );
}
