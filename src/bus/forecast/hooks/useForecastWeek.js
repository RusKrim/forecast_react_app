import { useEffect } from "react";
import { sortByAscendingOrder } from "../../../helpers/sortByAscendingOrder";
import { useSelector, useDispatch } from "react-redux";
import { forecastActions } from "../actions";

export const useForecastWeek = () => {
  const { data } = useSelector((state) => state.forecast);

  const sortAsc = sortByAscendingOrder(data);
  const sortedWeek = sortAsc.slice(1, 8);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(forecastActions.setWeek(sortedWeek));
  }, [sortedWeek.length]);

  return {
    weekData: sortedWeek,
  };
};
