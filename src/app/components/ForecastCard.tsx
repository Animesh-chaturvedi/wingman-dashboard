
import { BsFillChatFill } from "react-icons/bs";
import { IoIosTrendingUp, IoIosTrendingDown  } from "react-icons/io";



interface ForecastCardProps {
  forecast: { salesIncrease: number; consultationsIncrease: number };
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  return (
    <div className="bg-gradient-to-br from-[#15B79F] to-[#0E9382] text-white rounded-[20px] p-6 shadow-sm pb-16 h-full flex flex-col">
      <h3 className="text-xs/[30px] font-semibold text-[#CCFBEF] mb-6 flex items-center">
        <BsFillChatFill className="mr-2" />
        FORECASTS
      </h3>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[56px]/[68px] font-medium flex items-start">
            +{forecast.salesIncrease}%
          </p>
        </div>
        {forecast.salesIncrease > 0 ? <IoIosTrendingUp className="text-[36px]" /> : <IoIosTrendingDown className="text-[36px]" />}
      </div>
      <p className="text-sm mt-3 mb-8">
            forecasted increase in your sales closed by the end of the current month
      </p>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[56px]/[68px] font-medium flex items-start">
            +{forecast.consultationsIncrease}%
          </p>
        </div>
        {forecast.consultationsIncrease > 0 ? <IoIosTrendingUp className="text-[36px]" /> : <IoIosTrendingDown className="text-[36px]" />}
      </div>
      <p className="text-sm mt-3 mb-8">
            forecasted increase in your sales closed by the end of the current month
      </p>
    </div>
  );
};

export default ForecastCard;
