interface ChartProps {
    data: { day: string; incoming: number; answered: number; expertsOnline: number }[];
  }
  
  const Chart: React.FC<ChartProps> = ({ data }) => (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-gray-500 mb-4">Consultations</h3>
      <div>
        {data.map((entry) => (
          <div key={entry.day}>
            {entry.day}: {entry.incoming} incoming
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Chart;
  