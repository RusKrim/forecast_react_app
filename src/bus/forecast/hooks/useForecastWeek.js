import { useSelector } from "react-redux";
import { orderByAscendingOrder } from "../../../helpers/orderByAsc";

export const useForecastWeek = () => {
  const { data } = useSelector((state) => state.forecast);

  const sortAsc = orderByAscendingOrder(data);
  const sliceData = sortAsc.slice(1, sortAsc.length);
  const res = sliceData.slice(0, 7);
  return {
    weekData: res,
  };
};
