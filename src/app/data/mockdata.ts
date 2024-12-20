import { FaShoppingCart, FaChartLine, FaPercentage, FaDollarSign, FaCalculator } from 'react-icons/fa';

export const mockData = {
    summary: [
        {
          id: 1,
          title: 'Consultations',
          value: 24,
          percentage: 15,
          icon: FaChartLine,
        },
        {
          id: 2,
          title: 'Orders Placed',
          value: 12,
          percentage: -15,
          icon: FaShoppingCart ,
        },
        {
          id: 3,
          title: 'Conversion Rate',
          value: '50%',
          percentage: -15,
          icon: FaPercentage,
        },
        {
          id: 4,
          title: 'Total Sales Value',
          value: '$2,400',
          percentage: 15,
          icon: FaDollarSign,
        },
        {
          id: 5,
          title: 'Avg Order Value',
          value: '$240',
          percentage: 15,
          icon: FaCalculator,
        },
        {
          id: 6,
          title: 'Commission Paid',
          value: '$240',
          percentage: 15,
          icon: FaDollarSign,
        },
      ],
      insights: {
        consultationsChart: [
            { day: 'Mon', incoming: 30, answered: 15, expertsOnline: 5 },
            { day: 'Tue', incoming: 40, answered: 20, expertsOnline: 8 },
            { day: 'Wed', incoming: 50, answered: 25, expertsOnline: 15 },
            { day: 'Thu', incoming: 60, answered: 30, expertsOnline: 10 },
            { day: 'Fri', incoming: 55, answered: 28, expertsOnline: 12 },
            { day: 'Sat', incoming: 65, answered: 35, expertsOnline: 18 },
            { day: 'Sun', incoming: 70, answered: 40, expertsOnline: 4 },
          ],
            comparisonChart: [
              { name: 'This Week', consultations: 20, ordersClosed: 15 },
              { name: 'Last Week', consultations: 18, ordersClosed: 12 },
            ],
            forecast: {
              salesIncrease: 15,
              consultationsIncrease: 20,
            },
      },
    orders: [
      { productName: 'Product A', date: '24 Apr 2024', timeSpent: '2h 5m', orderValue: '$120.21', commission: '$55' },
    ],
  };
  