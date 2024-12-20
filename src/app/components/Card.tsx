import { IconType } from 'react-icons';
import { IoIosTrendingUp, IoIosTrendingDown  } from "react-icons/io";

interface CardProps {
  title: string;
  value: string | number;
  percentage: number;
  icon: IconType;
}

const Card: React.FC<CardProps> = ({ title, value, percentage, icon:Icon }) => {
  const isPositive = percentage > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-[20px] p-3 md:p-6 shadow-sm flex flex-col justify-between min-w-[260px]">
      <div className="flex items-center mb-1">
        <div className="text-gray-500 text-lg font-large"><Icon className='w-3 h-3' /></div>
        <h3 className="text-gray-500 text-xs md:text-xs/[30px] font-medium uppercase ml-1">{title}</h3>
      </div>
      {/* Title and Value */}
      <div>
        <p className=" text-2xl md:text-3xl/[38px] font-medium my-1">{value}</p>
        <div
          className={`text-sm/[30px] font-medium flex items-center mt-1 ${
            isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isPositive ? <IoIosTrendingUp className="mr-2 w-6 h-6" /> : <IoIosTrendingDown className="mr-2 w-6 h-6" />}
          {Math.abs(percentage)}% <div className='text-gray-500 ml-2'>{isPositive ? "increase" : "decrease"}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
