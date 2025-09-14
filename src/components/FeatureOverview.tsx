export function FeatureOverview() {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-blue-400/20 animate-pulse" 
                style={{ 
                  animationDelay: `${(i * 0.05)}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-48 h-48 bg-blue-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-600/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-600/5 animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-400/30 text-blue-300 font-bold text-lg mb-8 transition-all duration-500 hover:scale-110 hover:rotate-3 transform cursor-pointer group">
            <span className="mr-3 text-2xl transition-transform duration-300 group-hover:rotate-180">⚡</span>
            <span>BoltWW for inDrive</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block transition-all duration-700 hover:scale-110 hover:rotate-2 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              $500K+ Monthly
            </span>
            <br />
            <span className="inline-block transition-all duration-700 hover:scale-110 hover:-rotate-1 text-blue-300" style={{ animationDelay: '0.2s' }}>
              Savings Potential
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Unlock 
            <span className="text-blue-400 font-bold"> 30% efficiency gains </span>
            in driver allocation and reduce passenger wait times by 
            <span className="text-blue-400 font-bold"> 25% </span>
            through geospatial intelligence
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Business Impact for inDrive */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-gray-800/80 to-blue-900/30 p-8 rounded-3xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] transform group backdrop-blur-sm" id="driver-efficiency">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">🚗</div>
                <h3 className="text-2xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">Driver Allocation Optimization</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                <span className="text-blue-400 font-bold">+30% driver efficiency</span> through predictive positioning. 
                Process <span className="text-blue-400 font-bold">1.25M+ ride requests</span> to identify optimal driver 
                placement 15-30 minutes before peak demand hits. 
                <span className="text-green-400 font-bold">Result: $300K+ monthly savings</span> from reduced idle time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-gray-800/80 p-8 rounded-3xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] transform group backdrop-blur-sm" id="demand-prediction">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">📊</div>
                <h3 className="text-2xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">Demand Forecasting</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                <span className="text-blue-400 font-bold">-25% passenger wait time</span> with hexagonal demand analysis. 
                Real-time heatmaps reveal surge patterns 20 minutes ahead of competitors. 
                <span className="text-green-400 font-bold">Impact: +15% revenue per driver</span> through dynamic positioning.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-blue-900/30 p-8 rounded-3xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-[1.02] transform group backdrop-blur-sm" id="safety-scoring">
              <div className="flex items-center mb-6">
                <div className="text-5xl mr-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">🛡️</div>
                <h3 className="text-2xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">Safety & Risk Management</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                <span className="text-blue-400 font-bold">95% anomaly detection accuracy</span> for unusual routes and speed violations. 
                Automated alerts for driver safety with <span className="text-blue-400 font-bold">sub-second response</span>. 
                <span className="text-green-400 font-bold">Result: -40% safety incidents</span> and improved insurance rates.
              </p>
            </div>
          </div>

          {/* inDrive Integration Use Cases */}
          <div className="space-y-6">
            {[
              { icon: '🎯', title: 'Surge Zone Prediction', desc: 'Auto-detect demand spikes 20min ahead', savings: '$150K/month' },
              { icon: '🚗', title: 'Driver Repositioning', desc: 'Optimal placement algorithms', savings: '+30% efficiency' },
              { icon: '⚡', title: 'Real-time Matching', desc: 'Sub-second driver-passenger pairing', savings: '-25% wait time' },
              { icon: '📱', title: 'Mobile Integration', desc: 'Seamless API for inDrive app', savings: 'Zero downtime' },
              { icon: '🛡️', title: 'Safety Monitoring', desc: 'Live route anomaly detection', savings: '-40% incidents' },
              { icon: '💰', title: 'Revenue Optimization', desc: 'Dynamic pricing recommendations', savings: '+15% per driver' }
            ].map((useCase, index) => (
              <div 
                key={useCase.title}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/60 to-blue-900/20 border border-gray-600/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 transform group cursor-pointer backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                    {useCase.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-blue-300 transition-colors text-lg">
                      {useCase.title}
                    </h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {useCase.desc}
                    </p>
                    <p className="text-xs text-green-400 font-bold mt-1">
                      {useCase.savings}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Innovative Insights */}
        <div className="text-center mb-20" id="innovations">
          <h3 className="text-3xl font-bold text-white mb-12 transition-all duration-500 hover:scale-105">
            Unique <span className="text-blue-400">Innovation Insights</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-400/30 text-white transition-all duration-500 hover:scale-105 transform cursor-pointer group shadow-lg">
              <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-125">🔮</div>
              <h4 className="text-xl font-bold mb-4">Predictive Ghost Cars</h4>
              <p className="text-sm text-gray-300">Identify "phantom demand" zones where riders cancel due to long wait times. Deploy virtual driver presence to reduce cancellation rates by 45%.</p>
              <div className="text-xs text-green-400 font-bold mt-3">Innovation Score: 95%</div>
            </div>
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-400/30 text-white transition-all duration-500 hover:scale-105 transform cursor-pointer group shadow-lg">
              <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-125">🌊</div>
              <h4 className="text-xl font-bold mb-4">Traffic Wave Surfing</h4>
              <p className="text-sm text-gray-300">Detect traffic flow patterns to position drivers at "wave peaks" - 18 seconds ahead of optimal pickup points. Revolutionary timing algorithms.</p>
              <div className="text-xs text-green-400 font-bold mt-3">Efficiency Boost: +22%</div>
            </div>
            
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-400/30 text-white transition-all duration-500 hover:scale-105 transform cursor-pointer group shadow-lg">
              <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-125">🧬</div>
              <h4 className="text-xl font-bold mb-4">Route DNA Analysis</h4>
              <p className="text-sm text-gray-300">Extract "genetic patterns" from successful rides to clone high-performance routes. Create driver behavior templates that increase earnings by 28%.</p>
              <div className="text-xs text-green-400 font-bold mt-3">Patent Pending</div>
            </div>
          </div>
          
          {/* Additional Innovation Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-600">
              <div className="text-2xl font-bold text-blue-400">87%</div>
              <div className="text-sm text-gray-400">Anomaly Detection</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-600">
              <div className="text-2xl font-bold text-green-400">18sec</div>
              <div className="text-sm text-gray-400">Prediction Lead Time</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-600">
              <div className="text-2xl font-bold text-purple-400">99.7%</div>
              <div className="text-sm text-gray-400">Data Privacy Score</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-600">
              <div className="text-2xl font-bold text-orange-400">7</div>
              <div className="text-sm text-gray-400">Analytics Layers</div>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-1/4 left-10 text-blue-400 text-8xl animate-bounce opacity-10" style={{ animationDuration: '3s' }}>⚡</div>
      <div className="absolute bottom-1/3 right-20 text-blue-400 text-6xl animate-pulse opacity-20" style={{ animationDuration: '2s' }}>📊</div>
      <div className="absolute top-1/2 right-1/4 text-blue-400 text-7xl animate-ping opacity-15" style={{ animationDuration: '4s' }}>🗺️</div>
    </section>
  );
}