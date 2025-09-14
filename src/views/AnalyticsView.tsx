import { NavigationHeader } from '../components/NavigationHeader';
import { AnalyticsMap } from '../components/AnalyticsMap';

export function AnalyticsView() {
  return (
    <div className="h-screen bg-gray-900 overflow-hidden flex flex-col">
      <NavigationHeader />
      <div className="flex-1 overflow-hidden">
        <AnalyticsMap />
      </div>
    </div>
  );
}