import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from 'recharts';
  import { FaChartBar } from 'react-icons/fa';
  
  interface ComparisonBarChartProps {
    data: { name: string; consultations: number; ordersClosed: number }[];
  }
  
  const ComparisonBarChart: React.FC<ComparisonBarChartProps> = ({ data }) => {
    return (
      <div className="bg-white border border-gray-200 rounded-[20px] shadow-sm p-6 justify-between h-full">
        {/* Chart Heading */}
        <h3 className="text-gray-700 text-sm/[30px] font-semibold mb-6 flex items-center">
          <FaChartBar className="text-gray-400 mr-2" />
          VS PAST PERIOD
        </h3>
        {/* Chart Container */}
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: -35 }} // Remove extra margin
            >
              {/* Grid */}
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              {/* X-Axis */}
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
              />
              {/* Y-Axis */}
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9CA3AF' }}
              />
              {/* Tooltip */}
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '4px',
                  fontSize: 12,
                  color: '#374151',
                }}
              />
              {/* Bars */}
              <Bar dataKey="consultations" fill="#A7F3D0" barSize={30} />
              <Bar dataKey="ordersClosed" fill="#064E3B" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* Legend */}
        <div className="w-full h-[1px] bg-[#DCDFE4] mb-4"></div>
        <div className="flex justify-start space-x-6 mt-4 text-xs text-gray-500">
          <div className="flex items-center space-x-2">
            <span className="block w-5 h-1 bg-[#A7F3D0]"></span>
            <span>Consultations</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="block w-5 h-1 bg-[#064E3B]"></span>
            <span>Orders Closed</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ComparisonBarChart;
  