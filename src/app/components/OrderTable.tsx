interface Order {
  product: string;
  date: string;
  timeSpent: string;
  orderValue: string;
  commission: string;
}

interface OrdersTableProps {
  orders: Order[];
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-x-auto">
      <table className="w-full text-left border-collapse table-fixed">
        <thead className="bg-[#F9FAFB] border-b border-gray-200">
          <tr className="text-sm text-gray-500">
            <th className=" p-4 w-1/5 truncate">Product</th>
            <th className="p-4 w-1/5 truncate">Date</th>
            <th className="p-4 w-1/5 truncate">Time spent</th>
            <th className="p-4 w-1/5 truncate">Order Value</th>
            <th className="p-4 w-1/5 truncate">Commission</th>
            <th className="p-4 w-1/5 text-right truncate"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="text-sm text-gray-700 border-none hover:bg-gray-50"
            >
              {/* Product */}
              <td className="py-6 px-4 flex items-center truncate">
                <img
                  src="/Avatar.png" // Replace with your icon path
                  alt="Product"
                  className="w-8 h-8 mr-3 flex-shrink-0"
                />
                <span className="truncate block text-ellipsis overflow-hidden whitespace-nowrap">
                  {order.product}
                </span>
              </td>
              {/* Date */}
              <td className="py-6 px-4 truncate">{order.date}</td>
              {/* Time Spent */}
              <td className="py-6 px-4 truncate">{order.timeSpent}</td>
              {/* Order Value */}
              <td className="py-6 px-4 truncate">{order.orderValue}</td>
              {/* Commission */}
              <td className="py-6 px-4 truncate font-semibold text-gray-800">
                {order.commission}
              </td>
              {/* Actions */}
              <td className="py-6 px-4 text-right truncate">
                <a
                  href="#"
                  className="text-blue-500 text-sm font-medium flex justify-end items-center space-x-1"
                >
                  <span>View Chat</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
