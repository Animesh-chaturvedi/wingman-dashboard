import { PiChatTeardropTextFill, PiCoinsFill, PiCoinFill, PiPiggyBankFill, PiCheckFatFill } from "react-icons/pi";
import { FaTag } from "react-icons/fa6";

export const mockData = {
    summary: [
        {
          id: 1,
          title: 'Consultations',
          value: 24,
          percentage: 15,
          icon: PiChatTeardropTextFill,
        },
        {
          id: 2,
          title: 'Orders Placed',
          value: 12,
          percentage: -15,
          icon: FaTag ,
        },
        {
          id: 3,
          title: 'Conversion Rate',
          value: '50%',
          percentage: -15,
          icon: PiCheckFatFill,
        },
        {
          id: 4,
          title: 'Total Sales Value',
          value: '$2,400',
          percentage: 15,
          icon: PiCoinsFill,
        },
        {
          id: 5,
          title: 'Avg Order Value',
          value: '$240',
          percentage: 15,
          icon: PiCoinFill,
        },
        {
          id: 6,
          title: 'Commission Paid',
          value: '$240',
          percentage: 15,
          icon: PiPiggyBankFill,
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
        {
            product: 'Product Name That Is Very Long And Needs Truncation',
            date: '24 Apr 2024',
            time:'10:24 AM',
            timeSpent: '2h 5m',
            orderValue: '$120,21',
            commission: '$55',
          },
          {
            product: 'Another Product Name That Overflows',
            date: '24 Apr 2024',
            time:'10:24 AM',
            timeSpent: '2h 5m',
            orderValue: '$120,21',
            commission: '$55',
          },
          {
            product: 'Short Product Name',
            date: '24 Apr 2024',
            time:'10:24 AM',
            timeSpent: '2h 5m',
            orderValue: '$120,21',
            commission: '$55',
          },
          {
            product: 'A Very Very Long Product Name That Will Definitely Be Truncated',
            date: '24 Apr 2024',
            time:'10:24 AM',
            timeSpent: '2h 5m',
            orderValue: '$120,21',
            commission: '$55',
          },
    ],
  };
  