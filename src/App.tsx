import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationHeader } from './components/NavigationHeader';
import { LandingHero } from './components/LandingHero';
import { AppFooter } from './components/AppFooter';
import { FeatureOverview } from './components/FeatureOverview';
import { AnalyticsView } from './views/AnalyticsView';
import { MLPredictionsView } from './views/MLPredictionsView';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavigationHeader />
      
      <main>
        <LandingHero />
        <FeatureOverview />
        <AppFooter />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<AnalyticsView />} />
        <Route path="/ml-predictions" element={<MLPredictionsView />} />
      </Routes>
    </Router>
  );
}

export default App;
