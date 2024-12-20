import { MdOutlineArrowOutward } from "react-icons/md";
interface Order {
  product: string;
  date: string;
  time:string;
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
      <table className="w-full text-left border-collapse border table-auto">
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
              <td className="py-6 px-4 flex items-center truncate" title={order.product}>
                <img
                  src="/Avatar.png" // Replace with your icon path
                  alt="Product"
                  className="w-8 h-8 mr-3 flex-shrink-0"
                />
                <span className="truncate block text-ellipsis overflow-hidden max-w-[15rem] whitespace-nowrap">
                  {order.product}
                </span>
              </td>
              {/* Date */}
              <td className="py-6 px-4 truncate"><div>{order.date}</div><div className="text-xs">{order.time}</div></td>
              <td className="py-6 px-4 truncate">{order.timeSpent}</td>
              {/* Time Spent */}
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
                  className="text-gray-500 text-sm font-medium flex justify-end items-center space-x-1"
                >
                  <span>View Chat</span>
                  <MdOutlineArrowOutward className="w-[18px] h-[18] mr-4"/>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
//     <div className="overflow-x-auto">
//   <table className="table-auto w-full border-collapse border border-gray-200">
//     <thead className="bg-gray-100">
//       <tr>
//         <th className="text-left px-6 py-3 min-w-[200px]">Product</th>
//         <th className="text-left px-6 py-3 min-w-[200px]">Date</th>
//         <th className="text-left px-6 py-3 min-w-[200px]">Time Spent</th>
//         <th className="text-left px-6 py-3 min-w-[200px]">Order Value</th>
//         <th className="text-left px-6 py-3 min-w-[200px]">Commission</th>
//         <th className="text-right px-6 py-3 min-w-[200px]">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {orders.map((row, index) => (
//         <tr key={index} className="border-t border-gray-200">
//           <td className="px-6 py-4 min-w-[200px] truncate">{row.product}</td>
//           <td className="px-6 py-4 min-w-[200px]">{row.date}</td>
//           <td className="px-6 py-4 min-w-[200px]">{row.timeSpent}</td>
//           <td className="px-6 py-4 min-w-[200px]">{row.orderValue}</td>
//           <td className="px-6 py-4 min-w-[200px]">{row.commission}</td>
//           <td className="px-6 py-4 text-right min-w-[200px]">
//             <button className="text-teal-600 hover:underline">View Chat</button>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
  );
};

export default OrdersTable;
