import type { FC } from "react";
import type { IDeal } from "../../../utils/interfaces";

interface IProps {
  deal: IDeal;
}

const DealItem: FC<IProps> = ({ deal }) => {
  return (
    <div 
      className="w-full rounded border border-gray-200 p-4 h-100 bg-center bg-cover bg-no-repeat text-white flex items-end" 
      style={{ backgroundImage: `url(${deal.imageUrl})` }}
    >
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-2 p-2">
          <p className="text-xl font-bold">{deal.title}</p>
          <p className="text-lg font-bold">{deal.price} Dhs</p>
          <p className="text-lg font-bold">Ticket - {deal.ticket} Dhs</p>
        </div>
        <div className="col-span-1 p-2 flex justify-end flex-col">
          <p className="text-lg font-bold">Yield {deal.yield} %</p>
          <p className="text-lg font-bold">Days left: {deal.daysLeft}</p>
        </div>
        <div className="col-span-1 p-2 flex justify-center flex-col">
          <p className="text-lg font-bold">Sold: {deal.soldPercentage} %</p>
        </div>
      </div>
    </div>
  );
};

export default DealItem;
