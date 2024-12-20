
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
      <div className="flex-1 flex flex-col w-full max-w-full">
        <Navbar />
        <Content >
          <section className="mb-8 flex flex-col overflow-hidden">
            <div className="flex justify-between mb-4">
              <h2 className="text-[2rem]/[38px] font-semibold mb-4">At a Glance</h2>
              <Dropdown onChange={(value) => setTimeRange(value)} />
            </div>
            <div className='overflow-x-auto'>
              <div className=" grid gap-6" style={{
               gridTemplateColumns: "repeat(3, minmax(260px, 1fr))",
              }}>
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
            </div>
          </section>
          
           <section className="mb-6">
            <h2 className="text-[2rem]/[38px] font-semibold mb-8 mt-12">Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <ConsultationsChart data={insights.consultationsChart} />
                </div>
                <div className="col-span-1">
                    <ComparisonChart data={insights.comparisonChart} />
                </div>
                <div className="col-span-1">
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
