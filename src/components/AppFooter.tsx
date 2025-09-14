export function AppFooter() {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-700 animate-in fade-in duration-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="animate-in slide-in-from-bottom duration-800 delay-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center">
                <span className="text-3xl font-bold text-white transition-all duration-300 hover:scale-105 transform">
                  BOLT
                </span>
                <span className="text-3xl font-bold text-blue-400 transition-all duration-300 hover:scale-105 transform ml-0.5">
                  WW
                </span>
                <div className="ml-2 text-blue-400 transition-all duration-300 hover:rotate-12 transform">
                  ⚡
                </div>
              </div>
            </div>
            <p className="text-gray-300 transition-colors duration-300 hover:text-white max-w-sm">
              Advanced geospatial analytics platform transforming data into actionable insights 
              with cutting-edge visualization technology.
            </p>
          </div>

          {/* Core Features */}
          <div className="animate-in slide-in-from-bottom duration-800 delay-400">
            <h4 className="text-lg font-semibold mb-4 text-blue-400 transition-colors duration-300 hover:text-blue-300">Core Features</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-2 transform cursor-pointer">
                <span className="text-blue-400">⚡</span>
                <span>Real-time Analytics</span>
              </li>
              <li className="flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-2 transform cursor-pointer">
                <span className="text-blue-400">🗺️</span>
                <span>Interactive Maps</span>
              </li>
              <li className="flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-2 transform cursor-pointer">
                <span className="text-blue-400">🔒</span>
                <span>Privacy Protection</span>
              </li>
              <li className="flex items-center space-x-2 transition-all duration-300 hover:text-white hover:translate-x-2 transform cursor-pointer">
                <span className="text-blue-400">📊</span>
                <span>Advanced Visualization</span>
              </li>
            </ul>
          </div>

          {/* Technology & Contact */}
          <div className="animate-in slide-in-from-bottom duration-800 delay-600">
            <h4 className="text-lg font-semibold mb-4 text-blue-400 transition-colors duration-300 hover:text-blue-300">Technology Stack</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex flex-wrap gap-2">
                {['React 19', 'TypeScript', 'Leaflet', 'TailwindCSS'].map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs bg-gray-800 rounded border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-2 text-gray-400">Data Processing</h5>
                <p className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  Processing 1.25M+ data points with advanced anonymization techniques
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center animate-in slide-in-from-bottom duration-800 delay-800">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">BOLT</span>
              <span className="text-2xl font-bold text-blue-400">WW</span>
              <span className="text-blue-400">⚡</span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Advanced Analytics Platform</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">
              Terms of Service
            </span>
            <span className="flex items-center space-x-1 hover:text-white transition-colors duration-300">
              <span>© 2025 BoltWW</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}