interface ForecastProps {
    forecast: { sales: number; consultations: number };
  }
  
  const ForecastCard: React.FC<ForecastProps> = ({ forecast }) => (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-gray-500 mb-4">Forecast</h3>
      <p>Sales Increase: {forecast.sales}%</p>
      <p>Consultations Increase: {forecast.consultations}%</p>
    </div>
  );
  
  export default ForecastCard;
  