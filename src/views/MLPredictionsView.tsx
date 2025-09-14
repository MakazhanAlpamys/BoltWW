import { useState, useEffect } from 'react';
import { NavigationHeader } from '../components/NavigationHeader';
import { AppFooter } from '../components/AppFooter';

interface DemandForecast {
  zone: string;
  demand_level: 'High' | 'Medium' | 'Low';
  confidence: number;
  peak_time: string;
  recommended_drivers: number;
  revenue_impact: string;
}

interface RouteScore {
  route_id: string;
  efficiency_score: number;
  earnings_potential: string;
  optimal_alternative: string;
  confidence: number;
}

interface AnomalyAlert {
  id: string;
  type: 'unusual_route' | 'speed_violation' | 'phantom_demand';
  severity: 'High' | 'Medium' | 'Low';
  confidence: number;
  location: string;
  action: string;
  timestamp: string;
}

export function MLPredictionsView() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [demandForecasts, setDemandForecasts] = useState<DemandForecast[]>([]);
  const [routeScores, setRouteScores] = useState<RouteScore[]>([]);
  const [anomalyAlerts, setAnomalyAlerts] = useState<AnomalyAlert[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock ML data generator
  const generateMockData = () => {
    const zones = ['Downtown Core', 'Airport District', 'Business Quarter', 'University Area', 'Shopping Mall'];
    const demandLevels: Array<'High' | 'Medium' | 'Low'> = ['High', 'Medium', 'Low'];
    
    // Generate demand forecasts
    const forecasts: DemandForecast[] = zones.map((zone, index) => ({
      zone,
      demand_level: demandLevels[Math.floor(Math.random() * 3)],
      confidence: 0.75 + Math.random() * 0.2,
      peak_time: `${18 + Math.floor(Math.random() * 3)}:${15 + Math.floor(Math.random() * 45)}`,
      recommended_drivers: 8 + Math.floor(Math.random() * 15),
      revenue_impact: `+${(15 + Math.random() * 20).toFixed(0)}%`
    }));

    // Generate route scores
    const routes: RouteScore[] = Array.from({ length: 5 }, (_, index) => ({
      route_id: `Route-${Math.floor(Math.random() * 1000)}`,
      efficiency_score: 0.65 + Math.random() * 0.3,
      earnings_potential: `+${(10 + Math.random() * 25).toFixed(0)}%`,
      optimal_alternative: `Alt-${Math.floor(Math.random() * 100)}`,
      confidence: 0.8 + Math.random() * 0.15
    }));

    // Generate anomaly alerts
    const anomalies: AnomalyAlert[] = [
      {
        id: 'AN001',
        type: 'unusual_route',
        severity: 'Medium',
        confidence: 0.87,
        location: 'Zone 7A',
        action: 'Monitor driver behavior',
        timestamp: new Date().toLocaleTimeString()
      },
      {
        id: 'AN002', 
        type: 'phantom_demand',
        severity: 'High',
        confidence: 0.92,
        location: 'Central Plaza',
        action: 'Deploy ghost cars',
        timestamp: new Date().toLocaleTimeString()
      }
    ];

    setDemandForecasts(forecasts);
    setRouteScores(routes);
    setAnomalyAlerts(anomalies);
    setIsLoading(false);
  };

  // Update data every 5 seconds
  useEffect(() => {
    generateMockData();
    const interval = setInterval(() => {
      generateMockData();
      setCurrentTime(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'text-red-400 border-red-400';
      case 'Medium': return 'text-yellow-400 border-yellow-400';
      case 'Low': return 'text-green-400 border-green-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const getDemandColor = (level: string) => {
    switch (level) {
      case 'High': return 'from-red-500 to-red-600';
      case 'Medium': return 'from-yellow-500 to-yellow-600';
      case 'Low': return 'from-green-500 to-green-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">🧠</div>
          <div className="text-xl text-white">Initializing ML Models...</div>
          <div className="text-sm text-gray-400 mt-2">Loading neural networks</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <NavigationHeader />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 text-purple-300 font-bold text-lg mb-6">
              <span className="mr-3 text-2xl animate-pulse">🧠</span>
              <span>ML Predictions Engine</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              <span className="text-blue-300">Forecasting</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              Real-time machine learning predictions driving inDrive optimization with 
              <span className="text-purple-400 font-bold"> 87% accuracy </span>
              and 18-second lead time
            </p>

            <div className="text-sm text-gray-400">
              Last updated: {currentTime.toLocaleTimeString()} • Auto-refresh: 5sec
            </div>
          </div>

          {/* ML Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-gray-800/50 border border-purple-400/30 text-center">
              <div className="text-3xl font-bold text-purple-400">87%</div>
              <div className="text-sm text-gray-400">Model Accuracy</div>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50 border border-blue-400/30 text-center">
              <div className="text-3xl font-bold text-blue-400">18sec</div>
              <div className="text-sm text-gray-400">Prediction Lead</div>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50 border border-green-400/30 text-center">
              <div className="text-3xl font-bold text-green-400">99.2%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50 border border-orange-400/30 text-center">
              <div className="text-3xl font-bold text-orange-400">$300K</div>
              <div className="text-sm text-gray-400">Monthly Savings</div>
            </div>
          </div>

          {/* Main ML Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Demand Forecast */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 rounded-3xl border border-blue-400/20 p-6 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">📊</div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-300">Demand Forecast</h3>
                    <p className="text-sm text-gray-400">Next 30 minutes</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {demandForecasts.map((forecast, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-700/50 border border-gray-600">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-sm font-medium text-white">{forecast.zone}</div>
                        <div className={`px-2 py-1 rounded text-xs font-bold bg-gradient-to-r ${getDemandColor(forecast.demand_level)} text-white`}>
                          {forecast.demand_level}
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-400 space-y-1">
                        <div>Confidence: {(forecast.confidence * 100).toFixed(1)}%</div>
                        <div>Peak: {forecast.peak_time}</div>
                        <div>Drivers needed: {forecast.recommended_drivers}</div>
                        <div className="text-green-400 font-bold">Impact: {forecast.revenue_impact}</div>
                      </div>
                      
                      {/* Confidence bar */}
                      <div className="mt-2 bg-gray-600 rounded-full h-1">
                        <div 
                          className="bg-blue-400 h-1 rounded-full transition-all duration-1000"
                          style={{ width: `${forecast.confidence * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Route Efficiency Scores */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 rounded-3xl border border-green-400/20 p-6 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🧬</div>
                  <div>
                    <h3 className="text-xl font-bold text-green-300">Route DNA Analysis</h3>
                    <p className="text-sm text-gray-400">Efficiency scoring</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {routeScores.map((route, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-700/50 border border-gray-600">
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-sm font-medium text-white">{route.route_id}</div>
                        <div className="text-lg font-bold text-green-400">
                          {(route.efficiency_score * 100).toFixed(0)}%
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-400 space-y-1">
                        <div>Confidence: {(route.confidence * 100).toFixed(1)}%</div>
                        <div>Alternative: {route.optimal_alternative}</div>
                        <div className="text-green-400 font-bold">Earnings: {route.earnings_potential}</div>
                      </div>
                      
                      {/* Efficiency bar */}
                      <div className="mt-2 bg-gray-600 rounded-full h-1">
                        <div 
                          className="bg-green-400 h-1 rounded-full transition-all duration-1000"
                          style={{ width: `${route.efficiency_score * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Anomaly Alerts */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800/50 rounded-3xl border border-red-400/20 p-6 backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">🚨</div>
                  <div>
                    <h3 className="text-xl font-bold text-red-300">Anomaly Detection</h3>
                    <p className="text-sm text-gray-400">Real-time alerts</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {anomalyAlerts.map((alert, index) => (
                    <div key={alert.id} className={`p-4 rounded-lg bg-gray-700/50 border-2 ${getSeverityColor(alert.severity)} animate-pulse`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="text-sm font-medium text-white">{alert.type.replace('_', ' ')}</div>
                        <div className={`px-2 py-1 rounded text-xs font-bold ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-400 space-y-1">
                        <div>Location: {alert.location}</div>
                        <div>Confidence: {(alert.confidence * 100).toFixed(1)}%</div>
                        <div>Time: {alert.timestamp}</div>
                        <div className="text-yellow-400 font-bold">Action: {alert.action}</div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Add empty state if no alerts */}
                  {anomalyAlerts.length === 0 && (
                    <div className="p-4 rounded-lg bg-gray-700/50 border border-gray-600 text-center">
                      <div className="text-2xl mb-2">✅</div>
                      <div className="text-sm text-green-400">All systems normal</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact Summary */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Real-time Business Impact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-purple-600/10 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">+30%</div>
                <div className="text-sm text-gray-300">Driver Efficiency</div>
                <div className="text-xs text-green-400 mt-1">vs Last Month</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-blue-600/10 border border-blue-400/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">-25%</div>
                <div className="text-sm text-gray-300">Wait Time</div>
                <div className="text-xs text-green-400 mt-1">Real-time Impact</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-green-600/10 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2">$500K</div>
                <div className="text-sm text-gray-300">Monthly Savings</div>
                <div className="text-xs text-green-400 mt-1">Projected</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
