import { useSelector } from "react-redux";
import { sortByAscendingOrder } from "../../../helpers/sortByAscendingOrder";
export const useForecastWeek = () => {
  const { data } = useSelector((state) => state.forecast);

  const sortAsc = sortByAscendingOrder(data);
  const sor = sortAsc.slice(1, 8);

  return {
    weekData: sor,
  };
};
