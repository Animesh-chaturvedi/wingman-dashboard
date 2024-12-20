import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ConsultationsCombinedChartProps {
  data: { day: string; incoming: number; answered: number; expertsOnline: number }[];
}

const ConsultationsCombinedChart: React.FC<ConsultationsCombinedChartProps> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[20px] shadow-sm p-6 w-full h-full">
      <h3 className="text-gray-700 text-sm font-semibold mb-6">
        <span className="text-gray-400 text-xs/[30px] mr-2">●</span>CONSULTATIONS
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          {/* Grid */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          {/* X-Axis */}
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
          />
          {/* Y-Axis Left */}
          <YAxis
            yAxisId="left"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
            label={{
              value: 'CONSULTATIONS',
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle', fill: '#6B7280', fontSize: 12 },
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            // ticks={[0, 10, 20]}
            tickFormatter={(value:number) => {
              console.log(value,"value")
              return (value >= 20 ? '20' : '10')}}
            tick={{ fontSize: 12, fill: '#9CA3AF' }}
            label={{
              value: 'EXPERTS ONLINE',
              angle: 90,
              position: 'insideRight',
              style: { textAnchor: 'middle', fill: '#6B7280', fontSize: 12 },
            }}
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
          <Bar
            yAxisId="right"
            dataKey="expertsOnline"
            fill="#FFE599"
            barSize={32}
            radius={[3, 3, 0, 0]}
          />
          {/* Solid Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="answered"
            stroke="#00BFA6"
            strokeWidth={2}
            dot={false}
          />
          {/* Dotted Line */}
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="incoming"
            stroke="#4B5563"
            strokeDasharray="4 4"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
      {/* Legend */}
      <div className="w-full h-[1px] bg-[#DCDFE4] mb-4"></div>
      <div className="flex justify-start space-x-6 mt-4 text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <span className="block w-5 h-1 border-2 border-gray-400"></span>
          <span>Incoming</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-5 h-1 bg-[#00BFA6]"></span>
          <span>Answered</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="block w-5 h-1 bg-[#FFE599]"></span>
          <span>Experts Online</span>
        </div>
      </div>
    </div>
  );
};

export default ConsultationsCombinedChart;
