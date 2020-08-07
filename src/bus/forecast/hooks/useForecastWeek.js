import { useSelector } from "react-redux";
import { sortByAscendingOrder } from "../../../helpers/sortByAscendingOrder";
import { sortDatesToActual } from "../../../helpers/sortDatesToActual";
import orderBy from "lodash/orderBy";
export const useForecastWeek = () => {
  const { data } = useSelector((state) => state.forecast);

  const sortAsc = sortByAscendingOrder(data);
  const actual = sortDatesToActual(sortAsc);
  const sor = actual.slice(0, 7);

  return {
    weekData: sor,
    data,
  };
};
