import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export default function AppRatingChart({ ratings }) {
  // We reverse so 5-star is at the top
  const chartData = [...ratings].reverse();

  return (
    <div className="w-full h-72 bg-[#F8F9FA] p-6 rounded-xl border border-gray-100">
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 5, right: 30, left: 0, bottom: 20 }}
          barGap={10}
        >
          {/* Vertical grid lines to match your screenshot */}
          <CartesianGrid strokeDasharray="0" horizontal={false} stroke="#E5E7EB" />
          
          <XAxis 
            type="number" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            /* Standardizing the scale based on your screenshot's 12000 max */
            domain={[0, 12000]} 
            ticks={[0, 3000, 6000, 9000, 12000]}
          />
          
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#6B7280', fontSize: 13 }}
            width={70}
          />

          <Tooltip 
            cursor={{ fill: 'rgba(0,0,0,0.03)' }}
            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
          />

          <Bar 
            dataKey="count" 
            fill="#FF8C1A" 
            radius={[0, 4, 4, 0]} 
            barSize={24} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}