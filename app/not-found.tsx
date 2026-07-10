import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center px-6 text-center">
      {/* Big 404 */}
      <div className="relative select-none mb-6">
        <span className="text-[180px] md:text-[220px] font-extrabold text-[#161b22] leading-none">
          404
        </span>
        <span className="absolute inset-0 flex items-center justify-center text-[180px] md:text-[220px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 opacity-20 leading-none blur-sm">
          404
        </span>
      </div>

      {/* Text */}
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-400 text-base md:text-lg max-w-md mb-10">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Go Home
        </Link>
        <Link
          href="/#contact"
          className="px-8 py-3 bg-[#161b22] hover:bg-[#21262d] text-gray-300 hover:text-white font-semibold rounded-lg border border-[#30363d] transition-colors duration-300"
        >
          Contact Me
        </Link>
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-cyan-500 filter blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-amber-500 filter blur-3xl" />
      </div>
    </div>
  );
}
