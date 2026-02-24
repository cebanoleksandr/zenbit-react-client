import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { getDeals } from "../api/deal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setDeals } from "../redux/dealsSlice";
import Loader from "../components/UI/Loader";
import DealsList from "../components/business/deals/DealsList";

const DealsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { items: deals } = useAppSelector((state) => state.deals);
  const dispatch = useAppDispatch();

  const fetchDeals = async () => {
    try {
      setIsLoading(true);
      const response = await getDeals();
      console.log("Fetched deals:", response);
      dispatch(setDeals(response));
    } catch (error) {
      console.error("Error fetching deals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <MainLayout>
      <div className="p-5 md:p-10 lg:p-15 xl:p-20">
        {isLoading ? <Loader /> : <DealsList deals={deals} />}
      </div>
    </MainLayout>
  );
};

export default DealsPage;
