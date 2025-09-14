import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function NavigationHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (section: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${section}`);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleDashboardNavigation = () => {
    setIsMobileMenuOpen(false);
    navigate('/dashboard');
  };

  const handleMLNavigation = () => {
    setIsMobileMenuOpen(false);
    navigate('/ml-predictions');
  };

  return (
    <header className="bg-gray-800 shadow-xl sticky top-0 z-[1100] transition-all duration-300 hover:shadow-2xl relative border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* BoltWW Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => navigate('/')} className="block group">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white transition-all duration-300 group-hover:scale-105 transform">
                  BOLT
                </span>
                <span className="text-2xl font-bold text-blue-400 transition-all duration-300 group-hover:scale-105 transform ml-0.5">
                  WW
                </span>
                <div className="ml-1 text-blue-400 transition-all duration-300 group-hover:rotate-12 transform">
                  ⚡
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <div className="relative group">
              <button 
                onClick={() => handleNavigation('about')}
                className="px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-700 rounded-lg transform hover:shadow-sm cursor-pointer hover:text-blue-400"
              >
                About Us ▼
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button
                  onClick={() => handleNavigation('driver-efficiency')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors rounded-t-lg"
                >
                  💰 Business Impact
                </button>
                <button
                  onClick={() => handleNavigation('demand-prediction')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors"
                >
                  📊 Use Cases
                </button>
                <button
                  onClick={() => handleNavigation('innovations')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors rounded-b-lg"
                >
                  🔮 Innovations
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleDashboardNavigation}
              className="px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-700 rounded-lg transform hover:shadow-sm cursor-pointer hover:text-blue-400"
            >
              Analytics Dashboard
            </button>
            
            <button 
              onClick={handleMLNavigation}
              className="px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gray-700 rounded-lg transform hover:shadow-sm cursor-pointer hover:text-purple-400 relative group"
            >
              <span className="flex items-center space-x-1">
                <span>ML Predictions</span>
                <span className="text-xs">🧠</span>
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            </button>
          </nav>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-xl z-[1200] transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 scale-y-100' 
              : 'opacity-0 -translate-y-2 scale-y-95 pointer-events-none'
          }`}
          style={{ transformOrigin: 'top' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => handleNavigation('about')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:bg-gray-700 rounded-lg transform hover:translate-x-1 hover:text-blue-400"
            >
              About Us
            </button>
            
            {/* Mobile Sub-sections */}
            <div className="ml-4 space-y-1">
              <button
                onClick={() => handleNavigation('driver-efficiency')}
                className="block w-full text-left px-3 py-1 text-sm text-gray-400 transition-all duration-200 hover:bg-gray-700 rounded-lg transform hover:translate-x-1 hover:text-blue-400"
              >
                💰 Business Impact
              </button>
              <button
                onClick={() => handleNavigation('demand-prediction')}
                className="block w-full text-left px-3 py-1 text-sm text-gray-400 transition-all duration-200 hover:bg-gray-700 rounded-lg transform hover:translate-x-1 hover:text-blue-400"
              >
                📊 Use Cases
              </button>
              <button
                onClick={() => handleNavigation('innovations')}
                className="block w-full text-left px-3 py-1 text-sm text-gray-400 transition-all duration-200 hover:bg-gray-700 rounded-lg transform hover:translate-x-1 hover:text-blue-400"
              >
                🔮 Innovations
              </button>
            </div>
            
            <button
              onClick={handleDashboardNavigation}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:bg-gray-700 rounded-lg transform hover:translate-x-1 hover:text-blue-400"
            >
              Analytics Dashboard
            </button>
            
            <button
              onClick={handleMLNavigation}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white transition-all duration-200 hover:bg-gray-700 rounded-lg transform hover:translate-x-1 hover:text-purple-400"
            >
              <span className="flex items-center space-x-2">
                <span>ML Predictions</span>
                <span>🧠</span>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
