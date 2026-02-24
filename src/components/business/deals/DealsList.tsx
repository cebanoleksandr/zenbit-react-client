import type { FC } from "react";
import type { IDeal } from "../../../utils/interfaces";
import DealItem from "./DealItem";

interface IProps {
  deals: IDeal[];
}

const DealsList: FC<IProps> = ({ deals }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {deals.map((deal) => (
        <DealItem key={deal.id} deal={deal} />
      ))}
    </div>
  );
};

export default DealsList;
