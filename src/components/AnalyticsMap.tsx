import { useState } from 'react';
import { MainAnalyticsMap } from './analytics/MainAnalyticsMap';
import { AnalyticsProvider, useMap, useLayerMetadata } from '../providers/AnalyticsProvider';

interface DataLayer {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

function AnalyticsMapContent() {
  const [isMobileLayersOpen, setIsMobileLayersOpen] = useState(false);
  const { 
    activeLayers, 
    toggleLayer, 
    enableAllLayers, 
    clearAllLayers, 
    isLoading, 
    error,
    analysisData 
  } = useMap();
  
  const layerMetadata = useLayerMetadata();
  
  // Updated data layers with correct IDs matching the analysis data
  const dataLayers: DataLayer[] = [
    {
      id: 'routes',
      name: 'Popular Routes',
      description: layerMetadata.routes?.description || 'Most frequently used transportation paths',
      icon: '🛣️',
      color: '#3B82F6'
    },
    {
      id: 'demand',
      name: 'Demand Visualization',
      description: layerMetadata.demand?.description || 'High-demand areas for transportation services',
      icon: '🔥',
      color: '#FF6B6B'
    },
    {
      id: 'availability',
      name: 'Driver Distribution',
      description: layerMetadata.availability?.description || 'Current driver availability across regions',
      icon: '🚗',
      color: '#4ECDC4'
    },
    {
      id: 'violations',
      name: 'Speed Violations',
      description: layerMetadata.violations?.description || 'Routes with excessive speed incidents',
      icon: '⚡',
      color: '#FF4757'
    },
    {
      id: 'anomalies',
      name: 'Unusual Trips',
      description: layerMetadata.anomalies?.description || 'Anomaly detection in travel patterns',
      icon: '⚠️',
      color: '#FFE66D'
    },
    {
      id: 'traffic_jams',
      name: 'Traffic Jams',
      description: layerMetadata.traffic_jams?.description || 'Congestion areas identification',
      icon: '🚦',
      color: '#E74C3C'
    },
    {
      id: 'speed_zones',
      name: 'Speed Zones',
      description: layerMetadata.speed_zones?.description || 'Speed pattern visualization',
      icon: '📈',
      color: '#9B59B6'
    }
  ];

  // Filter layers based on available data
  const availableLayers = dataLayers.filter(layer => {
    const layerData = analysisData?.layers[layer.id as keyof typeof analysisData.layers];
    if (!layerData) return false;
    
    // Check if it's an array (for violations, anomalies, traffic_jams)
    if (Array.isArray(layerData) && layerData.length > 0) {
      return true;
    }
    
    // Check if it has points property (for routes, speed_zones)
    if ('points' in layerData && layerData.points && layerData.points.length > 0) {
      return true;
    }
    
    // Check if it has hexagons property (for demand, availability)
    if ('hexagons' in layerData && layerData.hexagons && layerData.hexagons.length > 0) {
      return true;
    }
    
    return false;
  });

  return (
    <div className="h-full bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 h-full">
          {Array.from({ length: 256 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-blue-400/10 animate-pulse" 
              style={{ 
                animationDelay: `${(i * 0.02)}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="flex h-full relative z-10">
        {/* Desktop Sidebar - Hidden on Mobile */}
        <div className="hidden lg:flex w-80 bg-gradient-to-b from-gray-800/90 to-gray-900/90 border-r border-blue-400/20 flex-col h-full animate-in slide-in-from-left duration-800 delay-300 backdrop-blur-sm">
          {/* Scrollable Data Layers Section - Limited Height */}
          <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-8 p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-400/30">
                <div className="text-blue-400 text-3xl animate-pulse">📊</div>
                <div>
                  <h2 className="text-xl font-bold text-white transition-transform duration-300 hover:scale-105">
                    Analytics Dashboard
                  </h2>
                  <p className="text-xs text-blue-300 opacity-80">Real-time Data Layers</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {availableLayers.map((layer, index) => (
                  <div
                    key={layer.id}
                    className={`p-5 rounded-2xl border-2 transition-all duration-500 cursor-pointer hover:scale-[1.05] transform animate-in slide-in-from-left group ${
                      activeLayers.includes(layer.id) 
                        ? 'border-opacity-100 shadow-2xl shadow-blue-500/20' 
                        : 'border-gray-600/50 hover:border-blue-400/50'
                    }`}
                    style={{ 
                      borderColor: activeLayers.includes(layer.id) ? layer.color : undefined,
                      background: activeLayers.includes(layer.id) 
                        ? `linear-gradient(135deg, ${layer.color}25, ${layer.color}10)` 
                        : 'linear-gradient(135deg, rgba(55, 65, 81, 0.6), rgba(31, 41, 55, 0.4))',
                      animationDelay: `${600 + (index * 100)}ms`
                    }}
                    onClick={() => toggleLayer(layer.id)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <span className="text-3xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 block">
                            {layer.icon}
                          </span>
                          {activeLayers.includes(layer.id) && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors duration-300">
                            {layer.name}
                          </h3>
                        </div>
                      </div>
                      <div 
                        className={`w-5 h-5 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                          activeLayers.includes(layer.id) 
                            ? 'bg-current border-current' 
                            : 'border-gray-300'
                        }`}
                        style={{ 
                          color: activeLayers.includes(layer.id) ? layer.color : undefined 
                        }}
                      >
                        {activeLayers.includes(layer.id) && (
                          <div className="w-full h-full flex items-center justify-center animate-in zoom-in duration-200">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 opacity-80 group-hover:opacity-100 group-hover:text-white transition-all duration-300 leading-relaxed">
                      {layer.description}
                    </p>
                    {activeLayers.includes(layer.id) && (
                      <div className="mt-4 pt-3 border-t border-gray-600/50 animate-in slide-in-from-bottom duration-300">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: layer.color }}></div>
                            <span style={{ color: layer.color }} className="font-semibold transition-all duration-300 hover:scale-105">
                              ACTIVE
                            </span>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-400 opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                            <span>Live</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fixed Controls at Bottom - Guaranteed Space */}
          <div className="border-t border-blue-400/20 p-6 bg-gradient-to-t from-gray-900/95 to-gray-800/90 animate-in slide-in-from-bottom duration-800 delay-1000 flex-shrink-0 backdrop-blur-sm" style={{ minHeight: '160px' }}>
            <div className="space-y-3">
              <div className="space-y-4">
                <button
                  onClick={enableAllLayers}
                  className="w-full px-6 py-4 rounded-xl text-sm font-bold transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl transform bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white border border-blue-400/50 shadow-lg shadow-blue-500/25 group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <span className="transition-transform duration-300 group-hover:rotate-12">🚀</span>
                    <span>Enable All Layers</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">⚡</span>
                  </div>
                </button>
                <button
                  onClick={clearAllLayers}
                  className="w-full px-6 py-4 rounded-xl text-sm font-bold border-2 border-gray-600/50 text-gray-300 transition-all duration-500 hover:scale-[1.05] hover:shadow-xl transform hover:bg-gradient-to-r hover:from-red-600/20 hover:to-red-800/20 hover:border-red-500/50 hover:text-white group"
                >
                  <div className="flex items-center justify-center space-x-3">
                    <span className="transition-transform duration-300 group-hover:rotate-180">🗑️</span>
                    <span>Clear All Layers</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative animate-in slide-in-from-right duration-800 delay-500">
          <>
            {/* Loading State */}
            {isLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-950/90 to-gray-900/95 flex items-center justify-center z-20 backdrop-blur-sm">
              <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-blue-400/30">
                <div className="relative mb-6">
                  <div className="w-20 h-20 border-4 border-blue-500/30 rounded-full animate-spin mx-auto"></div>
                  <div className="absolute inset-0 w-20 h-20 border-4 border-t-blue-400 border-r-blue-500 border-b-transparent border-l-transparent rounded-full animate-spin mx-auto" style={{ animationDuration: '1s' }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl animate-pulse">📊</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Loading Analytics</h3>
                <p className="text-sm text-gray-300 opacity-90">Preparing BoltWW visualization layers...</p>
                <div className="flex justify-center space-x-1 mt-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-red-950/80 to-gray-900/95 flex items-center justify-center z-20 backdrop-blur-sm">
              <div className="text-center max-w-md mx-auto p-8 rounded-3xl bg-gradient-to-br from-red-900/30 to-gray-800/50 border border-red-400/30">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500/20 to-red-700/20 border-2 border-red-500/50 flex items-center justify-center relative">
                  <span className="text-4xl animate-pulse">⚠️</span>
                  <div className="absolute inset-0 rounded-full bg-red-500/10 animate-ping"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-red-400">Analytics Error</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 hover:scale-105 transform font-bold border border-red-500/50 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <span>🔄</span>
                    <span>Reload Dashboard</span>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Success State - Real Map */}
          {!isLoading && !error && analysisData && (
            <MainAnalyticsMap 
              className="h-full w-full" 
              activeLayers={activeLayers}
            />
          )}

          {/* Fallback State */}
          {!isLoading && !error && !analysisData && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 flex items-center justify-center z-10">
              <div className="text-center max-w-lg mx-auto p-10 animate-in fade-in duration-1000 delay-800 rounded-3xl bg-gradient-to-br from-gray-800/50 to-blue-900/30 border border-blue-400/30 backdrop-blur-sm">
                <div className="relative mb-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600/30 to-blue-800/30 border-2 border-blue-400/50 flex items-center justify-center text-6xl transition-all duration-500 hover:scale-110 hover:rotate-12 transform">
                    📊
                  </div>
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-blue-500/10 animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white transition-transform duration-300 hover:scale-105">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Dashboard Ready</span>
                </h3>
                <p className="text-lg text-gray-300 opacity-90 mb-8 transition-opacity duration-300 hover:opacity-100 leading-relaxed">
                  BoltWW Analytics Dashboard is ready to visualize your geospatial data.
                </p>
                <div className="flex justify-center space-x-2">
                  {['🚀', '📊', '⚡'].map((emoji, i) => (
                    <div key={i} className="text-3xl animate-bounce" style={{ animationDelay: `${i * 0.3}s` }}>
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Active Layers Overlay */}
          {activeLayers.length > 0 && analysisData && (
            <div className="active-layers-overlay absolute top-6 right-6 bg-gradient-to-br from-gray-800/90 to-blue-900/30 border border-blue-400/30 rounded-2xl shadow-2xl p-5 max-w-xs animate-in slide-in-from-top duration-500 delay-1000 hidden lg:block z-10 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4 p-3 rounded-xl bg-blue-600/20 border border-blue-400/30">
                  <div className="text-blue-400 text-xl animate-pulse">📊</div>
                  <div>
                    <h4 className="font-bold text-white transition-colors duration-300 hover:text-blue-300">
                      Active Layers
                    </h4>
                    <p className="text-xs text-blue-300 opacity-80">{activeLayers.length} enabled</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {availableLayers
                    .filter(layer => activeLayers.includes(layer.id))
                    .map((layer, index) => (
                      <div key={layer.id} className="flex items-center space-x-2 text-sm transition-all duration-300 hover:scale-105 transform" style={{ animationDelay: `${1200 + (index * 100)}ms` }}>
                        <div 
                          className="w-3 h-3 rounded-full transition-transform duration-300 hover:scale-125" 
                          style={{ backgroundColor: layer.color }}
                        ></div>
                        <span className="text-gray-300 transition-colors duration-300 hover:text-white">{layer.name}</span>
                      </div>
                    ))}
                </div>
            </div>
          )}

          {/* Current Layer Legend - Bottom Right */}
          {activeLayers.length > 0 && analysisData && (
            <div className="layer-legend absolute bottom-6 right-6 bg-gradient-to-br from-gray-800/90 to-blue-900/30 border border-blue-400/30 rounded-2xl shadow-2xl p-6 max-w-sm hidden lg:block backdrop-blur-sm" style={{ zIndex: 1000 }}>
              <div className="flex items-center space-x-3 mb-4 p-3 rounded-xl bg-blue-600/20 border border-blue-400/30">
                <div className="text-blue-400 text-xl animate-pulse">🔍</div>
                <div>
                  <h4 className="font-bold text-white transition-colors duration-300 hover:text-blue-300">
                    Layer Analytics
                  </h4>
                  <p className="text-xs text-blue-300 opacity-80">Live Data Insights</p>
                </div>
              </div>
              <div className="space-y-2">
                {availableLayers
                  .filter(layer => activeLayers.includes(layer.id))
                  .map((layer) => {
                    // Get layer-specific descriptions
                    const getLayerDescription = (layerId: string) => {
                      switch (layerId) {
                        case 'routes':
                          return 'Most frequently used transportation paths (heatmap)';
                        case 'demand':
                          return 'High-demand areas for transportation services';
                        case 'availability':
                          return 'Current driver availability across regions';
                        case 'violations':
                          return 'Speed limit violations (>60 km/h)';
                        case 'anomalies':
                          return 'Unusual trip patterns and anomalies';
                        case 'traffic_jams':
                          return 'Traffic congestion areas';
                        case 'speed_zones':
                          return 'Speed pattern visualization (heatmap)';
                        default:
                          return layer.description;
                      }
                    };

                    return (
                      <div key={layer.id} className="layer-legend-item flex items-start space-x-3 transition-all duration-300 hover:scale-105 transform">
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <div 
                            className="w-4 h-4 rounded-sm flex-shrink-0" 
                            style={{ backgroundColor: layer.color }}
                          ></div>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-sm text-white transition-colors duration-300 hover:text-blue-300">
                            {layer.name}
                          </div>
                          <div className="text-xs mt-1 text-gray-300 opacity-80 transition-colors duration-300 hover:opacity-100 leading-relaxed">
                            {getLayerDescription(layer.id)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              
              {/* Data info */}
              <div className="mt-4 pt-4 border-t border-blue-400/20 bg-gradient-to-r from-blue-900/20 to-transparent rounded-lg p-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">Total Records:</span>
                    <span className="text-xs text-blue-300 font-bold">{analysisData.metadata.total_records.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">Active Layers:</span>
                    <span className="text-xs text-green-400 font-bold">{activeLayers.length} / {availableLayers.length}</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    <div className="w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                    <span className="text-xs text-green-400 font-medium">Real-time Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Bottom Panel */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 to-gray-800/90 border-t border-blue-400/30 shadow-2xl z-[1000] backdrop-blur-sm">
            {/* Mobile Data Layers Toggle Button */}
            <div className="p-4 border-b border-blue-400/20">
              <button
                onClick={() => setIsMobileLayersOpen(!isMobileLayersOpen)}
                className="w-full flex items-center justify-between px-5 py-4 bg-gradient-to-r from-gray-700/80 to-blue-900/30 rounded-2xl transition-all duration-500 hover:from-gray-600/80 hover:to-blue-800/40 border border-blue-400/20 group"
              >
                  <div className="flex items-center space-x-4">
                    <div className="text-xl text-blue-400 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">📊</div>
                    <div className="text-left">
                      <div className="font-bold text-white group-hover:text-blue-300 transition-colors">
                        Analytics Dashboard
                      </div>
                      <div className="text-xs text-blue-300 opacity-80">
                        {activeLayers.length} layers active
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <svg 
                      className={`w-5 h-5 text-blue-300 transition-transform duration-500 ${isMobileLayersOpen ? 'rotate-180' : ''} group-hover:text-white`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>

              {/* Mobile Data Layers Panel */}
              {isMobileLayersOpen && (
                <div className="max-h-80 overflow-y-auto animate-in slide-in-from-bottom duration-300">
                  <div className="p-4 space-y-3">
                    {/* Quick Controls */}
                    <div className="flex space-x-3 mb-6">
                      <button
                        onClick={enableAllLayers}
                        className="flex-1 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-500 hover:scale-[1.05] bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border border-blue-400/50 shadow-lg group"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span className="transition-transform duration-300 group-hover:rotate-12">🚀</span>
                          <span>Enable All</span>
                        </div>
                      </button>
                      <button
                        onClick={clearAllLayers}
                        className="flex-1 px-4 py-3 rounded-xl text-xs font-bold border border-gray-600/50 text-gray-300 transition-all duration-500 hover:scale-[1.05] hover:bg-red-600/20 hover:border-red-500/50 hover:text-white group"
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span className="transition-transform duration-300 group-hover:rotate-180">🗑️</span>
                          <span>Clear</span>
                        </div>
                      </button>
                    </div>

                    {/* Compact Layer List */}
                    {availableLayers.map((layer) => (
                      <button
                        key={layer.id}
                        onClick={() => toggleLayer(layer.id)}
                        className={`w-full p-4 rounded-2xl border-2 transition-all duration-500 text-left group ${
                          activeLayers.includes(layer.id) 
                            ? 'border-opacity-100 shadow-lg shadow-blue-500/20' 
                            : 'border-gray-600/50 hover:border-blue-400/50'
                        }`}
                        style={{ 
                          borderColor: activeLayers.includes(layer.id) ? layer.color : undefined,
                          background: activeLayers.includes(layer.id) 
                            ? `linear-gradient(135deg, ${layer.color}30, ${layer.color}10)` 
                            : 'linear-gradient(135deg, rgba(55, 65, 81, 0.6), rgba(31, 41, 55, 0.4))'
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{layer.icon}</span>
                            <div className="flex-1">
                              <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                                {layer.name}
                              </h4>
                              <p className="text-xs text-gray-300 opacity-70 group-hover:opacity-100 transition-opacity">
                                {layer.description}
                              </p>
                              {activeLayers.includes(layer.id) && (
                                <div className="flex items-center space-x-1 mt-2">
                                  <div className="w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
                                  <span className="text-xs text-green-400 font-medium">ACTIVE</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <div 
                            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                              activeLayers.includes(layer.id) 
                                ? 'bg-current border-current' 
                                : 'border-gray-300'
                            }`}
                            style={{ 
                              color: activeLayers.includes(layer.id) ? layer.color : undefined 
                            }}
                          >
                            {activeLayers.includes(layer.id) && (
                              <svg className="w-full h-full text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export function AnalyticsMap() {
  return (
    <AnalyticsProvider>
      <AnalyticsMapContent />
    </AnalyticsProvider>
  );
}