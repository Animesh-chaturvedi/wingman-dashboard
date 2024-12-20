import Sidebar from './components/SideBar';
import Card from './components/Card';
import Chart from './components/Chart';
import OrderTable from './components/OrderTable';
import ForecastCard from './components/ForecastCard';
import Navbar from './components/Navbar';

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {/* <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
          <h1 className="text-2xl font-semibold">Summary Dashboard</h1>
        </header> */}
        <Navbar />
        <section className="grid grid-cols-3 gap-4 mb-6">
          <Card title="Consultations" value={24} />
          <Card title="Orders Placed" value={12} />
          <Card title="Conversion" value="50%" />
        </section>
        <section className="grid grid-cols-2 gap-4 mb-6">
          <Chart data={[/* Mock Data */]} />
          <ForecastCard forecast={{ sales: 15, consultations: 20 }} />
        </section>
        <OrderTable orders={[/* Mock Orders */]} />
      </main>
    </div>
  );
}
