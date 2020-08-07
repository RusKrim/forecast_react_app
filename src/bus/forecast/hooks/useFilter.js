import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { forecastActions } from "../actions";

export const useFilter = () => {
  const dispatch = useDispatch();
  const { filteredDays } = useSelector((state) => state.forecast);
};
