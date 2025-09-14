import { MapContainer } from './MapContainer';
import { PopularRoutesLayer, SpeedZonesLayer } from './HeatmapRenderer';
import { DemandLayer, AvailabilityLayer } from './GridRenderer';
import { SpeedViolationsLayer, AnomaliesLayer, TrafficJamsLayer } from './MarkerRenderer';
import { useLayerData } from '../../providers/AnalyticsProvider';

interface MainAnalyticsMapProps {
  className?: string;
  activeLayers: string[];
}

export function MainAnalyticsMap({ className, activeLayers }: MainAnalyticsMapProps) {
  // Get layer data using custom hooks
  const routesLayer = useLayerData('routes');
  const demandLayer = useLayerData('demand');
  const availabilityLayer = useLayerData('availability');
  const violationsLayer = useLayerData('violations');
  const anomaliesLayer = useLayerData('anomalies');
  const trafficJamsLayer = useLayerData('traffic_jams');
  const speedZonesLayer = useLayerData('speed_zones');

  return (
    <MapContainer className={className}>
      {/* Popular Routes Heatmap Layer */}
      {routesLayer.data && (
        <PopularRoutesLayer
          data={routesLayer.data.points}
          isActive={activeLayers.includes('routes')}
        />
      )}

      {/* Speed Zones Heatmap Layer */}
      {speedZonesLayer.data && (
        <SpeedZonesLayer
          data={speedZonesLayer.data.points}
          isActive={activeLayers.includes('speed_zones')}
        />
      )}

      {/* Demand Hexagonal Grid Layer */}
      {demandLayer.data && (
        <DemandLayer
          data={demandLayer.data.hexagons}
          isActive={activeLayers.includes('demand')}
          onHexagonClick={(hexagon) => {
            // Handle demand hexagon click
          }}
        />
      )}

      {/* Driver Availability Hexagonal Grid Layer */}
      {availabilityLayer.data && (
        <AvailabilityLayer
          data={availabilityLayer.data.hexagons}
          isActive={activeLayers.includes('availability')}
          onHexagonClick={(hexagon) => {
            // Handle availability hexagon click
          }}
        />
      )}

      {/* Speed Violations Point Markers Layer */}
      {violationsLayer.data && (
        <SpeedViolationsLayer
          data={violationsLayer.data}
          isActive={activeLayers.includes('violations')}
          onViolationClick={(violation) => {
            // Handle speed violation click
          }}
        />
      )}

      {/* Unusual Trips Anomaly Markers Layer */}
      {anomaliesLayer.data && (
        <AnomaliesLayer
          data={anomaliesLayer.data}
          isActive={activeLayers.includes('anomalies')}
          onAnomalyClick={(anomaly) => {
            // Handle anomaly click
          }}
        />
      )}

      {/* Traffic Jams Circle Overlays Layer */}
      {trafficJamsLayer.data && (
        <TrafficJamsLayer
          data={trafficJamsLayer.data}
          isActive={activeLayers.includes('traffic_jams')}
          onJamClick={(jam) => {
            // Handle traffic jam click
          }}
        />
      )}
    </MapContainer>
  );
}