
"use client"
import Sidebar from './components/SideBar';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Card from './components/Card';
import Dropdown from './components/Dropdown';
import ConsultationsChart from './components/ConsultationsChart';
import ComparisonChart from './components/ComparisonChart';
import ForecastCard from './components/ForecastCard';
import OrdersTable from './components/OrderTable';
import { mockData } from './data/mockdata';
import { useState } from 'react';

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState('7 days');
  const { summary, insights, orders } = mockData;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <Content >
          {/* At a Glance Section */}
          <section className="mb-8">
            <div className="flex justify-between mb-4">
              <h2 className="text-[2rem]/[38px] font-semibold mb-4">At a Glance</h2>
              <Dropdown onChange={(value) => setTimeRange(value)} />
            </div>
            <div className="grid grid-cols-3 gap-6">
              {summary.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  value={item.value}
                  percentage={item.percentage}
                  icon={item.icon}
                />
              ))}
            </div>
          </section>
          
           <section className="mb-6">
            <h2 className="text-[2rem]/[38px] font-semibold mb-8 mt-12">Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Consultations Combined Chart */}
              <div className="col-span-5 md:col-span-3">
                <ConsultationsChart data={insights.consultationsChart} />
              </div>
              {/* Comparison Bar Chart */}
              <div className="col-span-5 md:col-span-1">
                <ComparisonChart data={insights.comparisonChart} />
              </div>
              {/* Forecast Card */}
              <div className="col-span-5 md:col-span-1">
                <ForecastCard forecast={insights.forecast} />
              </div>
            </div>
          </section>
          <section className="mb-6">
            <h2 className="text-[2rem]/[38px] font-semibold mb-8 mt-12">Orders</h2>
            <OrdersTable orders={orders} />
          </section>
        </Content>
      </div>
    </div>
  );
}
