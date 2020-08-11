// Types
import { types } from "./types";
import { getFilteredForecast } from "../../helpers/getFilteredForecast";

const initialState = {
  data: [],
  isFetching: false,
  error: false,
  selectedDay: null,
  filteredDays: [],
  week: [],
};

export const forecastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FORECAST_START_FETCHING:
      return { ...state, isFetching: true };
    case types.FORECAST_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.FORECAST_SET_FETCHING_ERROR:
      return { ...state, error: payload };
    case types.FORECAST_FILL:
      return { ...state, data: payload };
    case types.FORECAST_SET_SELECTED_DAY:
      return { ...state, selectedDay: payload };
    case types.FORECAST_FILTER_DAYS:
      return {
        ...state,
        filteredDays: getFilteredForecast(state.week, payload),
      };
    case types.FORECAST_WEEK:
      return { ...state, week: payload };

    default:
      return state;
  }
};
