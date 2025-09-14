import { Link } from 'react-router-dom';

export function LandingHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white animate-in fade-in duration-1000 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-8 h-full opacity-20">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 animate-in slide-in-from-top duration-700 delay-200">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 border border-blue-400 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg transform group">
              <span className="transition-transform duration-300 group-hover:scale-110 inline-block mr-2">⚡</span>
              <span>Advanced Geospatial Analytics Platform</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-in slide-in-from-bottom duration-800 delay-300">
            <span className="inline-block transition-transform duration-500 hover:scale-105 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              BoltWW
            </span>
            <br />
            <span className="inline-block transition-transform duration-500 hover:scale-105 delay-100 text-blue-300">
              Analytics Engine
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-gray-300 animate-in slide-in-from-bottom duration-800 delay-500 max-w-4xl mx-auto">
            Transforming geospatial data into actionable insights with 
            <span className="text-blue-400 font-bold"> cutting-edge visualization technology</span>
          </h2>

          {/* Feature Icons */}
          <div className="flex justify-center space-x-8 mb-12 animate-in slide-in-from-bottom duration-800 delay-600">
            <div className="text-center group">
              <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">🗺️</div>
              <div className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">Interactive Maps</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">📊</div>
              <div className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">Real-time Analytics</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">⚡</div>
              <div className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">Lightning Fast</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">🔒</div>
              <div className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors">Privacy-First</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center my-12 animate-in slide-in-from-bottom duration-800 delay-700">
            <Link 
              to="/dashboard"
              className="px-8 py-4 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl transform shadow-lg group inline-block text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border border-blue-400"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Open Dashboard</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">📊</span>
              </span>
            </Link>
            <Link
              to="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-lg text-xl font-semibold border-2 border-gray-600 text-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800 hover:border-blue-500 hover:text-white transform group"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-in slide-in-from-bottom duration-800 delay-1000">
            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 transform group">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">1.25M+</div>
              <div className="text-gray-400 group-hover:text-white transition-colors">Data Points Analyzed</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 transform group">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">7</div>
              <div className="text-gray-400 group-hover:text-white transition-colors">Analytics Layers</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 transform group">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">Real-time</div>
              <div className="text-gray-400 group-hover:text-white transition-colors">Data Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-10 text-blue-400 text-6xl animate-bounce opacity-20">⚡</div>
      <div className="absolute bottom-20 right-10 text-blue-400 text-4xl animate-pulse opacity-30">📊</div>
      <div className="absolute top-1/2 right-20 text-blue-400 text-5xl animate-ping opacity-20">🗺️</div>
    </section>
  );
}