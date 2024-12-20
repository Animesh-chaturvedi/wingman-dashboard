interface Order {
    productName: string;
    date: string;
    timeSpent: string;
    orderValue: string;
    commission: string;
  }
  
  interface OrderTableProps {
    orders: Order[];
  }
  
  const OrderTable: React.FC<OrderTableProps> = ({ orders }) => (
    <table className="bg-white shadow rounded-lg w-full">
      <thead>
        <tr className="text-left">
          <th className="p-4">Product</th>
          <th className="p-4">Date</th>
          <th className="p-4">Time Spent</th>
          <th className="p-4">Order Value</th>
          <th className="p-4">Commission</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index} className="border-t">
            <td className="p-4">{order.productName}</td>
            <td className="p-4">{order.date}</td>
            <td className="p-4">{order.timeSpent}</td>
            <td className="p-4">{order.orderValue}</td>
            <td className="p-4">{order.commission}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
  
  export default OrderTable;
  