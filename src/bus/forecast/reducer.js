// Types
import { types } from "./types";

const initialState = {
  data: [],
  isFetching: false,
  error: false,
  selectedDayItem: null,
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
      return { ...state, selectedDayItem: payload };

    default:
      return state;
  }
};
